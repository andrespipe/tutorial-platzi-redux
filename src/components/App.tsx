import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './users/Users';
import NavBar from './navBar/NavBar';
import Tasks from './tasks/Tasks';
import Publications from './users/Publications/Publications';

class App extends React.Component<{}, {}> {
  
  render () {
    return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Route path="/" component={Users} exact></Route>
        <Route path="/publications/:key" component={Publications}></Route>
        <Route path="/tasks" component={Tasks}></Route>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
