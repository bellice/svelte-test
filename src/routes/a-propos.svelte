<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = false;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>



<svelte:head>
	<meta name="description" content="Le baromètre de la cohésion des territoires, à propos">
	<title>À propos</title>
</svelte:head>

<div class="main">
	
</div>

<style>
	
	.main{
	max-width: 720px;
	margin: auto;
}

</style>