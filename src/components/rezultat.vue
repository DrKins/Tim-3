<template>
  <div class="rezultat">
    <div id="headerContainer">
            <div id="container">
                <section>
                    <div class="main-topic">
                        <div class="left-text">
                          <!--
<button @click="start">Start</button>
<button @click="stop">Stop</button>
-->
                            <h3>Congratulations to our winners!</h3>
                            <p v-for="(data, index) in get_rezultati.slice(0,1)" :key="index" class="podnaslov">Tickets with most hits: <span class="winner">{{data.pogodaka}}</span></p>
                        </div>
                        <div class="right-picture">
                          <div id="test" class="sredina">
                          <circular-count-down-timer
                                  :initial-value="25"
                                  :steps="25"
                                  :stroke-width="30"
                                  :size="472"
                                  :padding="0"
                                  :second-label="''"
                                  :seconds-stroke-color="'#F58020'"
                                  :underneath-stroke-color="'white'"
                                  @finish="finished"
                          ></circular-count-down-timer>
                          </div>
                            <img src="../assets/winner.png">
                        </div>
                        
                        <div class="clear"></div>
                        <div class="rez"></div>
                    </div>
                </section>
            </div>
        </div>
        <div class="content">
          <div class="lottery-result-table-area">
            <h1 class="naslov">Bingo Results</h1>
            <table id="latest-lottery-result">
             <p class="sredina bijela">Lucky Numbers / Ticket ID</p>
              <tbody>
                <transition-group class="transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
                <tr v-for="(data, index) in get_rezultati" :key="index">
                  <td v-bind:class="{'nlistici': pobjednik(data)}">
                    <ul class="number-result-list">
                    <!--BROJEVI -->
                     <!--BROJ 1  -->
                    <li id="boja" v-if="get_izvuceniBrojevi[0]== data.niz[0] ||
                             get_izvuceniBrojevi[1] == data.niz[0]  ||
                              get_izvuceniBrojevi[2] == data.niz[0]  ||
                              get_izvuceniBrojevi[3] == data.niz[0]  ||
                              get_izvuceniBrojevi[4] == data.niz[0]  ||
                             get_izvuceniBrojevi[5] == data.niz[0] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[0]}}</li>
                 <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[0]}}</li>
                  <!--BROJ 2 -->
                               <li id="boja" v-if="get_izvuceniBrojevi[0]== data.niz[1] ||
                             get_izvuceniBrojevi[1] == data.niz[1]  ||
                              get_izvuceniBrojevi[2] == data.niz[1]  ||
                              get_izvuceniBrojevi[3] == data.niz[1]  ||
                              get_izvuceniBrojevi[4] == data.niz[1]  ||
                             get_izvuceniBrojevi[5] == data.niz[1] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[1]}}</li>
                 <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[1]}}</li>
                  <!--BROJ 3  -->
                                <li id="boja" v-if="get_izvuceniBrojevi[0]== data.niz[2] ||
                             get_izvuceniBrojevi[1] == data.niz[2]  ||
                              get_izvuceniBrojevi[2] == data.niz[2]  ||
                              get_izvuceniBrojevi[3] == data.niz[2]  ||
                              get_izvuceniBrojevi[4] == data.niz[2]  ||
                             get_izvuceniBrojevi[5] == data.niz[2] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[2]}}</li>
                 <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[2]}}</li>
                  <!--BROJ 4 -->
                               <li id="boja" v-if="get_izvuceniBrojevi[0]== data.niz[3] ||
                             get_izvuceniBrojevi[1] == data.niz[3]  ||
                              get_izvuceniBrojevi[2] == data.niz[3]  ||
                              get_izvuceniBrojevi[3] == data.niz[3]  ||
                              get_izvuceniBrojevi[4] == data.niz[3]  ||
                             get_izvuceniBrojevi[5] == data.niz[3] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[3]}}</li>
            <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[3]}}</li>
                  <!--BROJ 5 -->
                               <li id="boja" v-if="get_izvuceniBrojevi[0]== data.niz[4] ||
                             get_izvuceniBrojevi[1] == data.niz[4]  ||
                              get_izvuceniBrojevi[2] == data.niz[4]  ||
                              get_izvuceniBrojevi[3] == data.niz[4]  ||
                              get_izvuceniBrojevi[4] == data.niz[4]  ||
                             get_izvuceniBrojevi[5] == data.niz[4] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[4]}}</li>
                 <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[4]}}</li>
                  <!--BROJ6 -->
                               <li v-if="get_izvuceniBrojevi[0]== data.niz[5] ||
                             get_izvuceniBrojevi[1] == data.niz[5]  ||
                              get_izvuceniBrojevi[2] == data.niz[5]  ||
                              get_izvuceniBrojevi[3] == data.niz[5]  ||
                              get_izvuceniBrojevi[4] == data.niz[5]  ||
                             get_izvuceniBrojevi[5] == data.niz[5] "
                  v-bind:style="{ backgroundColor: boja, fontWeight: 900}" >{{data.niz[5]}}</li>
                 <li  v-else v-bind:style="{ backgroundColor: boja1}"> {{data.niz[5]}}</li>
                    </ul>
                  </td>
                 <td v-bind:class="{'nlistici': pobjednik(data)}">#{{data.ID}} </td>
                </tr>
                </transition-group>
              </tbody>
            </table>
        </div>
        </div>
       
        
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";


