@extends('layout.master')
@section('contenido')

  <!-- INICIO DE VUE -->
  <div id="apiEspecie">

    <div class="row">
          <div class="col-lg-12">
            <div class="card card-warning card-outline"> 
              <div class="card-header">
                <h5 class="m-0">CRUD ESPECIES <button class="btn btn-primary btn-sm" @click="mostrarModal()"><i class="fas fa-plus fa-lg"></i></button></h5> 
              </div>
              <div class="card-body">
                <!-- Inicio de la Tabla -->
               <table class="table table-bordered table-striped table-hover table-sm">
                <thead>
                  <th hidden="">CLAVE</th>
                  <th>ESPECIE</th>
                  <th>OPERACIONES</th>
                </thead>

                <tbody>
                  <tr v-for="especie in especies">
                    <td hidden="">@{{especie.id_especie}}</td>
                    <td>@{{especie.especie}}</td>
                    <td>
                      <button class="btn btn-primary btn-sm" @click="editandoEspecie(especie.id_especie)"><i class="fas fa-edit fa-lg"></i></button>
                      <button class="btn btn-danger btn-sm" @click="eliminarEspecie(especie.id_especie)"><i class="fas fa-trash-alt fa-lg"></i></button>
                    </td>
                  </tr>
                </tbody>
               </table>

               <!-- Fin de la Tabla -->

              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
    <!-- Modal para el formulario del registro de los moovimientos -->
<div class="modal fade" id="modalEspecies" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==true">Registro de Especies</h5>
         <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==false">Editando la Especie</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nombre de la especie" v-model="especie">
              
            </div>
            
          </div>
          <!-- Fin del form row -->

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarEspecie" v-if="agregando==true">Guardar</button>
        <button type="button" class="btn btn-warning" @click="actualizarEspecie()" v-if="agregando==false">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- aqui termina el modal-->

  </div>  
  <!-- FIN DE VUE   -->

  @endsection

  @push('scripts')
  <script type="text/javascript" src="{{asset('js/apis/especies.js')}}"></script>
  <script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
  @endpush
  

</body>
</html>