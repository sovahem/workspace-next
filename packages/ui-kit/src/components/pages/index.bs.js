// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Accordion from "../ui-tmp/Accordion/Accordion.bs.js";
import * as AlertDialog from "../ui-tmp/AlertDialog/AlertDialog.bs.js";
import * as JsxRuntime from "react/jsx-runtime";

function Index(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(Accordion.Make.make, {
                      items: [{
                          trigger: JsxRuntime.jsx("div", {
                                children: "Élément 1"
                              }),
                          content: JsxRuntime.jsx("div", {
                                children: "Contenu de l'élément 1"
                              }),
                          value: "item-1"
                        }]
                    }),
                JsxRuntime.jsx(AlertDialog.Make.make, {
                      trigger: JsxRuntime.jsx("button", {
                            children: "Ouvrir la boîte de dialogue"
                          }),
                      title: "Titre de la boîte de dialogue",
                      description: "Contenu de la boîte de dialogue",
                      cancel: "Annuler",
                      continue: "Continuer"
                    })
              ]
            });
}

var make = Index;

export {
  make ,
}
/* Accordion Not a pure module */
