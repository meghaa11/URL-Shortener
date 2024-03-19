import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Shortener from './components/Shortener';
import Boost from './components/Boost';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Shortener />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
