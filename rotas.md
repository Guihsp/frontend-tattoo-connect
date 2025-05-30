API Tattoo App - Documentação Atualizada das Rotas
Autenticação
Registrar Usuário
POST /auth/register
Request Body:

json
{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123",
    "phone": "+55 11 91234-5678",
    "type": "TATTOO_ARTIST" // ou "CLIENT"
}
Responses:

201: Usuário registrado com sucesso (retorna JWT)

400: Dados inválidos

409: E-mail já em uso

Login
POST /auth/login
Request Body:

json
{
    "email": "joao@email.com",
    "password": "senha123"
}
Responses:

200: Login realizado com sucesso (retorna JWT)

401: Credenciais inválidas

Usuários
Obter Perfil
GET /users/me
Responses:

200:

json
{
    "id": "uuid",
    "name": "João",
    "email": "joao@email.com",
    "phone": "+55 11 99999-8888",
    "type": "CLIENT",
    "createdAt": "2025-05-10T17:30:00.000Z"
}
Atualizar Perfil
PUT /users/me
Request Body:

json
{
    "name": "João Atualizado",
    "phone": "+55 11 91234-5678"
}
Excluir Conta
DELETE /users/me

Estúdios
Criar Estúdio
POST /studios
Request Body:

json
{
    "name": "Estúdio Tattoo Black",
    "address": "Rua das Tatuagens, 123 - Bairro Centro, São Paulo/SP",
    "latitude": -23.55052,
    "longitude": -46.633308,
    "phone": "+55 11 99876-5432"
}
Responses:

201:

json
{
    "id": "uuid",
    "name": "Estúdio Tattoo Black",
    "address": "Rua X, 123",
    "latitude": -23.55,
    "longitude": -46.63,
    "phone": "+55 11 90000-0000"
}
Atualizar Estúdio
PUT /studios/{id}
Request Body:

json
{
    "name": "Novo Estúdio Tattoo Pro",
    "address": "Avenida Principal, 456 - Centro, RJ",
    "latitude": -22.906847,
    "longitude": -43.172896,
    "phone": "+55 21 99876-0000"
}
Buscar Estúdio por Tatuador
GET /studios/tattoo-artists/{id}/studio
Responses:

200:

json
{
    "id": "uuid",
    "name": "Estúdio Tattoo Black",
    "address": "Rua X, 123",
    "latitude": -23.55,
    "longitude": -46.63,
    "phone": "+55 11 90000-0000"
}
Tatuadores
Atualizar Perfil
PUT /tattoo-artists/profile
Request Body:

json
{
    "bio": "Especializado em realismo e blackwork"
}
Listar Tatuadores
GET /tattoo-artists
Query Params:

style: Estilo de tatuagem (ex: fineline)

latitude, longitude: Para ordenação por distância

orderBy: rating/price/distance

page, limit: Paginação

Responses:

200:

json
{
    "id": "uuid",
    "name": "João Tattoo",
    "styles": ["fineline", "blackwork"],
    "averageRating": 4.8,
    "studio": {
        "name": "Ink Studio",
        "latitude": -23.55,
        "longitude": -46.63
    }
}
Ver Perfil Detalhado
GET /tattoo-artists/{id}
Responses:

200:

json
{
    "id": "uuid",
    "name": "João Tattoo",
    "bio": "Realismo e pontilhismo",
    "styles": ["realismo", "blackwork"],
    "studio": {
        "name": "Ink Studio",
        "address": "Rua X, 123",
        "phone": "+55 11 90000-0000"
    },
    "portfolio": [{
        "imageUrl": "https://...",
        "description": "Tatuagem no braço"
    }],
    "reviews": [{
        "rating": 5,
        "comment": "Excelente trabalho!"
    }]
}
Contato WhatsApp
GET /tattoo-artists/{id}/contact
Responses:

200:

json
{
    "whatsappUrl": "https://wa.me/551199999999?text=Olá! Vim pelo Tattoo Connect."
}
Portfólio
Enviar Imagem
POST /portfolio (multipart/form-data)
Body:

file: Imagem

description (opcional)

Listar Portfólio
GET /portfolio/tattoo-artists/{id}/portfolio
Responses:

200:

json
{
    "id": "uuid",
    "imageUrl": "https://s3.../imagem.jpg",
    "description": "Tatuagem no braço"
}
Avaliações
Enviar Avaliação
POST /reviews
Request Body:

json
{
    "tattooArtistId": "c5d7d1dc-ff32-4f78-930a-2e4a801c8c4a",
    "rating": 5,
    "comment": "Trabalho excelente, voltarei com certeza!"
}
Listar Avaliações
GET /reviews/tattoo-artists/{id}/reviews
Responses:

200:

json
{
    "rating": 5,
    "comment": "Excelente!",
    "createdAt": "2025-05-10T19:50:00Z"
}
Tattoo Matching
Buscar Tatuadores Compatíveis
GET /tattoos/match
Query Params:

parameterIds: IDs dos parâmetros

latitude, longitude, maxDistanceKm

priceOrder, ratingOrder, distanceOrder: asc/desc

Parâmetros
Listar Parâmetros
GET /parameters
Responses:

200:

json
{
    "id": "47646674-2ee2-4e77-85e7-bad68f5f1835",
    "category": "LARGURA_CM",
    "name": "Até 5 cm"
}
Gerenciar Parâmetros de Tatuador
POST /tattoo-artist-parameters/{userId}

GET /tattoo-artist-parameters/{userId}

PATCH /tattoo-artist-parameters/{id}

DELETE /tattoo-artist-parameters/{id}

Request Body (POST/PATCH):

json
{
    "parameterId": "string",
    "price": 0
}