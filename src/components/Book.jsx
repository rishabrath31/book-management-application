import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "./style.css"

function Book(props) {
  const { coverImage, title, author, description } = props.bookDetails; // Destructure props for cleaner code

  return (
    <div className="book-card">
      <img
        src={coverImage}
        alt={title} // Use the title for alt text for better accessibility
        width="200px"
        height="200px"
        className="book-cover"
      />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
}

// Add PropTypes validation
Book.propTypes = {
  bookDetails: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
