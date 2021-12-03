<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mascotas;

class MascotasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $mascotas=Mascotas::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
     $mascotas=new Mascotas();

     $mascota->nombre=$request->get('nombre');
     $mascota->edad=$request->get('edad');
     $mascota->genero=$request->get('genero');
     $mascota->id_especie=$request->get('id_especie');
   
     $mascota->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $mascotas=Mascotas::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request, $id)
    {
        $mascota=Mascotas::find($id);

        $mascota->nombre=$request->get('nombre');
        $mascota->nombre=$request->get('edad');
        $mascota->nombre=$request->get('genero');
        $mascota->id_especie=$request->get('id_especie');

        $mascota->update();

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mascotas=Mascotas::find($id);

        $mascota->delete();
    }
}