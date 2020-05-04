import React from 'react';
import { IUserProps } from '../../../types/userTypes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const UsersTable = (props?: IUserProps) => {

  const getRows = () => {

    return props?.users.map((item, key) => 
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.website}</td>
      <td>
        <Link to={ `/publications/${key}` }>
          detail
        </Link>
      </td>
    </tr>
    );
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Namne</th>
          <th>Email</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { getRows() }
      </tbody>
    </table>
  );
}

const mapStateToProps = (reducers: any) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(UsersTable);
