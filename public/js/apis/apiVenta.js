function init(){

var apiProducto='http://localhost/CutzChan/public/apiProducto';

new Vue({

//asignacion de token 
http:{
       headers:{
         'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
       }
},


//zona de actuacion de vue
   el:"#apiVenta",


   data:{
      mensaje:'hola mundo',
      sku:'',
      ventas:[],
      cantidades:[],
      cant:1,

   },


    //al crearse la pagina 
   created:function(){
           },

//inicio de los metodos
   methods:{
     
     buscarProducto:function(){
     if(this.sku)
     {
      var producto = {}
      this.$http.get( apiProducto + '/' + this.sku).then(function(j){
         producto = {
           sku:j.data.sku,
           nombre:j.data.nombre,
           precio:j.data.precio,
           cantidad:1,
           total:j.data.precio
         };
         

         this.ventas.push(producto);
         this.cantidades.push(1);
         this.sku='';
      });

      }

     },





   }, //fin de los metodos 

computed:{

},


})
 
} window.onload=init;