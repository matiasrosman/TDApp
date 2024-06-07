# Descripción
Backend de la aplicación de calendario. Se encarga de la autenticación de usuarios y la gestión de eventos.

# Instalación

1. clona el repositorio
2. ejecuta `npm install`
3. renombra el archivo `.env.example` a `.env`
```
PORT = PUERTO
DB_CNN = URL DE MONGO
SECRETORPRIVATEKEY = LLAVE SECRETA JWT
```
4. Ejecutar:
    - Modo desarrollo: `npm run dev`
    - Modo producción: `npm start`

# Uso de la API

### Auth http://localhost:PUERTO/api/auth
- `POST /login` : Iniciar sesión
    - body:
        - `email`: string
        - `password`: string
- `POST /register` : Registrar usuario
    - body:
        - `name`: string
        - `email`: string
        - `password`: string

#
### Events http://localhost:PUERTO/api/events
Requires authentication
- headers:
    - `x-token`: string
- `GET /` : Obtener eventos
- `POST /` : Crear evento
    - body:
        - `title`: string
        - `notes`: string
        - `start`: date
        - `end`: date
- `PUT /:id` : Actualizar evento
    - body:
        - `title`: string
        - `notes`: string
        - `start`: date
        - `end`: date
- `DELETE /:id` : Eliminar evento



