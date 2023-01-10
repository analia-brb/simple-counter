//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;
let numero6 = 0;

setInterval(function() {
            numero1++;
            if (numero1 > 9) {
                numero1 = 0
                numero2++
                if (numero2 > 9) {
                    numero2 = 0
                    numero3++
                    if (numero3 > 9) {
                        numero3 = 0
                        numero4++
                        if (numero4 > 9) {
                            numero4 = 0
                            numero5++
                            if (numero5 > 9) {
                                numero5 = 0
                                numero6++
                                if (numero6 > 9) {
                                    numero6 = 0
                                }
                            }
                        }
                    }
                }


            }

            ReactDOM.render( <
                Home prop1 = {
                    numero1
                }
                prop2 = {
                    numero2
                }
                prop3 = {
                    numero3
                }
                prop4 = {
                    numero4
                }
                prop5 = {
                    numero5
                }
                prop6 = {
                    numero6
                }
                / > , document.querySelector("#app"));
            }, 1000)