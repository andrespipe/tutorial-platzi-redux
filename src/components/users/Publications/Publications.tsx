import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../../state/actions/usersActions';
import * as publicationsActions from '../../../state/actions/publicationsActions';
import { IUser } from '../../../types/userTypes';
import { IPublicationsProps, IPublication } from '../../../types/publicationsTypes';
import { Link } from 'react-router-dom';

class Publications extends React.Component<IPublicationsProps, {}> {

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
    const userKey = this.props.match.params.userId;
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
      <div className="row">
        {
          publications.map(publication =>
            <div className="col-4 mb-4" key={ publication.id }>
              <div className="card">
                <div className="card-body">
                  <Link className="card-title" to={`/publication/${publication.id}`}>
                    <h5>{ publication.title }</h5>
                  </Link>
                  <div className="card-text">{ publication.body }</div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }

  render () {
    const user = this.getUser();
    if (user) {
      const publications = this.getPublications(user);
      if (publications && publications.length) {
        return (
          <div>
            <h3 className="pt-4 pb-4">{ user.name } publications</h3>
            { this.getPublicationTable(publications) }
          </div>
        );
      }
    }

    return (
      <div>
        <h1 className="pt-4 pb-4">No Publication found</h1>
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
