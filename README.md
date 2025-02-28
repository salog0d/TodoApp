# TaskFlow - React & Rails Todo App

A modern, efficient task management application built with React for the frontend and Ruby on Rails for the backend. TaskFlow helps users organize their daily activities with a clean, intuitive interface.

## Features

- **User Authentication**: Secure signup, login, and account management
- **Task Management**: Create, edit, delete, and mark tasks as complete
- **Categories & Tags**: Organize tasks by categories and custom tags
- **Priority Levels**: Set importance of tasks with visual indicators
- **Due Dates**: Schedule tasks with date and time reminders
- **Real-time Updates**: Instant UI updates without page refresh
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Choose your preferred viewing experience

## Tech Stack

### Frontend
- React.js
- Redux for state management
- React Router for navigation
- Styled Components for UI
- Axios for API requests

### Backend
- Ruby on Rails API
- PostgreSQL database
- JWT for authentication
- Active Storage for file uploads

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Ruby (v3.0 or higher)
- Rails (v6.0 or higher)
- PostgreSQL

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/taskflow.git
cd taskflow/client

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to the Rails app directory
cd ../server

# Install dependencies
bundle install

# Create and set up the database
rails db:create
rails db:migrate
rails db:seed

# Start the Rails server
rails server
```

## API Endpoints

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | /api/auth/signup     | Register a new user         |
| POST   | /api/auth/login      | Authenticate a user         |
| GET    | /api/tasks           | Get all tasks for user      |
| POST   | /api/tasks           | Create a new task           |
| GET    | /api/tasks/:id       | Get a specific task         |
| PUT    | /api/tasks/:id       | Update a task               |
| DELETE | /api/tasks/:id       | Delete a task               |
| GET    | /api/categories      | Get all categories          |
| POST   | /api/categories      | Create a new category       |

## Deployment

The application can be deployed using:
- Frontend: Netlify, Vercel, or GitHub Pages
- Backend: Heroku, Railway, or AWS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
