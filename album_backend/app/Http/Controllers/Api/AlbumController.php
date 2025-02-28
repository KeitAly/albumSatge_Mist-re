<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function listAlbum()
    {
        return Album::all();
    }

    /**
     * creation d'un nouveau album
     */
    public function creationAlbum(Request $request)
    {
        try{

                $album = Album::create($request->all());

              return response()->json(["code"=>200],200);
            } catch(Exception $e){
                return response()->json(["code"=>500],200);
            }
    }


    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function modificationAlbum(Request $request)
    {
         try{
            $album=Album::findOrFail($request['id']);
            $album->update($request->all());
            return $album;
        }catch(Exception $e){
            return $e;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function suppressionAlbum(Request $request )
    { try{
            $album=Album::findOrFail($request['id']);
            $album->delete();
            return response()->json(["code"=>200],200);
        }
      catch(Exception $e){
        return response()->json(["code"=>400],200);
      }
    }
}
