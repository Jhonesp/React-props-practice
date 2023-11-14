import React from "react";
import Card from "./Card";
import contacts from "../contacts";
//Tip: falta colocar un bucle para que se carguen las Cards con la info de cada contacto de contacs.js

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <Card
            name = "Beyonce"
            imgURL ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            phone = "+123 456 789"
            email = "b@beyonce.com"
        />
    </div>
  );
}

export default App;
