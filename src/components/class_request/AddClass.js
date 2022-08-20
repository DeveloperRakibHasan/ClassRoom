import React, {useState} from 'react'
import { Input,  DatePicker, Select, Form } from 'antd';
import '../css/class_request.css'

function AddClass() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='card_bg flex justify-center items-center'>
    <button onClick={() => setShowModal(true)}> + Add class Request</button>
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
                                <div className='w-full grid grid-flow-row grid-cols-2 gap-4 mb-4'>
                                <Form.Item>
                                    <Select  placeholder='Select Subject'>
                                    <Select.Option value="math">Math</Select.Option>
                                    <Select.Option value="english">English</Select.Option>
                                    <Select.Option value="bangla">Bangla</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item>
                                    <DatePicker />
                                </Form.Item>
                                </div>
                                <div className='mb-4'><Input placeholder="Title" /></div>

                                <Input.TextArea placeholder="Description.."  style={{
                                    resize: "none",
                                    height: 100,
                                    overflow: 'auto',
                                }} />
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border"
                                        onClick={() =>
                                            setShowModal(false)
                                        }
                                    >
                                        Cancel
                                    </button>
                                    <button type='submit' className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none"
                                        onClick={() =>
                                            setShowModal(false)
                                        }
                                    >
                                        Post
                                    </button>
                                </div>
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