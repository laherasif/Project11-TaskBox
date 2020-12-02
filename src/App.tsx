import React from 'react';
// import './App.css';
import PureInboxScreen from './components/InboxScreen';
import TaskListPage from './components/tasklist';
import Task from './components/tasks';
// import { Provider } from 'react-redux';
// import store from './ReduxStore/redux';

function App() {
  const error : boolean = false;
    return (
    <div>
      {/* <Task/> */}
      <TaskListPage/>
      </div>
  );
}

export default App;
