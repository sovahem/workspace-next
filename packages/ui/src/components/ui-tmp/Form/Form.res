// @module("../../../lib/utils")
// external cn: array<string> => string = "cn"

// @module("react-hook-form")
// external controller: React.component<React.element> = "Controller"

// @module("react-hook-form")
// external controllerProps: React.component<React.element> = "ControllerProps"

// @module("react-hook-form")
// external fieldPath: React.component<React.element> = "FieldPath"

// @module("react-hook-form")
// external fieldValues: React.component<React.element> = "FieldValues"
// @module("react-hook-form")
// external formProvider: React.component<React.element> = "FormProvider"

// @module("react-hook-form")
// external useForm: (~resolver: 'a, ~defaultValues: 'b=?) => {. "handleSubmit": (unit => unit) => unit, "register": string => unit, "formState": {. "errors": Js.Dict.t<string>} } = "useForm"


// @module("react-hook-form")
// external useFormContext: unit => {. "getFieldState": (string, 'formState) => 'fieldState, "formState": 'formState} = "useFormContext"

// @module("../Label/Label.res") external label: React.component<'props> = "Make"

// @module("@hookform/resolvers/zod")
// external zodResolver: 'zodSchema => 'resolver = "zodResolver"




// type formFieldContextValue<'fieldValues, 'name> = {
//   name: 'name
// }

// type formItemContextValue = {
//   id: string
// }

// module Slot = {
//     @react.component
//     @module("@radix-ui/react-slot")
//     external make: (~className: string=?, ~id: string, ~children: React.element) => React.element = "Slot"
// }

// module FormFieldContext = {
//     type formFieldContextValue = {name: string};
//     let context: React.Context.t<formFieldContextValue> = React.createContext({name: ""});

//     module Provider = {
//         let make = React.Context.provider(context)
//     }
// }

// module FormItemContext = {
//     let context = React.createContext({id: ""});

//     module Provider = {
//         let make = React.Context.provider(context)
//     }
// }

// module FormField = {
//     @react.component
//     let make = (~name) => {
//         <FormFieldContext.Provider value={{name: name}}>
//             <controller />
//         </FormFieldContext.Provider>
//     }
// }

// // type formItem = {
// //   id: string,
// //   name: string,
// //   formItemId: string,
// //   formDescriptionId: string,
// //   formMessageId: string,
// //   isTouched: bool,
// //   isDirty: bool,
// //   isValid: bool,
// //   error: option<string>,
// // };


// type formItem = {
//   id: string,
//   name: string,
//   formItemId: string,
//   formDescriptionId: string,
//   formMessageId: string,
//   isTouched: bool,
//   isDirty: bool,
//   isValid: bool,
//   error: option<string>,
// };


// let useFormField = () => {
//     let fieldContext = React.useContext(FormFieldContext.context)
//     let itemContext = React.useContext(FormItemContext.context)
//     let formContext = useFormContext()
//     let getFieldState = formContext["getFieldState"]
//     let formState = formContext["formState"]

//     let fieldState = getFieldState(fieldContext.name, formState)

//     if (fieldContext.name == "") {
//     Js.Exn.raiseError("useFormField should be used within <FormField>")
//   }

//   let {id} = itemContext

//   {
//     id: id,
//     name: fieldContext.name,
//     formItemId: id ++ "-form-item",
//     formDescriptionId: id ++ "-form-item-description",
//     formMessageId: id ++ "-form-item-message",
//     isTouched: fieldState.isTouched,
//     isDirty: fieldState.isDirty,
//     isValid: fieldState.isValid,
//     error: fieldState.error
//   }
// }


// // TODO transformer en forwardRef
// module FormLabel = {
//     @react.component
//     let make = (
//         ~children: React.element,
//     ) => {

//         let field = useFormField()
//         let {error, formItemId} = field

//         // let errorStyle = error ? "" : ""
        
//         <Label
//             htmlFor=formItemId
//             className={cn(["text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"])}
//         >
//             {children}
//         </Label>

//     }
// }

// module FormControl = {
//     @react.component
//     let make = (~children: React.element) => {
//         let {error, formItemId, formDescriptionId, formMessageId} = useFormField();
//         <Slot.make
//             id={formItemId}
//             >
//             {children}
//             </Slot.make>
//     }
// }

// module FormDescription = {
//     @react.component
//     let make = (~children: React.element) => {
//         let {formDescriptionId} = useFormField();

//         <p
//             id={formDescriptionId}
//             className={cn(["text-[0.8rem] text-muted-foreground"])}
//         >
//             {children}
//         </p>

//     }
// }


// module FormMessage = {
//     @react.component
//     let make = (~children: React.element) => {
//         let {error, formMessageId} = useFormField();

//         <p
//             id={formMessageId}
//             className={cn(["text-[0.8rem] font-medium text-destructive"])}
//         >
//             {children}
//         </p>
//     }
// }

// module Make = {
//     @react.component
//     let make = (~children: React.element, ~zodSchema: 'resolver, ~initialData: 'data, ~handleSubmit: 'values => unit) => {

//         let form = useForm(~resolver=zodResolver(zodSchema), ~defaultValues=initialData)

//         let onSubmit = values => {
//             handleSubmit(values)
//         }

//         <formProvider>
//             <form onSubmit={form.handleSubmit(onSubmit)}>
//                 {children}
//             </form>
//         </formProvider>
//     }
// }