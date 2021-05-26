<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	import Map from "$lib/Map.svelte";
	import BarChart from "$lib/BarChart.svelte"
	import LineChart from "$lib/LineChart.svelte";
	import GaugeChart from "$lib/GaugeChart.svelte";

</script>

<svelte:head>
	<title>000000 - Le baromètre de la cohésion des territoires</title>
</svelte:head>

<GaugeChart/>

<div class="main">


<section>
	<div class = "content">
	<p>
		Lorem ipsum dolor sit amet. Ut officia iste ea aliquid iure est voluptatem rerum eos doloremque veritatis At distinctio galisum. Et magni voluptatibus ut laudantium eligendi non odio sunt et tempora consequuntur aut vero esse in dignissimos Quis aut enim vitae. Aut totam repudiandae quo omnis repellat sit enim adipisci. Sed repellat quibusdam vel nihil exercitationem aut veniam tempore.
		Et totam facilis qui culpa voluptatem ut nihil dolore. Et inventore alias et adipisci voluptas qui quas illo ex quibusdam repudiandae. 
	</p>
	<p>
		Lorem ipsum dolor sit amet. Ut officia iste ea aliquid iure est voluptatem rerum eos doloremque veritatis At distinctio galisum. Et magni voluptatibus ut laudantium eligendi non odio sunt et tempora consequuntur aut vero esse in dignissimos Quis aut enim vitae. Aut totam repudiandae quo omnis repellat sit enim adipisci. Sed repellat quibusdam vel nihil exercitationem aut veniam tempore.
		Et totam facilis qui culpa voluptatem ut nihil dolore. Et inventore alias et adipisci voluptas qui quas illo ex quibusdam repudiandae. 
		In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.
		In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.
	</p>
	</div>
	<div class= "viz">
		<Map/>
	</div>
</section>

<section>
	<div class = "content">
		<p>
			Lorem ipsum dolor sit amet. Ut officia iste ea aliquid iure est voluptatem rerum eos doloremque veritatis At distinctio galisum. Et magni voluptatibus ut laudantium eligendi non odio sunt et tempora consequuntur aut vero esse in dignissimos Quis aut enim vitae. Aut totam repudiandae quo omnis repellat sit enim adipisci. Sed repellat quibusdam vel nihil exercitationem aut veniam tempore.
			Et totam facilis qui culpa voluptatem ut nihil dolore. Et inventore alias et adipisci voluptas qui quas illo ex quibusdam repudiandae. 
			Lorem ipsum dolor sit amet. Ut officia iste ea aliquid iure est voluptatem rerum eos doloremque veritatis At distinctio galisum. Et magni voluptatibus ut laudantium eligendi non odio sunt et tempora consequuntur aut vero esse in dignissimos Quis aut enim vitae. Aut totam repudiandae quo omnis repellat sit enim adipisci. Sed repellat quibusdam vel nihil exercitationem aut veniam tempore.
			Et totam facilis qui culpa voluptatem ut nihil dolore. Et inventore alias et adipisci voluptas qui quas illo ex quibusdam repudiandae. 
			In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.

			In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.
		</p>
		
	</div>
	<div class= "viz">
		<BarChart/>
	</div>
</section>

<section>
	<div class = "content">
		<p>
			Lorem ipsum dolor sit amet. Ut officia iste ea aliquid iure est voluptatem rerum eos doloremque veritatis At distinctio galisum. Et magni voluptatibus ut laudantium eligendi non odio sunt et tempora consequuntur aut vero esse in dignissimos Quis aut enim vitae. Aut totam repudiandae quo omnis repellat sit enim adipisci. Sed repellat quibusdam vel nihil exercitationem aut veniam tempore.
			Et totam facilis qui culpa voluptatem ut nihil dolore. Et inventore alias et adipisci voluptas qui quas illo ex quibusdam repudiandae. 
			In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.
			In cupiditate vitae et sapiente soluta sit aliquam error? Est quia quae vel corporis perferendis qui praesentium modi est velit quasi At recusandae nulla qui accusantium accusantium sed aliquam fuga.
		</p>
	</div>
		<div class="viz">
			<LineChart/>
	</div>
</section>
</div>

<style>

.main{
	display: flex;
	flex-direction: column;
	grid-gap: 3em;
}

	section{
		display: grid;
		justify-items: stretch;
		column-gap: 2rem;
		row-gap: 1.5rem;
		margin:auto;
		
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

		max-height: 638px;
		min-height: 452px;
		min-width: 480px;
		max-width: inherit;
		height: 75vh;
		border: solid 1px;
	}

</style>