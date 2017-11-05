import React, { Component } from 'react';
import { Menu, Icon, Avatar } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <img src="imgs/ms_logo.png" alt="logo" height="14px" style={{marginTop: -5}}/>
        <span style={{fontSize: 14, color: '#fff'}}> | 日志系统 </span>
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', float: 'right', marginTop: 16 }}>5S</Avatar>
        {/*<div className="logo" />*/}
        {/*<Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>*/}
      </div>
    );
  }
}

export default Nav
