import React from 'react'
import 'antd/dist/antd.min.css'
import '../css/signup_input.css'
import { Tabs, Input, Tooltip, Button, Form, Select  } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginBG from '../../assets/img/login_bg.jpg'
import {Link} from 'react-router-dom'


const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };


  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
                   <div className='flex gap-4 justify-between'>
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
                   <Form.Item 
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
                        </Form.Item>
                        </div>
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
                        {/* <Form.Item 
                        className="signup_input" 
                        name="number"
                        rules={[
                            { required: true, message: 'Enter your Number' },
                            ]}
                        >
                        <Input
                            type="number"
                            // onChange={handleChange}
                            placeholder="type your phone number"
                            maxLength={11}
                        />
                        </Form.Item> */}
                        {/* <Form.Item 
                        className="signup_input" 
                        name="institute"
                        rules={[
                            { required: true, message: 'Enter your institute name' },
                            ]}
                        >
                        <Input
                         placeholder="type your institute name" />
                        </Form.Item> */}
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
                        <Form.Item 
                        className="signup_input" 
                        name='confirmPassword'
                        rules={[
                            { required: true, message: 'Enter your confirmPassword' },
                            // ({getFildValue})=>({
                            //     validator(_,value){
                            //         if(!value || getFildValue('password') === value){
                            //             return Promise.resolve()
                            //         }
                            //         return Promise.reject("Password do not match")
                                     
                            //     }
                            // })
                            ]}
                        >
                            <Input.Password
                            className='signup_input__password'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
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
                    <Form 
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                   <div className='flex gap-4 justify-between'>
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
                   <Form.Item 
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
                        </Form.Item>
                        </div>
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
                        name="number"
                        rules={[
                            { required: true, message: 'Enter your Number' },
                            ]}
                        >
                        <Input
                            type="number"
                            // onChange={handleChange}
                            placeholder="Input a number"
                            maxLength={11}
                        />
                        </Form.Item>
                        {/* <Form.Item 
                        className="signup_input" 
                        name="institute"
                        rules={[
                            { required: true, message: 'Enter your institute name' },
                            ]}
                        >
                        <Input
                         placeholder="type your institute name" />
                        </Form.Item> */}

                        <Select
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
                            <Option value="english" label="english">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="english">
                                    English
                                </span>
                            </div>
                            </Option>
                            <Option value="math" label="math">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="math">
                                    Math
                                </span>
                            </div>
                            </Option>
                            <Option value="bangla" label="bangla">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="bangla">
                                    Bangla
                                </span>
                            </div>
                            </Option>
                        </Select>

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
                        <Form.Item 
                        className="signup_input" 
                        name='confirmPassword'
                        rules={[
                            { required: true, message: 'Enter your confirmPassword' },
                            ]}
                        >
                            <Input.Password
                            className='signup_input__password'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item
                        className="custom_login__btn">
                            <Button htmlType="submit">
                            Signup
                            </Button>
                        </Form.Item>
                    </Form>
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