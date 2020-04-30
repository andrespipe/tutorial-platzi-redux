import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../../state/actions/usersActions';
import * as publicationsActions from '../../../state/actions/publicationsActions';
import { IUser } from '../../../types/userType';
import { IPublicationProps, IPublication } from '../../../types/publicationType';

class Publications extends React.Component<IPublicationProps, {}> {

  async componentDidMount() {
    if (!this.props.usersReducer.users || !this.props.usersReducer.users.length) {
      await this.props.getUsers();
    }
    const user = this.getUser();
    if (user) {
      this.props.getPublicationsByUser(user.id);
    }
  }

  getUser(): IUser | undefined {
    const userKey = this.props.match.params.key;
    if(this.props.usersReducer.users) {
      const user = this.props.usersReducer.users[userKey];
      return user;
    }
    return undefined;
  }

  getPublications(user: IUser): IPublication[] {
    const { id } = user;
    const publications: IPublication[][] = this.props.publicationsReducer.publications;
    if (publications) {
      return publications[id as number];
    }
    return [];
  }

  getPublicationTable = (publications: IPublication[]) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            publications.map(publication => (
              <tr key={ publication.id }>
                <td>{ publication.title }</td>
                <td>{ publication.body }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  render () {
    const user = this.getUser();
    if (user) {
      const publications = this.getPublications(user);
      if (publications && publications.length) {
        return (
          <div>
            <h1>Publication { this.props.match.params.key }</h1>
            { this.getPublicationTable(publications) }
          </div>
        );
      }
    }

    return (
      <div>
        <h1>No Publication found</h1>
      </div>
    );
  }
}

const mapStateToProps = (reducers: any) => {
  const { usersReducer, publicationsReducer } = reducers;
  return { usersReducer, publicationsReducer };
}

const mapDispatchToProps = {
  ...usersActions,
  ...publicationsActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
