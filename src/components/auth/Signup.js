import React, {useState} from 'react'
import axios from 'axios'
import 'antd/dist/antd.min.css'
import '../css/signup_input.css'
import { Tabs, Input, Button, Form  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginBG from '../../assets/img/login_bg.jpg'
import {Link, useNavigate,} from 'react-router-dom'
import TeacherSignup from './TeacherSignup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };

function Signup() {
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState()
    // const [success, setSuccess] = useState()

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
        setLoading(false)
   await axios.post('http://127.0.0.1:8000/api/studentregister', values)
       .then((res) => {
        setLoading(true)
        toast.success('Successfull Registaction! plz login', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            
             setTimeout(()=>{
                history('/login')
             }, 2000)
       })
       .catch((err) => {
            console.log(err);
            setLoading(false)
            toast.error('Email is already exists', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
       })   

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
                            {loading ? <span>loading...</span> : <span>Registration</span>}
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
        <ToastContainer/>
    </div>
  )
}

export default Signup