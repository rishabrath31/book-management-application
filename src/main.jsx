import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import BookDetails from "./components/BookDetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App serves as the parent route
    children: [
      {
        path: "/", // Route for Home
        element: <Home />,
      },
      {
        path: "about", // Route for About
        element: <About />,
      },
      {
        path: "contact", // Route for Contact
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <BookDetails/>
      }
    ],
    errorElement: <Error />, // Error boundary for invalid routes
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
