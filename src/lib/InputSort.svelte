<script>
  import { createEventDispatcher, onMount } from 'svelte';



  let dispatch = createEventDispatcher();

  export function  sortSelected(){
  current = this.id
	dispatch("sortSelected", current);
}

let current="sortDescending";

</script>



<!-- <div id="container">
    <slot name="year">Année</slot>
</div> -->

<div id="container">
<p class="def">Tri</p>

<div id = "sortAscending" class="sort"
     class:selected="{current === "sortAscending" ? "selected":""}"
     on:click={sortSelected}
     >
    <slot name="asc" />
  </div>


<div id = "sortDescending" class="sort"
      class:selected="{current === "sortDescending" ? "selected":""}"
      on:click={sortSelected}
>
    <slot name="desc" />
  </div>

</div>

<style>
 


  #container{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.sort{
  border: 1px solid #000;
    border-radius: 2px;
    cursor: pointer;
    background: #fff2cf;
    margin: .2em;
    padding: .3em 1em;
}


.sort:empty{
  display:none;
}

.sort:hover{
    background: #ffd463;
}

.def{
  margin-right: 1em;
}


.selected{
    background: #ffd463;
  }

</style>

