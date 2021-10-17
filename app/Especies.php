<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Especies extends Model
{
    protected $table='especies';
    protected $primaryKey='id_especie';

//definir si la llave primaria es o no un numero incrementable 
    public $incrementing=true 

    //activar o desactivar etiquetas de tiempo
    public $timetamps=true;

    public $fillable=[
    'id_especie',
    'especie'  
   ];
}
