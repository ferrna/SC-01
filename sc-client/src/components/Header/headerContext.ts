import React from 'react';

// Define the shape of the context data using a TypeScript interface
interface HeaderContextData {
  isBurgerToggled: boolean;
  toggleBurger: () => void;
  /* isSearchOpen: boolean;
  toggleSearch: () => void; */
}

// Create the context with an initial value and the TypeScript interface
const HeaderContext = React.createContext<HeaderContextData>({
  isBurgerToggled: false,
  toggleBurger: () => { },
  /* isSearchOpen: false,
  toggleSearch: () => { }, */
});

export default HeaderContext;