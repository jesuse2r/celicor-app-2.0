import { redirect } from "react-router-dom";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: JSON.parse(localStorage.getItem("token")) || "",
    },
    actions: {
      // Use getActions to call a function within a fuction

      handleLogin: async (event, email, password) => {
        event.preventDefault();
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        const response = await fetch(
          "https://3001-santiagoarr-flaskproyec-e7ur3w8v2ow.ws-us96b.gitpod.io/api/user/login",
          opts
        );
        if (!response.ok) return alert("error con la solicitud");
        const data = await response.json();
        const store = getStore();
        setStore({ ...store, token: data });
        JSON.stringify(localStorage.setItem("token", data));
        return redirect("/");
      },

      handleRegister: async (
        event,
        email,
        password,
        name,
        document_id,
        phone,
        address,
        role
      ) => {
        event.preventDefault();
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            document_id: document_id,
            phone: phone,
            address: address,
            role: role,
          }),
        };
        const response = await fetch(
          "https://3001-santiagoarr-flaskproyec-e7ur3w8v2ow.ws-us96b.gitpod.io/api/user",
          opts
        );
        if (!response.ok) return alert("error con la solicitud");
        const data = await response.json();
        const store = getStore();
        setStore({ ...store, token: data });
        const actions = getActions();
        return actions.handleLogin(event, email, password);
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
