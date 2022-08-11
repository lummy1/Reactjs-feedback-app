import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About Project</h1>
      <p>This is a feedback project</p>
      <Link to='/'>Go back Home</Link>


    </Card>
  )
}

export default AboutPage