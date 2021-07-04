<script context="module">
	import { browser, dev } from '$app/env';
	import ItemCard from '$lib/ItemCard.svelte';
	import { page } from '$app/stores';
	
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = true;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

</script>


<script>

	let current = $page.path;
</script>

<svelte:head>
	<meta name="description" content="Le baromètre de la cohésion des territoires, contexte et objectifs">
	<title>Accueil</title>
</svelte:head>

<div class="main">
<h1>Le baromètre de la cohésion des territoires</h1>

<h2>Un paronama unique</h2>
<p>Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam.
</p>
<p class="test">Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam.
</p>

<h2>Les facteurs de cohésion</h2>

<p>Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam. 
	Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam. 
</p>

<div class="container-button">

	<a sveltekit:prefetch href="/indicateur">
		<button>Accéder aux indicateurs</button>
</a>
</div>

</div>

<style>
p{
	margin-top: 1.3em;
}

button{
		padding: .7em;
		border: 1px solid #000;
		border-radius: 10px;
		background: #fff2cf;
		cursor: pointer;
	}


.container-button{
	display: flex;
	justify-content: center;
	margin-top: 2em;
}

button:hover{
    background: #ffd463;
  }

  .main{
	max-width: 720px;
	margin: auto;
}

</style>