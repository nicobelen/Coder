import { Box } from "@chakra-ui/react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <Box className="app">
      <NavBar />
      <ItemListContainer title="Best Bike" />
      <ItemCount
        initial={1}
        stock={30}
        onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
      />
    </Box>
  );
}

export default App;
