@module("react-day-picker") external dayPicker: 'a => React.element = "DayPicker"
@module("@/components/ui/button") external buttonVariants: 'a => string = "buttonVariants"
@module("@/lib/utils") external cn: array<string> => string = "cn"

module Make = {
    @react.component
    let make = (~mode: option<string>=?) => {
        
    let mode = switch mode {
      | Some("range") => "range"
      | _ => "default"
    }
    let navButtonClassName = cn([
      buttonVariants({"variant": "outline"}),
      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
    ])

    let dayClassName = cn([
      buttonVariants({"variant": "ghost"}),
      "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
    ])

    let className = "p-3"
    let classNames = {
          "months": "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        "month": "space-y-4",
        "caption": "flex justify-center pt-1 relative items-center",
        "caption_label": "text-sm font-medium",
        "nav": "space-x-1 flex items-center",
        "nav_button": navButtonClassName,
        "nav_button_previous": "absolute left-1",
        "nav_button_next": "absolute right-1",
        "table": "w-full border-collapse space-y-1",
        "head_row": "flex",
        "head_cell":
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        "row": "flex w-full mt-2",
        "cell": cn(
          ["relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"]
        ),
        "day": dayClassName,
        "day_range_start": "day-range-start",
        "day_range_end": "day-range-end",
        "day_selected":
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        "day_today": "bg-accent text-accent-foreground",
        "day_outside":
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        "day_disabled": "text-muted-foreground opacity-50",
        "day_range_middle":
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        "day_hidden": "invisible",
    }

    let showOutsideDays = true


    // TODO tout les parametre d'origine n'ont pas ete passe
    dayPicker({
      "className": className,
      "classNames": classNames,
      "showOutsideDays": showOutsideDays,
    })
    }
}