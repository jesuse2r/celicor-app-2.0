import { redirect } from "react-router-dom";

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
            address: address
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
        password
      ) => {
        const opts = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/change-password`,
          opts
        );
        if (!response.ok) {
          alert("error con el cambio de la contraña o el password");
          return false;
        }
        const data = await response.json();
        const store = getStore();
        setStore({ ...store, token: data.access_token });
        JSON.stringify(localStorage.setItem("token", data.access_token));
        return true;
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
      updateCartItems: async (
        cartId, quantity, licoresId
        
      ) => {
        const actions = getActions()
        const store = getStore()
        console.log(cartId, quantity, licoresId)
        const opts = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${store.token}`
          
          },
          body: JSON.stringify({
            quantity: quantity,
            licores_id:licoresId
          }),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/cartitem/${cartId}`,
          opts
        );
        if (!response.ok) {
          alert("no tiene suficiente stock");
          return false;
        }
        actions.getCartItems()
        
        return true;
      },
      deleteCartItem: async (
        licoresId,  cartId
        
        
      ) => {
        const actions = getActions()
        const store = getStore()
        console.log(cartId, licoresId)
        const opts = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${store.token}`
          
          },
          
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/cartitem/${licoresId}/${cartId}`,
            opts
          );
          const data = await response.json()
          console.log(data)
          if (response.ok) {
            
            console.log("licor eliminado");
            actions.getCartItems()
          
            
          
  
            return true;
          }
          
          
          return false;
          
        } catch (error) {
          console.log(error)
          
        }
        
      },
    },
  };
};

export default getState;
