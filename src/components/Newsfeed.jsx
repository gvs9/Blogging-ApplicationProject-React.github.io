import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row ,Pagination,PaginationItem,PaginationLink} from 'reactstrap';

import Base from './Base';

const  Newsfeed=()=> {
  return (
   
    <Container>
         <h1>News Feed</h1>
    <Row>

<Col md={{
    size:10,
    offset:1
}}>

<h3>Information</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae laboriosam veniam, dolores quisquam illum neque rerum id nulla quidem voluptate expedita repellat maxime vero, ratione accusantium placeat. Suscipit perspiciatis veritatis neque harum veniam corrupti sequi, ratione quis exercitationem nulla officiis tenetur ipsum repellendus amet, aliquam iste. Esse, error? Voluptatum et provident vero illo excepturi culpa ducimus tempore sint sed quaerat atque perferendis, vitae quisquam consequatur cupiditate enim magni sunt quo non. Atque officiis quis quod nisi nulla non amet dolor eum ratione labore, neque voluptates rem adipisci dignissimos molestiae cum enim aliquam omnis suscipit nobis eius soluta cumque. Praesentium obcaecati inventore distinctio animi neque expedita assumenda nam nesciunt error nostrum tenetur adipisci sed eum vel cupiditate, deserunt est, voluptatem aspernatur hic tempora natus voluptatibus impedit iure. Iure quo placeat minus hic corporis! Porro maxime natus eum quasi ex, tempora sit laboriosam sed voluptates qui quas deleniti nostrum reiciendis odio unde perferendis magni. Rerum, incidunt vitae optio nisi expedita dolorum. Laudantium dolorem veritatis similique. Obcaecati accusamus quos voluptates tenetur dignissimos exercitationem debitis aspernatur ex placeat veritatis, tempore doloremque omnis vel deserunt. Atque ad fugiat molestiae, voluptate dolores accusamus ab quo odio deserunt, placeat totam doloremque itaque nesciunt adipisci earum inventore voluptatibus blanditiis corporis esse modi laboriosam, dolorum cum perferendis quia! Inventore animi eaque labore rerum est eveniet quidem quo aspernatur at natus ratione corrupti, officiis perspiciatis esse asperiores porro commodi ex debitis nesciunt doloremque aliquam magni consectetur nostrum nam! Asperiores nulla nam in temporibus deserunt recusandae et cum, ea iusto dolorem! Voluptatum, rem! Ratione laboriosam minus nemo accusantium veniam rem delectus saepe, optio, aut deleniti assumenda quas obcaecati culpa totam. Incidunt nulla, cupiditate magnam placeat pariatur corrupti eos explicabo doloribus quam at tempore velit molestiae perferendis. Maxime amet explicabo sunt a dolorum ad, repudiandae, consequuntur, suscipit inventore accusantium quibusdam laudantium.</p>


<div>
    <Link className='btn-btn-secondary' to="/post">Read More</Link>
</div>


<Pagination
  aria-label="Page navigation example"
  size="sm"
>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    >
      First
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      previous
    >
      Previous
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    >
      Next
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    >
      Last
    </PaginationLink>
  </PaginationItem>
</Pagination>

</Col>
</Row>


    </Container>
    
    




  )
}
export default Newsfeed;