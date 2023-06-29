import React from "react";
import { Router } from "./router";
import { AuthenticationProvider, FormContactProvider } from "./providers";
import { FormConsult } from "./components/public/ui/FormConsult";

export const App = () => (
  <AuthenticationProvider>
    <FormContactProvider>
      <Router />
      <FormConsult />
    </FormContactProvider>
  </AuthenticationProvider>
);
