import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import Food from "./pages/food/food";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header";
import Card from "./pages/cart/cart";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    navigate("/");
    const fetchData = async () => {
      // const res = await fetch("http://localhost:3001/menu");
      // const data = await res.json();
      // console.log("res", data);
      // setUsers(data);
    };
    // fetchData();
  }, []);
  // console.log(users.item);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
