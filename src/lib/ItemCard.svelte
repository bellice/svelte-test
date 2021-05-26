


<div id="container">
<div id="top-card">
<p>
    <slot name="name"><span class="missing">Nom de l'indicateur</span></slot>
</p>
</div>
<div id="bottom-card">
    <div id="bottom-card-left">
    <slot name="year1"><span class="missing">Millésime</span></slot>
    </div>
    <div id="bottom-card-right">
    <slot name="theme"><span class="missing">Thème</span></slot>
    </div>
</div>
</div>



<style style lang="postcss">
    
#container{
    border: 1px solid #000;
    border-radius: 10px;
    cursor: pointer;
    padding: .7em;
    background: #fff2cf;
    min-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}



#container:hover{
    background: #ffd463;
}


#bottom-card{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

#bottom-card-right{
    text-align: end;
}

#top-card{
    font-weight: 600;
}

</style>