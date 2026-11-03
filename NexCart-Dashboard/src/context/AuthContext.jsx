import { createContext, useContext, useState, useEffect, useMemo } from "react";
// import { login, me } from "../services/authService.js";
import { getMe, login, logout } from "../api/auth.api.js";




const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  
  const fetchSession = async () => {
  try {
    const { data } = await getMe();
    setUser(data.user);
  } catch (error) {
    setUser(null);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  fetchSession();
}, []);


  // useEffect(() => {
  //   const checkUser = async () => {
  //     const token = localStorage.getItem("dashboard-token");

  //     if (!token) return;

  //     try {
  //       const data = await getMe();
  //       setUser(data.user || data.data?.user || data);
  //     } catch (err) {
  //       console.error("Session expired or invalid token:", err);
  //       localStorage.removeItem("dashboard-token");
  //       setUser(null);
  //     }
  //   };

  //   checkUser();
  // }, []);




const loginUser = async (payload) => {
  const { data } = await login(payload);
  localStorage.setItem("token", data.token || "");
  await fetchSession();
  return data;
};

const logoutUser = async () => {
  try {
    await logout();
  } finally {
    localStorage.removeItem("token");
    setUser(null);
  }
};





const value = useMemo(
  () => ({
    user,
    loading,
    loginUser,
    logoutUser,
    refreshUser: fetchSession,
  }),
  []
);

return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);
}

export const useAuth = () => useContext(AuthContext);



  // const loginUser = async (email, password) => {
  //   setLoading(true);

  //   try {
  //     const data = await login(email, password);

  //     console.log("Login API Response:", data);

  //     const token =
  //       data.token ||
  //       data.accessToken ||
  //       data.data?.token ||
  //       data.data?.accessToken;

  //     const userData = data.user || data.data?.user || data;

  //     if (token) {
  //       localStorage.setItem("dashboard-token", token);
  //     } else {
  //       console.error("❌ Token not found in response!");
  //     }

  //     setUser(userData);

  //     return {
  //       success: true,
  //     };
  //   } catch (err) {
  //     return {
  //       success: false,
  //         message:
  //           err.response?.data?.message ||
  //           err.message ||
  //           "Login failed",      
  //         };
  //   } finally {
  //     setLoading(false);
  //   }
  // };






  // const logoutUser = () => {
  //   localStorage.removeItem("dashboard-token");
  //   setUser(null);
  // };

  // return (
  //   <AuthContext.Provider
  //     value={{
  //       user,
  //       loading,
  //       loginUser,
  //       logoutUser,
  //     }}
  //   >
  //     {children}
  //   </AuthContext.Provider>
  // );
// };

// export const useAuth = () => useContext(AuthContext);