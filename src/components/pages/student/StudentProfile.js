import React, {useEffect, useState} from 'react'
import {Upload, Form, Input, Button, Select} from 'antd';
import ImgCrop from 'antd-img-crop';
import '../../css/teacher_edit_input.css'
import AuthUser from "../../auth/AuthUser";
import 'react-toastify/dist/ReactToastify.css';
import '../../css/teacher_edit_input.css'
import {toast, ToastContainer} from "react-toastify";

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
  const usr = JSON.parse(localStorage.getItem('user'));
  const {httpurl} = AuthUser();
  const [fileList, setFileList] = useState([]);
  const [profile, setProfile] = useState([])
  const [showModal, setShowModal] = useState(false);

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

  // edit update value
  const onFinish = (values) => {
    values={
      name: values.user.name,
      phone: values.user.phone,
      email: values.user.email,
      class: values.user.class,
      institute: values.user.institute,
      gender: values.user.gender,
      address: values.user.address,
    }
    // console.log(values)
    httpurl.post('studentUpdate', values)
        .then((res)=>{
          toast.success((res.data.message), {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });

        }).catch((err)=>{
            toast.error((err.data.message), {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
          });
      })
  };

  // profile value set
  useEffect(()=>{
    httpurl.post('student')
        .then((res)=>{
          setProfile(res.data)
          toast.success((res.data.message), {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }).catch((err)=>{
      toast.error((err.data.message), {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
   <>
    <div className='main-content'>
     <div className='body_content'>
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
                            <div className="relative w-8/12 p-10 mx-auto my-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3"> 
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                          Edit Profile
                                        </h4>
                                        <div>
                                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                          <div className='grid grid-flow-row grid-cols-3 gap-4'>
                                          <Form.Item
                                            name={['user', 'name']}>
                                            <Input className='teacher_profile_edit' placeholder='type your name' />
                                          </Form.Item>

                                          <Form.Item
                                            name={['user', 'email']}>
                                            <Input className='teacher_profile_edit' disabled placeholder={usr.email} />
                                          </Form.Item>

                                          <Form.Item
                                              name={['user', 'phone']}>
                                              <Input
                                                  placeholder='type your phone number'
                                                  className='teacher_profile_edit'
                                                style={{
                                                  width: '100%',
                                                }}
                                              />
                                          </Form.Item>

                                            <Form.Item name={['user', 'class']}>
                                              <Select placeholder='Select Class'>
                                                <Select.Option name='nine' value="nine">Nine</Select.Option>
                                                <Select.Option name='ten' value="ten">Ten</Select.Option>
                                                <Select.Option name='inter1st' value="inter1st">Inter 1st year</Select.Option>
                                                <Select.Option name='inter2nd' value="inter2nd">Inter 2nd year</Select.Option>
                                              </Select>
                                            </Form.Item>

                                          <Form.Item
                                            name={['user', 'institute']}>
                                            <Input className='teacher_profile_edit' placeholder='type your Institute' />
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

                                            <Form.Item
                                                name={['user', 'address']}>
                                              <Input className='teacher_profile_edit' placeholder='type your address' />
                                            </Form.Item>

                                          {/*<Form.Item*/}
                                          {/*  name={['user', 'age']}*/}
                                          {/*  label="Age"*/}
                                          {/*  rules={[*/}
                                          {/*    {*/}
                                          {/*      type: 'number',*/}
                                          {/*      min: 6,*/}
                                          {/*      max: 99,*/}
                                          {/*    },*/}
                                          {/*  ]}*/}
                                          {/*>*/}
                                          {/*  <InputNumber />*/}
                                          {/*</Form.Item>*/}
                                          </div>
                                          <div className='flex w-full justify-center'>
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
              <li><b>Name:</b> <span>{profile.name}</span></li>
              <li><b>E-mail:</b> <span>{profile.email}</span></li>
              <li><b>Phone:</b> <span>{profile.phone ? profile.phone : <span className='text-gray-300'>Add Phone Number</span>}</span></li>
              <li><b>Class:</b> <span>{profile.class ? profile.class : <span className='text-gray-300'>Add Class</span>}</span></li>
              <li><b>Institute:</b> <span>{profile.institute ? profile.institute : <span className='text-gray-300'>Add Your Institute</span>}</span></li>
              <li><b>Date of Birth:</b> <span>29 sep 2000</span></li>
            </ul>
          </div>
        </div>
     </div>
      <ToastContainer/>
    </div>
   </>
  )
}

export default StudentProfile