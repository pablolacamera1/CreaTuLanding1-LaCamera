
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import ItemListContainer from "../src/components/ItemListContainer.tsx";
import ItemDetailContainer from "./components/ItemDetailContainer.tsx"; 
import "./App.css"
import "./index.css"


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenidos a nuestra Tienda!" />} 
        />


        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer greeting="Explorando Categorías" />} 
        />


        <Route path="/item/:itemId" element={<ItemDetailContainer />} />


        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

