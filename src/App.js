
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './components/FooterCss/Footer.css';
import { Main } from './components/Main';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main />
      <Footer />
    </div>
  );
}

export default App;
