import './BookCard.css'

function BookCard({ title, author, genre, year, description }) {
  return (
    <article className="book-card">
      <header className="book-card-header">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
      </header>
      <div className="book-meta">
        <span className="book-genre">{genre}</span>
        <span className="book-year">{year}</span>
      </div>
      <p className="book-description">{description}</p>
    </article>
  )
}

export default BookCard
