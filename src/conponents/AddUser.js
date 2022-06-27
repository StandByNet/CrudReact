import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
const AddUser = () => {
  return (
    <Form> 
      <FormGroup>
        <Label>Nom</Label>
        <Input type="text" placeholder='Entrée le Nom'></Input>
      </FormGroup>
      <Button type="submit"> Valider</Button>
      <Link to ="/" className='btn btn-danger ml-2'> Annuler</Link>
    </Form>
  )
}

export default AddUser;
