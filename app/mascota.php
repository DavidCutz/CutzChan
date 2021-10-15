<?php

namespace App;

use Illuminate\Database\Eloquent\factories\hasfactory;
use Illuminate\Database\Eloquent\Model;

class mascota extends Model
{
    //use HasFactory;

    protected$table='mascotas';
    protected$primarykey='id_mascotas';

    public$timestamps=false;
    public$incrementing=true;

    public$filable=[];
}
