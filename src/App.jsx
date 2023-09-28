// import { Outlet } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx'

function App() {
  return (
    <>
      <div>
        <Header />
        <main className='mx-3'>
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
