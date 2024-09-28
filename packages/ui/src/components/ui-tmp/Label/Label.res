@module("../../../lib/utils")
external cn: array<string> => string = "cn"

module Root = {
  @react.component
  @module("@radix-ui/react-label")
  external make: (~className: string, ~children: React.element, ~htmlFor: string, ~ref: ReactDOM.domRef=?) => React.element = "Root"
}


  @react.component
  let make = React.forwardRef((~className="", ~children=React.null, ~htmlFor="", ref) => {

    <Root.make
      ref=?{Nullable.toOption(ref)->Option.map(ReactDOM.Ref.domRef)}
      className
      htmlFor
    >
      {children}
    </Root.make>
  })
