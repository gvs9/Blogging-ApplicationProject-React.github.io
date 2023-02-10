import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import React, { useState, useRef} from 'react';
import JoditEditor from 'jodit-react';
const Addpost=()=>{

    const editor = useRef(null);
	const [content, setContent] = useState('');


    return (


        <div className="wrapper">
<Card className="shadow">

    <CardBody>

        <h3>What's Your Thought Today?</h3>

        <Form>
            <div className="my-3">
                <Label for="title">Post Title</Label>
                <Input
                type="text"
                id="title"
                placeholder="Enter here"
                className="rounded-0"
                
                />

            </div>

            <div className="my-3">
                <Label for="content">Post Content</Label>
                {/* <Input
                type="textarea"
                id="content"
                placeholder="Enter here"
                className="rounded-0"
                style={{height:"200px"}} 
                
                /> */}
                <JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => setContent(newContent)}
		/>

            </div>

            <div className="my-3">
                <Label for="category">Select Category</Label>
                <Input
                type="select"
                id="category"
                placeholder="Enter here"
                className="rounded-0"
                >

<option>Technology</option>
<option>Sports</option>
<option>Investment</option>
<option>Automobiles</option>
<option>Wildlife</option>

</Input>
            </div>


<Container className="text-center">
    <Button color="primary">Create Post</Button>
    <Button color="danger" className="ms-2">Reset Post</Button>
</Container>

        </Form>
    </CardBody>
</Card>

        </div>
    )




}
export default Addpost;