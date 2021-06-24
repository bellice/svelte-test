<script>
  import { createEventDispatcher, onMount } from 'svelte';



  let dispatch = createEventDispatcher();

  export function  yearSelected(){
  current = this.id
	dispatch("yearSelected", current);
}

let current="year1";

</script>


<p class="c-maille">
  <slot name="maille">Nom de l'échelon</slot>
</p>

<!-- <div id="container">
    <slot name="year">Année</slot>
</div> -->

<div id="container">
<p class="def">Année</p>
{#if $$slots.year0}
<div id = "year0" class="year"
     class:selected="{current === "year0" ? "selected":""}"
     on:click={yearSelected}
     >
    <slot name="year0" />
  </div>
{/if}

{#if $$slots.year1}
<div id = "year1" class="year"
      class:selected="{current === "year1" ? "selected":""}"
      on:click={yearSelected}
>
    <slot name="year1" />
  </div>
{/if}
</div>

<style>
  .c-maille{
    font-weight: 600;
  }


  #container{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.year{
  border: 1px solid #000;
    border-radius: 2px;
    cursor: pointer;
    background: #fff2cf;
    margin: .2em;
    padding: .3em 1em;
}


.year:empty{
  display:none;
}

.year:hover{
    background: #ffd463;
}

.def{
  margin-right: 1em;
}


.selected{
    background: #ffd463;
  }

</style>

