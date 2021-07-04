<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = true;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	import Map from "$lib/Map.svelte";
	import BarChart from "$lib/BarChart.svelte";
	import LineChart from "$lib/LineChart.svelte";
	import ToggleSection from "$lib/ToggleSection.svelte";
	import HeaderSection from '$lib/HeaderSection.svelte';
	import InformationSection from "$lib/InformationSection.svelte";
	import InputYear from "$lib/InputYear.svelte";
	import Speedometer from "svelte-speedometer"
	import InputSort from "$lib/InputSort.svelte";

</script>

<script>
	import { csv } from 'd3-fetch';

  async function fetchjson() {
    let res = await fetch("/data/params/init.json");
    let json = await res.json();

		if (res.ok) {
			return json;
		} else {
			throw new Error(json);
		}
	}


  const promiseInit = fetchjson();

	let id="000000";


	//Params Gauge
	const minValue = 0;
	const maxValue = 40
	let nationalValue = 19;
	let yearSelectedGauge= "";

	$: if (yearSelectedGauge == "year0"){
			nationalValue = 12
	}
	$: if (yearSelectedGauge == "year1"){
		nationalValue = 19
	}

	//Params BarChart
	let barChartData;
csv("/data/csv/000000-reg.csv").then(data => barChartData = data)

	let value = "value1";
	let sort = "desc";
	let yearSelectedBarChart= "";
	let sortSelectedBarChart="";

	$: if (yearSelectedBarChart == "year0"){
			value = "value0"
		}
	$: if (yearSelectedBarChart == "year1"){
			value = "value1"
		}

	$: if (sortSelectedBarChart == "sortAscending"){
			sort = "asc"
		}
	$: if (sortSelectedBarChart == "sortDescending"){
			sort = "desc"
		}


		//Params Map
		let yearSelectedMap;

		

	//Params LineChart
	let lineChartData;
	csv("/data/csv/000000-grille.csv").then(data => lineChartData = data)

	let yearSelectedLineChart;
	
	$: if (yearSelectedLineChart == "year0"){
		value = "value0"
	}
	$: if (yearSelectedLineChart == "year1"){
		value = "value1"
	}



	</script>



<svelte:head>
	<meta name="description" content="Le baromètre de la cohésion des territoires, analyse de l'indicateur part de la population âgée de 65 ans ou plus">
	<title>Part de la population âgée de 65 ans ou plus - Le baromètre de la cohésion des territoires</title>
</svelte:head>



