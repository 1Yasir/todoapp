import React from 'react'
import Table from 'react-bootstrap/Table';

function QuizApp() {
    const stu = [
        {
            name : "Yasir Mehmood 1",
            address :"Lorem ipsum doolr is american writter.",
            email:"azmyasir250@gmail.com"        },
        {
            name : "Yasir Mehmood 2",
            address :"Lorem ipsum doolr is american writter.",
            email:"azmyasir250@gmail.com",
        },
        {
            name : "Yasir Mehmood 3",
            address :"Lorem ipsum doolr is american writter.",
            email:"azmyasir250@gmail.com",

        },
        {
            name : "Yasir Mehmood 4",
            address :"Lorem ipsum doolr is american writter.",
            email :"azmyasir250@gmail.com"
        },
    ];
  return (
    <div className='container'>
         <Table striped bordered hover variant="primary">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
            stu.map((stu , index)=>(
                <tr>
                <td>{index + 1}</td>
                <td>{stu.name}</td>
                <td>{stu.address}</td>
                <td>{stu.email}</td>
              </tr>
            ))
        }
       
      
      </tbody>
    </Table>
       
      
        
    </div>
  )
}

export default QuizApp