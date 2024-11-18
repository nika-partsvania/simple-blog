import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/i18n";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);

// Login - გვერდი ან ფორმა

// Username - nika
// Password - paroli

// ENDPOINT - /login

// JWT - Json Web Token

// { id: 1, username: "nika" }

// localStorage.getItem("accessToken");
// localStorage.setItem("accessToken", token);
// localStorage.removeItem("accessToken");

// {
//   accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.MW-----yKxaFL3B3mJinypUdkCQIPTuHIR63Wj73azgHaQ",
//   refreshToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9..MW--oMcBebtxLn2vdOep-",
//   expiresIn: 60000,
// }

// ENDPOINT - /get-user
// ENDPOINT - /me
// ENDPOINT - /user

// {
//   avatar: random.png,
//   fullname: "Nika Partsvania",
// }

// ENDPOINT - /register

// ENDPOINT - /login  -- request   ->   () => {  response.cookie("accessToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9", {httpOnly: true, expiresIn: 6000})  }
