import PropTypes from "prop-types"; // Import PropTypes
import Book from "./Book"; // Assuming you have a Book component
import "./style.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function BookList(props) {
  console.log("props", props);

  return (
    <div className="book-list">
      {props.booksData.map((data) => (
        // Use Link to navigate to each book page
        <Link key={data.id} to={`/book/${data.id}`} className="book-link">
          <Book bookDetails={data} />
        </Link>
      ))}
    </div>
  );
}

// Add PropTypes validation
BookList.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookList;
