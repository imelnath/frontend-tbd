import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Homes";
import Store from "./routes/Store";
import Books from "./routes/Book";
import AddBook from "./AddBook";
import EditBook from "./routes/EditBook";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:store_number" Component={Store} />
          <Route path="/:store_number/:book_number" Component={Books} />
          <Route path="/:store_number/addbooks" Component={AddBook} />
          <Route path="/:booknumber/editbooks" Component={EditBook} />
        </Routes>
      </Router>
    </div>
  );
}
