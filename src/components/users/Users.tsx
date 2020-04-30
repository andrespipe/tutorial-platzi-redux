import React from 'react';
import { connect } from 'react-redux';

import './Users.css';
import { IUserProps } from '../../types/userType';
import * as usersActions from '../../state/actions/usersActions';
import UsersTable from './UsersTable/UsersTable';

class Users extends React.Component<IUserProps, {}> {

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers();
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error({ error, errorInfo });
  }

  getContent = () => {
    if(this.props.isLoading) {
      return <h1>Loading</h1>
    }

    if(this.props.error) {
      return <h1>Error: { this.props.error }</h1>
    }

    return <UsersTable></UsersTable>
  }

  render () {
    return (
    <div>
      { this.getContent() }
    </div>
    )
  }
}

const mapStateToProps = (reducers: any) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);