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
	export const prerender = false;

</script>

<script>

  async function fetchjson() {
    let res = await fetch("/data/params/init.json");
    let json = await res.json();
    return json;
  }
  const promiseInit = fetchjson();

  let keyFactor = "all"

  function handleClick(key){
    keyFactor = key
    return keyFactor
  }

 
</script>

<svelte:head>
	<title>Indicateur</title>
</svelte:head>


<div class="main">
<h2>Indicateur</h2>

<p>Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam. 
	Lorem ipsum dolor sit amet. Sed cupiditate velit dicta odit sed voluptate tenetur est inventore voluptas ut distinctio totam? Et fugiat illo qui magnam neque qui quidem quidem rem doloremque maxime. Eos asperiores ratione aut dolorem exercitationem in sint eligendi sed minima totam. 
</p>


<p>Choix du facteur de cohésion</p>

<div id = "container">
<button on:click={() => handleClick("all")}
		class:selected="{keyFactor === "all" ? "selected": ""}">Voir tout</button>
<button on:click={() => handleClick("solidarite")}
		class:selected="{keyFactor === "solidarite" ? "selected": ""}">Solidarité</button>
<button on:click={() => handleClick("condition-de-vie")}
		class:selected="{keyFactor === "condition-de-vie" ? "selected": ""}">Qualité de vie</button>
<button on:click={() => handleClick("cooperation")}
		class:selected="{keyFactor === "cooperation" ? "selected": ""}">Coopération</button>
<button on:click={() => handleClick("capital-social")}
		class:selected="{keyFactor === "capital-social" ? "selected": ""}">Capital social</button>
<button on:click={() => handleClick("capacitation")}
		class:selected="{keyFactor === "capacitation" ? "selected": ""}">Capacitation</button>
<button on:click={() => handleClick("transition-ecologique")}
		class:selected="{keyFactor === "transition-ecologique" ? "selected": ""}">Transition écologique</button>
</div>

</div>

<hr> 
<div class="container-card">
  {#await promiseInit}
 <!--  <p>Loading...</p> -->
  {:then json}



 {#if keyFactor == "all"}
 	{#each json.items as item}

	 <a
	 sveltekit:prefetch
	 href={$page.path + "/" + item.id + "/"}>
	 <ItemCard>
		 <span slot="name">{item.name}</span>
		 <span slot="year1">{item.year1}</span>
		 <span slot="theme">{item.theme}</span>  
	 </ItemCard>
	</a>
	{/each} 
 {:else}
  {#each json.items.filter((e)=>{ return e.key == keyFactor}) as item}
  <a href={"indicateur/"+item.id}>
		<ItemCard>
			<span slot="name">{item.name}</span>
			<span slot="year1">{item.year1}</span>
			<span slot="theme">{item.theme}</span>  
		</ItemCard>
	</a>
   {/each} 
	{/if}
 	{:catch error}
<p style="color: red">{error.message}</p> 
  {/await}


</div>



<style>
	p{
		margin-top: 1.3em;
	}

	#container{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: left;
		grid-gap: .7em;
	} 

	hr{
		margin: 2em 0
	}

	button{
		padding: .7em;
		border: 1px solid #000;
		border-radius: 10px;
		background: #fff2cf;
		cursor: pointer;
	}

  button:hover{
    background: #ffd463;
  }

  .selected{
    background: #ffd463;
  }

  .main{
	max-width: 720px;
	margin: auto;
}

	.container-card{
   display: grid;
   grid-gap: 1.7em;
}

a{
	margin-bottom: 1em;
}

@media (min-width: 850px){
	.container-card{
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1366px){
	.container-card{
		grid-template-columns: repeat(3, 1fr);
	}
}


	</style>