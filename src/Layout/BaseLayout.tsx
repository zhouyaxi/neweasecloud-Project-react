import MenuList from "@/Constant/MenuList";
import { Layout, Menu, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import "./BaseLayout.module.less";
import { BrowserRouter } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

interface PropsInterface {
  content: {
    content: any;
  };
}

class BaseLayout extends React.Component {
  constructor(props: any) {
    super(props);
  }

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
        <Content>{this.props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          create by zhouyaxi 2022/9/9
        </Footer>
      </Layout>
    );
  }
}

export default BaseLayout;
