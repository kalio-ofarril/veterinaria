import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import MainMenu from "./Components/MainMenu/MainMenu";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <MainMenu />
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/catalog/:category" element={<ProductPage />}/>
          <Route path="/details/:productId" element={<DetailsPage />}/>
          <Route path="/contact" element={<ContactUsPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
