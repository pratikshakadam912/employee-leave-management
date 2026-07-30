import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const storedAuth = JSON.parse(localStorage.getItem("auth"));

  const [user, setUser] = useState(storedAuth?.user || null);

  const login = (user, token) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user,
        token,
      }),
    );

    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
