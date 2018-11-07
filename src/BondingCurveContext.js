import React from 'react';
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export default React.createContext({
  contractActions: null,
  contractParams: null,
  customCurve: null,
  setCustomCurve: () => {}
});
