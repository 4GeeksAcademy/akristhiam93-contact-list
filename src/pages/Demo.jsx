// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import ContactForm from "../components/ContactForm";


export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
 const { store } = useContext(Context);

  return (
    <>
    
    <ContactForm/>
    

      <Link to="/">
        <div className="container">
          <span>Or get back to contacts</span>
        </div>
      </Link>
    
    </>
  );
};
