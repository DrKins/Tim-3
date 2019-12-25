<template>
    <div id="gameintro">
        <div id="headerContainer">
            <div id="container">
                <section>
                    <div class="main-topic">
                        <div class="left-text">
                            <h3>Take the chance to change your life!</h3>
                        </div>
                        <div class="right-picture">
                          <div id="test" class="sredina">
                          <circular-count-down-timer
                                  :initial-value="60"
                                  :steps="60"
                                  :stroke-width="30"
                                  :size="472"
                                  :padding="0"
                                  :second-label="''"
                                  :seconds-stroke-color="'#F58020'"
                                  :underneath-stroke-color="'white'"
                                  @finish="finished"
                          ></circular-count-down-timer>
                          </div>
                            <img src="../assets/chance.png">
                        </div>
                        
                        <div class="clear"></div>
                    </div>
                    <div class="card sredina">
                        <h1 id="jackpot">Bingo Next Jackpot Draw</h1>
                         <button  v-on:click="generisiBroj(); print('list'+count); count++" class="animated-button2" id="tipka" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Draw a Ticket
                            </button>
                        <!--<p id="generisi"><generisiBroj /></p>-->
                    </div>
                </section>
            </div>
        </div>
        <div class="content">
            <br>
            <h1 class="sredina">Drawn tickets: {{ count }}</h1>
            <div class="lottery-result-table-area">
              <p class="sredina bijela">Lucky Numbers / Ticket ID</p>
            <table id="latest-lottery-result">      
              <tbody>
                <transition-group class="transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
                <tr v-for="(data, index) in get_listici" :key="index" v-bind:id="'list'+index" >
                  <td>
                    <ul class="number-result-list">
                     <li>{{data.niz[0]}}</li>
                      <li>{{data.niz[1]}}</li>
                      <li>{{data.niz[2]}}</li>
                      <li>{{data.niz[3]}}</li>
                      <li>{{data.niz[4]}}</li>
                      <li>{{data.niz[5]}}</li>
                    </ul>
                  </td>
                  <td>#{{data.ID}}</td>
                </tr>
                </transition-group>
              </tbody>
            </table>
        </div>
        <div class="faq-header sredina"><h1>How to Play</h1></div>
            <div class="faq-content">
                <div class="faq-question">
                    <input id="q1" type="checkbox" class="panel">
                    <div class="plus">+</div>
                    <label for="q1" class="panel-title">Rules?</label>
                    <div class="panel-content">1. You have 1 minute to get as much as you want tickets.
                      <br>2. Hope for the best.
                    </div>
                </div>
                <div class="faq-question">
                    <input id="q2" type="checkbox" class="panel">
                    <div class="plus">+</div>
                    <label for="q2" class="panel-title">Who made this?</label>
                    <div class="panel-content">SPARK Team 3 - EXPECT US!</div>
                </div>
                <div class="faq-question">
                    <input id="q3" type="checkbox" class="panel">
                    <div class="plus">+</div>
                    <label for="q3" class="panel-title">SPARK Team 3 members?</label>
                    <div class="panel-content">
                      Project Manager:
                      <br>
                      Fadil Sestan
                      <br>
                      <br>Software architect: 
                      <br>
                      Ahmed Cvrcak
                      <br>
                      <br>Designer: 
                      <br>
                      Eldar Cickusic
                      <br>
                      <br> Developers:
                      <br>
                      Harun Ibrahimovic<br> 
                      Amir Ibranovic<br> 
                      Leon Zamboni<br> 
                      Senad Sehic<br> 
                      Leonard Pranjic<br> 
                      Tarik Ustalic
                    </div>
                </div>
            </div>
    </div>

<!--- FAQ POCETAK -->
    </div>
</template>


<script>

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'generisanje',
   data: function () {
    return {
      count: 0,
    }
  },
  computed: {
  ...mapGetters(["get_listici"]),
  },
  methods:
  {
    ...mapActions(["generisiBroj","dobitnaKombinacija"]),
    finished () {
        document.getElementById("test").style.WebkitAnimationPlayState = "paused";
        document.getElementById("tipka").style.display = "none";
        if (this.get_listici.length > 0) {
          setTimeout(()=>{
            this.$router.push('/izvlacenje');
          },2000);   
        } else {
          location.reload();
        }
    },
    print(x) {
      // Pass the element id here
     var local = x;
      setTimeout(() => {
        this.timer(local);
      }, 500);
    },
    timer(y) {
        this.$htmlToPaper(y);
    },
  },  
  mounted : function() {
    this.dobitnaKombinacija();
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');
#test{
  display: block;
  position: absolute;
  color: #ff5500;
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
  animation: upozorenje 1s infinite;
  transform: scale(1);
  animation-delay: 57s;
}
.bijela{
  color: rgb(245, 245, 245);
  text-shadow: 1px 1px #111111;
}
#headerContainer{
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
  margin-left: 65px;
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
table tbody td:nth-child(2){
  padding-left: 35px;
  padding-right: 35px;
}
table tbody td {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 25px !important;
}
table tbody td:nth-child(2){
    text-shadow: 1px 1px #111111;
    color: #fefefe;
}
/*.lottery-result-table-area ~ .btn-area {
  margin-top: 30px;
  margin-left: auto;
}
#show[disabled] {
  position: relative;
  font-size: 0;
  cursor: not-allowed;
}
#show[disabled]::before {
  position: absolute;
  content: "Ar data nai";
  font-size: 16px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
}*/

/* FAQ I OSTALA SRANJA */
.faq-header{
    border-bottom: 1px dotted #ccc;
    padding: 24px;
    text-shadow: 2px 2px #111111;
    width: 100%;
    margin-left: -24px; /*boze sacuvaj*/
}
.faq-header h1{
    color: #EAF6FF;
    text-shadow: 2px 2px #111111;
    background-color: #009FFD;
    border-radius: 15px;
}
.faq-content {
  margin: 0 auto;
}

.faq-question {
  padding: 20px 0;
  border-bottom: 1px dotted #ccc;
  color: #EAF6FF;
  text-shadow: 1px 1px #111111;
}

.panel-title {
  font-size: 24px;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 10px 10px 0 48px;
  display: block;
  cursor: pointer;
}

.panel-content {
  font-size: 20px;
  padding: 0px 14px;
  margin: 0 40px;
  height: 0;
  overflow: hidden;
  z-index: -1;
  position: relative;
  opacity: 0;
  -webkit-transition: .4s ease;
  -moz-transition: .4s ease;
  -o-transition: .4s ease;
  transition: .4s ease;
}

.panel:checked ~ .panel-content{
  height: auto;
  opacity: 1;
  padding: 14px;
}

.plus {
  position: absolute;
  margin-left: 20px;
  margin-top: 4px;
  z-index: 5;
  font-size: 42px;
  line-height: 100%;
  -webkit-user-select: none;    
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: .2s ease;
  -moz-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;
}

.panel:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.panel {
  display: none;
}

.animated-button2 {
  cursor: pointer;
  background-image: -webkit-linear-gradient( 90deg, rgb(1,141,239) 0%, rgb(0,184,234) 100%, rgb(255,237,0) 100%);
  padding: 10px 10px;
  transition: transform .1s;
  margin-top: -15px;
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

/*.animated-button2:hover{
    transform: scale(1.1);
}*/

.animated-button2 span {
  position: absolute;
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
.animated-button2:active{
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.835);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.774);
  transform: scale(1.1);
}
</style>