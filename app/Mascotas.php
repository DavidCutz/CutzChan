<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascotas extends Model
{
    //nombre de tabla
    protected $table='mascotas';

    //clave primaria de la tabla 
    protected $primaryKey='id_mascota';

//definir si la llave primaria es o no un numero incrementable 
    public $incrementing=true ;

    //activar o desactivar etiquetas de tiempo
    public $timetamps=true;

    public $fillable=[
    'id_mascota',
    'nombre',
    'genero',
    'edad',
    'peso',
    'id_propietario',
    'id_especie',
    'id_razas'

   ];

   public function especie()
   {
    return $this->belongsTo(Especies::class, 'id_especie', 'id_especie');
   }


}
