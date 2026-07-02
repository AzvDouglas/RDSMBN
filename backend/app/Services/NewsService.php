<?php

namespace App\Services;

use App\Models\News;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

class NewsService
{
    public function getPaginatedNews(?string $search = null): LengthAwarePaginator
    {
        return News::query()
            ->when($search, function ($query) use ($search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('content', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(6);
    }

    public function findById(int $id): News
    {
        return News::findOrFail($id);
    }

    public function create(array $data): News
    {
        $data['slug'] =
            Str::slug($data['title'])
            . '-'
            . now()->timestamp;

        $data['published_at'] =
            $data['published_at'] ?? now();

        return News::create($data);
    }

    public function update(News $news, array $data): News
    {
        if (isset($data['title'])) {
            $data['slug'] =
                Str::slug($data['title'])
                . '-'
                . now()->timestamp;
            }
        $news->update($data);

        return $news->fresh();
    }

    public function delete(News $news): void
    {
        $news->delete();
    }
}