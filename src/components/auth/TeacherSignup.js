import React, {useState} from 'react'
import { Input, Button, Form } from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

  

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
        console.log('Success:', values);

       const res = await axios.post('http://127.0.0.1:8000/api/teacherregister', values)
        if(res.data.status === 401) {
            console.log(values);
            setLoading(false);
        } else {
            
            history('/teacher_dashboard')
            setLoading(true);
        }
        
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
            {loading ? <span>loading...</span> : <span>Registration</span>}
            </Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default TeacherSignup