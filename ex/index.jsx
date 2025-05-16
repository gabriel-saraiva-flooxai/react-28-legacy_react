import React from "react";
import ReactDOM from "react-dom";

import Segundo, { Primeiro } from "./component";

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))