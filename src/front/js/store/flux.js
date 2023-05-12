import { redirect } from "react-router-dom";
import { toast } from 'react-toastify';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || "",
      products: [],
      cartItems: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      handleLogin: async (email, password) => {
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
          `${process.env.BACKEND_URL}/api/user/login`,
          opts
        );
        if (!response.ok) {
          alert("Faltan Datos Requeridos");
          return false;
        }
        const data = await response.json();
        const store = getStore();

        setStore({ ...store, token: data.access_token });
        JSON.stringify(localStorage.setItem("token", data.access_token));
        const actions = getActions();
        actions.getCartItems();
        return true;

      },

      handleRegister: async (
        email,
        password,
        name,
        document_id,
        phone,
        address,
        role
      ) => {
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
            role: role
          }),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/user`,
          opts
        );
        if (!response.ok) {
          alert("error con la solicitud");
          return false
        }
        const actions = getActions();
        const login = await actions.handleLogin(email, password);
        return true
      },

      handleLogout: () => {
        localStorage.removeItem("token");
        setStore({ token: "" });
      },

      handleChange_Password: async (
        email,
        new_email,
        password
      ) => {
        const opts = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            new_email: new_email,
            password: password
          }),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/change-password`,
          opts
        );
        if (!response.ok) {
          alert("error con el cambio de la contraseña o el password");
          return false;
        }
        const actions = getActions();
        const login = await actions.handleLogin(new_email, password);
        return true
      },

      getAllLiquors: async () => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/licores`);
        const data = await response.json()
        const store = getStore();
        console.log(data)
        setStore({ ...store, products: data.data })
      },
      getCartItems: async () => {
        const store = getStore();
        const response = await fetch(`${process.env.BACKEND_URL}/api/cartitem`, { headers: { authorization: `Bearer ${store.token}` } });
        const data = await response.json()
        console.log(data)
        setStore({ ...store, cartItems: data.data })
      },
      addToCart: async (licores_id) => {
        const store = getStore();
        const actions = getActions();
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${store.token}`,
          },
          body: JSON.stringify({
            licores_id,
            quantity: 1
          }),
        };
        const response = await fetch(`${process.env.BACKEND_URL}/api/cartitem`,
          opts)
        console.log(response)
        if (response.status == 400) {
          toast.warning("Este producto ya esta en su carrito, escoja la cantidad en su carrito!")
          return
        }
        toast.success("Producto agregado a tu carrito con exito!")
        actions.getCartItems()
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
