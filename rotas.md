Auth
POST /auth/register
Request:

json
{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123",
    "phone": "+55 11 91234-5678",
    "type": "TATTOO_ARTIST"  // ou "CLIENT"
}
Response (200):
Token JWT retornado no header Authorization.

POST /auth/login
Request:

json
{
    "email": "joao@email.com",
    "password": "senha123"
}
Response (200):
Token JWT retornado no header Authorization.

Usuários
GET /users/me
Response (200):

json
{
    "id": "uuid",
    "name": "João",
    "email": "joao@email.com",
    "phone": "+55 11 99999-8888",
    "type": "CLIENT",
    "createdAt": "2025-05-10T17:30:00.000Z"
}
PUT /users/me
Request:

json
{
    "name": "João Atualizado",
    "phone": "+55 11 91234-5678"
}
Response (200):
Mesmo formato do GET /users/me.

DELETE /users/me
Response (200):
Sem corpo.

Estúdios
POST /studios
Request:

json
{
    "name": "Estúdio Tattoo Black",
    "address": "Rua das Tatuagens, 123 - Bairro Centro, São Paulo/SP",
    "latitude": -23.55952,
    "longitude": -46.633308,
    "phone": "+55 11 99876-5432"
}
Response (201):

json
{
    "id": "uuid",
    "name": "Estúdio Tattoo Black",
    "address": "Rua X, 123",
    "latitude": -23.55,
    "longitude": -46.63,
    "phone": "+55 11 90000-0000"
}
PUT /studios/{id}
Request:

json
{
    "name": "Novo Estúdio Tattoo Pro",
    "address": "Avenida Principal, 456 - Centro, RJ",
    "latitude": -22.906847,
    "longitude": -43.172896,
    "phone": "+55 21 99876-0000"
}
Response (200):

json
{
    "id": "uuid",
    "name": "Novo Estúdio Tattoo Pro",
    "address": "Avenida Principal, 456",
    "phone": "+55 11 98888-8888"
}
GET /studios/tattoo-artists/{id}/studio
Response (200):

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
PUT /tattoo-artists/profile
Request:

json
{
    "bio": "Especializado em realismo e blackwork",
    "freeUntil": "2025-05-17",
    "isActive": true
}
Response (200):

json
{
    "userId": "uuid",
    "bio": "Trabalho com pontilhismo e blackwork",
    "freeUntil": "2025-05-30",
    "isActive": true
}
GET /tattoo-artists (com filtros opcionais: style, latitude, longitude, orderBy, page, limit)
Response (200):

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
GET /tattoo-artists/{id}
Response (200):

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
    "portfolio": [
        {
            "imageUrl": "https://...",
            "description": "Tatuagem no braço"
        }
    ],
    "reviews": [
        {
            "rating": 5,
            "comment": "Excelente trabalho!"
        }
    ]
}
Preços de Tatuagem
POST /tattoo-artists/pricings
Request:

json
{
    "style": "fineline",
    "minSizeCm": 5,
    "maxSizeCm": 20,
    "priceBase": 100,
    "pricePerCm2": 10.5
}
Response (201):

json
{
    "id": "uuid",
    "style": "fineline",
    "minSizeCm": 5,
    "maxSizeCm": 20,
    "priceBase": 100,
    "pricePerCm2": 10.5
}
PUT /tattoo-artists/pricings/{id}
Request:

json
{
    "style": "realismo",
    "minSizeCm": 10,
    "maxSizeCm": 25,
    "priceBase": 150,
    "pricePerCm2": 12
}
Response (200):

json
{
    "id": "uuid",
    "style": "blackwork",
    "priceBase": 150
}
Portfólio
POST /portfolio
Request (multipart/form-data):

file: Arquivo de imagem

description (opcional): Descrição da imagem

Response (201):
Sem corpo (apenas status de sucesso).

GET /portfolio/tattoo-artists/{id}/portfolio
Response (200):

json
{
    "id": "uuid",
    "imageUrl": "https://s3.../imagem.jpg",
    "description": "Tatuagem no braço"
}
Schemas (DTOs)
Os modelos completos estão nas páginas 14-16 do PDF (ex: RegisterDto, LoginDto, CreateStudioDto, etc.).

Observações:

Autenticação: Todas as rotas (exceto /auth/* e /tattoo-artists/{id}) requerem token JWT no header Authorization.

Erros comuns:

401 (Token inválido/ausente)

404 (Recurso não encontrado).