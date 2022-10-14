<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'company', 'location', 'website', 'email', 'description', 'tags', 'logo'];

    // public function scopeFilter($query, array $filters) {
    //     //dd($filters['tag']);
    //     if($filters['tag'] ?? false) {
    //       $query->where('tags', 'like', '%' . request('tag') . '%');
    //     }
    //   }
}
