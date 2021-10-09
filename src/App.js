
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './components/FooterCss/Footer.css';
import { Main } from './components/Main';
import { Modal } from './components/Modal/Modal'
import { Register } from './components/register/Register';
import { Reservas } from './components/reservas/Reservas';
import { AgregarReserva } from './components/agregarReservas/AgregarReserva';








function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main />
      <Footer />
      <Modal/>
      <Register />
      <Reservas />
      <AgregarReserva />
      
    </div>
  );
}

export default App;
