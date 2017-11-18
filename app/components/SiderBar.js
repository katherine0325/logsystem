import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class SiderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            subMenus: [{key: 'NONE', menus: []}]
        }
    }

    componentDidMount() {
      this.fetchMenu()
    }


    toggleCollapsed() {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }

    fetchMenu() {
      $.ajax({
        method: "GET",
        url: '/api/controllers/fetchMenu'
      }).done(data => {
        this.setState({
          subMenus: data,
        });
      })
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
          {this.state.subMenus.map(i => (
            <SubMenu key={i.key} title={<span><Icon type="appstore" /><span>{i.key}</span></span>}>
              {i.menus.map(j => (
                <Menu.Item key={`${i.key}${j}`}><a href={`#/log/${i.key.toLowerCase()}_${j.toLowerCase()}`}>{j}</a></Menu.Item>
              ))}
            </SubMenu>
          ))}

          <Menu.Item key="logsystem">
            <Icon type="pie-chart" />
            <span>logsystem</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SiderBar
