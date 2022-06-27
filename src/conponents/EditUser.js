import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const EditUser = () => {
  return (
    <Form> 
    <FormGroup>
      <Label>Nom</Label>
      <Input type="text" placeholder='Modéfié le Nom'></Input>
    </FormGroup>
    <Button type="submit"> Valider la modéfication</Button>
    <Link to ="/" className='btn btn-danger ml-2'> Annuler</Link>
  </Form>
  )
}

export default EditUser;     
