  <script>
    import{ max, extent } from "d3-array";
    import { scaleLinear, scaleBand } from "d3-scale"; 
    import Axis from "$lib/Axis.svelte";



    export let data;
    export let value;

  //These won't change
  let width=0;
  const height = 280;
  const margin = 40;



  //Coerce numeric
  data.forEach(function(d) {
    d.value0 = +d.value0;
    d.value1 = +d.value1;
  }); 

    //Scale
    $: xmin = 0
    $: xmax = Math.max(max(data, function(d){return d.value0}),max(data, function (d){return d.value1}));


    //Scale x and y
    $: x = scaleLinear()
      .domain(extent([xmin, xmax])).nice()
      .rangeRound([margin+80, width-margin]);

     $: y = scaleBand()
      .domain(data.map(d => d.lib_grille))
      .rangeRound([margin, height-margin])
      .padding(1); 


  </script>





<div class='scatter-plot' bind:clientWidth={width}>
  <svg width={width} height={height}>
    <Axis {width} {height} {margin} scale={x} position='top' />
    <Axis {width} {height} {margin} scale={y} position='left' />

    {#each data as d}
    <g>
      <circle
      cx={x(d[value])}
      cy= {y(d.lib_grille)}
      r="10"
      />
    </g>
    <g>
      <text class="value"
            x={x(d[value])+15}
            y= {y(d.lib_grille)+3}>
            {new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 5 }).format(d[value])}
      </text>
  </g>
  {/each}

  </svg>
</div>

<style>
circle {
  fill: #0da070;
}

text{
font-size: 30;
font-weight: 600;
}

.value{
text-anchor: start;
}

</style>