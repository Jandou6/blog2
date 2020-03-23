import * as React from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;

const style = require('./style.scss');

interface IProps {
  children: any;
}

export default (props: IProps) => {
  return (
    <Layout >
      <header className={style.header}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Link to='/'>
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/tool'>
              小玩具
          </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/about'>
              关于
            </Link>
          </Menu.Item>
        </Menu>
      </header>
      <Content >
        <div className={style.siteLayoutBackground}>
          {props.children}
        </div>
      </Content>
      <footer className={style.footer}>个人博客</footer>
    </Layout>
  )
}