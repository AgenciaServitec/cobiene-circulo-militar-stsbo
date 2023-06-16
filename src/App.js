import React, { useState } from "react";
import { Router } from "./router";
import { AuthenticationProvider } from "./providers";
import { FormConsult } from "./components/public/ui/FormConsult";
import { FormContactProvider } from "./providers";

export const App = () => {
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const onClickVisibleFormContact = (visible = !visibleFormContact) =>
    setVisibleFormContact(visible);

  return (
    <AuthenticationProvider>
      <FormContactProvider>
        <Router />
        <FormConsult />
      </FormContactProvider>
    </AuthenticationProvider>
  );
};
