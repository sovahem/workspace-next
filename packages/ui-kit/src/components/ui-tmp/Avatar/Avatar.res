@module("../../../lib/utils")
external cn: array<string> => string = "cn"

module Avatar = {
    @react.component
    @module("@radix-ui/react-avatar")
    external make: (~className: string=?,~children: React.element) => React.element = "Root"
}

module AvatarImage = {
    @react.component
    @module("@radix-ui/react-avatar")
    external make: (~className: string=?,~src: string, ~alt: string) => React.element = "Image"
}

module AvatarFallback = {
    @react.component
    @module("@radix-ui/react-avatar")
    external make: (~className: string=?,~children: React.element) => React.element = "Fallback"
}

module Make = {
    @react.component
    let make = (~src: string, ~alt: string, ~fallback: string) => {
        <Avatar.make className={cn(["relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"])}>
            <AvatarImage.make className={cn(["aspect-square h-full w-full"])} src=src alt=alt />
            <AvatarFallback.make className={cn(["flex h-full w-full items-center justify-center rounded-full bg-muted"])}>{React.string(fallback)}</AvatarFallback.make>
        </Avatar.make>
    }
}