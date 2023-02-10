import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row,Col } from "reactstrap";
import Base from "../components/Base";

const Login =()=>{

    return(
    
        <Base>
    
    <Container>

<Row className="mt-4">

<Col sm={{size:6,offset:3}}>
<Card color="dark" inverse>

<CardHeader>
    <h4>Login Here!!</h4>
</CardHeader>

<CardBody>


    <Form>



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
    export default Login;