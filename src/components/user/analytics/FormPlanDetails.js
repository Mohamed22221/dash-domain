import React from 'react'
import InputField from '../../glopal/InputField'

const FormPlanDetails = ({setTogglePlan}) => {
  return (
    <form>
     <div className='d-flex justify-content-evenly' >
     <InputField title="Current plan" type="number" placeholder="VPS 4" />
     <InputField title="Expiration date" type="date" placeholder="VPS 4" />
     </div>
     <div className='d-flex justify-content-evenly' >
     <InputField title="CPU coresn" type="number" placeholder="4" />
     <InputField title="Memory" type="number" placeholder="4 GB" />
     </div>
     <div className='d-flex justify-content-evenly' >
     <InputField title="Bandwidth" type="number" placeholder="4 TP" />
     <InputField title="Disk space" type="number" placeholder="80GB" />
     </div>
     <div className='buttons d-flex justify-content-end '>
     <button className='btn btn__secound'  onClick={() =>setTogglePlan(true)} >cancel</button>
     <button className='btn btn__primary ' onClick={() =>setTogglePlan(true)} >save</button>



     </div>
    </form>
  )
}

export default FormPlanDetails