

@module("../../../lib/utils")
external cn: array<string> => string = "cn"

type accordionItem = {
  trigger: React.element,
  content: React.element,
  value: string
}

module Root = {
     @react.component
  @module("@radix-ui/react-accordion")
  external make: ( ~className: string=?, ~children: React.element, ~type_: string, unit) => React.element = "Root"
}
module Item = {
  @react.component
  @module("@radix-ui/react-accordion")
  external make: ( ~className: string=?, ~children: React.element, ~value: string, unit) => React.element = "Item"
}

module Header = {
    @react.component
    @module("@radix-ui/react-accordion")
    external make: ( ~className: string=?, ~children: React.element, unit) => React.element = "Header"
}

module Trigger = {
  @react.component
  @module("@radix-ui/react-accordion")
  external make: ( ~className: string=?, ~children: React.element, unit) => React.element = "Trigger"
}

module Content = {
  @react.component
  @module("@radix-ui/react-accordion")
  external make: (~className: string=?, ~children: React.element, unit) => React.element = "Content"
}

module ChevronDownIcon = {
  @react.component
  @module("@radix-ui/react-icons")
  external make: (~className: string=?,unit) => React.element = "ChevronDownIcon"
}

module Make = {
  @react.component
  let make = (~items: array<accordionItem>, ~type_: option<string>=?) => {
    let accordionType = switch type_ {
    | Some(value) => value
    | None => "single"
    }

    let items = Array.map(items, item => {
        <Item.make value=item.value className={cn(["border-b"])}>
            <Header.make className={cn(["flex"])}>
                <Trigger.make className={cn(["flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"])}>
                    {item.trigger}
                    <ChevronDownIcon.make className={cn(["h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"])}></ChevronDownIcon.make>
                </Trigger.make>
            </Header.make>
            <Content.make className={cn(["overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"])}>
                {item.content}
            </Content.make>
        </Item.make>
    })

    <Root.make type_=accordionType className="w-full">
      {React.array(items)}
    </Root.make>
  }
}