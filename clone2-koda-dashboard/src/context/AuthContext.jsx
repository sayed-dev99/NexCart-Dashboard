import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (email, password) => {
    // محاكاة تسجيل الدخول
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
