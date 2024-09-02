import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import MainMenu from "./Components/MainMenu/MainMenu";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import useLocalStorage from "use-local-storage";

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div data-theme={theme} className="full-height">
      <BrowserRouter>
        <div className="header"  onClick={switchTheme}>
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
    </div>
    
  );
}

export default App;
