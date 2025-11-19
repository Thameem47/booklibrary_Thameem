import BookCard from './components/BookCard.jsx'
import './App.css'

const books = [
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    year: 1988,
    description:
      'A young shepherd named Santiago travels from Spain to the Egyptian desert in search of a worldly treasure, learning about destiny and purpose along the way.',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Non-Fiction',
    year: 2018,
    description:
      'A practical guide that shows how tiny changes in behavior, when done consistently, can lead to remarkable personal and professional results.',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    year: 1960,
    description:
      'Set in the American South, this classic explores themes of racial injustice and moral growth through the eyes of young Scout Finch.',
  },
  {
    id: 4,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    genre: 'Non-Fiction',
    year: 1999,
    description:
      'A collection of tips and philosophies for becoming a better, more thoughtful software developer in a rapidly changing industry.',
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    year: 1949,
    description:
      'A dystopian novel that portrays a totalitarian regime where Big Brother watches every move, raising questions about freedom and truth.',
  },
]

// Manually determined from the books array above
const MOST_COMMON_GENRE = 'Fiction'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <main className="main-content">
        <section className="books-section">
          <h2 className="section-title">Library Showcase</h2>
          <div className="books-grid">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                genre={book.genre}
                year={book.year}
                description={book.description}
              />
            ))}
          </div>
        </section>

        <section className="summary-section">
          <h2 className="section-title">Books Summary</h2>
          <p>
            <strong>Total number of books:</strong> {books.length}
          </p>
          <p>
            <strong>Most common genre:</strong> {MOST_COMMON_GENRE}
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>Created by <span className="highlight">KS MUHAMMAD ABDULLAH</span></p>
        <p>
          Contact:{' '}
          <a href="mailto:ksmuhammad.abdullah.s95@kalvium.community">
            ksmuhammad.abdullah.s95@kalvium.community
          </a>
        </p>
        <p>© {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  )
}

export default App
