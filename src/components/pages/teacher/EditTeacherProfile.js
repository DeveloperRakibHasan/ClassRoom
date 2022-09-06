import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input, Select } from 'antd';
import AuthUser from '../../auth/AuthUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/teacher_edit_input.css'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */


function EditTeacherProfile() {
  const usr = JSON.parse(localStorage.getItem('user'));
  const {httpurl} = AuthUser();

    const onFinish = (values) => {
        console.log(values);
        values={
          name: values.user.name,
          email: values.user.email,
          phone: values.user.phone,
          gender: values.user.gender,
          address: values.user.address,
          religion: values.user.religion,
          subject: values.user.subject,
          // birth_of_date: values.user.birth_of_date,

        }

      httpurl.post('teacherUpdate', values)
      .then((res)=>{
        // console.log(res);
        toast.success((res.data.message), {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
      });

      }).catch((err)=>{
        // console.log(err.message);
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

  return (
    <div className='main-content h-screen overflow-auto'>
        <div className='body-content p-10'>
            <NavLink to='/profile' className='pb-2 px-4 border-b'>Back</NavLink>
            <div className='mt-20'>
            <Form className='grid grid-flow-row grid-cols-3 gap-4' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                  name={['user', 'name']}>
                  <Input className='teacher_profile_edit' placeholder='type your name' />
                </Form.Item>

                <Form.Item
                    name={['user', 'email']}
                    rules={[
                    {
                      type: 'email',
                    },
                    ]}>
                  <Input className='teacher_profile_edit' disabled  placeholder={usr.email} value={usr.email} />
                </Form.Item>
                
                <Form.Item name={['user', 'website']}>
                  <Input className='teacher_profile_edit' placeholder='type your website'/>
                </Form.Item>

                <Form.Item name={['user', 'gender']}>
                  <Select placeholder='Select gender'>
                  <Select.Option name='male' value="male">Male</Select.Option>
                  <Select.Option name='female' value="female">Female</Select.Option>
                  <Select.Option name='others' value="others">Others</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name={['user', 'religion']}>
                  <Input className='teacher_profile_edit' placeholder='type your religion' />
                </Form.Item>
                  
                {/* <Form.Item name={['user', 'birth_of_date']}>
                  <DatePicker />
                </Form.Item> */}

                <Form.Item name={['user', 'subject']}>
                  <Select  placeholder='Select Subject'>
                  <Select.Option name='math' value="math">Math</Select.Option>
                  <Select.Option name='english' value="english">English</Select.Option>
                  <Select.Option name='bangla' value="bangla">Bangla</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name={['user', 'address']}>
                  <Input className='teacher_profile_edit' placeholder='type your address' />
                </Form.Item>

                <Form.Item
                  name={['user', 'phone']}>
                  <Input className='teacher_profile_edit' placeholder='type your phone' />
                </Form.Item>

                {/* <Form.Item name={['user', 'introduction']}>
                    <Input.TextArea placeholder='type your introduction' />
                </Form.Item> */}

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>

                </Form>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default EditTeacherProfile