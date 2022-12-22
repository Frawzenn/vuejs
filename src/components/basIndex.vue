<template>
    <div class="contBasIndex">
        <div class="textBasIndex">
            <h3>buuk, le rêve des fans de concerts</h3>
        </div>
        <svg width="257" height="198" viewBox="0 0 257 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M214.455 45.6472C224.811 63.0566 247.655 74.3172 253.937 89.0135C260.468 103.65 250.496 121.972 238.349 137.258C226.202 152.544 212.034 164.889 195.978 164.385C180.016 163.726 162.414 150.157 139.567 157.599C116.659 164.792 88.6604 193.089 64.3851 197.317C40.0151 201.699 19.3092 181.761 8.61481 157.979C-1.98481 134.043 -2.47815 106.109 5.74381 82.6747C13.871 59.3946 30.9626 40.5549 49.8913 30.4948C69.0692 20.3751 90.0842 19.0349 106.723 20.3221C123.208 21.5145 135.376 25.5834 151.686 19.4423C167.747 13.3607 188.011 -2.68187 197.045 0.951429C206.234 4.67949 204.1 28.2378 214.455 45.6472Z" fill="#000001" fill-opacity="0.12"/>
        </svg>
        <div class="contBulleBasIndex">
            <div class="bulleBasIndex">
                <div class="chiffreBulleBasIndex"><p>1</p></div>
                <h4>Choisis ton artiste</h4>
                <p>Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés</p>
            </div>
            <div class="bulleBasIndex">
                <div class="chiffreBulleBasIndex"><p>2</p></div>
                <h4>Réserve ton billet</h4>
                <p>buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !</p>
            </div>
            <div class="bulleBasIndex">
                <div class="chiffreBulleBasIndex"><p>3</p></div>
                <h4>Kiffe ton concert</h4>
                <p>Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
name: 'basIndex',
}
</script>

<style>
    .contBasIndex svg{
        position: absolute;
        left: 22%;
        top: 29%;
        transform: translate(-50%, -50%);
        z-index: 0;
    }

    .contBasIndex {
        position: relative;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .contBasIndex h3 {
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 76px;
        color: white;
        z-index: 1;
        position: relative;
        margin: 200px 0 150px 0;
    }

    .contBulleBasIndex{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 100px;
        
    }

    .bulleBasIndex{
        position: relative;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        margin: 40px 50px ;
        padding: 30px;
        width: 300px;
    }

    .chiffreBulleBasIndex{
        position: absolute;
        left: 20%;
        top: 2%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #D79CF1 0%, #967DF9 100%);
        border-radius: 14px;
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 44px;
        color: white;
    }

    .bulleBasIndex h4 {
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        line-height: 38px;
        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-top: 20px ;
    }

    .bulleBasIndex {
        font-style: normal;
        font-weight: 100;
        font-size: 14px;
        line-height: 20px;
        color: white;
    }



</style>