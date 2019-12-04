<template>
<div>
<button id="brojacid" v-on:click="brojac">START</button>
</div>
</template>

<script>

export default {
  methods: {
    brojac: function() {
document.getElementById("brojacid").textContent = 10;
let sekunde = document.getElementById("brojacid").textContent;
let brojac = setInterval(function() {
sekunde--;
document.getElementById("brojacid").textContent = sekunde;
if (sekunde <= 0)
{
 clearInterval(brojac);
 document.getElementById("brojacid").textContent = "";
}
}, 1000)
    }
  }
}
</script>

<style scoped>
#brojacid
{
    border: 5px solid grey;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 25px;
    color:white;
    background: deepskyblue;
    text-align:center;
}
</style>