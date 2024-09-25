@module("@/lib/utils")
external cn: array<string> => string = "cn"

@module("class-variance-authority")
external cva: (string, 'a) => 'b = "cva"

module Terminal = {
    @react.component
    @module("lucide-react")
    external make: (~className: string=?) => React.element = "Terminal"
}

module AlertVariants = {
    let variants = cva(
        "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
        {
            "variants": {
                "variant": {
                    "default": "bg-background text-foreground",
                    "destructive": "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
                },
            },
            "defaultVariants": {
                "variant": "default",
            },
        }
    )
}

module AlertTitle = {
    @react.component
    let make = (~className=?, ~children) =>
        <h5 className={cn(["mb-1 font-medium leading-none tracking-tight", Js.Option.getWithDefault("", className)])}>
            {children}
        </h5>
}

module AlertDescription = {
    @react.component
    let make = (~className=?, ~children) =>
        <div className={cn(["text-sm [&_p]:leading-relaxed", Js.Option.getWithDefault("", className)])}>
            {children}
        </div>
}

module Make = {
    @react.component
    let make = (~title: string, ~description: string, ~variant="default",~icon: option<React.element>=?, ~className="") => {
        <div
            role="alert"
            className={cn([AlertVariants.variants({ variant }), className])}
        >
            {
               switch icon {
                    | Some(ic) =>  ic
                    | None => React.null
                }
            }
            <AlertTitle.make>{React.string(title)}</AlertTitle.make>
            <AlertDescription.make>{React.string(description)}</AlertDescription.make>
        </div>
    }
}