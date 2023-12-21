/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = React.lazy(() => import("./App.jsx"));

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <Suspense fallback={<div>...loading</div>}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Main />);
