import React, { useEffect } from "react";
import './assets/css/App.less';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TestLess from './pages/TestLess/TestLess';
import MapPage from './pages/MapPage/MapPage';
import UtilScreen from "./utils/UtilScreen";

function App() {

  // 粉刷匠 仅执行一次
  useEffect (() => {
    setHtmlFootSize();
    window.onresize = setHtmlFootSize;
  }, [])

  // 粉刷匠 设置字体
  const setHtmlFootSize = () => {
    // 获取Doc的文字的大小
    let docEl = document.documentElement;
    let fontSize = UtilScreen.getDocElFontSize();
    fontSize && (docEl.style.fontSize = fontSize + "px");
  }




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
