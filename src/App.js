
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './components/FooterCss/Footer.css';
import { Main } from './components/Main';
import { Modal } from './components/Modal/Modal'







function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main />
      <Footer />
      <Modal/>
    </div>
  );
}

export default App;
