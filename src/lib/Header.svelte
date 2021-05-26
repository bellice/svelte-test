<script>
	import { page } from '$app/stores';
  import { onMount } from "svelte";

 let current = $page.path;

onMount(async () =>{

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if ((prevScrollpos > currentScrollPos) | currentScrollPos == 0) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
})

</script>

<header>
    <nav>
        <ul>
            <li class:active={$page.path === '/'}
                class:selected="{current === '/' ? "selected": ""}"
                on:click="{() => current = '/'}"><a sveltekit:prefetch href="/">Accueil</a></li>
            <li class:active={$page.path === '/indicateur'}
                class:selected="{current === "/indicateur" ? "selected": ""}"
                on:click="{() => current = "/indicateur"}"><a sveltekit:prefetch href="/indicateur">Indicateur</a></li>
            <li class:active={$page.path === '/a-propos'}
                class:selected="{current === "/a-propos" ? "selected": ""}"
                on:click="{() => current = "/a-propos"}"><a sveltekit:prefetch href="/a-propos">À propos</a></li>
        </ul>
    </nav>
</header>

<style>

  ul{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: .8em 0;
  }

  nav{
      border-bottom: .8px solid #000;
      position: fixed;
      transition: top ease-in-out .3s;
      top:0;
      left: 0;
      right: 0;
      background: white;
      max-width: var(--max-width-device);
      margin: auto;
      z-index: 100;
  }

  header{
      margin-bottom: 5em;
  }


  a{
      position: relative;
      padding-bottom: .15em;
  }

  /*Hover effect underline*/
  a::before{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #293173;
    transition: width .5s cubic-bezier(.25, 1, .5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
  a:hover::before{
      left: 0;
      right: auto;
      width: 100%;
  }
  }

  a:hover{
    color: #293173;
  }

  a:target {
    color: #293173;
  }

  .selected {
      color: #293173;
      border-bottom: 2px solid #293173;
    }


</style>