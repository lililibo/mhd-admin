import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              ...
          <br />
              Really
          <br />...<br />...<br />...<br />
              long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
              content
        </div>
          </Content> */}
        </Layout>
      </Layout>
    )
  }
}

export default App;
