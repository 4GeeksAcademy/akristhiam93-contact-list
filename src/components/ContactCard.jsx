import React, { useContext, useState } from "react";
import { Context } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {

  const { actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  const confirmDelete = () => {
    actions.deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <>
      <div className="card mb-3 p-3">
        <div className="d-flex align-items-center">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="rounded-circle"
            width="100"
            style={{ marginRight: "15px" }}
          />

          <div className="d-flex-grow-1 text-start">
            <h6 className="mb-1">{contact.name}</h6>

            <p className="mb-1 text-muted">
              <i className="fas fa-map-marker-alt me-2"></i>
              {contact.address}
            </p>

            <p className="mb-1 text-muted">
              <i className="fas fa-phone me-2"></i>
              {contact.phone}
            </p>

            <p className="mb-1 text-muted">
              <i className="fas fa-envelope me-2"></i>
              {contact.email}
            </p>
          </div>

          <div className="ms-auto d-flex align-items-center justify-content-center gap-5">

            <Link to={`/edit/${contact.id}`}>
              <i className="fas fa-pencil-alt text-dark"></i>
            </Link>

            <i 
              className="fas fa-trash"
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            ></i>

          </div>

        </div>
      </div>

      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Are you sure?</h5>
                  <button 
                    type="button" 
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>
                    If you delete this contact the entire universe will go down!
                  </p>
                </div>

                <div className="modal-footer">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowModal(false)}
                  >
                    Oh no!
                  </button>

                  <button 
                    className="btn btn-secondary"
                    onClick={confirmDelete}
                  >
                    Yes baby!
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default ContactCard;