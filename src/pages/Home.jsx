import { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import ContactList from "../components/ContactList.jsx";

export const Home = () => {

  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <ContactList />
    </div>
  );
};