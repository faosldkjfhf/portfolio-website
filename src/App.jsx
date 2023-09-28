import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import "./index.css";

function App() {
    // const [count, setCount] = useState(0)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
