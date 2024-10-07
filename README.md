# GoogleBooks-App

## Description

GoogleBooks App is a full-stack MERN application that allows users to search for books using the Google Books API. Users can create an account, save books to their profile, and manage their saved books list. The app uses GraphQL with Apollo Server for efficient data fetching and manipulation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/google-books-search.git
   ```
2. Navigate to the project directory:
   ```
   cd google-books-search
   ```
3. Install dependencies for both server and client:
   ```
   npm install
   cd client && npm install
   ```
4. Create a `.env` file in the server directory and add your environment variables (see [Environment Variables](#environment-variables) section).

5. Start the development server:
   ```
   npm run develop
   ```

## Usage

- Visit `http://localhost:3000` in your browser.
- Sign up for an account or log in.
- Search for books using the search bar.
- Click "Save" on a book to add it to your saved books list.
- View your saved books by clicking on "See Your Books" in the navigation bar.
- Remove books from your saved list by clicking "Delete" on a saved book.

## Technologies

- MongoDB
- Express.js
- React
- Node.js
- GraphQL
- Apollo Server/Client
- JWT for authentication
- Mongoose ODM
- React Bootstrap for styling

## Features

- User authentication (signup/login)
- Book search using Google Books API
- Save books to user profile
- View and manage saved books
- Responsive design for mobile and desktop





