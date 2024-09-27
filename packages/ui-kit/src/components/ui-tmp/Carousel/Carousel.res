// @module("@/lib/utils") external cn: array<string> => string = "cn"
// @module("@radix-ui/react-icons") external arrowLeftIcon: React.component<'props> = "ArrowLeftIcon"
// @module("@radix-ui/react-icons") external arrowRightIcon: React.component<'props> = "ArrowRightIcon"
// // @module("embla-carousel-react") external useEmblaCarousel: ('a) => ('b, 'c) = "default"

// type carouselApi
// type useCarouselParameters
// type carouselOptions
// type carouselPlugin

// type carouselProps = {
//   opts?: carouselOptions,
//   plugins?: carouselPlugin,
//   orientation?: [#horizontal | #vertical],
//   setApi?: carouselApi => unit,
// }

// type carouselContextProps = {
//   carouselRef: React.ref<Js.Nullable.t<Dom.element>>,
//   api: option<carouselApi>,
//   scrollPrev: unit => unit,
//   scrollNext: unit => unit,
//   canScrollPrev: bool,
//   canScrollNext: bool,
// } and carouseContextProps

// let carouselContext = React.createContext(Js.Nullable.null)

// module Provider = {
//   let make = React.Context.provider(carouselContext)
// }

// let useCarousel = () => {
//   let context = React.useContext(carouselContext)
//   switch Js.Nullable.toOption(context) {
//   | Some(value) => value
//   | None => Js.Exn.raiseError("useCarousel doit être utilisé dans un <Carousel />")
//   }
// }

// module Carousel = {
//   @react.component
//   let make = React.forwardRef((
//     ~orientation="horizontal",
//     ~opts=?,
//     ~setApi=?,
//     ~plugins=?,
//     ~className="",
//     ~children,
//     ref,
//   ) => {
//     let axis = orientation === "horizontal" ? "x" : "y";
//     let (carouselRef, api) = useEmblaCarousel(
//         opts
//     )

//     let (canScrollPrev, setCanScrollPrev) = React.useState(() => false)
//     let (canScrollNext, setCanScrollNext) = React.useState(() => false)

//     let onSelect = React.useCallback1((api: Js.Nullable.t<carouselApi>) => {
//       setCanScrollPrev(_ => api.canScrollPrev)
//       setCanScrollNext(_ => api.canScrollNext)
//     }, [])

//     let scrollPrev = React.useCallback0(() => {
//       api->Js.Nullable.toOption->Belt.Option.forEach(api => api->scrollPrev)
//     })

//     let scrollNext = React.useCallback0(() => {
//       api->Js.Nullable.toOption->Belt.Option.forEach(api => api->scrollNext)
//     })

//     let handleKeyDown = React.useCallback2((event: ReactEvent.Keyboard.t) => {
//       switch ReactEvent.Keyboard.key(event) {
//       | "ArrowLeft" =>
//         ReactEvent.Keyboard.preventDefault(event)
//         scrollPrev()
//       | "ArrowRight" =>
//         ReactEvent.Keyboard.preventDefault(event)
//         scrollNext()
//       | _ => ()
//       }
//     }, (scrollPrev, scrollNext))

//     React.useEffect2(() => {
//       switch (api->Js.Nullable.toOption, setApi) {
//       | (Some(api), Some(setApi)) => setApi(api)
//       | _ => ()
//       }
//       None
//     }, (api, setApi))

//     React.useEffect2(() => {
//       switch api->Js.Nullable.toOption {
//       | Some(api) =>
//         onSelect(api)
//         api->on("reInit", onSelect)
//         api->on("select", onSelect)
//         Some(() => api->off("select", onSelect))
//       | None => None
//       }
//     }, (api, onSelect))

//     <Provider
//       value={
//         carouselRef: carouselRef,
//         api: api->Js.Nullable.toOption,
//         opts: opts,
//         orientation: orientation,
//         scrollPrev: scrollPrev,
//         scrollNext: scrollNext,
//         canScrollPrev: canScrollPrev,
//         canScrollNext: canScrollNext,
//       }>
//       <div
//         ref={ReactDOM.Ref.domRef(ref)}
//         onKeyDownCapture={handleKeyDown}
//         className={cn(["relative", className])}
//         role="region"
//         ariaRoledescription="carousel">
//         {children}
//       </div>
//     </Provider>
//   })
// }

// module CarouselContent = {
//   @react.component
//   let make = React.forwardRef(() => {
//         let {carouselRef, orientation} = useCarousel()

//     <div ref=carouselRef className="overflow-hidden">
//       <div
//         ?ref
//         className={cn([
//           "flex",
//           switch orientation {
//           | #horizontal => "-ml-4"
//           | #vertical => "-mt-4 flex-col"
//           },
//           className,
//         ])}>
//         {children}
//       </div>
//     </div>
//   })
// }

// module CarouselItem = {
//   @react.component

//   let make = React.forwardRef((
//     ~className="", ~children, ref
//   ) => {
//     let {orientation} = useCarousel()

//     <div
//       ?ref
//       role="group"
//       ariaRoledescription="slide"
//       className={cn([
//         "min-w-0 shrink-0 grow-0 basis-full",
//         switch orientation {
//         | #horizontal => "pl-4"
//         | #vertical => "pt-4"
//         },
//         className,
//       ])}>
//       {children}
//     </div>
//   })
// }

// module CarouselPrevious = {
//   @react.component
//   let make = React.forwardRef((
//     ~className="",
//     ~variant=#outline,
//     ~size=#icon,
//     ~children=React.null,
//     ref,
//   ) => {
//     let {orientation, scrollPrev, canScrollPrev} = useCarousel()

//     <Button.Make
//       ?ref
//       variant
//       size
//       className={cn([
//         "absolute h-8 w-8 rounded-full",
//         switch orientation {
//         | #horizontal => "-left-12 top-1/2 -translate-y-1/2"
//         | #vertical => "-top-12 left-1/2 -translate-x-1/2 rotate-90"
//         },
//         className,
//       ])}
//       disabled={!canScrollPrev}
//       onClick={_ => scrollPrev()}>
//       <ArrowLeftIcon className="h-4 w-4" />
//       <span className="sr-only"> {React.string("Diapositive précédente")} </span>
//       {children}
//     </Button.Make>
//   })
// }

// module CarouselNext = {
//   @react.component
//   let make =React.forwardRef( (
//     ~className="",
//     ~variant=#outline,
//     ~size=#icon,
//     ~children=React.null,
//     ref,
//   ) => {
//     let {orientation, scrollNext, canScrollNext} = useCarousel()

//     <Button.Make
//       ?ref
//       variant
//       size
//       className={cn([
//         "absolute h-8 w-8 rounded-full",
//         switch orientation {
//         | #horizontal => "-right-12 top-1/2 -translate-y-1/2"
//         | #vertical => "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
//         },
//         className,
//       ])}
//       disabled={!canScrollNext}
//       onClick={_ => scrollNext()}>
//       <ArrowRightIcon className="h-4 w-4" />
//       <span className="sr-only"> {React.string("Diapositive suivante")} </span>
//       {children}
//     </Button.Make>
//   })
// }

// module Make = {
//   @react.component
//   let make = (
//     ~opts=?,
//     ~plugins=?,
//     ~orientation=#horizontal,
//     ~setApi=?,
//     ~className="",
//     ~children,
//   ) => {
//     <Carousel ?opts ?plugins orientation ?setApi className>
//       {children}
//     </Carousel>
//   }
// }
