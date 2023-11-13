Database Todolist dengan MongoDB menggunakan ODM mongoose.

Beberapa instalasi yang perlu dilakukan :
1. inisialisasi : npm init -y
2. express : npm i express
3. nodemon : npm i nodemon
4. token JWT : npm i jsonwebtoken
5. ENV : npm i dotenv
6. cros: npm i cros

## LIST OF ENDPOINTS
### USERS
  1. POST : /api/users
  2. POST : /api/login
  3. GET : /api/users
  4. GET : /api/user/:id
  
### TODOS
  1. POST : /api/todos
  2. GET : /api/todos
  3. GET : /api/:id/todos
  4. PUT : /api/todos/:id/update
  5. DELETE : /api/todos/:id/delete
  6. DELETE : /api/todos
 
## RESTFUL ENDPOINT USERS
### GET /api/users -> All user
  _Request body_ 
  > none
 
  _Respone_
 ```json
{
  "message": "berhasil mendapatkan data user",
  "data": [
    {
      "_id": "65518d28fe6fd0b2ebe46eb6",
      "name": "Vera Manda",
      "username": "vera",
      "email": "vera@gmail.com",
      "password": "123",
      "__v": 0
    },
    {
      "_id": "6551a52696fefc9f4b4db032",
      "name": "Nandira Putri",
      "username": "nandira",
      "email": "nandira@gmail.com",
      "password": "dira",
      "__v": 0
    },
    {
      "_id": "6551bced0bd805a367e8f965",
      "name": "Argi Kalandra",
      "username": "argi",
      "email": "argi@gmail.com",
      "password": "321",
      "__v": 0
    },
    {
      "_id": "6551cd462fe2244065b12ba7",
      "name": "Gio Mahendra",
      "username": "gio",
      "email": "gio@gmail.com",
      "password": "gio",
      "__v": 0
    },
    {
      "_id": "6552076bc20767495b7991b2",
      "name": "Kiana Adisti",
      "username": "kiana",
      "email": "kiana@gmail.com",
      "password": "kiaa",
      "__v": 0
    }
  ]
}
```
### GET /api/users/:id -> User ID
  _Request => auth_ 
  > Masukkan Bearer Token

  _Respone_
  ```json
 {
  "_id": "65518d28fe6fd0b2ebe46eb6",
  "name": "Vera Manda",
  "username": "vera",
  "email": "vera@gmail.com",
  "password": "123",
  "__v": 0
}
  ```

### POST /api/users
  _Request body_
  ```json
  {
  "name": "Haikal Akani",
  "username": "haikal",
  "email": "haikal@gmail.com",
  "password": "ikal"
}
  ```
_Respone_
  ```json
  {
  "message": "Berhasil Membuat Data User"
}
  ```

### POST /api/auth/login
  _Request body_
  ```json
  {
  "email": "vera@gmail.com",
  "password": "123"
}
  ```
_Respone_
  ```json
  {
  "message": "Berhasil login",
  "userId": "65518d28fe6fd0b2ebe46eb6",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4ZDI4ZmU2ZmQwYjJlYmU0NmViNiIsImVtYWlsIjoidmVyYUBnbWFpbC5jb20iLCJpYXQiOjE2OTk4ODA3NDN9.TNQGngPSA2GAhFnHSxT3LH1Naml10uM8oqAy-Wo3ep8"
}
  ```


## RESTFUL ENDPOINT TODOS
### GET /api/todos -> All todo
_Request body_
> none

_Respone_
```json
  {
  "message": "berhasil mendapatkan data todo",
  "data": [
    {
      "_id": "6551dd7c8252d7e94485e92b",
      "value": "Beli kebutuhan rumah",
      "status": false,
      "description": "beli bahan makanan, cemilan, alat mandi, skincare",
      "userID": {
        "_id": "6551a52696fefc9f4b4db032",
        "name": "Nandira Putri"
      },
      "__v": 0
    },
    {
      "_id": "6551ddf38252d7e94485e92f",
      "value": "Belajar database",
      "status": false,
      "description": "mempelajari mongoDB dengan monggose",
      "userID": {
        "_id": "65518d28fe6fd0b2ebe46eb6",
        "name": "Vera Manda"
      },
      "__v": 0
    },
    {
      "_id": "6551de198252d7e94485e931",
      "value": "Belajar frontend",
      "status": false,
      "description": "Belajar Vue.js mulai dari memahami dasar-dasar nya",
      "userID": {
        "_id": "6551cd462fe2244065b12ba7",
        "name": "Gio Mahendra"
      },
      "__v": 0
    },
    {
      "_id": "6551de5e8252d7e94485e933",
      "value": "Belajar frontend",
      "status": false,
      "description": "membuat project menggunakan react",
      "userID": {
        "_id": "6551bced0bd805a367e8f965",
        "name": "Argi Kalandra"
      },
      "__v": 0
    }
  ]
}
  ```
### GET /api/todos/:id/todos -> Todo User ID
_Request body_
> none

_Respone_
 ```json
[
  {
    "_id": "6551ddf38252d7e94485e92f",
    "value": "Belajar Database",
    "status": false,
    "description": "mempelajari mongoDB dengan ODM monggose",
    "userID": "65518d28fe6fd0b2ebe46eb6",
    "__v": 0
  },
  {
    "_id": "6552276ca87723d8a4eeec52",
    "value": "Tugas Basis Data",
    "status": false,
    "description": "Membuat ERD dari retail online dan query mysql",
    "userID": "65518d28fe6fd0b2ebe46eb6",
    "__v": 0
  }
]
  ```

### POST /api/todos/ 
_Request body_
```json
{
  "value": "Tugas Basis Data",
  "status": false,
  "description": "Membuat ERD dari retail online dan wuery mysql",
  "userID": "65518d28fe6fd0b2ebe46eb6"
}
```
_Respone_
 ```json
{
  "message": "Berhasil membuat data todo"
}
  ```
### PUT /api/todos/:id/update 
_Request body_
```json
{
  "value": "Belajar Database",
  "status": false,
  "description": "mempelajari mongoDB dengan ODM monggose",
  "userID": "65518d28fe6fd0b2ebe46eb6"
}
```

_Respone_
 ```json
{
  "message": "Berhasil mengubah data todo",
  "data": {
    "_id": "6551ddf38252d7e94485e92f",
    "value": "Belajar Database",
    "status": false,
    "description": "mempelajari mongoDB dengan ODM monggose",
    "userID": "65518d28fe6fd0b2ebe46eb6",
    "__v": 0
  }
}
  ```
_Respone (500 Internal Server Error)_
 ```json
{
  "error": "Gagal mengubah data todo"
}
  ```

### DELETE /api/todos/:id/delete -> Delete By ID 
_Request => auth_ 
> Masukkan Bearer Token

_Respone_
 ```json
{
  "message": "Berhasil menghapus data todo"
}
  ```
_Respone (500 Internal Server Error)_
 ```json
{
  "error": "Gagal menghapus data todo"
}
  ```

### DELETE /api/todos
_Request body_
> none

_Respone_
 ```json
{
  "message": "Berhasil menghapus semua data todo"
}
  ```

_Respone (500 Internal Server Error)_
 ```json
{
  "error": "Gagal menghapus semua data todo"
}
  ```

