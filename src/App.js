import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='arrange-one'>
        <Sidebar />
        <div className='arrange-two'>
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
