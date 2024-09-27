@module("../../../lib/utils") external cn: array<string> => string = "cn"

module Card = {
    @react.component
    let make = (~children: React.element) => {
        <div className="rounded-xl border bg-card text-card-foreground shadow">
            {children}
        </div>
    }
}

module CardHeader = {
    @react.component
    let make = (~children: React.element) => {
        <div className="flex flex-col space-y-1.5 p-6">
            {children}
        </div>
    }
}

module CardTitle = {
    @react.component
    let make = (~children: React.element) => {
        <div className="font-semibold leading-none tracking-tight">
            {children}
        </div>
    }
}

module CardDescription = {
    @react.component
    let make = (~children: React.element) => {
        <div className="text-sm text-muted-foreground">
            {children}
        </div>
    }
}


module CardContent = {
    @react.component
    let make = (~children: React.element) => {
        <div className="p-6 pt-0">
            {children}
        </div>
    }
}

module CardFooter = {
    @react.component
    let make = (~children: React.element) => {
        <div className="flex items-center p-6 pt-0">
            {children}
        </div>
    }
}

module Make = {
    @react.component
    let make = (~title: option<string>=?,~description: option<string>=?, ~content: React.element, ~footer: option<React.element>=?) => {
        <Card.make>
  <CardHeader.make>
    {
        switch title {
            | Some(tit) => <CardTitle>{React.string(tit)}</CardTitle>
            | None => React.null
        }
    }
    {
        switch description {
            | Some(desc) => <CardDescription>{React.string(desc)}</CardDescription>
            | None => React.null
        }
    }
  </CardHeader.make>
  <CardContent.make>
    {content}
  </CardContent.make>
  {
    switch footer {
        | Some(foo) =>  <CardFooter.make>
                            {foo}
                        </CardFooter.make>
        | None => React.null
    }
  }
</Card.make>
    }
}