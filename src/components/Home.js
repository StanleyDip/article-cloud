import React, { useState,useEffect,Component } from 'react';
import axios from 'axios';
import Post from './Post';
import  Pagination  from './Pagination';


 const Home=() => {
     const [posts, setPosts]= useState([]);
    const [loading, setLoading]=useState(false);
    const [CurrentPage, setCurrentPage]=useState(1);
    const [postsPerPage]=useState(5);


    const [taskObjs,setTaskObjs]=useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const paginate=(pageNumber)=> setCurrentPage(pageNumber)

  useEffect(async () => {
    const result = await axios('http://api.mediastack.com/v1/news?access_key=4752578a2773fe59f80646e85df16501&l&sources=en',);
    setLoading(true);
    setPosts(result.data.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    let arr =localStorage.getItem("taskObjs");
    if(arr){
        let obj =JSON.parse(arr)
        setTaskObjs(obj)
        console.log("set  "+taskObjs)
    }
}, [])
   const indexOfLastPost= CurrentPage * postsPerPage
   const indexOfFirstPost=indexOfLastPost - postsPerPage
   const currentPost=posts.slice(indexOfFirstPost,indexOfLastPost)

   const saveObjs =(taskObj)=>{
     
     let dupList=taskObjs
     if(typeof(dupList)==="string"){
      dupList=JSON.parse(taskObjs) 
    }
     console.log("dp "+typeof(dupList))
     dupList.push(taskObj)
    localStorage.setItem("taskObjs",JSON.stringify(dupList))
    setModal(false)
    setTaskObjs(dupList)
    window.location.reload()
}

  return(
    <>
    <Post posts={currentPost} loading={loading} taskObjs={taskObjs} save={saveObjs} modal={modal} toggle={toggle} setModal={setModal}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  )
}



export default Home

  //  useEffect(() => {
  //    const fetchPosts =async ()=>{
  //      setLoading(true)
  //      const res = await axios.get('http://api.mediastack.com/v1/news?access_key=4752578a2773fe59f80646e85df16501&l&sources=en')
  //      setPosts(JSON.stringify(res.data.data))
  //      console.log(posts)
  //      setLoading(false)
  //    }
  //    fetchPosts()
     
  //  }, []);