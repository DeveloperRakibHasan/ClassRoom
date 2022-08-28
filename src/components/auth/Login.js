import React from 'react'
import 'antd/dist/antd.min.css'
import '../css/input.css'
import { Button, Checkbox, Form, Input } from 'antd';
import LoginBG from '../../assets/img/login_bg.jpg'
import Navbar from '../Navbar';
import AuthUser from './AuthUser';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function login() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const { httpurl, setToken } = AuthUser();

  const onFinish = async (values) => {
     values = {
			email:values.email,
			password:values.password
		}
    // STUDENT LOGIN  
		await httpurl.post('login', values)
    .then((res) => {
      // console.log(res.data.data.name);
        setToken(res.data.token, res.data.data);
        navigate('/');
		})
    .catch((err) =>{
      console.log(err);
      toast.error('Login faild!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
    })

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
     <div className=' w-full mx-auto h-screen flex items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${LoginBG})`}}>
      <div className='container'>
      <Navbar />
       <div className='w-[450px] mx-auto bg-white px-14 py-[60px] rounded-3xl shadow-md'>
       <div className='mb-6'>
       <h1 className='text-[22px] font-bold mb-0'>Welcome Back!</h1>
        <span>login to continue</span>
       </div>
          <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            className="custom_input"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="custom_input"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="custom_checkbox"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          className="custom_login__btn"
          >
            <Button htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
       </div>
      </div>
      <ToastContainer />
    </div>
    </>
    
  )
}

export default login