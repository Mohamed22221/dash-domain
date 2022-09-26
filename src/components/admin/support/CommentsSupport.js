
import React from 'react'
import comment from "../../../assets/images/main/comment.png"
import arrow from "../../../assets/images/icons/arrow.svg"

const CommentsSupport = ({ DataComment }) => {
  return (
    <div className=' col-lg-7 col-xl-8'>
      <div className='main-comments-support'>
        <h3>{DataComment.title}</h3>
        
          {DataComment.comments.map((item) => {
            return (
              <div className='comments-support'>
                <div className='head-comments'>
                  <div className='person'>
                    <img src={comment} alt="comment"  />
                    <h5>{item.name}</h5>
                  </div>
                  <p className='date'>{item.date}</p>
                </div>
                <p>{item.text}</p>
                
                
              </div>
            )
          })}
          <div className='reply'>
          <input type="text"className="input " placeholder={"Write a Reply..."}/>
          <button><img src={arrow} alt="arrow" /></button>


          </div>
        
      </div>

    </div>
  )
}

export default CommentsSupport