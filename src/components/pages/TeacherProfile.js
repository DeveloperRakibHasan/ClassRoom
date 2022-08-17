import React,{useState} from 'react'
import {
    LogoutOutlined,
    WechatOutlined,
    EditOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';


  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('Home', '1', <HomeOutlined />),
    getItem('Edit Profile', '2', <EditOutlined />),
    getItem('Chat', '3', <WechatOutlined />),
    getItem('Add Class', '4', <MailOutlined />),
    getItem('Logout', '5', <LogoutOutlined />),
  ];



const TeacherProfile = () => {

    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div>
    <div
      style={{
        width: 240,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 0,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={!collapsed}
        items={items}
      >
        {/* <Menu.Item key='1'>Edit Profile</Menu.Item>
        <Menu.Item key='2'>Chat</Menu.Item>
        <Menu.Item key='3'>Log out</Menu.Item> */}
      </Menu>
    </div>
    </div>
  )
}

export default TeacherProfile