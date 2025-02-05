import './App.scss';
import { ThemeProvider } from './context/ThemeContext';
// import { ThemeButton } from './components/theme/ThemeButton';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        {/* <ThemeButton /> */}
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
