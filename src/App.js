import React, { Component }  from 'react';
import PhotoDesign from './Components/Photo'
import 'antd/dist/antd.css';
import './index.css';
import { Form, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Head, Title, Main, CustomInput, Sizer, Photofixer, Wrapper, WrapperOne } from "./Styles";

function App() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <Wrapper>
    <WrapperOne>
    <Head>
      krispcall
    </Head>
    <Main>
    <Title>
      Log In 
    </Title>  
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    >
    <div
      // name="username"
      // label="Email Address"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your Username!',
      //   },
      // ]}
    >
      <p>Email Address</p> 
      <CustomInput placeholder="donjohn@krispcall.com" />
    </div>
    <div
      // name="password"
      // label="Password"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your Password!',
      //   },
      // ]}
    >
      <p>Password</p>
      <CustomInput
        type="password"
        placeholder="*******************"
      />
    </div>

    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Keep me logged in</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="">
        Forgot password?
      </a>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      <p>Dont have an account?</p>
      <Sizer>
        <a href="">Sign up?</a>
      </Sizer>
    </Form.Item>
  </Form>
  </Main>
  </WrapperOne>
  <Photofixer>
    <PhotoDesign></PhotoDesign>
  </Photofixer>
  </Wrapper>
  </> 
  );
}  

export default App;
 
