import React from 'react'

const CardPackages = ({title , packages , time ,price}) => {
  return (
<div class="item-package col-xl-3">
<span className={title === "" ? "hide" : "title"}>{title}</span>
 <h3 >{packages}</h3>
 <h4 >{price}<span>{time}</span></h4>
</div>
  )
}

export default CardPackages