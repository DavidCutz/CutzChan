@extends('layout.master')
@section('contenido')
<h1>HOLA MUNDO</h1>
@endsection

@push('scrips')
<script type="text/javascript" src="{{asset('js/apis/mascotas.js')}}"></script>
@endpush