import React, { useState } from "react";
import { Router } from "./router";
import { AuthenticationProvider } from "./providers";

export const App = () => {
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const onClickVisibleFormContact = (visible = !visibleFormContact) =>
    setVisibleFormContact(visible);

  return (
    <AuthenticationProvider>
      <Router
        onClickVisibleFormContact={onClickVisibleFormContact}
        visibleFormContact={visibleFormContact}
      />
    </AuthenticationProvider>
  );
};
