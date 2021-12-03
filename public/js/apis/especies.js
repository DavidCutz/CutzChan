function init(){

var apiEspecie='http://localhost/CutzChan/public/apiEspecie'

new Vue({

// le asignamos el token 
    http: {
            headers: {
               'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

   el:'#apiEspecie',

   data:{
      mensaje:'Hola Mundo',
      agregando:true,
      especies:[],
      id_especie:'',
      especie:'',

   },


   //se ejecuta automaticamente cuando la pagina se crea
   created:function(){
      this.getEspecies();
   },
   
   //INICIO DE METHODS
   methods:{
      //obtiene el listado de todas las especies
      getEspecies:function(){
         this.$http.get(apiEspecie).then(function(json){
            this.especies=json.data;

         })
      },

      eliminarEspecie:function(id){
         Swal.fire({
      title: 'Esta seguro de eliminar?',
      text: "No podra deshacer los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
      }).then((result) => {
      if (result.isConfirmed) {
         //eliminamos la especie realmente
         this.$http.delete(apiEspecie + '/' + id).then(function(json){
            this.getEspecies();
         }).catch(function(json){
            console.log(json)
         });
         //fin de la eliminacion

      Swal.fire(
         'Eliminado!',
         'La especie fue eliminada.',
         'success'
         )
      }
   });

      //fin de ventana sweetalert
         
      },

      //fin del metodo eliminar

      mostrarModal(){
         this.agregando=true;
         this.nombre='';
         $('#modalEspecies').modal('show');
      },

      guardarEspecie:function(){
         var especies = {especie:this.especie};

         this.$http.patch(apiEspecie, especies).then(function(json){
            this.getEspecies();
            this.especie="";
         }).catch(function(j){
            console.log(j);
         });
         $('#modalEspecies').modal('hide');

      },

      editandoEspecie:function(id){
         this.agregando=false;
         this.id_especie=id;
         this.$http.get(apiEspecie + '/' + id).then(function(json){
            //console.log(json.data);

            this.especie=json.data.especie;
         });
         $('#modalEspecies').modal('show');
      },

      actualizarEspecie:function(){
         var jsonEspecie = {espcie:this.especie};


         this.$http.patch('')(apiEspecie + '/' + this.id_especie,jsonEspecie).then(function(json){
            this.getEspecies();
         });
         $('#modalEspecies').modal('hide');
      },

   },
 //FIN DE METHODS
   


})


} window.onload = init;

