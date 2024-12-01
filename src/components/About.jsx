import "./About.css"; // Import external CSS file

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Our Book Management System</h1>
      <p className="about-text">
        Our Book Management System is designed to simplify the way you organize,
        track, and manage your book collection. Whether you are an avid reader, 
        a librarian, or a bookstore owner, our system provides all the tools you need
        to manage your books efficiently.
      </p>

      <h2 className="about-header">Key Features</h2>
      <ul>
        <li>
          <strong>Search and Filter:</strong> Quickly find books by title, author, or genre.
        </li>
        <li>
          <strong>Catalog Management:</strong> Add, update, and remove books from your catalog with ease.
        </li>
        <li>
          <strong>Borrowing Records:</strong> Track books borrowed by users and set return dates.
        </li>
        <li>
          <strong>Statistics:</strong> View detailed reports on your book inventory and activity.
        </li>
      </ul>

      <h2 className="about-header">Our Mission</h2>
      <p className="about-text">
        At the heart of our system is a commitment to promoting reading and education. 
        We aim to make book management stress-free and efficient, so you can focus on 
        enjoying and sharing the joy of reading.
      </p>

      <h2 className="about-header">Contact Us</h2>
      <p className="about-text">If you have any questions or need assistance, feel free to get in touch:</p>
      <ul>
        <li>Email: support@bookmanagement.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 456 Bookworm Lane, Book City, BK 78901</li>
      </ul>
    </div>
  );
}

export default About;
