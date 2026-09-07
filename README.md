# Employee Management SaaS

A full-stack Employee Management SaaS application built with **React.js, Node.js, Express.js, and PostgreSQL**. The application provides secure employee management, role-based access control, dashboard analytics, server-side search/filtering/sorting/pagination, and a responsive modern UI.

## Overview

Employee Management SaaS is designed to demonstrate how a production-style enterprise application can be structured using modern frontend and backend technologies.

The project focuses on:

- Scalable React architecture
- Reusable UI components
- REST API integration
- JWT-based authentication
- Role-based authorization
- Server-side data operations
- API state management with RTK Query
- Form validation
- Performance optimization
- Automated frontend testing
- Production deployment

---

## Features

### Authentication & Authorization

- User registration
- User login
- JWT-based authentication
- Protected routes
- Role-based authorization
- Password hashing using bcrypt
- Token-based authenticated API requests
- Active/inactive user handling

### Employee Management

- Create employee
- View employee list
- View employee details
- Update employee
- Deactivate employee
- Employee status management
- Employee code and email validation

### Employee List

The employee listing supports server-side:

- Search
- Pagination
- Department filtering
- Status filtering
- Sorting
- Debounced search
- Empty states
- Loading states
- Error states
- Deactivation confirmation

### Dashboard

The dashboard provides:

- Total employees
- Active employees
- Inactive employees
- Department statistics
- Recent employees
- Department-based data visualization
- Loading and error states
- Retry functionality

### API State Management

The application uses **Redux Toolkit and RTK Query** for API and server-state management.

RTK Query handles:

- API data fetching
- Loading states
- Error states
- Caching
- Refetching
- Mutations
- Cache invalidation
- Request lifecycle management

This keeps API-related state separate from regular client-side application state.

### Forms & Validation

- React Hook Form
- Zod schema validation
- Reusable form components
- Client-side validation
- Server-side validation/error handling

### Responsive UI

The application is designed to work across:

- Desktop
- Tablet
- Mobile

Tailwind CSS is used for responsive layouts and styling.

---

# Tech Stack

## Frontend

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| React.js              | UI development                |
| Vite                  | Development and build tooling |
| JavaScript            | Application logic             |
| Tailwind CSS          | Styling and responsive UI     |
| Redux Toolkit         | Client-side state management  |
| RTK Query             | API/server-state management   |
| React Router          | Routing                       |
| React Hook Form       | Form management               |
| Zod                   | Schema validation             |
| Recharts              | Data visualization            |
| Lucide React          | Icons                         |
| React Hot Toast       | Notifications                 |
| Jest                  | Testing                       |
| React Testing Library | Component testing             |

## Backend

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| Node.js       | Runtime environment           |
| Express.js    | REST API framework            |
| PostgreSQL    | Relational database           |
| JWT           | Authentication                |
| bcrypt        | Password hashing              |
| Zod           | Validation                    |
| Multer        | File upload handling          |
| CORS          | Cross-origin request handling |
| Cookie Parser | Cookie parsing                |

## Deployment

- **Vercel** — Frontend
- **Render** — Backend
- **Neon** — PostgreSQL database

---

# Architecture

The application follows a layered full-stack architecture.

```text
                    EMPLOYEE MANAGEMENT SAAS
                              │
              ┌───────────────┴───────────────┐
              │                               │
          FRONTEND                         BACKEND
          Vercel                           Render
              │                               │
              ▼                               ▼
        React + Vite                     Express.js
              │                               │
       ┌──────┼──────┐                ┌───────┼────────┐
       │      │      │                │       │        │
    Router  State   RTK Query       Routes Controllers Services
       │      │      │                │       │        │
       │      │      └──────┐         │       │        │
       │      │             │         │       │        │
       └──────┴─────────────┼─────────┴───────┴────────┘
                            │
                            ▼
                       PostgreSQL
                          Neon
```

---

# Frontend Architecture

The frontend follows a feature-oriented structure.

```text
src/
│
├── app/
│
├── components/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── employee/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── services/
│
├── store/
│
├── utils/
│
├── validations/
│
└── styles/
```

### Feature-based organization

Features are grouped according to business functionality rather than putting every component into a single large folder.

For example:

```text
features/
├── auth/
├── dashboard/
└── employee/
```