<div class="main">

  {#await promiseInit}
 <!--  <p>Loading...</p> -->
  {:then json}



	{#each json.items.filter((e)=>{ return e.id == id}) as item}


	<HeaderSection>
			<span slot="title">{item.name}</span>
			<span slot="enjeu">{item.key2.toUpperCase()}</span>
			<span slot="theme">{item.theme.toUpperCase()}</span>
	</HeaderSection>


	<div id="section">
	<div id="left-section">

		<InputYear on:yearSelected={(e) =>  yearSelectedGauge = e.detail}>
		<span slot="maille">En France</span>

	<svelte:fragment slot="year0">
		{#if item.year0 != ""}
		<span class="year-selected">{item.year0}</span>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="year1">
		{#if item.year1 != ""}
		<span class="year-selected">{item.year1}</span>
		{/if}
	</svelte:fragment>

		</InputYear>

		<Speedometer 
		minValue={minValue}
		maxValue={maxValue}
		width={360}
		height={250}
		value={nationalValue}
		currentValueText= {"\${value} "}{item.unit}
		valueTextFontSize= "22px"
		needleColor="black"
		segmentColors={['#cff7ea', '#a0eed5', '#70e6bf', '#41ddaa', '#11d595', '#0da070']}
		customSegmentStops={[minValue, maxValue/5, 2*maxValue/5, 3*maxValue/5, 4*maxValue/5, maxValue]}
		segments={6}
		needleTransitionDuration={1000}
		textColor
		/>
	</div>

	<div id="right-section">
	<InformationSection>
		<span slot="unit">{item.unit}</span>
		<span slot="millesime">{item.year0} | {item.year1}</span>
		<span slot="source">{item.source}</span>
	</InformationSection>
</div>

</div>


	<h2>Enjeu</h2>
<p>Adapter les territoires aux enjeux du vieillissement de la population.</p>

	<h2>Pourquoi cet indicateur ?</h2>
	<p>La part des personnes âgées de 65 ans ou plus permet de
		mesurer le degré de vieillissement d’un territoire et son
		évolution. Cette notion se distingue de la gérontocroissance
		qui mesure, en absolu, l’évolution du nombre de
		personnes âgées. Un territoire peut aussi être vieillissant
		du fait du départ de jeunes.</p>


<h2 class="focus">Les territoires les plus ruraux
	accueillent la plus forte
	proportion de personnes âgées
	mais les territoires les plus jeunes
	vieillissent rapidement</h2>


	<ToggleSection
		on:show={(e) =>  e.detail}
		on:selected={e => e.detail}>
		<span slot="title-section">Au niveau régional</span>
<section>

	
	<div class = "content">

	<p>
Les régions françaises sont touchées très différemment par le vieillissement de leur population. Les régions les
plus au sud sont depuis longtemps les régions les plus concernées : Provence-Alpes-Côte d’Azur, Corse,
Occitanie et Nouvelle-Aquitaine sont peuplées à plus de 21 % par des personnes de 65 ans et plus. De plus,
ces régions continuent d’enregistrer une progression régulière de leur part de
personnes âgées, du fait notamment des installations de retraités.
	</p>
<p>
Les régions Bourgogne-Franche-Comté, Centre-Val de Loire et Bretagne se distinguent
aussi par une proportion de personnes âgées nettement au-dessus de la moyenne nationale, mais
pour des raisons différentes. Ces régions connaissent une baisse parfois forte du nombre de personnes plus
jeunes entrainant ce déséquilibre.
Par exemple, le nombre de personnes de 30 à 44 ans y diminue de près de 1 % par an.
</p>

<p>
Les régions du nord ont un profil démographique très différent. En Île-de-France et dans les Hauts-de-France,
la part des personnes âgées est encore inférieure à la moyenne nationale. Malgré cette relative « jeunesse »,
ces régions sont également confrontées aux enjeux de vieillissement, avec de fortes progressions de la
part des 65 ans et plus.
</p>

<p>
La situation est très contrastée dans les DROM. En Martinique et à la Guadeloupe, la population stagne et le
processus de vieillissement est particulièrement rapide. À la Réunion, en Guyane et à Mayotte, la population est
encore en forte croissance et la part de personnes âgées reste faible (respectivement 10,6 %, 4,9 % et 2,7 %), mais
leur nombre est désormais en forte augmentation. L’anticipation du vieillissement de la population dans
ces territoires constitue un défi majeur.</p>
	</div>



	{#if barChartData}
	<div class= "viz">
		<p class="name-indicateur">{item.name}</p>
		<InputYear on:yearSelected={(e) =>  yearSelectedBarChart = e.detail}>
			<span slot="maille">Par région</span>
	
		<svelte:fragment slot="year0">
			{#if item.year0 != ""}
			<span class="year-selected">{item.year0}</span>
			{/if}
		</svelte:fragment>
	
		<svelte:fragment slot="year1">
			{#if item.year1 != ""}
			<span class="year-selected">{item.year1}</span>
			{/if}
		</svelte:fragment>
	
			</InputYear>

			<InputSort on:sortSelected={(e) =>  sortSelectedBarChart = e.detail}>
				<span class="sort-selected" slot="asc">Ascendant</span>
				<span class="sort-selected" slot="desc">Descendant</span>
			</InputSort>



 		<BarChart data = {barChartData} value={value} sort={sort}/>
	</div>
	{/if}

</section>
</ToggleSection>



<ToggleSection
on:show={(e) =>  e.detail}
on:selected={e => e.detail}>
	<span slot="title-section">Au niveau intercommunal</span>
<section>
	<div class = "content">
		<p>
Si les régions comptant une part élevée de personnes de 65 ans et plus se trouvent dans le sud de la France, les
intercommunalités les plus « âgées » s’égrènent le long d’un axe allant de la Haute-Marne au Massif Central.
Ces espaces ruraux, souvent situés en frange de régions,	accueillent des populations généralement constituées
à plus de 25 % de 65 ans et plus.
		</p>

<p>
		Cette échelle d’analyse permet par ailleurs d’observer la spécificité des espaces littoraux : la part des personnes
âgées sur les côtes atlantique ou méditerranéenne est quasi-systématiquement plus importante
que celle du rétro-littoral. Les intercommunalités du nord de la France mais également
celles des grands centres urbains comptent la population parmi la plus jeune de France.
		</p>
		
	</div>
	<div class= "viz">
		<p class="name-indicateur">{item.name}</p>
		<InputYear on:yearSelected={(e) =>  yearSelectedMap = e.detail}>
			<span slot="maille">Par intercommunalité</span>
	
		<svelte:fragment slot="year0">
			{#if item.year0 != ""}
			<span class="year-selected">{item.year0}</span>
			{/if}
		</svelte:fragment>
	
		<svelte:fragment slot="year1">
			{#if item.year1 != ""}
			<span class="year-selected">{item.year1}</span>
			{/if}
		</svelte:fragment>
	
			</InputYear>

		<Map/>
	</div>
</section>
</ToggleSection>


<ToggleSection
on:show={(e) =>  e.detail}
on:selected={e => e.detail}>
	<span slot="title-section">Au niveau local</span>
<section>
	<div class = "content">
		<p>
Les territoires « denses » (au sens de la grille communale de densité de l’Insee), ont une plus faible part de population
de 65 ans ou plus (16,3 %). Les grands centres urbains concentrent les jeunes venus faire leurs
études et les jeunes actifs, et leurs périphéries les ménages avec enfants. De plus, ces territoires vieillissent
moins : en cinq ans, la part des 65 ans et plus (15 %) s’est accrue de seulement 1,3 point de pourcentage
alors que les territoires « intermédiaires et peu denses » ont vu leur part (20,4 %) augmenter de 2,4 points de pourcentage.
		</p>
	</div>

	{#if lineChartData}
		<div class="viz">
		<p class="name-indicateur">{item.name}</p>
		<InputYear on:yearSelected={(e) =>  yearSelectedLineChart = e.detail}>
			<span slot="maille">Par catégorie de communes</span>
	
		<svelte:fragment slot="year0">
			{#if item.year0 != ""}
			<span class="year-selected">{item.year0}</span>
			{/if}
		</svelte:fragment>
	
		<svelte:fragment slot="year1">
			{#if item.year1 != ""}
			<span class="year-selected">{item.year1}</span>
			{/if}
		</svelte:fragment>
	
			</InputYear>

			<LineChart data= {lineChartData} value={value}/>
	</div>
	{/if}

</section>
</ToggleSection>

{/each}

{:catch error}
<p style="color: red">{error.message}</p> 

	{/await}



</div>





<style>

.main{
	display: flex;
	flex-direction: column;
}

	section{
		display: grid;
		justify-items: stretch;
		column-gap: 2rem;
		row-gap: 1.5rem;
		margin-top: 1em;
		margin-bottom: 1em;
		
	}


#right-section{
	display: flex;
	flex-direction: column;
}


#section{
	width: 100%;
   display: grid;
   grid-gap: 1.7em;
	 margin-top: 1em;
}

@media (min-width: 850px){
	#section{
		grid-template-columns: repeat(2, 1fr);
	}
}


	
	@media screen and (min-width: 990px){

		section{
		grid-template-columns: minmax(400px, 720px) 1fr;
	}
	}

	.viz{
		position: sticky;
		top: 10vh;
		width: 100%; 
		min-height: 452px;
		min-width: 480px;
		max-width: inherit;
 		height: 600px;
	}


	h2, .name-indicateur{
	 color: #365d87;
}

.name-indicateur{
	font-weight: 600;
}

.focus{
	font-weight: 600;
	margin: 1em 0;
}

.year-selected, .sort-selected{
    font-size: clamp(16px, calc(16px + .3vw), 21px);
}

</style>