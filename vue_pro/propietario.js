new Vue({
   //especificar la zona de actuacion de Vue
   el:"#propietario",

   //Esta seccion de VUE sirve para Variables 
   // Y constantes 
   data:{
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      genero:'',
      indice:0,
      editando:0,
      buscar:'',
      propietarios:[{nombre:'Steve',primer_apellido:'Acosta',segundo_apellido:'Contreras',genero:'Masculino'}],            

   },
// este objeto permite crear funciones y/o procedimientos
   methods:{


      agregarPropietario:function(){
         if (this.nombre && this.primer_apellido && this.segundo_apellido && this.genero){
         //contruimos un objeto propietario para insertarlo en el array
         var unPropietario={nombre:this.nombre,primer_apellido:this.primer_apellido,
            segundo_apellido:this.segundo_apellido,genero:this.genero};

         //Agrego un objeto propietario
         this.propietarios.push(unPropietario);
         this.limpiarHtml();

         // enviamos el foco al primer componente html
         this.$refs.nombre.focus();

         //Enveiamos el mensaje de confimacion
         Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El propietario se guardo correctamente',
      showConfirmButton: false,
      timer: 2000
      })

      }
         else

            Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Debe de capturar todos los datos',
      showConfirmButton: false,
      timer: 2000
      })

      },

      limpiarHtml:function(){

         this.nombre='';
         this.primer_apellido='';
         this.segundo_apellido='';
         this.genero='';

      },

      //metodo eliminar propietario
      eliminarPropietario:function(pos){
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
         //eliminamos el propietario seleccionado
         this.propietarios.splice(pos,1);

      Swal.fire(
         'Eliminado!',
         'El propietario fue eliminado.',
         'success'
         )
      }
   })
      //fin de ventana de sweet alert
      
            
      },

      editarPropietario:function(pos){
         this.nombre=this.propietarios[pos].nombre;
         this.primer_apellido=this.propietarios[pos].primer_apellido;
         this.segundo_apellido=this.propietarios[pos].segundo_apellido;
         this.genero=this.propietarios[pos].genero;
         this.editando=1;
         this.indice=pos;  
      },

      cancelar:function(){
         this.limpiarHtml();
         this.editando=0;

      },

      guardarEdicion:function(){
         //Modifico los valores del array
         this.propietarios[this.indice].nombre=this.nombre;
         this.propietarios[this.indice].primer_apellido=this.primer_apellido;
         this.propietarios[this.indice].segundo_apellido=this.segundo_apellido;
         this.propietarios[this.indice].genero=this.genero;

         // Limpiamos los componentes del HTML
         this.limpiarHtml();
         //Indicamos que terminamos de editar, (Activando el boton Agregar/azul)
         this.editando=0;

         Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Los cambios fueron efectuados',
      showConfirmButton: false,
      timer: 2000
      })
      },

   },
//Fin de methods 

//Seccion para calcular valor automticamente 

computed: {
   numeroPropietarios:function(){
      var num=0;
      num=this.propietarios.length;
      return num;
   },

  filtroPropietarios:function(){
         return this.propietarios.filter((propietario)=>{
         return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
               propietario.primer_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
               propietario.segundo_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
               propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())  
         });
      },

   },
   //fin de computed

});