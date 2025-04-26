<?php

use App\Http\Controllers\PersonaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(PersonaController::class)->group(function () {
    Route::get('personas', 'index');
    Route::post('persona', 'store');
    Route::get('persona/{id}', 'show');
    Route::put('persona/{id}', 'update');
    Route::delete('persona/{id}', 'destroy');
});
