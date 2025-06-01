// import { useContext, createContext, useState, useEffect } from "react";
// import type { ReactNode } from "react";
// import type { LoginCredentials, User } from "../types/auth";

// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   login: (credentials: LoginCredentials) => Promise<void>;
//   logout: () => void;
//   isLoading: boolean;
//   error: string | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Check for existing token on mount
//     const storedToken = localStorage.getItem("jwt");
//     const storedUser = localStorage.getItem("user");

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (credentials: LoginCredentials) => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const response = await fetch("http://localhost:1337/api/auth/local", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error?.message || "Login failed");
//       }

//       const data: Response = await response.json();

//       // Store in localStorage
//       localStorage.setItem("jwt", data.jwt);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       setToken(data.jwt);
//       setUser(data.user);

//       // Redirect to home page
//       window.location.href = "/";
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred");
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("jwt");
//     localStorage.removeItem("user");
//     setToken(null);
//     setUser(null);
//     window.location.href = "/";
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, token, login, logout, isLoading, error }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
