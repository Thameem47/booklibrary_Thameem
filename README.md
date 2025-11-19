# Book Library Collection

A React app showcasing a collection of books using reusable components, built with Vite.

## Components

- **BookCard**: Reusable component to display individual book information
- **App**: Main component that stores the books data, renders the list, and shows the summary

## Links

- **GitHub Repository:** https://github.com/Thameem47/booklibrary_Thameem.git
- **Live Website:** https://gilded-praline-90b0b3.netlify.app/

## Project Structure

```text
book-library/
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── components
│       ├── BookCard.jsx
│       └── BookCard.css
└── README.md
```

## How It Works

- The books data is stored as an array of objects inside `App.jsx`.
- The `map()` method is used to render a `BookCard` for each book in the list.
- Each `BookCard` gets a unique `key` prop based on its `id`.
- The Books Summary section shows the total number of books and the most common genre (manually identified as **Fiction**).

## Run Locally

1. Clone the repository
   ```bash
   git clone <your-repo-link>
   cd book-library
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```

## Deployment

- Deploy the project on **Vercel** or **Netlify** using your GitHub repository.
- After deployment, update the **Live Website** link above in this README.

