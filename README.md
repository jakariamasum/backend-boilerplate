# Express TypeScript Mongoose Backend Boilerplate

This repository serves as a boilerplate for developing a robust backend with TypeScript, Express, and Mongoose. Speed up your backend development by using this boilerplate.

## Features

- Pre-configured Express server with TypeScript support
- MongoDB integration using Mongoose
- Environment configuration
- Basic project structure
- Example routes and controllers
- Error handling middleware
- TypeScript type definitions

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- A MongoDB database URI

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jakariamasum/backend-boilerplate.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd backend-boilerplate
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure environment variables:**

   - Create a `.env` file in the root of the project.
   - Add your MongoDB URI to the `DATABASE_URL` variable in the `.env` file:

     ```env
     DATABASE_URL=your_mongodb_uri
     ```

### Running the Project

To start the project in development mode, run:

```bash
npm run start:dev
```

Open your browser and navigate to `http://localhost:5000` to check if the app is running properly.

## Project Structure

The project structure is organized to help you get started quickly and easily:

```
backend-boilerplate/
├── src/
│   ├── app/
        ├──erros/
        ├──interface/
        ├──middlewares/
        ├──modules/
        ├──routes/
        ├──utils/
│   ├── config/
        ├──index.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

- **Controllers**: Define your business logic in controllers.
- **Models**: Define your MongoDB schemas in the models directory.
- **Routes**: Define your application routes in the routes directory.
- **Middlewares**: Define custom middlewares in the middlewares directory.
- **Config**: Manage configuration settings in the config directory.
- **Utils**: Add utility functions in the utils directory.

### Comments and TODOs

- Inside each file, you'll find comments explaining the purpose of the code and providing supporting reading materials.
- Comments marked with "TODO" indicate what you need to change if you want to adapt the code for your project. Read them carefully.

## Contribution

Feel free to fork this repository and contribute by submitting a pull request. For significant changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
