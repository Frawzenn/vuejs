<template>
    <div class="contAussiDispo">
        <div class="textAussiDispo">
            <h3>buuk, aussi sur ton téléphone !</h3>
            <p>Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme</p>
        </div>
        <div class="imageAussiDispo">
            <img class="imgApple" src="/img/appstore.png" alt="Download on appstore">
            <img class="imgAndroid" src="/img/ggplay.png" alt="Download on google store">
        </div>  
    </div>
</template>
  
<script lang="ts">
export default {
name: 'indexAussiDispo',
}
</script>

<style>

    .contAussiDispo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .textAussiDispo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:700px;
        margin-top: 100px;
        
    }

    .textAussiDispo h3{
        font-weight: 800;
        font-size: 41px;
        line-height: 63px;
        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .textAussiDispo p{
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 30px;
        color: #000000;
        padding: 0 20px;
        text-align: justify;
    }

    .imageAussiDispo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px 30px ;
    }
</style>