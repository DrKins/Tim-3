<template>
  <div class="intro">
    <span id="print">PRINT MODE <toggle-button v-model="myDataVariable"
                                                color="#3D7EAA"/></span>
    <img id="logo" src="../assets/upperLogo.png" alt="Bingo Logo">
    <img id="logo" src="../assets/midImage.png" alt="Bingo Logo">
    <div id="text">
      <p>Potrošite svoj teško zarađeni novac i pomoću ove igre - kockanje pretvorite u nasilje u porodici!</p>
    </div>
    <div class="ulaz">
      <button v-on:click="dobitnaKombinacija(); pocetak()" class="btn"><span>START GAME</span></button>
    </div>
    <br><br><br>
    <video loop muted autoplay class="videoIntroTest">
                <source src="../assets/Novo6.mp4" type="video/mp4">
            </video>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Intro',
   data: function () {
    return {
      myDataVariable: false,
    }
  },
   computed: {
  ...mapGetters(["get_izvuceniBrojevi"])
  },
  methods:
  {
    ...mapActions(["dobitnaKombinacija","pogodak"]),

    pocetak(){
      if(this.myDataVariable === true) this.$router.push('/generisanje');
      else this.$router.push('/generisanje0');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

/* width 1 da sakrije video kako bi se loadao */
.videoIntroTest{
  width: 1px;
}
a{
  text-decoration: none;
}
.ulaz{
  margin: 0 auto;
  width: 540px;
}
#text{
  margin: 0 auto;
  width: 25%;
  margin-top: -15px;
  padding-bottom: 20px;
  color: rgb(238, 238, 238);
  font-family: 'Righteous', cursive;
}
#text p{
  text-shadow: 1px 1px #111111;
  text-align: center;
}
#logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
#print{
  position: absolute;
    top: 10px;
    right: 10px;
    font-family: 'Righteous', cursive;
    color: rgb(238, 238, 238);
}
@media screen and (min-device-height: 1400px) {   
    #logo {
      width: 100%;
    }
    .btn{
      font-size: 140px !important;
    }
    .btn a{
       -webkit-text-stroke: 6px #222222 !important;
    }
    #text{
      width: 80%;
      font-size: 42px;
    }
}    

.button{
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.btn {
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 66px;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  border-radius: 25px;
  font-family: 'Righteous', cursive;
}

.btn a{
  text-decoration: none;
  color: unset;
  -webkit-text-stroke: 2px #222222;
  -webkit-text-fill-color: white;
}

.btn span {
  position: relative; 
  z-index: 1;
}


.btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 115%;

  background: #3D7EAA;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFE47A, #3D7EAA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFE47A, #3D7EAA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>
