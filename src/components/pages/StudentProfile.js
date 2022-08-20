import React, { useState } from 'react'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

 
const StudentProfile = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#ddd';
  }

  function closeModal() {
    setIsOpen(false);
  }



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


  return (
   <>
    <div className='main-content bg-slate-50'>
     <div className='body_content'>
        <div className='grid grid-flow-row grid-cols-2 gap-6'>
          <div className='card_bg'>
            <div className='flex'>
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

              <button onClick={openModal} className='bg-gray-50 shadow-md py-2 px-4 rounded-md'>Edit Profile</button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Profile</h2>
                  <button onClick={closeModal}>close</button>
                  <div>I am a modal</div>
                  <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                  </form>
                </Modal>
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
          <div className='card_bg'>
            <h2>Upcoming Event</h2>
          </div>
        </div>
     </div>
    </div>
   </>
  )
}

export default StudentProfile