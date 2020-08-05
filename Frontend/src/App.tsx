import React, {
  useEffect,
} from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';

import { Logout } from './helpers';


// ROUTES
import RoutesExternal from './pages/external'
import RoutesInternal from './pages/internal';

// STYLED
import 'react-day-picker/lib/style.css';
import GlobalStyle from './assets/styles/global';

interface TypesUser {
  perfil?: string
  exp?: Number | null | undefined | any
}

interface TypesUserLoginState {
  userToken?: string
  user?: TypesUser | any
}

interface ReduxStore {
  userLoginState: TypesUserLoginState
}

const App: React.FC<TypesUserLoginState> = ({ user, userToken }: TypesUserLoginState) => {
  useEffect(() => {
    function checkUser() {
      if (!userToken) return;

      const now = new Date();
      const payload: TypesUser | any = jwt.decode(userToken, { complete: true });

      if (payload && (now.getTime() > payload.exp * 1000)) Logout();
    }
    setInterval(checkUser, 1000);
  }, [user, userToken]);

  return (
    <Router>
      <GlobalStyle />
      <SnackbarProvider
        maxSnack={20}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        autoHideDuration={3000}
      >
        {
          userToken
            ? (<RoutesInternal />)
            : (<RoutesExternal />)
        }
      </SnackbarProvider>
    </Router>
  );
}

const mapStateToProps = (store: ReduxStore) => ({
  userToken: store.userLoginState.userToken,
});

export default connect(mapStateToProps, null)(App);
