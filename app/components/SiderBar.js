import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class SiderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div>
        {/*<Button type="primary" onClick={this.toggleCollapsed.bind(this)} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>*/}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {/*<Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>CRM</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>*/}
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>CRM</span></span>}>
            <Menu.Item key="1">ERROR</Menu.Item>
            <Menu.Item key="2">WARN</Menu.Item>
            <Menu.Item key="3">INFO</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>MSO</span></span>}>
            <Menu.Item key="4">ERROR</Menu.Item>
            <Menu.Item key="5">WARN</Menu.Item>
            <Menu.Item key="6">INFO</Menu.Item>
            {/*<SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>*/}
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SiderBar
