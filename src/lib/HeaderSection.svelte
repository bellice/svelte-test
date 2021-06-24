


<section>
	<h1><slot name="title">Titre de l'indicateur</slot></h1>
	
	<hr>

			<div class="c-tag">
					<span class="tag"><slot name="enjeu">Nom de l'enjeu</slot></span>
					<span class="tag"><slot name="theme">Nom du thème</slot></span>
			</div>
</section>


<style>



h1{
	 font-weight: 700;
	 color: #365d87;
}



.c-tag{
	display: flex;
	flex-direction: row;
}

.tag{
	padding:.35em;
	background-color: lightgrey;
	font-size: clamp(16px, calc(15px + .3vw), 18px);
	margin-right: .35em;
}
	




</style>