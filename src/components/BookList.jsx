import PropTypes from "prop-types"; // Import PropTypes
import Book from "./Book";
import "./style.css"

function BookList(props) {
  console.log("props", props);

  return (
    <div className="book-list">
      {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data} />
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
