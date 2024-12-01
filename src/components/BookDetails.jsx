import { useParams } from "react-router-dom"; 
import { Books } from "../utils/mockData"; 

function BookDetails() {
  const { id } = useParams(); // Get the ID from the URL params

  // Find the book with the matching id using .find() to directly get the book object
  const book = Books.find(book => book.id == id); // .find() will return a single book object

  if (!book) {
    return <p>Book not found!</p>; // If no book matches the id, show an error message
  }

  return (
    <>
      <h1>Book Details for Book with ID {id}</h1>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <img src={book.coverImage} alt={book.title} />
    </>
  );
}

export default BookDetails;
