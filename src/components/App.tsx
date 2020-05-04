import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './users/Users';
import NavigationBar from './NavigationBar/NavigationBar';
import Tasks from './tasks/Tasks';
import Publication from './users/Publication/Publication';
import Publications from './users/Publications/Publications';

class App extends React.Component<{}, {}> {
  
  render () {
    return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <div className="container">
          <Route path="/" component={Users} exact></Route>
          <Route path="/publications/:userId" component={Publications}></Route>
          <Route path="/publication/:publicationId" component={Publication}></Route>
          <Route path="/tasks" component={Tasks}></Route>
        </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
