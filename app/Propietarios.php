<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietarios extends Model
{
    protected $table='propietarios';
    protected $primaryKey='id_propietario';

//definir si la llave primaria es o no un numero incrementable 
    public $incrementing=true 

    //activar o desactivar etiquetas de tiempo
    public $timetamps=true;

    public $fillable=[
    'id_propietario',
    'nombre',
    'primer_apellido',
    'segundo_apellido',
    'genero'
   ];
}
