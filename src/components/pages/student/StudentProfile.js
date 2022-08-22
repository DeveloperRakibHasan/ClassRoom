import React, { useState } from 'react'
import { Upload, Form, Input, Button, InputNumber } from 'antd';
import ImgCrop from 'antd-img-crop';


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

const StudentProfile = () => {

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };


  const [showModal, setShowModal] = useState(false);


  return (
   <>
    <div className='main-content bg-slate-50'>
     <div className='body_content'>
        <div className='grid grid-flow-row grid-cols-2 gap-6'>
          <div className='card_bg'>
            <div className='flex gap-10'>
              <div>
              <ImgCrop rotate zoom>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}>

                  {fileList.length < 1 && '+ Upload'}
                </Upload>
              </ImgCrop>
               
            <div>
              <button onClick={() => setShowModal(true)} className='bg-gray-50 shadow-md py-2 px-4 rounded-md'>Edit Profile</button>
                {showModal ? (
                    <>
                        <div className="fixed inset-0 z-10 my-auto h-[70vh] ">
                            <div
                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                                onClick={() => setShowModal(false)}
                            ></div>
                            <div className="flex items-center py-8">
                                <div className="relative w-10/12 p-10 mx-auto my-auto bg-white rounded-md shadow-lg">
                                    <div className="mt-3"> 
                                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                            <h4 className="text-lg font-medium text-gray-800">
                                              Edit Profile
                                            </h4>
                                            <div>
                                            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                             <div className='grid grid-flow-row grid-cols-3 gap-4'>
                                             <Form.Item
                                                name={['user', 'name']}
                                                label="Name"
                                                rules={[
                                                  {
                                                    required: true,
                                                  },
                                                ]}
                                              >
                                                <Input />
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

                                              <Form.Item
                                                  name={['user', 'phone']}
                                                  label="Phone Number"
                                                  rules={[
                                                    {
                                                      required: true,
                                                      message: 'Please input your phone number!',
                                                    },
                                                  ]}
                                                >
                                                  <Input
                                                    style={{
                                                      width: '100%',
                                                    }}
                                                  />
                                              </Form.Item>

                                              <Form.Item
                                                name={['user', 'class']}
                                                label="Class"
                                                rules={[
                                                  {
                                                    required: true,
                                                  },
                                                ]}
                                              >
                                                <Input />
                                              </Form.Item>

                                              <Form.Item
                                                name={['user', 'institute']}
                                                label="Institute"
                                              >
                                                <Input />
                                              </Form.Item>

                                              <Form.Item
                                                name={['user', 'age']}
                                                label="Age"
                                                rules={[
                                                  {
                                                    type: 'number',
                                                    min: 6,
                                                    max: 99,
                                                  },
                                                ]}
                                              >
                                                <InputNumber />
                                              </Form.Item>
                                              
                                              <Form.Item name={['user', 'introduction']} label="Introduction">
                                                <Input.TextArea />
                                              </Form.Item>
                                             </div>
                                              <div className='flex w-full justify-center gap-4'>
                                              <Form.Item>
                                                <Button onClick={() => setShowModal(false)} type="danger">
                                                  Cancel
                                                </Button>
                                              </Form.Item>

                                              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                                <Button type="primary" htmlType="submit">
                                                  Update
                                                </Button>
                                              </Form.Item>
                                              </div>
                                            </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
                </div>
              </div>
              <div>
                <ul className='profile_ul'>
                  <li><b>Name:</b> <span>Rakib</span></li>
                  <li><b>E-mail:</b> <span>testmail@outlook.com</span></li>
                  <li><b>Phone:</b> <span>+88 017 9769 1222</span></li>
                  <li><b>Class:</b> <span>Inter 1st year</span></li>
                  <li><b>Institute:</b> <span>Bogura Govt. college</span></li>
                  <li><b>Date of Birth:</b> <span>29 sep 2000</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
   </>
  )
}

export default StudentProfile