import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import Blog from "./blog";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
