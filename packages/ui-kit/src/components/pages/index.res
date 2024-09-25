

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
         trigger={<button>{React.string("Ouvrir la boîte de dialogue")}</button>}
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
     </div>
   }