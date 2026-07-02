<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'cover_image',
        'published_at',
    ];

    protected $casts = [    
        'published_at' => 'datetime',
    ];

    protected static function booted(): void
{
    static::creating(function (News $news) {
        if (!$news->published_at) {
            $news->published_at = now();
        }
    });
}
}