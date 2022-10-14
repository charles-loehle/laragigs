<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ListingController extends Controller
{
  public function index(Request $request) {
    return Inertia::render('Welcome', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      // 'logos' => Listing::all()->map(function($logo){
      //   return [
      //     'logo' => asset('storage/' . $logo->logo),
      //   ];
      // }),
      // 'listings' => Listing::all()->map(function ($listing) {
      //   return [
      //     'company' => $listing->company,
      //     'description' => $listing->description,
      //     'email' => $listing->email,
      //     'id' => $listing->id,
      //     'location' => $listing->location,
      //     'logo' => $listing->logo,
      //     'tags' => $listing->tags,
      //     'company' => $listing->company,
      //     'title' => $listing->title,
      //     'website' => $listing->website,
      //   ];
      // })
      'listings' => Listing::query()
      ->when($request->input('search'), function ($query, $search) {
        $query->where('title', 'like', '%' . $search . '%');
      })
      ->when($request->input('tag'), function ($query, $tag) {
        $query->where('tags', 'like', '%' . $tag . '%');
      })
      ->paginate(6)
      ->withQueryString()
    ]);
  }

  // Single listing 
  public function show(Listing $listing) {
    // dd($listing);
    return Inertia::render('Listings/Show', [
      'listing' => $listing
    ]);
  }

  // Create listing form 
  public function create() {
    //dd('create');
    return Inertia::render('Listings/Create');
  }

  // store new listing 
  public function store(Request $request) {
    //dd($request->file('logo'));
    $attributes = $request->validate([
      'title' => 'required',
      'company' => 'required',
      'location' => 'required',
      'website' => 'required',
      'email' => ['required', 'email'],
      'tags' => 'required',
      'description' => 'required'
    ]);

    //dd($attributes);

    if($request->hasFile('logo')) {
      $attributes['logo'] = $request->file('logo')->store('logos', 'public');
    }

    Listing::create($attributes);

    return redirect('/')->with('message', 'New listing created successfully!');
    
  }

  public function edit(Listing $listing) {
    return Inertia::render('Listings/Edit', [
      'listing' => $listing
    ]);
  }

  public function update(Request $request, Listing $listing) {
    $attributes = $request->validate([
      'title' => 'required',
      'company' => 'required',
      'location' => 'required',
      'website' => 'required',
      'email' => ['required', 'email'],
      'tags' => 'required',
      'description' => 'required',
    ]);

    $listing->update($attributes);

    return redirect('/')->with('message', 'Listing updated successfully!');
  }

  public function destroy(Listing $listing) {
    $listing->delete();
    return redirect('/')->with('message', 'Listing deleted successfully!');
    // dd('destroy');
  }
}
