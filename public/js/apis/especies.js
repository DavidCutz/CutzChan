function init () {

var apiEspecie='http://localhost/CutzChan/public/apiEspecie' 

new vue ({


   http: {




   }
   
el:'#apiEspecie',

data:{
   mensaje:'HOLA MUNDO',
   especies:[],
},

//se ejecuta automaticamente cuando la pagina se crea 
create:function(){

	this.getEspecies();

}

//inicio de methods
methods:{

getEspecies:function(){
      this.$http.get(apiEspecie).then(function(json){
       this.especies=json.data;
      })
}

},
//fin de methods 

computed:{

},


})

} window.onload = init;