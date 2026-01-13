import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-Dhara.jsx";
import Footer from "./components/footer-Dhara.jsx";
// Pages
// import Home from "./home.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* other routes later */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
