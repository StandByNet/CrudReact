import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem,Button } from 'reactstrap'
import {GlobalContext} from '../context/GlobalState';


export const UserList = () => {
  const{ users } =useContext(GlobalContext);
  console.log(users);
  return (
   <ListGroup className='mt-4'>
     { 
     users.map(user=>(

     <ListGroupItem className='d-flex'> 
       <strog> {user.name}</strog> 
             <div className='ml-auto'>
               <Link className='btn btn-warning mr-1' to="/edit/1">Modifier</Link>
               <Button color='danger'> Supprimer</Button>
               </div>
     </ListGroupItem>
      
      )) 
    }
    </ListGroup>
     )
  }
export default UserList;


