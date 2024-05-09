import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Output from "./pages/Output";
import About from "./pages/About";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/input"
            element={<Input />}
          />
          <Route path="/output" element={<Output />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}