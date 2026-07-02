# Portal de Notícias - Desafio Técnico

Aplicação full stack para gerenciamento e exibição de notícias.

## Tecnologias Utilizadas

### Backend
- PHP 8+
- Laravel 12
- MySQL
- Eloquent ORM

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Axios
- TinyMCE

---

# Requisitos

Antes de iniciar, certifique-se de possuir instalado:

- PHP 8.2+
- Composer
- Node.js 20+
- NPM
- MySQL

---

# Instalação

## 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

---

## 2. Configurar Backend

Acesse a pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
composer install
```

Copie o arquivo de ambiente:

```bash
cp .env.example .env
```

Configure as credenciais do banco de dados no arquivo `.env`.

Gere a chave da aplicação:

```bash
php artisan key:generate
```

Execute as migrations:

```bash
php artisan migrate
```

(Opcional) Popular o banco:

```bash
php artisan db:seed
```

Inicie o servidor:

```bash
php artisan serve
```

O backend ficará disponível em:

```text
http://127.0.0.1:8000
```

---

## 3. Configurar Frontend

Abra outro terminal e acesse:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo:

```bash
.env
```

Adicione a chave do TinyMCE:

```env
VITE_TINYMCE_API_KEY=sua_api_key
```

Inicie o projeto:

```bash
npm run dev
```

O frontend ficará disponível em:

```text
http://localhost:5173
```

---

# Funcionalidades

## Área Pública

- Listagem de notícias
- Busca por notícias
- Paginação
- Visualização completa da notícia
- Exibição de imagem de capa

## Área Administrativa

Rotas administrativas:

```text
/admin/news
```

Funcionalidades:

- Listagem de notícias
- Criação de notícias
- Edição de notícias
- Exclusão de notícias
- Editor de texto rico com TinyMCE
- Modal de confirmação para exclusão

---

# Estrutura do Projeto

## Backend

```text
backend/
├── app/
├── database/
├── routes/
└── ...
```

## Frontend

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── router/
│   └── assets/
└── ...
```

---

# Observações

- O upload de arquivos imagens não foi implementado.
- As imagens de capa são armazenadas através de URL.
- A autenticação administrativa não foi implementada por não fazer parte dos requisitos obrigatórios do desafio.