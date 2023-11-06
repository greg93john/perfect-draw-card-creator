import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="page-container container-fluid px-0">
      <NavBar />
      <MainView />
      <Footer />
    </div>
  );
}

export default App;
