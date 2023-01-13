import React from "react";
import contacts from "../contacts"
import Card from "./Card";
import Avatar from "./Avatar"


function createCard(contact) {
  return (
  <Card  
  id={contact.id}
  key={contact.id}
  name={contact.name}  
  img={contact.imgURL} 
  tel={contact.phone}
  email={contact.email}
  />
  );
}


function App() {
  return (
    <body>
      <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcxJhTlYpQspl3FLzSC734Aylsj0tQ5RvsbQ6_9M&s"/>
        {contacts.map(createCard)}
      </div>
    </body>
  );
}

export default App;
