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
            qualification: values.qualification,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        console.log('Success:', values);

       const res = await axios.post('http://127.0.0.1:8000/api/teacherregister', values)
        if(res.data.status === 401) {
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
        <div className='flex gap-4 justify-between'>
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

        {/* username input  */}
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

        <Form.Item 
        className="signup_input" 
        name="qualification"
        rules={[
            { required: true, message: 'Qualification is required.' },
        ]}
        >
        <Input
            placeholder="Enter your Qualification"
            />
        </Form.Item>

        {/* select option  */}
        {/* <Select
            className="signup_select"
            mode="multiple"
            style={{
            width: '100%',
            }}
            placeholder="select one subject"
            defaultValue={['english']}
            onChange={handleChange}
            optionLabelProp="label"
        >
            <Option name='english' value="english" label="english">
            <div className="demo-option-label-item">
                <span role="img" aria-label="english">
                    English
                </span>
            </div>
            </Option>
            <Option name='math' value="math" label="math">
            <div className="demo-option-label-item">
                <span role="img" aria-label="math">
                    Math
                </span>
            </div>
            </Option>
            <Option name='bangla' value="bangla" label="bangla">
            <div className="demo-option-label-item">
                <span role="img" aria-label="bangla">
                    Bangla
                </span>
            </div>
            </Option>
        </Select> */}

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
            {loading ? <span>loading...</span> : <span>Signup</span>}
            </Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default TeacherSignup