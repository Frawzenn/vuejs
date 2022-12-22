<template>
  <div class="contArtiste">
      <div class="nomArtiste">
          <a v-for="artist in artists" v-bind:class="{ active: artist.id == selectedArtistId }" @click="selectArtist(artist)"  > 
            {{artist.name}}
          </a>
      </div>
      <div class="imageArtiste">
        <img class="imageAngele" :src="selectedArtistImg"
        alt="Angele la chanteuse">
      </div>
      <div class="artisteBas">
        <div class="artisteBasGauche">
          <h4>{{artists.find(artist => artist.id == selectedArtistId).date}}</h4>
          <p>{{artists.find(artist => artist.id == selectedArtistId).loca}}</p>
        </div>
        <div class="artisteBasDroite">
          <a>RESERVER</a>
        </div>
      </div>
  </div>
</template>
  
<script>
export default {
  name: 'artiste',
  methods :{
    selectArtist(artist){
      this.selectedArtistId = artist.id

      this.selectedArtistImg = artist.src
    }
  },
  data(){
    return{
      selectedArtistId: 0,
      selectedArtistImg: './img/angele.png',
      artists : [
          {
              id: 0,
              name: 'angèle',
              src: './img/angele.png',
              date: '15 DECEMBRE 2020',
              loca: 'LYON, PALAIS DES SPORTS'
          },
          {
              name: 'damso',
              src: './img/damso.jpg',
              id: 1,
              date: '16 DECEMBRE 2020',
              loca: 'PARIS, PALAIS DES SPORTS'
          },
          {
              name: 'laylow',
              src: './img/laylow.jpg',
              id: 2,
              date: '17 DECEMBRE 2020',
              loca: 'MACON, PALAIS DES SPORTS'
          },
          {
              name: 'rihanna',
              src: './img/rihanna.jpg',
              id: 3,
              date: '18 DECEMBRE 2020',
              loca: 'LENS, PALAIS DES SPORTS'
          },
          {
              name: 'pnl',
              src: './img/pnl.jpg',
              id: 4,
              date: '19 DECEMBRE 2020',
              loca: 'ANNECY, PALAIS DES SPORTS'
          },
      ]
    }
  }
}
</script>

<style>
  .nomArtiste{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .nomArtiste a{
    width: 20%;
    color: white;
    padding: 30px 0;
    border-right: grey solid 2px;
  }

  .nomArtiste a:last-child{
    border-right: none;
  }

  .nomArtiste .active{
    background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);
    border-radius: 10px 10px 0 0 ;
    border-right: none;
  }

  .imageArtiste img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .imageArtiste{
    width: 100%;
    height: 600px;
  }


  .contArtiste{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 90%;
    margin: 0 auto;
  }

  .artisteBasGauche{
    position: absolute;
    top: 85%;
    left: 9%;
  }

  .artisteBasGauche h4{
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .artisteBasGauche p {
    color: white;
    font-size: 15px;
    font-weight: light;
  }

  .artisteBasDroite a{
    padding: 14px;
    background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);
    border-radius: 8px;
    color: white;
    font-weight: bold;
  }

  .artisteBasDroite{
    position: absolute;
    right: 10%;
    top : 89%
  }
  


</style>