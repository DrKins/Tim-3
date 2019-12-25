const state = {
listici : [],
izvuceniBrojevi : [],
rezultati: [],
niz: [],
maxBrojeva : 48,
brojac: 0
};

const getters = {
get_listici : state => state.listici,
get_niz : state=> state.niz,
get_izvuceniBrojevi : state => state.izvuceniBrojevi,
get_maxBrojeva : state => state.maxBrojeva,
get_brojac : state => state.maxBrojeva,
get_rezultati: state => state.rezultati,
get_dobitnaKombinacija: state => state.dobitnaKombinacija,
};

const actions = {
   
  dobitnaKombinacija: function(){
    state.izvuceniBrojevi = [];
    state.listici = [];
    state.rezultati = [];
    state.niz = [];
    state.maxBrojeva = 48;
    state.brojac = 0;
    for(let i=0; i<6; i++){
        let randomNumber = Math.floor(Math.random() * (48- 1 + 1)) + 1;
        if(!state.izvuceniBrojevi.includes(randomNumber)){
            state.izvuceniBrojevi.push(randomNumber);
        }else{
            i--;
        }
    }         
},
    generisiBroj: function(){
        let privremeniniz = [];
        let generateID = Math.floor(Math.random() * (90000 - 10000) + 10000);
        for(let i=0; i<6; i++){
          let randomNumber = Math.floor(Math.random() * (48 - 1) + 1)+ 1;
          if(!privremeniniz.includes(randomNumber))
          {
          privremeniniz.push(randomNumber);
          }
          else{
            i--;
          }
        }
        state.listici.push({niz:privremeniniz,pogodaka:0,ID:generateID});
      },
      pogodak : function()
      {
        for(let i =0;i<state.listici.length;i++)
        {
          let brojac = 0;
          for(let j=0;j<state.izvuceniBrojevi.length;j++)
          {
            if(state.izvuceniBrojevi.includes(state.listici[i].niz[j]))
            {
              brojac = brojac + 1;
              state.listici[i].pogodaka = brojac;
            }   
          }
          if(brojac != 0) {
            state.rezultati.push(state.listici[i]);
          }
        }
        state.rezultati.sort(function(a, b) {
          return b.pogodaka - a.pogodaka;
        });  
      }      
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}