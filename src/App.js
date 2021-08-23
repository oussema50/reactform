import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import './App.css';


function App() {
  return (
    <div className="App" style = {{backgroundColor:'white',width:'60%',padding:'40px 30px',margin:'50px auto',borderRadius:'10px', boxShadow:'10px 10px 25px rgb(0 0 0 / 10%)'}}>
      <div className = "title" style = {{marginBottom:'30px',textAlign:'center'}}>
        <h2 style = {{fontSize:'40px',fontWeight:'700',textTransform:'capitalize', marginBottom:'15px'}}>sing up</h2>
        <span style = {{fontSize:'20px'}}>let's create your account</span>
      </div>
      <Form className = "form" >
        <div className = "form-content" style = {{display:'flex',alignItem:'center',justifyContent:'center',flexDirection:'column'}}>
          <Form.Group className="mb-3" style = {{display:'flex',alignItem:'center',justifyContent:'space-between'}}>
            <Form.Control 
            style = {{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none', marginBottom :'20px',borderBottom: '1px solid #707173',borderRadius: '0',width:'45%'}} 
            type="text" placeholder="First Name" />
            <Form.Control
              style = {{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none', marginBottom :'20px',borderBottom: '1px solid #707173',borderRadius: '0',width:'45%'}} 
            type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" style = {{display:'flex',alignItem:'center',justifyContent:'space-between'}}>
            <Form.Control 
              style = {{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none', marginBottom :'20px',borderBottom: '1px solid #707173',borderRadius: '0',width:'45%'}} 
              type="email" placeholder="Enter email" />
            <Form.Control 
              style = {{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none', marginBottom :'20px',borderBottom: '1px solid #707173',borderRadius: '0',width:'45%'}} 
              type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
            style = {{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none', marginBottom :'20px',borderBottom: '1px solid #707173',borderRadius: '0'}} 
            type="text" placeholder="Phone Number" />  
          </Form.Group>
        </div>
        
        
        <Button variant="primary" type="submit" style={{width: '150px', margin: 'auto', display: 'block'}}>
          Submit
        </Button>
      </Form>     
    </div>
  );
}

export default App;
