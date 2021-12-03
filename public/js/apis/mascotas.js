function init(){

var apiMascota='http://localhost/CutzChan/public/apiMascota';
var apiEspecie='http://localhost/CutzChan/public/apiEspecie';

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
      especies:[],

      nombre:'',
      edad:'',
      genero:'',
      agregando:true,
      id_mascota:'',
      id_especie:'',

      cantidad:1,
      precio:0,
      buscar:'',

	},


    //al crearse la pagina 
	created:function(){
        this.obtenerMascotas();
        this.obtenerEspecies();
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
		},//fin obtener 



      mostrarModal:function(){
      	this.agregando=true;
      	this.nombre='';
      	this.edad='';
      	this.genero='';
        this.id_especie='';
      	
        $('#modalMascota').modal('show');

      },//fin mostrar modal



    guardarMascota:function(){
    	//se contrulle el json para enviar al controlador 
    	var mascota={nombre:this.nombre,
                  edad:this.edad,
                  genero:this.genero,
                  id_especie:this.id_especie};


    	//se envia los datos en json al controlador
      this.$http.post(apiMascota,mascota).then(function(json){
      	this.obtenerMascotas();
      	this.nombre='';
      	this.edad='';
      	this.genero='';
        this.id_especie='';
      }).catch(function(json){
      	console.log(json);
      });


      $('#modalMascota').modal('hide');
    	console.log(mascota);
    },//fin guardar



     eliminarMascota:function(id){
     var confir=confirm('estas seguro de eliminar la mascota?');

     if(confir)
     {
     	this.$http.delete(apiMascota + '/' + id).then(function(json){
         this.obtenerMascotas();
     	}).catch(function(json){

     	});

     }

     },//fin eliminar

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
     },//fin editar


    actualizarMascota:function(){
    
    var jsonMascota = {nombre:this.nombre,
                       edad:this.edad,
                       genero:this.genero,
                       id_especie:this.id_especie
                       };

    this.http.patch(apiMascota + '/' + this.id_mascota.jsonMascota).then(function(json){
          this.obtenerMascotas();

    });

    $('#modalMascota').modal('hide');

    },//fin actualizar


    obtenerEspecies:function(){
      this.$http.get(apiEspecie).then(function(json){
       this.especies=json.data;
      })

    }//fin obtener especie



	}//fin de los metodos 

 
 computed:{
   total:function(){
    var t=0;
    t=this.cantidad * this. precio;
    return t;

   }//fin total


   filtroMascotas:function(){
      return this.mascotas.filter((mascota)=>{
        return mascota.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
               mascota.especie.especie.toLowerCase().match(this.buscar.toLowerCase().trim())
      });

   }//fin filtro

 }//fin de computed 

});
 
} window.onload=init;