import React from 'react'
import Card from './shared/Card'
import {useParams} from 'react-router-dom'

function Post() {
    const  params=useParams()
  return (

   
    <div>
        <Card>
            <h1>Post Page {params.id}<br>
            </br>
            Name: {params.name}</h1> 

        </Card>
    </div>
  )
}

export default Post