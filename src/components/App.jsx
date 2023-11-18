import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
//Tip: falta colocar un bucle para que se carguen las Cards con la info de cada contacto de contacs.js

function CreateCard(contact){
  return (
    <Card 
      key = {contact.id}
      name = {contact.name}
      imgURL = {contact.imgURL}
      phone = {contact.phone}
      email = {contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <Avatar 
          imgURL = "https://scontent.ftrn5-1.fna.fbcdn.net/v/t39.30808-6/402555457_10232253928001620_5663571794557634277_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7Mo1PdNeHOIAX9sY1c9&_nc_ht=scontent.ftrn5-1.fna&oh=00_AfBKeqztWq0Oaz7AHuh5WFfx646LlquhVzduTuB7ioiiIw&oe=655A715F"
        />
        {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
