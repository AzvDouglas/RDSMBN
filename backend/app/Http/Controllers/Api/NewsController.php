<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Http\Resources\NewsResource;
use App\Models\News;
use App\Services\NewsService;

class NewsController extends Controller
{
    public function __construct(
        private NewsService $newsService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $news = $this->newsService->getPaginatedNews(
            $request->get('search')
        );

        return NewsResource::collection($news);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)    
    {
        $news = $this->newsService->create(
            $request->validated()
        );

        return (new NewsResource($news))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = $this->newsService->findById((int) $id);

        return new NewsResource($news);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(
        UpdateNewsRequest $request,
        News $news
    )
    {
        $news = $this->newsService->update(
            $news,
            $request->validated()
        );

        return new NewsResource($news);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $this->newsService->delete($news);

        return response()->json([
            'message' => 'News deleted successfully'
        ]);
    }
}
