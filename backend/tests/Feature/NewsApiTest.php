<?php

namespace Tests\Feature;

use App\Models\News;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NewsApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_news(): void
    {
        News::factory()->count(3)->create();

        $response = $this->getJson('/api/news');

        $response->assertStatus(200)
                 ->assertJsonCount(3, 'data');
    }

    public function test_can_show_news(): void
    {
        $news = News::factory()->create();

        $response = $this->getJson("/api/news/{$news->id}");

        $response->assertStatus(200)
                 ->assertJsonPath('data.id', $news->id);
    }

    public function test_can_create_news(): void
    {
        $payload = [
            'title' => 'Nova notícia',
            'excerpt' => 'Resumo',
            'content' => 'Conteúdo da notícia',
            'published_at' => now()->toDateTimeString(),
        ];

        $response = $this->postJson('/api/news', $payload);

        $response->assertCreated();

        $this->assertDatabaseHas('news', [
            'title' => 'Nova notícia',
        ]);
    }

    public function test_validates_required_fields(): void
    {
        $response = $this->postJson('/api/news', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors([
                     'title',
                     'content',
                 ]);
    }

    public function test_can_update_news(): void
    {
        $news = News::factory()->create();

        $payload = [
            'title' => 'Título atualizado',
            'content' => 'Conteúdo atualizado',
        ];

        $response = $this->putJson(
            "/api/news/{$news->id}",
            $payload
        );

        $response->assertOk();

        $this->assertDatabaseHas('news', [
            'id' => $news->id,
            'title' => 'Título atualizado',
        ]);
    }

    public function test_can_delete_news(): void
    {
        $news = News::factory()->create();

        $response = $this->deleteJson(
            "/api/news/{$news->id}"
        );

        $response->assertStatus(200);

        $this->assertDatabaseMissing('news', [
            'id' => $news->id,
        ]);
    }
}