import './assets/css/App.less';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TestLess from './pages/TestLess/TestLess';
import MapPage from './pages/MapPage/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/test"} component={TestLess} />
        <Route exact={true} path={"/map"} component={MapPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
