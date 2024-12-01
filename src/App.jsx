import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header /> {/* Shared Header */}
      <Outlet /> {/* Render child components */}
    </div>
  );
}

export default App;
