// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";
import * as Utils from "../../../lib/utils";
import * as ReactIcons from "@radix-ui/react-icons";
import * as ReactAccordion from "@radix-ui/react-accordion";

function cn(prim) {
  return Utils.cn(prim);
}

var Root = {};

var Item = {};

var Header = {};

var Trigger = {};

var Content = {};

var ChevronDownIcon = {};

function Accordion$Make(props) {
  var type_ = props.type_;
  var accordionType = type_ !== undefined ? type_ : "single";
  var items = props.items.map(function (item) {
        return JsxRuntime.jsxs(ReactAccordion.Item, {
                    className: Utils.cn(["border-b"]),
                    children: [
                      JsxRuntime.jsx(ReactAccordion.Header, {
                            className: Utils.cn(["flex"]),
                            children: JsxRuntime.jsxs(ReactAccordion.Trigger, {
                                  className: Utils.cn(["flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"]),
                                  children: [
                                    item.trigger,
                                    JsxRuntime.jsx(ReactIcons.ChevronDownIcon, {
                                          className: Utils.cn(["h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"])
                                        })
                                  ]
                                })
                          }),
                      JsxRuntime.jsx(ReactAccordion.Content, {
                            className: Utils.cn(["overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"]),
                            children: item.content
                          })
                    ],
                    value: item.value
                  });
      });
  return JsxRuntime.jsx(ReactAccordion.Root, {
              className: "w-full",
              children: items,
              type_: accordionType
            });
}

var Make = {
  make: Accordion$Make
};

export {
  cn ,
  Root ,
  Item ,
  Header ,
  Trigger ,
  Content ,
  ChevronDownIcon ,
  Make ,
}
/* react/jsx-runtime Not a pure module */