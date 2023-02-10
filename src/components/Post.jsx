import React from 'react'
import { Container,Row,Col, Card, CardBody, Input, Button } from 'reactstrap';

const Post=()=> {
  return(
<Container>
<h1> Posts Page</h1>
<Row>
<Col md={{
    size:10,
    offset:1
}}>
<h3>More Info</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tempora unde facere vero, illum doloremque dolore veritatis nam iure illo saepe. Similique fugiat nemo laborum voluptates neque deleniti, iusto natus sed veritatis corrupti delectus totam consequuntur qui quos quod? Sapiente necessitatibus accusamus ab quod explicabo ipsum, inventore asperiores commodi assumenda voluptatum quas voluptates earum! Laudantium, ut enim delectus iste illum, suscipit numquam sapiente repudiandae debitis, excepturi impedit est. Qui, recusandae rem? Officia, quibusdam alias! Aliquam odio sit labore tempora, atque voluptatibus iste nihil ad laborum dignissimos at sed magnam necessitatibus ipsa delectus, quod maiores, quasi corrupti omnis. Amet obcaecati eum reprehenderit magni, accusamus tempora ducimus veritatis magnam aperiam molestias at, nemo ab esse fugit totam iure. Nesciunt adipisci exercitationem non voluptatem dolorem fugiat fuga accusamus dicta odit quo officia ipsum aliquam rem error, tempore delectus recusandae voluptate nemo laudantium. Veniam necessitatibus earum, ullam beatae eum ea excepturi eligendi et saepe!</p>

</Col>
</Row>


<Row className='mt-4'>
    <Col md={{
        size:9,
        offset:1
    }}>
    
    <h3>Comments</h3>
<Card className='mt-4'>
    <CardBody>

        <Input type="textarea" placeholder="Enter Comments Here"/>
        <Button className='mt-2' color="primary">Submit</Button>
        
    </CardBody>
</Card>

    </Col>
</Row>
</Container>






  )
  
}

export default Post;