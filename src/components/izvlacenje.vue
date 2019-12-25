<template>
  <div id="izvlacenje">
      <div class="container">
          <div class="loptica-1"></div>
          <div class="loptica-2"></div>
          <div class="loptica-3"></div>
          <div class="loptica-4"></div>
          <div class="loptica-5"></div>
          <div class="loptica-6"></div>
          
          <div class="broj-1">{{get_izvuceniBrojevi[0]}}</div>
          <div class="broj-2">{{get_izvuceniBrojevi[1]}}</div>
          <div class="broj-3">{{get_izvuceniBrojevi[2]}}</div>
          <div class="broj-4">{{get_izvuceniBrojevi[3]}}</div>
          <div class="broj-5">{{get_izvuceniBrojevi[4]}}</div>
          <div class="broj-6">{{get_izvuceniBrojevi[5]}}</div>
            <video loop muted autoplay class="fullscreen-bg__video">
                <source src="../assets/Novo6.mp4" type="video/mp4">
            </video>
      </div>
      <h1 class="naslov sredina">Izvuceni brojevi</h1>
        <div class="lottery-result-table-area">
            <table id="latest-lottery-result">
              <tbody class="izvlacenje">
                <tr>
                  <td>
                    <ul class="number-result-list">
                      <li id="izvuceno1"><div id="inner-circle"></div><div id="fade1">{{get_izvuceniBrojevi[0]}}</div></li>
                      <li id="izvuceno2"><div id="inner-circle"></div><div id="fade2">{{get_izvuceniBrojevi[1]}}</div></li>
                      <li id="izvuceno3"><div id="inner-circle"></div><div id="fade3">{{get_izvuceniBrojevi[2]}}</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                    <td>
                        <ul class="number-result-list">
                            <li id="izvuceno4"><div id="inner-circle"></div><div id="fade4">{{get_izvuceniBrojevi[3]}}</div></li>
                            <li id="izvuceno5"><div id="inner-circle"></div><div id="fade5">{{get_izvuceniBrojevi[4]}}</div></li>
                            <li id="izvuceno6"><div id="inner-circle"></div><div id="fade6">{{get_izvuceniBrojevi[5]}}</div></li>
                        </ul>
                    </td>
                </tr>
              </tbody>
            </table>
        </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
//import GameIntro from '@/components/GameIntro.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Izvlacenje',

    computed: {
  ...mapGetters(["get_izvuceniBrojevi"])
  },
  methods:{
          ...mapActions(["dobitnaKombinacija"]),
  },
  created: function(){
      let izvuciBroj1 = setTimeout(this.jedanBroj, 2000);
      let izvuciBroj2 = setTimeout(this.jedanBroj, 12000);
      let izvuciBroj3 = setTimeout(this.jedanBroj, 22000);
      let izvuciBroj4 = setTimeout(this.jedanBroj, 32000);
      let izvuciBroj5 = setTimeout(this.jedanBroj, 42000);
      let izvuciBroj6 = setTimeout(this.jedanBroj, 52000);
      return izvuciBroj1, izvuciBroj2, izvuciBroj3, izvuciBroj4, izvuciBroj5, izvuciBroj6;
  },
  mounted: function() {
    setTimeout(() => {
    this.$router.push('/rezultat');
    }, 60000);
  },
}
</script>

