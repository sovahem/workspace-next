@module("@/lib/utils")
external cn: array<string> => string = "cn"

module ChevronRightIcon = {
  @module("@radix-ui/react-icons") @react.component
  external make: (~className: string=?) => React.element = "ChevronRightIcon"
}

module DotsHorizontalIcon = {
  @module("@radix-ui/react-icons") @react.component
  external make: (~className: string=?) => React.element = "DotsHorizontalIcon"
}

module Slot = {
    @react.component
    @module("@radix-ui/react-slot")
    external make: (~className: string=?) => React.element = "default"
}

module Breadcrumb = {
    @react.component
    let make = (~children: React.element) => {
        <nav >{children}</nav>
    }
}

module BreadcrumbList = {
    @react.component
    let make = ( ~children: React.element) => {
        <ol className={cn(["flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"])}>
            {children}
        </ol>
    }
}

module BreadcrumbItem  = {
    @react.component
    let make = (~children: React.element) => {
        <li className={cn(["inline-flex items-center gap-1.5"])}>{children}</li>
    }
}

module BreadcrumbLink = {
    @react.component
   let make = () => {
    // let Comp = switch asChild {
    // | Some(true) => Slot.make
    // | _ => React.createElement("a")
    // }
    <Slot.make className={cn(["transition-colors hover:text-foreground"])} />
  }
}

module BreadcrumbPage = {
    @react.component
    let make = (~children: React.element) => {
        <span
        role="link"
        // aria-disabled="true"
        // aria-current="page"
        className={cn(["font-normal text-foreground"])}
        >
            {children}
        </span>
    }
}

module BreadcrumbSeparator = {
    @react.component 
    let make =  (~children: option<React.element>=?) => {
        <li
            role="presentation"
            // aria-hidden="true"
            className={cn(["[&>svg]:size-3.5"])}
        >
            {switch children  {
                | Some(chi) => chi
                | None => <ChevronRightIcon.make />

            }}
        </li>
    }
}

module BreadcrumbEllipsis = {
    @react.component
    let make = () => {
        <span
            role="presentation"
            // aria-hidden="true"
            className={cn(["flex h-9 w-9 items-center justify-center"])}
        >
            <DotsHorizontalIcon.make className="h-4 w-4" />
            <span className="sr-only">{React.string("More")}</span>
         </span>
    }
}

// moduel Make = {
//     @react.component 
//     let make = () => {
//         <Breadcrumb>
//             <BreadcrumbList>
//                 <BreadcrumbItem>
//                     <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger className="flex items-center gap-1">
//                         <BreadcrumbEllipsis className="h-4 w-4" />
//                         <span className="sr-only">Toggle menu</span>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="start">
//                         <DropdownMenuItem>Documentation</DropdownMenuItem>
//                         <DropdownMenuItem>Themes</DropdownMenuItem>
//                         <DropdownMenuItem>GitHub</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                 <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                 <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
//                 </BreadcrumbItem>
//             </BreadcrumbList>
//         </Breadcrumb>
//     }
// }