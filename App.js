import React,{useState} from 'react'; 
import antd from 'antd';
import 'antd/dist/antd.css';
import {Layout,Avatar ,Breadcrumb,Row,Col} from 'antd';
import { Typography ,Menu} from 'antd';
import { Card } from 'antd';



import {HomeOutlined,MailOutlined} from '@ant-design/icons';
const { Title } = Typography;
const { SubMenu } = Menu;
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
function App() {

  const ar=["Index1","Index2","Index3","Index4","Index5","Index6","Index7","Index8"]
  return (
    <div className="App">
   
     <Layout>
     <Header  style={{padding:'10px'}}>
     <Avatar  style={{float:'right'}} icon={<HomeOutlined/>}/>
     <Title style={{color:'white'}} level={3}>h3. Ant Design</Title>
       </Header>
      <Layout>
      <Sider>
      <Menu>
        <Menu.Item>
          First
        </Menu.Item>
        <SubMenu title="let's Open" icon={<MailOutlined />}>

        <Menu.ItemGroup key="Options" title="hi" >
        <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        </SubMenu>
      </Menu>


      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{minHeight: 580,
  padding: 24,
  background: '#fff'}}>
    <div>
    <Row gutter={[16, 16]}>
  <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col>
  <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col> <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col> <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col>
  <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col>
  <Col span={8} > 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  </Col>
  
</Row>
    </div>
  
  
  
  </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
