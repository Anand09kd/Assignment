# Assignment

# Description

Build a custom posts component that displays posts fetched from an API,
including functionality for liking and sharing posts.

# React Posts Component

This is a React application that displays a list of posts fetched from an API. The application includes functionality for liking and sharing posts, with a loader displayed while fetching data. It uses **Tailwind CSS** for styling.

---

## Features
- **Add Post**: Fetches and displays a list of posts.
- **Like Post**: Toggles between liked and unliked states.
- **Share Post**: Opens a dialog box for sharing the post.
- **Loader**: Indicates loading status while fetching posts.
- **Modular Design**: Built with reusable functional components.

---

## Technologies Used
- **React.js**: For building the UI.
- **Tailwind CSS**: For styling.
- **JSONPlaceholder API**: For fetching fake posts data.

---

## Installation
1. Clone the repository:
   ```bash
   git clone 
   https://github.com/Anand09kd/Assignment.git


## Available Scripts

In the project directory, you can run:

Navigate to the project directory:

## `cd custom-posts`

Install dependencies:

## `npm install`

To Start Development server

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

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