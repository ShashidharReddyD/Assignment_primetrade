# Backend Developer Internship Assignment

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt password hashing

## Features

### Authentication
- User registration
- User login
- JWT based authentication

### Role Based Access
- User role
- Admin role
- Admin can delete tasks

### Task APIs
- Create task
- Get tasks
- Update task
- Delete task

### API Versioning
All APIs are under:

/api/v1/

### API Documentation

Swagger documentation available at:

http://localhost:5000/api-docs

### Frontend

Simple UI provided to test APIs:
frontend/index.html

### Database

MongoDB local database.

### Future Scalability


To scale this system in production:

1. Microservices architecture
   - Separate authentication and task services.

2. Redis caching
   - Cache frequently accessed tasks.

3. Load balancing
   - Deploy multiple backend instances behind Nginx.

4. Containerization
   - Use Docker for consistent deployment.

5. Logging & monitoring
   - Integrate Winston and monitoring tools.