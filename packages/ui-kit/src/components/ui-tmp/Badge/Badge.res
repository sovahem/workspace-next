@module("../../../lib/utils")
external cn: array<string> => string = "cn"

@module("class-variance-authority")
external cva: (string, 'a) => 'b = "cva"

module BadgeVariants = {
    let variants = cva(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    "variants": {
      "variant": {
        "default":
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        "secondary":
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "destructive":
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        "outline": "text-foreground",
      },
    },
    "defaultVariants": {
      "variant": "default",
    },
  }
    )
}

module Make = {
    @react.component
    let make =(~variant="default", ~children: React.element) => {
        <div className={cn([BadgeVariants.variants({variant})])}>
            {children}
        </div>
    }
}
