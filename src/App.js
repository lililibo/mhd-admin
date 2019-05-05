import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import BookPage from './pages/book';
import UserPage from './pages/user';
import PrivateRoute from '@/common/privateRoute'

class App extends Component {
  render() {
    return (
        <Layout>
          <Sider />
            <Layout style={{ marginLeft: 200 }}>
              <Header />
              <Layout.Content style={{ padding: 20 }}>
                  {/* 右侧内容 */}
                  {/* 1. 图书管理 localhost:3000/ */}
                <Switch>
                  <PrivateRoute path="/book" exact component={BookPage} ></PrivateRoute>
                  <PrivateRoute path="/user" exact component={UserPage} ></PrivateRoute>
                </Switch>
              </Layout.Content>
            </Layout>
        </Layout>
    )
  }
}

export default App;
