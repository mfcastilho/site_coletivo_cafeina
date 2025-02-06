import './App.scss';
import { ThemeProvider } from './context/ThemeContext';
// import { ThemeButton } from './components/theme/ThemeButton';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactFooter } from './components/contact/ContactFooter';


function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        {/* <ThemeButton /> */}
        <Home />
        <div id="contact" className="App__section--wrapper">
          <ContactFooter />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
