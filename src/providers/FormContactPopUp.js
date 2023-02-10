import React, { createContext, useContext, useState } from "react";

export const FormContactContext = createContext({
  visibleFormContact: false,
  setVisibleFormContact: () => null,
});

export const FormContactProvider = ({ children }) => {
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  return (
    <FormContactContext.Provider
      value={{ visibleFormContact, setVisibleFormContact }}
    >
      {children}
    </FormContactContext.Provider>
  );
};

export const useFormContact = () => useContext(FormContactContext);
