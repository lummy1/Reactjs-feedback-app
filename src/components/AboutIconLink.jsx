import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className=''>
        <Link to={{
            pathname:'/about',
            search: '?sort=name',
            hash: '#hello'
            
        }}>
            
        <FaQuestion size={30} color='purple' />
        </Link>
        </div>
  )
}

export default AboutIconLink