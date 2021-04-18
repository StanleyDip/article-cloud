import React,{useState} from 'react'
import {
    Card, CardText, CardBody, CardLink,CardImg,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
  import Button from 'react-bootstrap/Button';
 const MyCollections=()=> {
    const [taskObjs,setTaskObjs]=useState([]);
    let posts=localStorage.getItem("taskObjs")
    posts=JSON.parse(posts)
    return (
        <div className="d-flex flex-wrap ">{
          posts.length?
          posts.map(post=><div key={post.title} className="mt-3 mb-3 ml-3 mr-3 align-self-sm-center" style={{ maxWidth: '600px',maxHeight: '500px' }}>
         <Card>
        <CardBody>
        <CardTitle tag="h6">Shared by: {post.names}</CardTitle>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">{post.author}</CardSubtitle>
        </CardBody>
        <img width="318px" height="180px" src={post.image} />
        <CardBody>
          <CardText >{post.Description}</CardText>
          <CardTitle tag="h5">Comments: {post.comments}</CardTitle>
        </CardBody>
      </Card> 
      </div>
        ):
          null
    }
      </div>
      )
}

export default MyCollections
