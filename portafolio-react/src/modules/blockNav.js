import Button from "./button";
import React, { Component } from "react";

export default class BlockNav extends Component {
  render() {
    return (
      <div className="bg-color2 flex justify-center pt-16 pb-10">
        <div className="flex justify-between w-2/3">
          <h2 className="text-1xl md:text-4xl font-bold text-white mb-1">
            Blog
          </h2>
          <div class="flex items-center justify-center select-none font-mono">
            <Button text="Todos" />
            <Button text="HTML" />
            <Button text="CSS" />
            <Button text="JavaScript" />
            <Button text="React" />
            <Button text="Node.js" />
            <Button text="Nest" />
            <Button text="mySQL" />
          </div>
        </div>
      </div>
    );
  }
}
