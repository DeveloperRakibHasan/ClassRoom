import React, {useState} from 'react'
import { Input,  DatePicker, Select, Form, Upload, TimePicker, Button } from 'antd';
import '../css/class_request.css'
import AuthUser from '../auth/AuthUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51LdzDOE67cQ6UeN0eN1h9gdxcaw2RDunHYJHx7WmfF0GP4X7oQ74dHi5khNrLM1uB5tYtgmGNuwKq0a4GCABdmCG00NUSMgDPh"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function AddClass() {
    const {httpurl} = AuthUser();

    const onFinish = async (value) => {
        const date = moment(value.date).format('YYYY-MM-DD');
        const time = moment(value.start_time).format('HH:MM');
        const endTime = moment(value.end_time).format('HH:MM');

        // console.log(date)
        value = {
            subject: value.subject,
            title: value.title,
            description: value.description,
            date: date,
            start_time: time,
            end_time: endTime,
            image: value.image,
        }
        console.log(value)
        httpurl.post('problems', value)
        .then((res) => {
            toast.success('Successfully Create.', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
                setShowModal(false)
            }, 2000)
        })
        .catch((err) => {
            toast.error('OOps! No create request', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        })
        // console.log(value)
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
                    onClick={() => setShowModal(false)}>
                </div>
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
                                encType='multipart/form-data'
                                >
                                <div className='w-full grid grid-flow-row grid-cols-3 gap-4 mb-4'>
                                <Form.Item name='subject'
                                rules={[
                                    {
                                        required: true,
                                        message: 'choce your subject!',
                                    },
                                    ]}>
                                    <Select name="subject" placeholder='Select Subject'>
                                    <Select.Option name='math' value="math">Math</Select.Option>
                                    <Select.Option name='english' value="english">English</Select.Option>
                                    <Select.Option name='bangla' value="bangla">Bangla</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item  name='date'
                                rules={[
                                    {
                                        required: true,
                                        message: 'select date!',
                                    },
                                    ]}>
                                    <DatePicker format='DD/MM/YYYY' showTime={false} className='custom_datepiker' />
                                </Form.Item>

                                <Form.Item name="start_time">
                                    <TimePicker format='HH:mm' showNow={false} placeholder='start time' />
                                </Form.Item>

                                    <Form.Item name="end_time">
                                        <TimePicker format="HH:mm" showNow={false} placeholder='end time' />
                                    </Form.Item>

                                    <Form.Item className='col-span-2' name='title'
                                               rules={[
                                                   {
                                                       required: true,
                                                       message: 'type your title!',
                                                   },
                                               ]}>
                                        <Input name='title' placeholder="Title" />
                                    </Form.Item>

                                </div>
                                <Form.Item name='description'>
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
                                    {fileList.length < 1 && '+ Upload'}
                                    </Upload>
                                </Form.Item>
                               </div>
                                <div className='pb-4'>
                                    <b>Add Payment:</b>
                                   <Elements stripe={stripeTestPromise}>
                                       <PaymentForm />
                                   </Elements>
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
                                <ToastContainer/>
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