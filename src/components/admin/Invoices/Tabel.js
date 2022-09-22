import React, { useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import DomyData2 from "../../glopal/DomyData2";
import preson  from "../../../assets/images/main/account.png"

const Tabel = () => {
 const [checked, setChecked] = useState(false);
 const [activeAfter, setActiveAfter] = useState("");
 const [detailsPerson, setDetailsPerson] = useState({});

 //handel class & cheacked when onClick checkbox
 const HandelChangeCheckbox = (e, index, item) => {
   if (e.target.checked === true) {
     setActiveAfter({ [index]: "active-person" });
     setChecked({ [index]: true });
     setDetailsPerson(item);
   } else {
     setActiveAfter({ [index]: "" });
     setChecked({ [index]: !checked });
     setDetailsPerson({});
   }
 };
 const keyChecked = Object.keys(checked)[0];
 return (
  <div className="main-tabel">
   <table
    className="tabel"
    style={{width:checked[keyChecked] === true ? "74%"
       : checked[keyChecked] === false? "100%": "100%",
    }}
   >
    {/*head tabel*/}
    <thead>
     <tr><th> <td> <BsCheck2Square  /> </td> </th>
      <th>Client</th>
      <th>Start</th>
      <th>End</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Action</th>
     </tr>
    </thead>
    {/*body tabel*/}
    <tbody>
     {DomyData2.map((item, index) => {
      return (
       <tr key={index}>
        <td className={activeAfter[index]}>
         <input type="checkbox" checked={checked[index]}onChange={(e) => HandelChangeCheckbox(e, index, item)}
         />
        </td>
        <td><img src={preson} />{item.client} </td>
        <td>{item.start}</td>
        <td>{item.end}</td>
        <td>{item.amount}</td>
        <td className={item.type === "Shard host" ? "green" :item.type === "Domain" ? "blue" : "red" }>
         {item.type}
         </td>
        <td><BsThreeDots/></td>
       </tr>
      );
     })}
    </tbody>
   </table>
  </div>
 )
}

export default Tabel