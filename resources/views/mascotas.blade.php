@extends('layout.master')
@section('titulo','CRUD MASCOTAS')
@section('contenido')

<!--inicia vue-->
<div id="mascota">

<!--<div class="row">
	<div class="col-md-8">
		<input type="number" placeholder="cantidad" class="form-control" v-model=" cantidad"><br>
		<input type="number" placeholder="precio" class="form-control" v-model="precio"><br>

		<h5>Total: @{{total}}</h5>
	</div>
</div>-->




	<div class="row">
		<div class="col-md-12">
			<div class="card card-warning ">
				<div class="content-header">

					<h1>CRUD MASCOTAS
					<button class="btn btn-sm" @click=" mostrarModal()">
						<i class="fas fa-user-plus"></i>
					</button>
					</h1>

                  <div class="col-md-6">
		         <input type="text" placeholder="Escriba el nombre o especie de la mascota" class="form-control" v-model="buscar">
	             </div>


				</div>
            <div class="card-body">

          	<!--inicio de tabla-->
         <table class="table table-bordered ">
         	<thead class="thead-dark">
         		<th hidden="">ID MASCOTA</th>
         		<th>NOMBRE</th>
         		<th>EDAD</th>
         		<th>GENERO</th>
         		<th>ESPECIE</th>
         		<th>ACCIONES</th>	
         	</thead>

         	<tbody>
         		<tr v-for="mascota in filtroMascotas">
         			<td hidden="">@{{mascota.id_mascota}}</td>
         			<td>@{{mascota.nombre}}</td>
         			<td>@{{mascota.edad}}</td>
         			<td>@{{mascota.genero}}</td>
         			<td>@{{mascota.especie}}</td>
         			<td>
         				<button class="btn btn-sm" @click="editandoMascota(mascota.id_mascota)">
         					<i class="fas fa-pen-square  "></i>
         				</button>

         				<button class="btn btn-sm " @click="eliminarMascota(mascota.id_mascota)">
         					<i class="fas fa-backspace"></i>
         				</button>
         			</td>
         		</tr>
         	</tbody>

         </table>
         <!--fin de tabla-->

            </div>

         </div>

		</div>

	</div>

<!-- Modal para el formulario del registro de los moovimientos -->
<div class="modal fade" id="modalMascota" tabindex="-1" aria-labelledby="exampleModalLabel" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==true">AGREGAR MASCOTA</h5>
        <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==false">	EDITANDO MASCOTA</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <input type="text" class="form-control" placeholder="Nombre de mascota" v-model="nombre"><br>
      <input type="number" class="form-control" placeholder="Edad" v-model="edad"><br>
 <select class="form-control" v-model="genero">
 	<option disabled="">Elige un genero</option>
 	<option value="M">M</option>
 	<option value="H">H</option>
 </select>

<select class="form-control" v-model="id_especie">
	<option v-for="especie in especie" v-bine:value="especie.id_especie">@{{especie.especie}}</option>
</select>

<!--<h5>Especie elejida : @{{id_especie}}</h5>-->

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-light" @click="guardarMascota" v-if="agregando==true">Guardar</button>

         <button type="button" class="btn btn-dark" @click="actualizarMascota" v-if="agregando==false">Guardar</button>

      </div>
    </div>
  </div>
</div>
<!-- aqui termina el modal-->


</div>
<!--termina vue-->

@endsection

@push('scripts')
<script type="text/javascript" src="js/vue-resource.js"></script>
<script type="text/javascript" src="js/apis/mascotas.js"></script>
@endpush

<input type="hidden" name="route" value="{{url('/')}}">