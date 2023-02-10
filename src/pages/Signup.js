import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row,Col } from "reactstrap";
import Base from "../components/Base";

const Signup =()=>{

    return(
    
        <Base>
        <Container>

<Row className="mt-4">

<Col sm={{size:6,offset:3}}>

<Card color="dark" inverse>

<CardHeader>
    <h4>Fill information to Register!!</h4>
</CardHeader>

<CardBody>


    <Form>

<FormGroup>
    <Label for="name">Enter Name </Label>
    <Input 
    type="text"
    placeholder="Enter Here"
    id="name"
    />
    </FormGroup>


    <FormGroup>
    <Label for="email">Enter Email </Label>
    <Input 
    type="email"
    placeholder="Enter Here"
    id="email"
    />
    </FormGroup>




    <FormGroup>
    <Label for="email">Enter Password </Label>
    <Input 
    type="password"
    placeholder="Enter Here"
    id="password"
    />
    </FormGroup>


    <FormGroup>
    <Label for="about">About </Label>
    <Input 
    type="textarea"
    placeholder="Enter Here"
    id="about"
    />
    </FormGroup>

<Container className="text-center">
    <Button  outline color="light">Register</Button>
    <Button  outline color="secondary" type="Reset" className="ms-2">Reset</Button>
</Container>



    </Form>
</CardBody>

            </Card>
</Col>

</Row>
      
        </Container>
     
        
        </Base>
    )
    
    }
    export default Signup;