<style scoped>
.naslov{
    color: #EAF6FF;
    text-shadow: 2px 2px #111111;
    background-color: #009FFD;
    border-radius: 15px;
}
.sredina{
    text-align: center;
}
#izvlacenje{
    margin: 0 auto;
    width: 1080px;
    height: 100vw;
}
.container{
    margin: inherit;
    width: inherit;
    display: flex;
    justify-content: center;
    margin-top: -5px;
}
.fullscreen-bg__video {
    /*width: 740px;
    height: 580px;*/
    border-bottom-right-radius: 80%;
    border-bottom-left-radius: 80%;
    animation: budalastina 10s infinite;
}
@keyframes budalastina{
    0%{
        border-bottom-left-radius: 70%;
        border-bottom-right-radius: 70%;
    }
    20%{
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    40%{
        border-bottom-left-radius: 30%;
        border-bottom-right-radius: 30%;
    }
    60%{
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    80%{
        border-bottom-left-radius: 70%;
        border-bottom-right-radius: 70%;
    }
    100%{
        border-bottom-left-radius: 90%;
        border-bottom-right-radius: 90%;
    }
}
#inner-circle {
   position: absolute;
   background: rgb(17, 17, 17);
   border-radius: 50%;
   height: 120px;
   width: 120px;
   margin-left: 20px;
   margin-top: 20px;
   border: 10px solid rgb(255, 72, 0);
 }
.loptica-1 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 2s;
}
.loptica-2 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 12s;
}
.loptica-3 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 22s;
}
.loptica-4 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 32s;
}
.loptica-5 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 42s;
}
.loptica-6 {
    -webkit-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 37px 14px rgba(0,0,0,0.75);
    position: absolute;
    align-self: center;
    border-radius: 50%;
    background-image: url("../assets/loptica_bijela.png");
    padding: 10em;
    animation: loptica 7s forwards;
    transform: scale(0);
    animation-delay: 52s;
}
.broj-1 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 2s;
}
.broj-2 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 12s;
}
.broj-3 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 22s;
}
.broj-4 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 32s;
}
.broj-5 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 42s;
}
.broj-6 {
    position: absolute;
    align-self: center;
    border-radius: 50%;
    padding: 10em;
    font-size: 0px;
    font-weight: bold;
    color: white;
    animation: loptica 7s forwards;
    transform: scale(1);
    animation-delay: 52s;
}
#izvuceno1{
    font-size: 80px;
}
#izvuceno2{
    font-size: 80px; 
}
#izvuceno3{
    font-size: 80px;  
}
#izvuceno4{
    font-size: 80px; 
}
#izvuceno5{
    font-size: 80px; 
}
#izvuceno6{
    font-size: 80px; 
}
#fade1{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 4s;
}
#fade2{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 14s;
}
#fade3{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 24s;
}
#fade4{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 34s;
}
#fade5{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 44s;
}
#fade6{
    animation: izvuceno 1s forwards;
    opacity: 0;
    animation-delay: 54s;
}
@keyframes loptica {
    0%{
        font-size: 100px;
        transform: scale(0);
        opacity: 1;
    }
    50%{  
        font-size: 100px;
        transform: scale(2);
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        font-size: 100px;
        transform: scale(0.2);
        opacity: 0;
    }
}
@keyframes izvuceno {
    0%{
        opacity: 0;
        color: white;
    }
    100%{
        opacity: 1;
        color: white;
    }
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
  margin: -15px 95px;
  justify-content: center;
  list-style: none;
}
.number-result-list li {
    width: 180px;
    height: 180px;
    margin: 1px 30px;
    background-color: rgb(221, 221, 221);
    color: #000000;
    text-align: center;
    line-height: 178px;
    font-size: 0px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
}
.number-result-list li:hover{
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,1);
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,1);
}
.number-result-list .pogodak{
    background-color: rgb(0, 0, 0);
    box-shadow: 1px 1px 5px 5px rgba(51, 181, 247, 0.3);
}

table thead th {
    text-transform: capitalize;
    padding: 10px 15px;
    text-align: center;
    background-color: transparent;
    color: #EAF6FF;
    text-shadow: 1px 1px #111111;
    border-bottom: 1px dotted #ffaa5b;
}
table tbody tr{
    transition: transform .2s;
}
table tbody td {
    text-align: center;
    padding-top: 33px;
    padding-bottom: 33px;
}
table tbody td:nth-child(2){
    text-shadow: 1px 1px #111111;
    color: #fefefe;
}
table{
    border-collapse: collapse;
}
table td{
    border-spacing: 0;
    margin-top: -5px;
    border-collapse: collapse;
    border-radius: 5px;
}
table tbody tr:nth-child(even) {
    margin-top: -5px;
}
</style>