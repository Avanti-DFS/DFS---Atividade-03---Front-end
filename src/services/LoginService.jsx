import api from "./Api";
import React from "react";
import { useNavigate } from "react-router-dom";

export const UserStorage = () => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setLogin(false);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      navigate("/entrar");
    },
    [navigate]
  );

  return { userLogout }; 
};

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    if (response.status === 200) {
      const { token, name } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(name));
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: "Error logging in" };
  }
};

export const getUserName = () => {
  const userString = localStorage.getItem("user");
  if (userString) {
    try {
      const userData = JSON.parse(userString);
      console.log("Logged in user name:", userData);
      return userString;
    } catch (error) {
      console.error("Error parsing user data from local storage:");
    }
  } else {
    console.error("No user data found in local storage");
  }
};
