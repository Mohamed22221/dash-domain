import React, { useState } from 'react'
import CommentsSupport from './CommentsSupport'
import ItemsSupport from './ItemsSupport'

const MainSupport = () => {


 const DataSupport = [
  {
   title: "#241 - Status of some DZ, DL and XB shipments showing Delivered",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Lindsey Stroud",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Lindsey Stroud",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  }

 ]
 console.log(DataSupport[0])
 const DataSupportClosed = [
  {
   title: "#241 - Status of some DZ, DL and XB shipments showing Delivered",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  },
  {
   title: "#242 -Cannot  access the system",
   date: "04/04/2022, 10:00 AM",
   comments: [
    {
     name: "Rebecca Moore",
     date: "04/04/2022, 10:00 AM",
     text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
   ]
  }

 ]
 const [DataComment, setDataComment] = useState(DataSupport[0])
 return (
  <div className='main-support space-section row '>
   <ItemsSupport
    DataSupport={DataSupport}
    DataSupportClosed={DataSupportClosed}
    setDataComment={setDataComment}

   />

   <CommentsSupport
   DataComment={DataComment}  
   />
  </div>
 )
}

export default MainSupport