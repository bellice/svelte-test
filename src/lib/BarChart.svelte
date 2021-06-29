<script>
  import { scaleLinear, scaleBand, max, ascending, descending, extent } from "d3"; 
  import Axis from "$lib/Axis.svelte";



  export let data;
  export let value;
  export let sort;

  //These won't change
  let width=0;
  const height = 480;
  const margin = 40;




  //Coerce numeric
  data.forEach(function(d) {
    d.value0 = +d.value0;
    d.value1 = +d.value1;
  }); 



    //Descending
  $:  data.sort(function(a,b){
              return descending(a[value],b[value]);
  })

    //Scale
    $: xmin = 0
    $: xmax = Math.max(max(data, function(d){return d.value0}),max(data, function (d){return d.value1}));

    //Scale x and y
    $: x = scaleLinear()
      .domain(extent([xmin, xmax])).nice()
      .rangeRound([margin+80, width-margin]);

    $: y = scaleBand()
      .domain(data.map(d => d.libgeo2))
      .rangeRound([margin, height-margin])
      .padding(.1); 


      $:  if (sort == "asc"){
 //Ascending
 data.sort(function(a,b){
              return ascending(a[value],b[value]);
  })

  y = scaleBand()
      .domain(data.map(d => d.libgeo2))
      .rangeRound([margin, height-margin])
      .padding(.1); 

}

$: if (sort == "desc"){
  //Descending
   data.sort(function(a,b){
              return descending(a[value],b[value]);
  })

  y = scaleBand()
      .domain(data.map(d => d.libgeo2))
      .rangeRound([margin, height-margin])
      .padding(.1); 

}  


</script>


  <div class='scatter-plot' bind:clientWidth={width}>
    <svg width={width} height={height}>
      <Axis {width} {height} {margin} scale={x} position='top' />
			<Axis {width} {height} {margin} scale={y} position='left' />
      {#if sort== "asc"}
      {#each data as d}
      <g>
        <rect width={Math.abs(x(d[value]) - x(0))}
              x={x(Math.min(0, d[value]))}
              height={y.bandwidth()}
              y= {y(d.libgeo2)}/> 


      </g>
      <g>
        <!-- svelte-ignore component-name-lowercase -->
        <text class="value"
              x={x(d[value])-5}
              y= {y(d.libgeo2)+y.bandwidth()/1.5}>
              {new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 5 }).format(d[value])}
        </text>
    </g>
    {/each}
    {/if}
    {#if sort== "desc"}
    {#each data as d}
    <g>
      <rect width={Math.abs(x(d[value]) - x(0))}
            x={x(Math.min(0, d[value]))}
            height={y.bandwidth()}
            y= {y(d.libgeo2)}/> 
    </g>
    <g>
      <text class="value"
            x={x(d[value])-5}
            y= {y(d.libgeo2)+y.bandwidth()/1.5}>
            {new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 5 }).format(d[value])}
      </text>
  </g>
  {/each}

    {/if}
    </svg>
</div>

<style>
  rect {
    fill: #0da070;
  }

text{
  font-size: 30;
  font-weight: 600;
}

.value{
  text-anchor: end;
}

</style>