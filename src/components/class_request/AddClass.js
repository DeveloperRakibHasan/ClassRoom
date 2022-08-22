import React, {useState} from 'react'
import { Input,  DatePicker, Select, Form, Upload, TimePicker, Button } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import '../css/class_request.css'

function AddClass() {


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
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

    const [showModal, setShowModal] = useState(false);
  return (
    <div>
    <button onClick={() => setShowModal(true)}> + add class request</button>
    {showModal ? (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 sm:flex">
                            
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                   ClassRoom Request
                                </h4>

                                <Form 
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                <div className='w-full grid grid-flow-row grid-cols-3 gap-4 mb-4'>
                                <Form.Item name='select-subject' 
                                rules={[
                                    {
                                        required: true,
                                        message: 'choce your subject!',
                                    },
                                    ]}>
                                    <Select  placeholder='Select Subject'>
                                    <Select.Option name='math' value="math">Math</Select.Option>
                                    <Select.Option name='english' value="english">English</Select.Option>
                                    <Select.Option name='bangla' value="bangla">Bangla</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item  name='date-picker' 
                                rules={[
                                    {
                                        required: true,
                                        message: 'select date!',
                                    },
                                    ]}>
                                    <DatePicker className='custom_datepiker' />
                                </Form.Item>
                                <Form.Item name="time-picker">
                                    <TimePicker />
                                </Form.Item>
                                </div>
                                <div className='mb-4'>
                                    <Form.Item name='title' 
                                    rules={[
                                    {
                                        required: true,
                                        message: 'type your title!',
                                    },
                                    ]}>
                                        <Input name='title' placeholder="Title" />
                                    </Form.Item>
                                </div>

                                <Form.Item name='details'>
                                <Input.TextArea placeholder="Description.."  style={{
                                    resize: "none",
                                    height: 100,
                                    overflow: 'auto',
                                }} />
                                </Form.Item>

                               <div className='mt-6'>
                               <Form.Item label="Upload" valuePropName="fileList">
                               <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}>
                                    {fileList.length < 2 && '+ Upload'}
                                    </Upload>
                                </Form.Item>
                               </div>

                                <div className="justify-center gap-2 mt-3 flex">
                                   <div> 
                                   <button
                                        className="py-1 px-3 flex-1 text-white rounded-sm bg-red-500 outline-none border"
                                        onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    </div>
                                   <div>
                                   <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Post
                                    </Button>
                                    </Form.Item>
                                   </div> 
                                </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null}



    </div>
  )
}

export default AddClass