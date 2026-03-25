import React, { useState, useContext, useEffect } from "react";
import { Context } from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AddContact = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    agenda_slug: "akristhiam93"
  });

  
  useEffect(() => {
    if (id) {
      const existingContact = store.contacts.find(c => c.id == id);
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      // ✏️ UPDATE
      await actions.updateContact(id, contact);
    } else {
      // ➕ CREATE
      await actions.addContact(contact);
    }

    navigate("/");
  };

  return (

    <form onSubmit={handleSubmit} className="container">

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          name="name"
          className="form-control"
          placeholder="Full Name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          name="phone"
          className="form-control"
          placeholder="Phone"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          name="address"
          className="form-control"
          placeholder="Address"
          onChange={handleChange}
        />
      </div>

        <button className="btn btn-primary w-100">
          {id ? "Update" : "Save"}
        </button>

        <Link to="/">
          <div className="container">
            <span>Or get back to contacts</span>
          </div>
        </Link>

      </form>

      

    
);
};

export default AddContact;