export default {
  name: 'generisanje',
  computed: {
  ...mapGetters(["get_rezultati","get_listici","get_izvuceniBrojevi"])
  },
    data: function () {
    return {
      boja: 'skyblue', 
      boja1 :'white',
  }
    
   },
  methods:
  {
    ...mapActions(["pogodak"]),
        finished: () => {
        document.getElementById("test").style.WebkitAnimationPlayState = "paused";
        },
    pobjednik : function (n) {
                if(n.pogodaka == this.get_rezultati[0].pogodaka)
                return n;
            },    
    start() {
        this.$confetti.start({
        particles: [
          {
            type: 'circle',
            dropRate: '10',
          }
        ],
        defaultColors: [
          'blue',
          'white',
          'red',
        ],
        particlesPerFrame: '2',
      });
      },
    stop() {
          this.$confetti.stop();
        },
   },
   mounted : function()
   {
     this.pogodak();
     setTimeout(() => {
      this.$router.push('/');
     }, 25000);
     setTimeout(this.start, 1000);
     setTimeout(this.stop, 4500);
   }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#headerContainer{
  height: 470px;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    border-bottom-left-radius: 30% 50%;
    border-bottom-right-radius: 50% 85%;
    background: #009FFD;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #009FFD, #3D7EAA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #009FFD, #3D7EAA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);
    animation: budalastina 20s infinite;
}
#test{
  display: block;
  position: absolute;
  color: #ff5500;
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
  animation: upozorenje 1s infinite;
  transform: scale(1);
  animation-delay: 22s;
}
.nlistici{ /* Stil za pobjednicki listic */
  background-color: darkcyan;
}
@keyframes upozorenje{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes budalastina{
    0%{
        border-bottom-left-radius: 30% 50%;
        border-bottom-right-radius: 50% 85%;
    }
    20%{
        border-bottom-left-radius: 50% 80%;
        border-bottom-right-radius: 60% 95%;
    }
    40%{
        border-bottom-left-radius: 20% 10%;
        border-bottom-right-radius: 60% 35%;
    }
    60%{
        border-bottom-left-radius: 90% 40%;
        border-bottom-right-radius: 10% 45%;
    }
    80%{
        border-bottom-left-radius: 73% 25%;
        border-bottom-right-radius: 53% 25%;
    }
    100%{
        border-bottom-left-radius: 30% 50%;
        border-bottom-right-radius: 50% 85%;
    }
}
#container{
    margin: 0 auto;
    width: 1000px;
    border-radius: 5px;
    /*background-color: grey;*/
    padding: 15px;
}
.content{
    width: 1000px;
    margin: 0 auto;
    color: #232528;
    padding-bottom: 100px;
}
.content h1{
    color: #EAF6FF;
    text-shadow: 2px 2px #111111;
    background-color: #009FFD;
    border-radius: 15px;
}
#jackpot{
  padding-bottom: 25px;
}
section h3 {
  color: #EAF6FF;
  font-size: 60px;
  padding-top: 50px;
  text-shadow: 2px 2px #6e6e6e;
}

.main-topic {
    margin: 0 auto;
    clear: both;
    display: flex;
}

