<template>
  <div class="contNav">
    <nav class="nav">
      <div class="partieGauche">
        <p>buuk</p>
      </div>
      <div class="partieCentre">
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">Tous les concerts</router-link>
        <router-link to="/mesReservations">Mes Réservations</router-link>
      </div>
    </nav>
    <div class="partieDroite">
      <p>+33 4 50 67 33 22</p>
    </div>
  </div>
  
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap%27');

.contNav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px #595959 solid;
  align-items: center;
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
}

.nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.partieGauche{
  border-right: 1px #595959 solid;

}

.partieGauche p {
  font-family: 'montserrat', sans-serif;
  padding: 15px 30px;
  color: white;
  font-weight: bold;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 38px;
}

.partieCentre{
  display: flex;
  font-family: 'montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
}

.partieCentre a{
  color: white;
  text-decoration: none;
  padding: 23px;
}

.partieCentre a.router-link-active{
  border-bottom: 1px solid #D48AE6;
  color: #D48AE6;
}

.partieDroite{
  color: white;
  font-family: 'montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  margin-right: 15px;
}
</style>