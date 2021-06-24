<script>
	import { page } from '$app/stores';

	let current = $page.path;
</script>

<svelte:head>
	<title>Home</title>
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