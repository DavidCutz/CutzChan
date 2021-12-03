<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Razas extends Model
{
    protected $table='razas';
    protected $primaryKey='id_razas';

//definir si la llave primaria es o no un numero incrementable 
    public $incrementing=true;

    //activar o desactivar etiquetas de tiempo
    public $timetamps=true;

    public $fillable=[
    'id_raza',
    'raza'
   ];
}
