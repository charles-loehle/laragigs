<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ListingController extends Controller
{
  public function index(Request $request) {
    $query = Listing::query()
      ->when($request->input('search'), function ($query, $search) {
        $query->where('title', 'like', '%' . $search . '%');
      })
      ->when($request->input('tag'), function ($query, $tag) {
        $query->where('tags', 'like', '%' . $tag . '%');
      })
      ->latest()
      ->paginate(6)
      ->withQueryString();

    return Inertia::render('Welcome', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'listings' => $query
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
    //dd(auth()->id());
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

    // add user ownership to new listing 
    $attributes['user_id'] = auth()->id();

    //dd($attributes);

    Listing::create($attributes);

    return redirect('/')->with('message', 'New listing created successfully!');
  }

  public function edit(Listing $listing) {
    return Inertia::render('Listings/Edit', [
      'listing' => $listing
    ]);
  }

  public function update(Request $request, Listing $listing) {
    //dd($request);
    $attributes = $request->validate([
      'title' => 'required',
      'company' => 'required',
      'location' => 'required',
      'website' => 'required',
      'email' => ['required', 'email'],
      'tags' => 'required',
      'description' => 'required',
    ]);

    //dd($attributes);

    if($request->hasFile('logo')) {
      $attributes['logo'] = $request->file('logo')->store('logos', 'public');
    }

    $listing->update($attributes);

    return redirect('/')->with('message', 'Listing updated successfully!');
  }

  public function destroy(Listing $listing) {
    $listing->delete();
    return redirect('/')->with('message', 'Listing deleted successfully!');
    // dd('destroy');
  }
}
