import { redirect } from "react-router-dom";
import { toast } from 'react-toastify';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || "",
      products: [],
      cartItems: [],
      showCart: false,
      searchValue: "",
    },
    actions: {
      // Use getActions to call a function within a fuction

      handleLogin: async (user) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/user/login`,
          opts
        );
        if (!response.ok) {
          toast.error("Los datos agregados son incorrectos o no estas registrado!");
          return false;
        }
        const data = await response.json();
        const store = getStore();

        setStore({ ...store, token: data.access_token });
        JSON.stringify(localStorage.setItem("token", data.access_token));
        const actions = getActions();
        actions.getCartItems();
        toast.success("Usuario logueado con exito!")
        return true;

      },

      handleRegister: async (user) => {
        console.log(user)
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),


        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/user`,
          opts
        );

        if (!response.ok) {
          toast.error("Error al crear el usuario!");
          return false
        }
        const actions = getActions();
        const login = await actions.handleLogin({ email: user.email, password: user.password });
        toast.success("Usuario registrado con exito!")
        return true

      },

      handleLogout: () => {
        localStorage.removeItem("token");
        setStore({ token: "" });
        toast.warning("Haz hecho logout de tu sesion para realizar alguna compra vuelve a loguearte!")
      },
      toggleCart: (types) => {
        setStore({ showCart: types })
      },

      handleChange_Password: async (
        email,
        new_email,
        password,
        new_password
      ) => {
        const opts = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            new_email: new_email,
            password: password,
            new_password: new_password
          }),
        };
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/change-password`,
          opts
        );
        if (!response.ok) {
          toast.error("Error al modificar el usuario");
          return false;
        }
        const actions = getActions();
        const login = await actions.handleLogin(new_email, new_password);
        toast.success("Usuario modificado con exito!")
        return true
      },

      getAllLiquors: async () => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/licores`);
        const data = await response.json()
        const store = getStore();
        console.log(data)
        setStore({ ...store, products: data.data })
      },
      getAllLiquorsTypes: async (type) => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/licores/${type}`);
        const data = await response.json()
        const store = getStore();
        console.log(data)
        setStore({ ...store, products: data.data })
      },
      getAllLiquorsMarca: async (type, marca) => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/licores/${type}/${marca}`);
        const data = await response.json()
        const store = getStore();
        console.log(data)
        setStore({ ...store, products: data.data })
      },
      getCartItems: async () => {
        const store = getStore();
        const response = await fetch(`${process.env.BACKEND_URL}/api/cartitem`, { headers: { authorization: `Bearer ${store.token}` } });
        const data = await response.json()
        const sortedArray = data.data.sort((a, b) => {
          return a.id - b.id
        })
        console.log(data)
        setStore({ ...store, cartItems: sortedArray })

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
      searchLiquours: (value) => {
        setStore({ searchValue: value })


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
            licores_id: licoresId
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
        licoresId, cartId


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
      addFactura: async (total) => {
        const store = getStore();
        const actions = getActions();
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${store.token}`,
          },
          body: JSON.stringify({



            total: total
          }),
        };
        const response = await fetch(`${process.env.BACKEND_URL}/api/factura`,
          opts)
        console.log(response)
        if (!response.ok) {
          toast.warning("ya existe una factura para este usuario!")
          return false;
        }
        toast.success("factura nueva lista!")
        return true;


      },
      sendEmailVerifiedPayment: async (data) => {
        console.log(data)
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`

          },
          body: JSON.stringify(data),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/verify-pay`,
            opts
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },


    },
  };
};



export default getState;