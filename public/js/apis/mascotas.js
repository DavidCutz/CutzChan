function init(){

var apiMascota='http://localhost/CutzChan/public/apiMascota';

new Vue({

//asignacion de token 
http:{
       headers:{
       	'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
       }
},

	el:"#mascota",
	data:{
      
      mascotas:[],

      nombre:'',
      edad:'',
      genero:'',
      agregando:true,
      id_mascota:'',

	},


    //al crearse la pagina 
	created:function(){
        this.obtenerMascotas();
	},

//inicio de los metodos
	methods:{
		obtenerMascotas:function(){
			this.$http.get(apiMascota).then(function(json){
             this.mascotas=json.data;
             console.log(json.data);
			}).catch(function(json){
               console.log(json);
			});
		},



      mostrarModal:function(){
      	this.agregando=true;
      	this.nombre='';
      	this.edad='';
      	this.genero='';
      	
        $('#modalMascota').modal('show');

      },



    guardarMascota:function(){
    	//se contrulle el json para enviar al controlador 
    	var mascota={nombre:this.nombre,edad:this.edad,genero:this.genero};


    	//se envia los datos en json al controlador
      this.$http.post(apiMascota,mascota).then(function(json){
      	this.obtenerMascotas();
      	this.nombre='';
      	this.edad='';
      	this.genero='';
      }).catch(function(json){
      	console.log(json);
      });


      $('#modalMascota').modal('hide');
    	console.log(mascota);
    },



     eliminarMascota:function(id){
     var confir=confirm('estas seguro de eliminar la mascota?');

     if(confir)
     {
     	this.$http.delete(apiMascota + '/' + id).then(function(json){
         this.obtenerMascotas();
     	}).catch(function(json){

     	});

     }

     },

     editandoMascota:function(){
     	this.agregando=false;
     	this.id_mascota=id;

      this.$http.get(apiMascota + '/' + id).them(function(json){
      	//console.log(json.data);

      	this.nombre=json.data.nombre;
      	this.edad=json.data.edad;
      	this.genero=json.data.genero;

      });

      $('#modalMascota').modal('show');
     },


    actualizarMascota:function(){
    
    var jsonMascota = {nombre:this,
                       edad:this,
                       genero:this
                       };

    this.http.patch(apiMascota + '/' + this.id_mascota.jsonMascota).then(function(json){
          this.obtenerMascotas();

    });

    $('#modalMascota').modal('hide');

    }



	} //fin de los metodos 


});
 
} window.onload=init;