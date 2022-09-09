import MenuList from "@/Constant/MenuList";
import { Layout, Menu, Input, Button,Avatar  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import React from "react";
import "./BaseLayout.module.less";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class BaseLayout extends React.Component {
  onSearch(value: string) {
    console.log(value);
  }
  render(): React.ReactNode {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={MenuList.map((item, index) => {
              const key = index + 1;
              return {
                key,
                label: `${item}`,
              };
            })}
          />
          <Search
            placeholder="input search text"
            onSearch={this.onSearch}
            style={{ width: 200 }}
          />
          <Button type="primary">傳作者中心</Button>
          <Avatar size="large" icon={<UserOutlined />} />
        </Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default BaseLayout;
