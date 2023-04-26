import './App.css';
import { About, Contact } from './components';
//import { Navbar } from './components';
import { Header, Main, Footer, Portfolio } from './containers';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App