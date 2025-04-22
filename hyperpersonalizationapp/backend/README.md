# Hyperpersonalization Backend

This is the backend server for the Hyperpersonalization application, built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hyperpersonalization
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. Start MongoDB:
```bash
# If using local MongoDB, make sure the service is running
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (requires authentication)

## Project Structure

```
backend/
├── models/         # Database models
├── routes/         # API routes
├── .env           # Environment variables
├── server.js      # Main server file
└── package.json   # Project dependencies
```

## Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS enabled
- Environment variables for sensitive data

## Development

The server uses nodemon for development, which automatically restarts the server when files change. 