import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import store from '../../store';

class Sider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: store.getState().common.menus,
      defaultMenus: store.getState().common.defaultMenus
    }
    store.subscribe(() => {
      this.setState(() => ({
        menus: store.getState().common.menus,
        defaultMenus: store.getState().common.defaultMenus
      }))
    })
  }
  render () {
    return (
      <Layout.Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultMenus}>
          {
            this.state.menus.map((item,index) => {
              return (
                <Menu.Item key={index + 1}>
                  <Icon type={item.icon} />
                  <span className="nav-text">{ item.name }</span>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Layout.Sider>
    )
  }
}

export default Sider;
