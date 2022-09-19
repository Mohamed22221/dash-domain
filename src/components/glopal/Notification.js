import React from 'react'
import BlurSideBar from '../../layouts/BlurSideBar'
import { FiAlertCircle } from 'react-icons/fi';
import { FiAlertTriangle } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';
import { FiThumbsUp } from 'react-icons/fi';




import { MdOutlineClose } from 'react-icons/md';


const Notification = ({ showBlurSide, setShowBlurSide }) => {
  return (
    <BlurSideBar showBlurSide={showBlurSide} setShowBlurSide={setShowBlurSide}>
      <div className='content-notification'>
        <div className='title-notification'>
          <p>Notification</p>
          <MdOutlineClose onClick={() => setShowBlurSide(true)} />
        </div>
        <div className="alert bg-alert" role="alert">
          <FiAlertTriangle />
          <h6 class="alert-text"> need to be packaged.</h6>
        </div>
        <div className="alert bg-infoo" role="alert">
          <FiBox />
          <h6 class="alert-text"> 4 new components added.</h6>
        </div>

        <div className="alert bg-warnn" role="alert">
          <FiAlertCircle />
          <h6 class="alert-text"> need to be packaged.</h6>
        </div>

        <div className="alert bg-successs" role="alert">
          <FiSend />
          <h6 class="alert-text"> Escalator will turn off at 6:00 pm.</h6>
        </div>
        <div className="alert bg-danger" role="alert">
          <FiThumbsUp />
          <h6 class="alert-text"> need to be packaged.</h6>
        </div>


      </div>
    </BlurSideBar>

  )
}

export default Notification