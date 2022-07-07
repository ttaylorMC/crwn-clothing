import { createContext, useState } from "react";

// This is the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// This is the actual functional component
// Be able to call this setter and get the value anywhere in the component tree nested in the provider value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // There is a .Provider on every context built for us
  // The .Provider is the component that wraps around components that need access to the values inside
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
