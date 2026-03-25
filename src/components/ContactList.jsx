import React, { useEffect, useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import ContactCard from "./ContactCard";

const ContactList = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container">

      {store.contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}

    </div>
  );
};

export default ContactList;