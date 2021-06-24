<script>
    import { createEventDispatcher, onMount } from 'svelte';

let innerWidth = 0;
let shown=false;
let current="";
let collapse=false;

onMount(()=>{
	if (innerWidth > 990){
	shown = true;
	collapse=true;
	current="selected";
}


})



let dispatch = createEventDispatcher();

export function show() {
	shown = !shown;
	collapse = !collapse;
	dispatch("show", shown);
}

export function selected(){
	shown ? current="selected":current="";
	dispatch("selected", shown);
}


</script>

<svelte:window bind:innerWidth={innerWidth}/>
<svelte:options accessors={true}/>

<button
		class:collapse
		class:selected="{current === "selected"}"
		on:click={show}
		on:click={selected}>
	<slot name="title-section">
		<span class="missing">Titre de la section</span>
	</slot>
</button>

{#if shown}
<slot/>
{/if}

<style>
  
	button{
		padding: .7em;
		border-bottom: 1px solid #000;
		background: #fff2cf;
		cursor: pointer;
		text-align: left;
	}


	button:hover{
    background: #ffd463;
}

button::before{
	content:"\02c4";
	padding: .6em;
	
}

.collapse::before{
	content:"\02c5";
}

.selected{
    background: #ffd463;
  }


	

</style>