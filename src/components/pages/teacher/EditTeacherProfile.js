import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input, Select } from 'antd';

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

    const onFinish = (values) => {
        console.log(values);
      };

  return (
    <div className='main-content bg-slate-50'>
        <div className='body-content p-10'>
            <NavLink to='/teacher_profile' className='pb-2 px-4 border-b'>Back</NavLink>
            <div className='mt-20'>
            <Form {...layout}  className='grid grid-flow-row grid-cols-3' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}>
                    <Input placeholder='type your name' />
                </Form.Item>

                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'gender']} 
                    rules={[
                        {
                            required: true,
                            message: 'Your Gender!',
                        },
                        ]}>
                        <Select  placeholder='Select gender'>
                        <Select.Option name='male' value="male">Male</Select.Option>
                        <Select.Option name='female' value="female">Female</Select.Option>
                        <Select.Option name='others' value="others">Others</Select.Option>
                        </Select>
                    </Form.Item>

                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>

                </Form>
            </div>
        </div>
    </div>
  )
}

export default EditTeacherProfile