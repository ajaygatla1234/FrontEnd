import React from 'react';

const teachersData = [
  {
    name: 'Subbu',
    gender: 'Female',
    empNo: '1',
    address: 'Manikonda',
    qualification: 'Degree',
    image: 'https://cdn.pixabay.com/photo/2016/03/26/17/45/teacher-1280966_640.jpg',
    
  },
  {
    name: 'Jaggu',
    gender: 'Male',
    empNo: '2',
    address: 'Ameerpet',
    qualification: 'B.Tech',
    image: 'https://cdn.pixabay.com/photo/2016/10/30/05/43/school-1782427_640.jpg',
  },
  {
    name: 'Prashanth',
    gender: 'Male',
    empNo: '3',
    address: 'Sanath Nagar',
    qualification: 'B.Tech',
    image: 'https://cdn.pixabay.com/photo/2015/01/22/14/47/businessman-607788_640.png',
  },
  {
    name: 'Srinu',
    gender: 'Male',
    empNo: '4',
    address: 'Hitec city',
    qualification: 'Degree',
    image: 'https://cdn.pixabay.com/photo/2019/01/06/15/02/the-teacher-3917155_640.jpg',
  },
  {
    name: 'Rakesh',
    gender: 'Male',
    empNo: '5',
    address: 'KPHB',
    qualification: 'B.tech',
    image: 'https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909_640.jpg',
  },
]

function SchoolComponent() {
  return (
    <div>
      <h1>School Teachers</h1>
      {teachersData.map((teacher, index) => (
        <div key={index}>
          <p>Name : {teacher.name}</p>
          <p>Gender: {teacher.gender}</p>
          <p>Employee Number: {teacher.empNo}</p>
          <p>Address: {teacher.address}</p>
          <p>Qualification: {teacher.qualification}</p>
          <img width={150} src={teacher.image} />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default SchoolComponent;
