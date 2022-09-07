import React, {useState} from 'react'
import { Input, Button, Form } from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone, LoadingOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

function TeacherSignup() {

    const [loading, setLoading] = useState(false);
    let history = useNavigate()

    const onFinish = async (values) => {
        values = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        // console.log('Success:', values);
        setLoading(true)
    await axios.post('http://127.0.0.1:8000/api/teacherregister', values)
       .then((res)=>{
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

       }).catch((err)=>{
        toast.error((err.message), {
            position: "bottom-right",
            autoClose: 1000,
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
        ]}
        >
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
            { min: 4, message: 'password must be minimum 4 characters.' },
            ]}
        >
            <Input.Password
                className='signup_input__password'
                placeholder="password"
                />
        </Form.Item>

        {/* confirm password  */}
        <Form.Item 
        className="signup_input" 
        name='confirmPassword'
        dependencies={['password']}
        rules={[
            { required: true, message: 'Enter your confirmPassword' },
            ({getFieldValue}) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                }
                return Promise.reject(
                    "password do not match"
                );
                },
            }),
            ]}
        >
            <Input.Password
            className='signup_input__password'
            placeholder="Confirm password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Form.Item>

        {/* signup button  */}
        <Form.Item
        className="custom_login__btn">
            <Button htmlType="submit">
            {loading ? <span><LoadingOutlined /></span> : <span>Registration</span>}
            </Button>
        </Form.Item>
        </Form>
        <ToastContainer/>
    </div>
  )
}

export default TeacherSignup