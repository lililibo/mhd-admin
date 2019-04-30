import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import BookPage from './pages/book';
import UserPage from './pages/user';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Sider />
            <Layout style={{ marginLeft: 200 }}>
              <Header />
              <Layout.Content style={{ padding: 20 }}>
                  {/* 右侧内容 */}
                  {/* 1. 图书管理 localhost:3000/ */}
                <Switch>
                  <Route path="/" exact component={BookPage} ></Route>
                  <Route path="/user" exact component={UserPage} ></Route>
                  <Redirect to="/"></Redirect>
                </Switch>
              </Layout.Content>
            </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default App;
