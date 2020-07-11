import React from "react";
import { render } from "ink";
import { Jbee } from "./jbee";

const cli = {
  run() {
    render(React.createElement(Jbee));
  },
};

export = cli;
