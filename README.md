# Assignment

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Navigate to the project directory:

## `cd custom-posts`

Install dependencies:

## `npm install`

To Start Development server

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder Structure

src/
├── components/
│   ├── Loader.js         # Loader component for showing loading animation
│   ├── Post.js           # Single post component
│   ├── Posts.js          # Main component to fetch and display posts
│   ├── ShareDialog.js    # Dialog box for sharing posts
├── App.js                # Root component
├── index.js              # Entry point

## How It Works

Fetching Posts: The Posts component fetches posts from the JSONPlaceholder API.
Reusability: Components are modular and reusable.
Styling: Tailwind CSS classes are used for responsive and modern UI.