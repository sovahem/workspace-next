@module("../../../lib/utils")
external cn: array<string> => string = "cn"

module AlertDialog = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~children: React.element, unit) => React.element = "Root"
}

module AlertDialogTrigger = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~asChild: bool=?, ~children: React.element, unit) => React.element = "Trigger"
}

module AlertDialogPortal = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~children: React.element, unit) => React.element = "Portal"
}

module AlertDialogOverlay = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?) => React.element = "Overlay"
}

module AlertDialogContent = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?, ~children: React.element, unit) => React.element = "Content"
}

module AlertDialogTitle = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?, ~children: React.element, unit) => React.element = "Title"
}

module AlertDialogDescription = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?, ~children: React.element, unit) => React.element = "Description"
}

module AlertDialogAction = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?, ~children: React.element, unit) => React.element = "Action"
}

module AlertDialogCancel = {
    @react.component
    @module("@radix-ui/react-alert-dialog")
    external make: (~className: string=?, ~children: React.element, unit) => React.element = "Cancel"
}


// TODO ajouter les classname de cancel et action
module Make = {
    @react.component
    let make  = (~trigger: React.element, ~title: string, ~description: string, ~cancel: string, ~continue: string) => {

        <AlertDialog.make>
            <AlertDialogTrigger.make asChild=true>
                {trigger}
            </AlertDialogTrigger.make>

            <AlertDialogPortal.make>
                <AlertDialogOverlay.make className={cn(["fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"])}/>
                <AlertDialogContent.make
                className={cn(["fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"])}
                >
                        <div className={cn(["flex flex-col space-y-2 text-center sm:text-left"])}>
                            <AlertDialogTitle.make className={cn(["text-lg font-semibold"])}>{React.string(title)}</AlertDialogTitle.make>
                            <AlertDialogDescription.make className={cn(["text-sm text-muted-foreground"])}>{React.string(description)}</AlertDialogDescription.make>
                        </div>
                        <div className={cn(["flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"])}>
                            <AlertDialogCancel.make className={cn([""])}>{React.string(cancel)}</AlertDialogCancel.make>
                            <AlertDialogAction.make className={cn([""])}>{React.string(continue)}</AlertDialogAction.make>
                        </div>
                </AlertDialogContent.make>
            </AlertDialogPortal.make>

        </AlertDialog.make>
    }
}