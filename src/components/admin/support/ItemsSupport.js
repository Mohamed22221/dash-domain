import React, { useEffect, useState } from 'react'
import { GoComment } from 'react-icons/go';
import { motion } from "framer-motion"


const ItemsSupport = ({ DataSupport, DataSupportClosed,setDataComment }) => {
  const [toggleActive, setToggleActive] = useState(true)
  const [activeItem, setActiveItem ,] = useState("");
  const HandelActiveItem = (index ,item) => {
    setActiveItem({ [index]: "item-support active-item" });
    setDataComment(item)
  }
  useEffect(() => {
    setActiveItem({ 0: "item-support active-item" });
  }, [setActiveItem, setDataComment ])
  // motion effict
  const initial = { x: 0, y: -12, opacity: 0 }
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.5 }

  return (
    <div className='main-items-support col-lg-5 col-xl-4 p-0'>
      <motion.div initial={initial} animate={animate} transition={transition} className='items-support '>
        {/*two button toggle*/}
        <div className='toggle-button'>
          <button className={toggleActive ? 'active' : ""} onClick={() => setToggleActive(true)}>
            Active
            <span>({DataSupport.length})</span>
          </button>
          <button className={toggleActive ? "" : 'active'} onClick={() => setToggleActive(false)}>
            Closed
            <span>({DataSupportClosed.length})</span>
          </button>
        </div>
        {/*show data support */}
        <div className='data-support'>
          {toggleActive ? DataSupport.map((item, index) => {
            return (
              <div key={index} className={`item-support ${activeItem[index]}`} onClick={() => HandelActiveItem(index ,item)}>
                <h5>{item.title}</h5>
                <div className='date'>
                  <p>{item.date}</p>
                  <span>3<span><GoComment /></span></span>
                </div>
              </div>
            )
          })

            : DataSupportClosed.map((item, index) => {
              return (
                <div key={index} className={`item-support ${activeItem[index]}`} onClick={() => HandelActiveItem(index ,item)}>

                  <h5>{item.title}</h5>
                  <div className='date'>
                    <p>{item.date}</p>
                    <span>3<span><GoComment /></span></span>
                  </div>
                </div>
              )
            })

          }

        </div>

      </motion.div >
    </div>
  )
}

export default ItemsSupport