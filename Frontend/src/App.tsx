import React from 'react';

// Styled
import GlobalStyle from './styles/global';
// ROutes
import SignIn from './pages/Signin';


const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
