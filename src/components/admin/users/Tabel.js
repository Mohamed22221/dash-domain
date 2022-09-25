import React, { useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import DomyData3 from "../../glopal/DomyData3";
import preson from "../../../assets/images/main/account.png"
import DetailsPerson from "./DetailsPerson";
import { motion } from "framer-motion"
const Tabel = () => {
  const [checked, setChecked] = useState(false);
  const [activeAfter, setActiveAfter] = useState("");
  const [detailsPerson, setDetailsPerson] = useState({});

  //motion effict
  const initial = { x: 0, y: -12, opacity: 0 }
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.5 }


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
    <motion.div initial={initial} animate={animate} transition={transition} className="main-tabel">



      <table
        className={checked[keyChecked] === true ? "tabel sm-width"
          : checked[keyChecked] === false ? "tabel xl-width"
            : "tabel xl-width"}

      >

        {/*head tabel*/}
        <thead>
          <tr><th> <td> <BsCheck2Square /> </td> </th>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Invoice</th>
            <th>Action</th>
          </tr>
        </thead>
        {/*body tabel*/}
        <tbody>
          {DomyData3.map((item, index) => {
            return (
              <tr key={index}>
                <td className={activeAfter[index]}>
                  <input type="checkbox" checked={checked[index]} onChange={(e) => HandelChangeCheckbox(e, index, item)}
                  />
                </td>
                <td><img src={preson} />{item.client} </td>
                <td>#{item.id}</td>
                <td>{item.email}</td>
                <td className={item.type === "Shard host" ? "green" : item.type === "Domain" ? "blue" : "red"}>
                  {item.type}
                </td>
                <td><BsThreeDots /></td>
              </tr>
            );
          })}
        </tbody>

      </table>

      {/*DetailsPerson tabel*/}
      <DetailsPerson checked={checked}  keyChecked={keyChecked} detailsPerson={detailsPerson}  />
    </motion.div>
  )
}

export default Tabel