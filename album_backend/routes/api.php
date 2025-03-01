<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AlbumController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listAlbum', [AlbumController::class,'listAlbum']);
Route::post('creationAlbum',[AlbumController::class,'creationAlbum']);
Route::post('modificationAlbum',[AlbumController::class,'modificationAlbum']);
Route::post('suppressionAlbum',[AlbumController::class,'suppressionAlbum'] );
