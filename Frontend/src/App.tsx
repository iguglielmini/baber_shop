import React from 'react';

// Styled
import GlobalStyle from './styles/global';
// ROutes
import SignIn from './pages/Signin';
import Register from './pages/Register';

const App: React.FC = () => (
  <>
    <Register />
    <GlobalStyle />
  </>
);

export default App;
