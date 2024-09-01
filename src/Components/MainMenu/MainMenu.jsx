import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MainMenu.css";

import productData from "../../assets/productData.json";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const MainMenu = () => {
  const [optionsEquipoProceso, setOptionsEquipoProceso] = useState([]);
  const [optionsEquipoCorte, setOptionsEquipoCorte] = useState([]);
  const [optionsEquipoEmpacado, setOptionsEquipoEmpacado] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let data = [];
    productData.products.map((product) => {
      if (product.category.toLowerCase() === "proceso") {
        data.push({
          optionName: product.name,
          optionRef: product.id,
        });
      }
    });
    setOptionsEquipoProceso(data);

    data = [];
    productData.products.map((product) => {
      if (product.category.toLowerCase() === "corte") {
        data.push({
          optionName: product.name,
          optionRef: product.id,
        });
      }
    });
    setOptionsEquipoCorte(data);

    data = [];
    productData.products.map((product) => {
      if (product.category.toLowerCase() === "empacado") {
        data.push({
          optionName: product.name,
          optionRef: product.id,
        });
      }
    });
    setOptionsEquipoEmpacado(data);
  }, []);

  return (
    <div className="container text-center main-menu-container">
      <div className="row justify-content-center max-width main-menu-row">
        <div className="col-sm-12 col-md-1 menu-col">
          <button
            className="btn dropdown-header"
            type="button"
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
        </div>
        <div className="col-sm-12 col-md-3 menu-col">
          <DropDownMenu
            menuHeaderName="proceso"
            menuOptions={optionsEquipoProceso}
          />
        </div>
        <div className="col-sm-12 col-md-3 menu-col">
          <DropDownMenu
            menuHeaderName="corte"
            menuOptions={optionsEquipoCorte}
          />
        </div>
        <div className="col-sm-12 col-md-3 menu-col">
          <DropDownMenu
            menuHeaderName="empacado"
            menuOptions={optionsEquipoEmpacado}
          />
        </div>
        <div className="col-sm-12 col-md-2 menu-col">
          <button
            className="btn dropdown-header"
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
