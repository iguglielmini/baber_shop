import React from 'react';
import { connect } from 'react-redux';

import RoutesClient from './Client';
import RoutesProvider from './Provider';

interface TypesUser {
    perfil?: string
}
  
interface TypesUserLoginState {
    userToken?: string
    user?: TypesUser | any
}

interface ReduxStore {
userLoginState: TypesUserLoginState
}

const RoutesInternal: React.FC<TypesUserLoginState> = ({ user }: TypesUserLoginState) => {
    if (user.perfil === 'PROVIDER') return (<RoutesProvider />);
    return (<RoutesClient />);
}

const mapStateToProps = (store: ReduxStore) => ({
    user: store.userLoginState.user,
});

export default connect(mapStateToProps, null)(RoutesInternal);
