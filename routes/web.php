<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ListingController;

Route::get('/', [ListingController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// create listing form 
Route::get('/listings/create', [ListingController::class, 'create'])->middleware(['auth', 'verified']);

// store new listing
Route::post('/listings/create', [ListingController::class, 'store'])->middleware(['auth', 'verified']);

// edit listing form
Route::get('/listings/{listing}/edit', [ListingController::class, 'edit'])->middleware(['auth', 'verified']);

// update listing 
Route::put('/listings/{listing}', [ListingController::class, 'update'])->middleware(['auth', 'verified']);

// Single Listing 
Route::get('/listings/{listing}', [ListingController::class, 'show']);

// Delete Listing 
Route::delete('/listings/{listing}', [ListingController::class, 'destroy'])->middleware(['auth', 'verified']);

// GET      /listings                       index all the listings 
// GET      /listings/create                create listing form 
// POST     /listings                       store new listing 
// GET      /listings/{listing id}          show single listing 
// GET      /listings/{listing id}/edit     edit listing form  
// PUT      /listings/{listing id}          update the listing
// DELETE   /listings/{listing id}          destroy the listing

require __DIR__.'/auth.php';
