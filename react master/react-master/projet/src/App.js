import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div>
      <Form style={{width:"80%", marginLeft:"150px",marginTop:"1%"}}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="Nom" placeholder="Entrer Nom" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Prenom</Form.Label>
    <Form.Control type="Prenom" placeholder="Entrer prenom" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Date de naissance</Form.Label>
    <Form.Control type="date de naissance" placeholder="Entrer date de naissance" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Sexe</Form.Label>
    <Form.Select Sexe>
      <option>Homme</option>
      <option>Femme</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="adresse" placeholder="Entrer votre adresse" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Ville</Form.Label>
    <Form.Select Ville>
      <option>Tunis</option>
      <option>Ariana</option>
      <option>Béja</option>
      <option>Ben Arous</option>
      <option>Bizerte</option>
      <option>Gabès</option>
      <option>Gafsa</option>
      <option>Jendouba</option>
      <option>Kairouan</option>
      <option>Kasserine</option>
      <option>Kébili</option>
      <option>Le Kef</option>
      <option>Mahdia</option>
      <option>La Manouba</option>
      <option>Médenine</option>
      <option>Monastir</option>
      <option>Nabeul</option>
      <option>Sfax</option>
      <option>Sidi Bouzid</option>
      <option>Siliana</option>
      <option>Sousse</option>
      <option>Tataouine</option>
      <option>Tozeur</option>
      <option>Zaghouan</option> 
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Write your Email like aaa@aa.com.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
</Form>
</div>

<div style={{marginTop:"50px", margin:"0 auto", display:"flex", justifyContent:"center"}}>
<Button as="input" type="submit" value="Submit" />{' '}
</div>

    </div>
  );
}

export default App;
