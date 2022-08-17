import React from 'react'
import 'antd/dist/antd.min.css'
import '../css/signup_input.css'
import { Tabs, Input, Tooltip, Space, Button, Form } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginBG from '../../assets/img/login_bg.jpg'
import {Link} from 'react-router-dom'

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };
  
//   const handleChange = (e) => {
//     const { value: inputValue } = e.target;
//     const reg = /^-?\d*(\.\d*)?$/;

//     if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
//       onChange(inputValue);
//     }
//   };

function Signup() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div className=' w-full mx-auto h-screen flex items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${LoginBG})`}}>
        <div className='container'>
            <div className='w-[450px] mx-auto bg-white px-14 py-[40px] rounded-3xl shadow-md'>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Student" key="1">
                    <div>
                    <Form 
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                   <Input
                        className="signup_input"
                        placeholder="Enter your name"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined
                            style={{
                            color: 'rgba(0,0,0,.45)',
                            }}
                        />
                        </Tooltip>
                        }
                        />
                      
                    <Input
                        className="signup_input"
                        placeholder="Enter your username"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined
                            style={{
                            color: 'rgba(0,0,0,.45)',
                            }}
                        />
                        </Tooltip>
                        }
                        />
                        <Input 
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                        className="signup_input"
                        placeholder="email" />
                        <Input
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                            className="signup_input"
                            type="number"
                            // onChange={handleChange}
                            placeholder="Input a number"
                            maxLength={11}
                        />
                        <Input
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                         className="signup_input"
                         placeholder="type your institute name" />
                        <Space direction="vertical" className='signup_space'>
                            <Input.Password
                             className='signup_input__password'
                             placeholder="password" />
                            <Input.Password
                            className='signup_input__password'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <Form.Item
                        className="custom_login__btn">
                            <Button htmlType="submit">
                            Signup
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>
                    </TabPane>
                    <TabPane tab="Teacher" key="2">
                    <div>
                    <Input
                        className="signup_input"
                        placeholder="Enter your name"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined
                            style={{
                            color: 'rgba(0,0,0,.45)',
                            }}
                        />
                        </Tooltip>
                        }
                        />
                        <br></br>
                    <Input
                        className="signup_input"
                        placeholder="Enter your username"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined
                            style={{
                            color: 'rgba(0,0,0,.45)',
                            }}
                        />
                        </Tooltip>
                        }
                        />
                        <Input 
                        className="signup_input"
                        placeholder="email" />
                        <Input
                            className="signup_input"
                            type="number"
                            // onChange={handleChange}
                            placeholder="Input a number"
                            maxLength={11}
                        />
                        <Input
                         className="signup_input"
                         placeholder="type your institute name" />
                        <Space direction="vertical" className='signup_space'>
                            <Input.Password
                             className='signup_input__password'
                             placeholder="password" />
                            <Input.Password
                            className='signup_input__password'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <Form.Item
                        className="custom_login__btn">
                            <Button htmlType="submit">
                            Signup
                            </Button>
                        </Form.Item>
                    </div>
                    </TabPane>
                </Tabs>
                <p>Already you have an account Please! <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup