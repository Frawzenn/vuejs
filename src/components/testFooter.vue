<template>
    <div class="contFooter">
        <div class="footerPartieGauche">
            <p>buuk</p>
        </div>
        <div class="footerPartieDroite">
            <p>Conditions de ventes</p>
            <p>Mentions légales</p>
            <p>Un problème ? +33 4 50 67 33 22</p>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
name: 'footer',
}
</script>

<style>
    .footerPartieGauche p{
        font-style: normal;
        font-weight: 800;
        font-size: 45px;
        line-height: 63px;
        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 10px 50px;
    }

    .footerPartieDroite p{
        font-weight: 100;
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        margin: 0 15px;
    }

    .footerPartieDroite p:last-child{
        font-weight: 800;
        font-size: 20px;
        line-height: 25px;
    }
    
    .footerPartieDroite{
        display: flex;
        justify-content: flex-end;

    }
    .contFooter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FAFAFA;
    }
</style>