This makes the application easier to maintain and scale as additional modules are introduced.

---

# Backend Architecture

The backend follows a layered architecture separating routing, controllers, business logic, validation, and database operations.

```text
src/
│
├── config/
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── services/
│
├── utils/
│
├── validations/
│
├── app.js
└── server.js
```

### Request flow

```text
Client
  ↓
Route
  ↓
Authentication Middleware
  ↓
Authorization Middleware
  ↓
Controller
  ↓
Service
  ↓
PostgreSQL
```

This separation keeps HTTP handling, business logic, and database operations independent.

---

# Authentication Flow

The application uses JWT-based authentication.

## Registration

```text
Register Form
     ↓
React Hook Form
     ↓
Zod Validation
     ↓
Register API
     ↓
Express Route
     ↓
Controller
     ↓
Service
     ↓
bcrypt Password Hashing
     ↓
PostgreSQL
```

## Login

```text
Login Form
    ↓
Validation
    ↓
Login API
    ↓
Controller
    ↓
Service
    ↓
bcrypt Password Verification
    ↓
JWT Generation
    ↓
Frontend
```

## Authenticated Request

```text
React Application
       ↓
    API Request
       ↓
Authentication Token
       ↓
Authorization
       ↓
Express Middleware
       ↓
Role Authorization
       ↓
Controller
       ↓
Service
       ↓
Database
```

Protected routes verify the user's authentication token before allowing access to protected resources.

---

# Role-Based Access Control

The application implements role-based authorization.

Different roles can have different levels of access to employee management functionality.

The authorization layer ensures that authentication and authorization remain separate responsibilities:

```text
Authentication
     ↓
"Who is the user?"

Authorization
     ↓
"What is the user allowed to do?"
```

---

# Employee API Architecture

Employee operations follow a consistent backend request flow:

```text
Frontend
   ↓
RTK Query
   ↓
REST API
   ↓
Express Route
   ↓
Auth Middleware
   ↓
Role Authorization
   ↓
Controller
   ↓
Service
   ↓
PostgreSQL
```

The service layer handles database operations and business logic, while controllers are responsible for handling HTTP requests and responses.

---

# Server-Side Search, Filtering & Pagination

The employee list uses server-side data processing.

Instead of loading the complete employee dataset into the browser, the frontend sends query parameters to the backend.

Example:

```text
GET /employees?page=1&limit=10&search=john&department=Engineering&status=active
```

The backend processes:

- Search
- Department filtering
- Status filtering
- Sorting
- Pagination

### Pagination

The backend calculates the database offset:

```text
offset = (page - 1) × limit
```

The API also returns pagination metadata:

```json
{
  "page": 1,
  "limit": 10,
  "total": 25,
  "totalPages": 3
}
```

### Search

Employee search is performed on the server across relevant employee fields.

The frontend uses a debounce before sending search requests to avoid unnecessary API calls while the user is typing.

### Sorting

Sorting is restricted to predefined server-side columns rather than directly interpolating user-provided column names into SQL.

This provides safer and more predictable database queries.

---

# Dashboard Architecture

The dashboard retrieves aggregated data from dedicated APIs.

```text
Dashboard
    ↓
RTK Query
    ↓
Dashboard APIs
    ↓
Express
    ↓
Services
    ↓
PostgreSQL
```

Dashboard APIs provide:

- Employee statistics
- Recent employees
- Department statistics

The department statistics are visualized using Recharts.

---

# State Management

Redux Toolkit is used for client-side state management.

RTK Query is used for server-state management.

```text
Redux Toolkit
      │
      ├── Client State
      │
      └── RTK Query
             │
             ├── API Data
             ├── Cache
             ├── Loading
             ├── Errors
             ├── Refetching
             └── Mutations
```

This separation helps keep UI/application state distinct from remote server data.

---

# Performance Optimization

The application uses **route-based code splitting** with `React.lazy()` and `Suspense`.

Instead of loading every page when the application initially starts, page modules are loaded when the user navigates to them.

```text
Initial Application
       ↓
Load Core Bundle
       ↓
User opens Dashboard
       ↓
Load Dashboard Chunk

User opens Employees
       ↓
Load Employee Chunk
```

This reduces the amount of JavaScript required during the initial page load.

