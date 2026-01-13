import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkAboutUs from './components/about-Devang';
import Header from './components/header-Dhara';
import Footer from './components/footer-Dhara';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <DarkAboutUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;