import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
function App() {
 return (
  <div>
   <Header />
   <Home />
   <Footer />
  </div>
 );
}

export default App;
