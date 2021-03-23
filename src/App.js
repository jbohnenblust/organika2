import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <h1>Welcome to my website!</h1>

     
      <Catalog></Catalog>
      


      <Footer></Footer>
    </div>
  );
}

export default App;