During a local production build, the initial JavaScript bundle was reduced from approximately **1 MB to under 200 KB** after introducing route-based code splitting.

---

# Error Handling

The backend uses centralized error handling.

```text
Request
   ↓
Route
   ↓
Controller / Service
   ↓
Error
   ↓
Global Error Middleware
   ↓
Standardized API Response
```

The API returns structured error responses containing information such as:

```json
{
  "success": false,
  "message": "Error message",
  "field": null
}
```

The frontend handles loading, success, error, and empty states to provide appropriate user feedback.

---

# Testing

Frontend testing is implemented using:

- Jest
- React Testing Library
- Jest DOM
- User Event

Tests focus on important UI and user-interaction behavior.

Backend automated tests are not currently implemented.

---

# Project Structure

```text
employee-management-saas/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   └── employee/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── validations/
│   │   └── styles/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   ├── validations/
    │   ├── app.js
    │   └── server.js
    │
    └── package.json
```

---

# Environment Variables

## Frontend

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=your_backend_api_url
```

Example:

```env
VITE_API_URL=<your-render-api-url>/api/v1
```

## Backend

Create a `.env` file inside the `backend` directory:

```env
PORT=5000

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=your_frontend_url
```

Never commit `.env` files or secret credentials to the repository.

---

# Local Development

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- PostgreSQL

## Clone the repository

```bash
git clone <your-repository-url>
cd employee-management-saas
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start using the Vite development server.

## Backend Setup

Open another terminal:

```bash
cd backend
npm install
npm run server
```

The backend will start using Nodemon during development.

---

# Available Scripts

## Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run test
```

Runs Jest tests.

```bash
npm run lint
```

Runs ESLint.

## Backend

```bash
npm run server
```

Starts the backend using Nodemon for development.

```bash
npm start
```

Starts the backend using Node.js.

---

# Production Deployment

The application is deployed using a separate frontend, backend, and database architecture.

```text
                     INTERNET
                         │
                         ▼
                Vercel Frontend
                         │
                     HTTPS API
                         │
                         ▼
                Render Backend
                         │
                         ▼
                 Neon PostgreSQL
```

### Frontend

The React/Vite application is deployed on Vercel.

Production environment variables include the backend API endpoint.

### Backend

The Node.js/Express application is deployed on Render.

The backend connects to the production PostgreSQL database using `DATABASE_URL`.

### Database

PostgreSQL is hosted using Neon.

---

# Security

Security-related implementation includes:

- JWT authentication
- Password hashing with bcrypt
- Protected API routes
- Role-based authorization
- Environment variables for secrets
- CORS configuration
- Server-side validation
- Parameterized SQL queries
- Restricted sort-column mapping
- Centralized error handling

---

# Key Engineering Decisions

### Feature-Based Frontend Architecture

Business functionality is organized into features such as authentication, dashboard, and employees.

### Layered Backend Architecture

Routes, controllers, services, middleware, validation, and database configuration have separate responsibilities.

### Server-Side Data Operations

Search, filtering, sorting, and pagination are handled by the backend to avoid unnecessarily loading large datasets into the browser.

### RTK Query

RTK Query is used to manage server-state and API communication, including caching, loading/error states, refetching, and mutations.

### Route-Based Code Splitting

React lazy loading reduces the amount of JavaScript loaded during the initial application startup.

---

# Future Improvements

Potential future enhancements include:

- Employee profile image upload
- Advanced employee permissions
- Attendance management
- Leave management
- Export employee data
- Advanced dashboard analytics
- Backend automated testing
- CI/CD pipeline
- Application monitoring and logging
- Further bundle optimization

---

# Learning & Interview Focus

This project demonstrates practical experience with:

- React component architecture
- Reusable components
- React hooks
- Redux Toolkit
- RTK Query
- REST API integration
- JWT authentication
- Role-based authorization
- React Hook Form
- Zod validation
- PostgreSQL
- Express.js
- Server-side pagination
- Server-side search
- Server-side filtering
- Server-side sorting
- API error handling
- Responsive UI development
- Jest and React Testing Library
- Performance optimization
- Production deployment

---

# Author

**Sagar Ingle**

React.js Developer

Built as a full-stack portfolio project to demonstrate production-oriented frontend architecture, API integration, authentication, state management, database interaction, testing, and deployment.
