import React from 'react';
import { connect } from 'react-redux';
import * as publicationActions from '../../../state/actions/publicationActions';
import * as publicationsActions from '../../../state/actions/publicationsActions';
import { IPublicationProps } from '../../../types/publicationTypes';

class Publication extends React.Component<IPublicationProps, {}> {

  async componentDidMount() {
    if (!this.props.publicationsReducer.publications || !this.props.publicationsReducer.publications.length) {
      await this.props.getPublications();
    }
  }



  render() {
    return (
    <div>
      <h1>Publication</h1>
    </div>
    );
  }
}

const mapStateToProps = (reducers: any) => {
  const { publicationsReducer, publicationReducer } = reducers;
  return { publicationsReducer, publicationReducer };
}

const mapDispatchToProps = {
  ...publicationActions,
  ...publicationsActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Publication);
