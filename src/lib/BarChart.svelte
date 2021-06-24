<script>
  import { scaleLinear, scaleBand, max, ascending, descending, extent } from "d3"; 
  import Axis from "$lib/Axis.svelte";

  //These won't change
  let width;
  const height = 560;
  const margin = 40;



  export let data;

  //Params BarChart

  //Coerce numeric
    data.forEach(function(d) {
    d.value0 = +d.value0;
    d.value1 = +d.value1;
  }); 

  //Descending
  data.sort(function(a,b){
              return descending(a.value1,b.value1);
  })
    
 /*    data
    .get(selectedCounty)
    .sort((a, b) => ascending(a[1], b[1])); */

    //Scale
   let xmin = 0
   let xmax = Math.max(max(data, function(d){return d.value0}),max(data, function (d){return d.value1}));

    //Scale x and y
    $: x = scaleLinear()
      .domain(extent([xmin, xmax])).nice()
      .rangeRound([margin+80, width-margin]);

    $: y = scaleBand()
      .domain(data.map(d => d.libgeo2))
      .rangeRound([margin, height-margin])
      .padding(.1); 


</script>


  <div class='scatter-plot' bind:clientWidth={width}>
    <svg width={width} height={height}>
      <Axis {width} {height} {margin} scale={x} position='top' />
			<Axis {width} {height} {margin} scale={y} position='left' />
      {#each data as d}
      <g>
        <rect width={Math.abs(x(d.value1) - x(0))}
              x={x(Math.min(0, d.value1))}
              height={y.bandwidth()}
              y= {y(d.libgeo2)}/> 
      </g>
    {/each}
    </svg>
</div>



<style>
  rect {
    fill: #0da070;
  }

text{
  font-size: 30;
}

</style>