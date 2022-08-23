import React, {useState} from 'react'
import axios from 'axios'
import 'antd/dist/antd.min.css'
import '../css/signup_input.css'
import { Tabs, Input, Button, Form  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginBG from '../../assets/img/login_bg.jpg'
import {Link, useNavigate} from 'react-router-dom'
import TeacherSignup from './TeacherSignup';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };

//   const { Option } = Select;

//   const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };

function Signup() {
    const [loading, setLoading] = useState(false);

    let history = useNavigate()

    const onFinish = async (values) => {
        values = {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        // console.log('Success:', values);

       const res = await axios.post('http://127.0.0.1:8000/api/studentregister', values)
        if(res.data.status === 401) {
            setLoading(false);
        } else {
            
            history('/')
            setLoading(true);
        }
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div className=' w-full mx-auto h-screen flex items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${LoginBG})`}}>
        <div className='container'>
            <div className='w-[600px] mx-auto bg-white px-14 py-[40px] rounded-3xl shadow-md'>
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

                   <div className='flex'>
                        {/* name input  */}
                        <Form.Item 
                            className="signup_input" 
                        name="name"
                        rules={[
                                { required: true, message: 'Name is required.' },
                            ]} >
                        <Input
                                placeholder="Enter your name"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                        </Form.Item>

                        {/* username input */}
                        {/* <Form.Item 
                        className="signup_input" 
                        name="username"
                        rules={[
                                { required: true, message: 'User_name is required.' },
                            ]}
                        >
                        <Input
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
                        </Form.Item> */}
                    </div>
                        {/* email input  */}
                        <Form.Item 
                        className="signup_input" 
                        name="email"
                        rules={[
                                { required: true, message: 'E-mail is required.' },
                                { type: 'email', message: 'E-mail must be valid.' },
                            ]}
                        >
                        <Input 
                        placeholder="email" />
                        </Form.Item>

                        {/* password input  */}
                        <Form.Item
                        className="signup_input" 
                        name='password'
                        rules={[
                            { required: true, message: 'Enter your password' },
                            ]}
                        >
                            <Input.Password
                             className='signup_input__password'
                             placeholder="password" />
                        </Form.Item>

                        {/* confirm password input  */}
                        <Form.Item 
                        className="signup_input" 
                        name='confirmPassword'
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Enter your confirmPassword' },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                }
                                return Promise.reject(
                                    "password do not match"
                                );
                                },
                            }),
                            ]}
                            // hasFeedback
                        >
                            <Input.Password
                            className='signup_input__password'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        {/* submit button  */}
                        <Form.Item
                        className="custom_login__btn">
                            <Button htmlType="submit">
                            {loading ? <span>loading...</span> : <span>Signup</span>}
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
                </TabPane>
                <TabPane tab="Teacher" key="2">
                    <TeacherSignup />
                </TabPane>
                </Tabs>
                <p>Already you have an account Please! <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup