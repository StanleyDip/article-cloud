import React,{useState,useEffect} from 'react';
import Share from './Share'
import {
    Card, CardText, CardBody, CardLink,CardImg,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
  import Button from 'react-bootstrap/Button';
  import { Spinner } from 'reactstrap';
  import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
 
const Post=({posts,loading,save})=> {
 const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   const [titles,setTitles]=useState("");
   const [authors,setAuthors]=useState("");
   const [images,setImages]=useState("");
   const [descriptions,setDescriptions]=useState("");
    if(loading){
        return<Spinner color="warning"/>
    }
    return (
        <div className="d-flex flex-wrap ">{
          posts.length?
          posts.map(post=><div key={post.title} className="mt-3 mb-3 ml-3 mr-3 align-self-sm-center" style={{ maxWidth: '600px',maxHeight: '500px' }}>
         <Card>
        <CardBody>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{post.author}</CardSubtitle>
        </CardBody>
        <img width="318px" height="180px" src={post.image} alt={post.url} />
        <CardBody>
          <CardText href={post.url}>{post.description}</CardText>
            <Button type="button" onClick={()=>{setModal(true); setTitles(post.title);setAuthors(post.author);setImages(post.image);setDescriptions(post.description)}} className="btn btn-primary">Share Now</Button>
            {modal?
                  <Share toggle={toggle} modal={modal} titles={titles} des={descriptions} authors={authors} images={images} save={save}/>:
                  null
            }
        </CardBody>
      </Card> 
      </div>
        ):
          null
    }
      </div>
      )
}

export default Post
// ()=>
//<Share toggle={toggle} modal={modal} titles={post.title} des={post.description}/>