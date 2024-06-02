import React, { Component } from "react";
import Tec from "../modules/tec";

export class Header extends Component {
  render() {
    return (
      <div className="bg-color1 text-white pt-20 flex justify-center">
        <div className="max-w-5xl flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-center">
            Hola👋🏻, mi nombre es Mateo Rodríguez
          </h1>
          <p className="text-center text-lg md:text-base mt-4 max-w-2xl font-thin">
            Hola, soy Mateo y tengo 22 años. Actualmente estoy estudiando diseño
            de software fullstack. Las tecnologías que manejo incluyen HTML,
            CSS, JavaScript, React, Node.js, Nest.js y MySQL. Aunque no tengo
            experiencia laboral, estoy entusiasmado por seguir aprendiendo y
            desarrollándome en este campo apasionante❤️
          </p>

          <div className="p-10 flex flex-row">
            <Tec ruta={"html"} />
            <Tec ruta={"css"} />
            <Tec ruta={"javascript"} />
            <Tec ruta={"node"} />
            <Tec ruta={"nest"} />
            <Tec ruta={"mysql"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
