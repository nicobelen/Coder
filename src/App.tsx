import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer title="Tu Compra Facil" />
    </div>
  );
}

export default App;
