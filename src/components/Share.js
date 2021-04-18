import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Share = ({modal,toggle,titles,des,images,authors,save}) => {
    // const [title,setTitle]=useState("");
    // const [author,setAuthor]=useState("");
    // const [image,setImage]=useState("");
    // const [description,setDescription]=useState("");
    const [comments,setComments]=useState("");
    const [names,setNames]=useState("");
  //   const [modal, setModal] = useState(false);
  //  const toggle = () => setModal(!modal);
    const handleChange=(e) =>{
        const {name,value}=e.target
        if(name==="comments") {
            setComments(value)
        }
        else{
          setNames(value)
        }
  }
    const handleSave =(e)=>{
      e.preventDefault()
      let taskObj={}
      taskObj["title"]=titles
      taskObj["Description"]=des
      taskObj["author"]=authors
      taskObj["image"]=images
      taskObj["comments"]=comments
      taskObj["names"]=names
       save(taskObj);
    }
    
  return (
    
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Share Now</ModalHeader>
        <ModalBody>
        <form>
          <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" defaultValue={titles}/>
           </div>
           <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" defaultValue={des} />
           </div>
            <div className="form-group">
            <label>Your Comments</label>
                 <textarea row="5"  className="form-control"value={comments} onChange={handleChange} name="comments"></textarea>
           </div>  
           <div className="form-group">
              <label>Your Name</label>
              <input type="text" className="form-control" value={names} onChange={handleChange} name="names"/>
           </div>
        </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Share</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
  );
}

export default Share;