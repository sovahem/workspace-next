

   @react.component
   let make = () => {
     <div>
       <Accordion.Make
         items=[
           {
             trigger: <div>{React.string("Élément 1")}</div>,
             content: <div>{React.string("Contenu de l'élément 1")}</div>,
             value: "item-1"
           },
         ]
       />
       <AlertDialog.Make
         trigger={<Button.Make>{React.string("Ouvrir la boîte de dialogue")}</Button.Make>}
         title="Titre de la boîte de dialogue"
         description="Contenu de la boîte de dialogue"
         cancel="Annuler"
         continue="Continuer"
       />
       <Alert.Make
         title="Titre de l'alerte"
         description="Description de l'alerte"
         variant="default"
       />
       <Avatar.Make src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />
       <Badge.Make>{React.string("Badge")}</Badge.Make>
       <Calendar.Make />
       <Card.Make
         title="Titre de la carte"
         description="Description de la carte"
         content={<div>{React.string("Contenu de la carte")}</div>}
         footer={<Button.Make>{React.string("Action")}</Button.Make>}
       />
     </div>
   }