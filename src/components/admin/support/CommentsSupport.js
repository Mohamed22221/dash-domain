
import React from 'react'
import comment from "../../../assets/images/main/comment.png"
import arrow from "../../../assets/images/icons/arrow.svg"
import { motion } from "framer-motion"

const CommentsSupport = ({ DataComment }) => {
    // motion effict
    const initial = { x: 0, y: -12, opacity: 0 }
    const animate = { x: 0, y: 0, opacity: 1 }
    const transition = { duration: 0.5 }
  
  return (
    <div className=' col-lg-7 col-xl-8'>
      <motion.div initial={initial} animate={animate} transition={transition} className='main-comments-support'>
        <h3>{DataComment.title}</h3>
        
          {DataComment.comments.map((item , index) => {
            return (
              <div className='comments-support' key={index}>
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
        
      </motion.div >

    </div>
  )
}

export default CommentsSupport