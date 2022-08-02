import React, {useState, useEffect} from 'react'


function DataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{

        fetch('http://localhost:4000/images')
        .then(resp => resp.json())
        .then(imgfromsrv => {
            console.log("yoo im dumb")
            
          
    },[] )



}
