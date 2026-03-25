import React, { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {

  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const AGENDA = "akristhiam93";
  const API_URL = `https://playground.4geeks.com/contact/agendas/${AGENDA}/contacts`;

  // GET CONTACTS
  const getContacts = async () => {

  const check = await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA}`);

  if (check.status === 404) {
    await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA}`, {
      method: "POST"
    });
  }

  const resp = await fetch(API_URL);
  const data = await resp.json();

  dispatch({
    type: "set_contacts",
    payload: data.contacts || []
  });
};

  // ADD CONTACT
  const addContact = async (contact) => {

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    });

    getContacts();
  };

  // DELETE CONTACT
  const deleteContact = async (id) => {

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    getContacts();
  };

  // UPDATE CONTACT
  const updateContact = async (id, contact) => {

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    });

    getContacts();
  };

  return (
    <Context.Provider value={{
      store,
      actions: {
        getContacts,
        addContact,
        deleteContact,
        updateContact
      }
    }}>
      {children}
    </Context.Provider>
  );
};