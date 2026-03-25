import React, { useState, useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {

  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await actions.addContact({
      ...form,
      agenda_slug: "akristhiam93"
    });

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
        Save
      </button>

    </form>
  );
};

export default ContactForm;