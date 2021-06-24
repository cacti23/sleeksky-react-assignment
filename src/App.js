import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