.winner{
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.left-text{
	vertical-align:middle;
}

.right-picture > img{
  display: block;
  width: 400px;
}

.clear{
	clear: both;
}
.sredina{
    text-align: center;
}
.podnaslov{
  font-size: 24px;
  text-align: center;
  color: #EAF6FF;
  text-shadow: 1px 1px #202020;
}
.card{
    display: block;
    background-color: rgb(246, 246, 246);
    width: 460px;
    min-width: 460px;
    height: 140px;
    min-height: 140px;
    margin-bottom: 25px;
    border-radius: 2px;
    margin-top: -150px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
}
.card h1{
    text-align: center;
    font-size: 32px;
    padding-top: 4px;
    color: rgb(27, 27, 27);    
}
.card p{
    text-align: center;
    margin-top: -15px;
    font-size: 24px;
}

.naslov{
  text-align: center;
  color: #EAF6FF;
  text-shadow: 1px 1px 5px #111111;
  margin-top: 40px;
}
.bijela{
  color: rgb(245, 245, 245);
  text-shadow: 1px 1px #111111;
}
.rezultat{
  margin: 0 auto;
  border-radius: 5px;
  height: 100vw;
}
#latest-lottery-result{
    margin-left: 35px;
}
.lottery-result-table-area {
  overflow: hidden;
  padding-left: 5px;
}
.number-result-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: -15px 80px;
  justify-content: center;
  list-style: none;
}
.number-result-list li {
  width: 40px;
  height: 40px;
  margin: 1px 30px;
  color: #000000;
  background-color: rgb(221, 221, 221);
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  transition: transform .2s;
  font-size: 28px;
}
.number-result-list li:hover{
    transform: scale(1.1);
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.3);
}
.number-result-list .pogodak{
    background-color: #009FFD;
    box-shadow: 1px 1px 5px 5px rgba(51, 181, 247, 0.3);
}
table tbody tr{
    transition: transform .2s;
}
table tbody tr:hover{
    -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.3);
    transform: scale(1.02);
    border-radius: 25px !important;
}
table tbody tr:nth-child(odd) {
  background-color: #FA6828;
}
table tbody tr:nth-child(even) {
  background-color: #FD5B2C;
}
table tbody tr:first-of-type{ /* Stil za citav prvi red - pobjednicki listic */
  background-color: rgba(255, 0, 0, 0.568);
}
table tbody tr:first-of-type ul:first-of-type li{ /* Stil za brojeve na pobjednickom listicu */
  background-color: inherit;
  margin: 1px 30px;
  color: #000000;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  transition: transform .2s;
  font-size: 28px;
}
table tbody td { /* BROJEVI */
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 25px;
}
table tbody td:nth-child(2){ /* TIKET ID */
    text-shadow: 1px 1px #111111;
    color: #fefefe;
    padding-left: 25px;
    padding-right: 25px;
}
.animated-button2 {
  cursor: pointer;
  background-image: -webkit-linear-gradient( 90deg, rgb(1,141,239) 0%, rgb(0,184,234) 100%, rgb(255,237,0) 100%);
  padding: 10px 10px;
  transition: transform .1s;
  margin-top: -15px;
  margin-left: 35%;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
          transform: translate(0%, 0%);
  overflow: hidden;
  color: #EAF6FF;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button2::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ad9985;
  opacity: 0;
  -webkit-transition: .2s opacity ease-in-out;
  transition: .2s opacity ease-in-out;
}

.animated-button2:hover::before {
  opacity: 0.2;
}

.animated-button2:hover{
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.animated-button2 span {
  position: absolute;
}

.animated-button2:after {
  content: "";
  background: rgb(250, 164, 6);
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.animated-button2:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.animated-button2 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 26, 8, 0)), to(#000000));
  background: linear-gradient(to left, rgba(43, 26, 8, 0), #000000);
  -webkit-animation: 2s animateTop linear infinite;
          animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
}

.animated-button2 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 26, 8, 0)), to(#000000));
  background: linear-gradient(to left, rgba(43, 26, 8, 0), #000000);
  -webkit-animation: 2s animateRight linear -1s infinite;
          animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
}

.animated-button2 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 26, 8, 0)), to(#000000));
  background: linear-gradient(to left, rgba(43, 26, 8, 0), #000000);
  -webkit-animation: 2s animateBottom linear infinite;
          animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}

.animated-button2 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 26, 8, 0)), to(#000000));
  background: linear-gradient(to left, rgba(43, 26, 8, 0), #000000);
  -webkit-animation: 2s animateLeft linear -1s infinite;
          animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
}
</style>