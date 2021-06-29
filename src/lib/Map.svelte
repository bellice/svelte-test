<script>
  import {geoPath, geoProjection }  from "d3";
  import { geoScaleBar, geoScaleKilometers } from "d3-geo-scale-bar";
  import { onMount } from "svelte";
  import { feature, merge } from "topojson-client";
  import Proj4 from "proj4";


  let data;
  let dRegStroke;
  let dDromSep;
  let dNeighbour;
  let dDissolve;
  let dScaleBar;

  let width=0;
  const height = "460";


  //Function using proj4js with d3, credits https://observablehq.com/@fil/proj4js-d3
  function proj4d3(proj4string) {
    const degrees = 180 / Math.PI,
    radians = 1 / degrees,
    raw = Proj4(proj4string),
    p = function(lambda, phi) {
      return raw.forward([lambda * degrees, phi * degrees]);
    };
    p.invert = function(x, y) {
      return raw.inverse([x, y]).map(function(d) {
        return d * radians;
      });
    };
    const projection = geoProjection(p).scale(1);
    projection.raw = raw;
    return projection;
  }
  
  const proj2154 = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"

  onMount(async () =>{ //when the component is mounted, here where we will fetch the json data we need to draw the map

    const [focusLayer, regStroke, dromSep, borderCountry] = await Promise.all([
      fetch("../static/data/layer/epci2020.topojson"),
      fetch("../static/data/layer/reg2020.topojson"),
      fetch("../static/data/layer/drom-sep.topojson"),
      fetch("../static/data/layer/border-country.topojson")
  ])
		//Focus layer
    const json = await focusLayer.json();
    const geom = feature(json, json.objects.epci);

    const projection = proj4d3(proj2154).fitExtent([[0, 0], [width, height]], geom)
    const path = geoPath(projection)
    data = path(geom);

    const dissolve = merge(json, json.objects.epci.geometries)
    dDissolve = path(dissolve)

    
/*     //Bar scale
    const scaleBar = geoScaleBar()
    .projection(projection)
    .size([width, height])
    .size([0, 0])
    .left(0.9)
    .top(0.99)
    .units(geoScaleKilometers)

    console.log(scaleBar); */

    //Optional layer
    const generateOptLayer = ((json, nameObject)=>{
      const geom = feature(json, json.objects[nameObject])
      return path(geom)
    })

    dRegStroke = generateOptLayer(await regStroke.json(), "reg");
    dDromSep = generateOptLayer(await dromSep.json(), "dromSep");
    dNeighbour = generateOptLayer(await borderCountry.json(), "borderCountry");


  });
	
</script>

<div bind:clientWidth={width}>
  <svg width={width} height={height}>

    <g class="svg-opt-layer">
      <path id = "path-drom" d = {dDromSep} />
      <path id = "path-neighbour" d = {dNeighbour} />
    </g>

    <g class = "svg-focus-layer">
      <path id = "path-epci" d={data} />
    </g>

    <g class="svg-opt-layer">
      <path id = "path-reg" d = {dRegStroke} />
      <path id = "path-dissolve" d = {dDissolve} />
    </g>

    <defs>
      <pattern id="point" patternUnits="userSpaceOnUse" width="6" height="6">
      <circle cx="2" cy="2" r="1" fill="#d8e6eb"/>
      </pattern>
    </defs>

  </svg>
</div>


<style style lang="postcss">
  svg {
    stroke-linecap: round;
    stroke-linejoin: round;
    user-select: none;
   }

  #path-epci {
    stroke: #eee;
    fill: #e7dfdf;
  }

  #path-reg {
    fill:none;
    stroke: #fff;
    stroke-width: 2px;
  }

  #path-drom{
    fill: none;
    stroke: #bfbfbf;
    stroke-width: 0.5px;

  }

  #path-neighbour{
   fill:url(#point);
  }

  #path-dissolve{
   fill:none;
   stroke: #000;
   stroke-width: .3px;
  }

</style>

