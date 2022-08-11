import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

  const {feedback}= useContext(FeedbackContext)
    //console.log(feedback)
    if(!feedback || feedback.length===0){
      return   <div className=""> No feedback yet</div>
    }
    
  return (
    <div className="feedback-list">
          {/* <AnimatePresence> */}
        {feedback.map((item)=>(
            // <motion.div 
            // key={item.text}
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // exit= {{opacity:0}}
            // >
            <FeedbackItem  
            key={item.id} 
            item={item} 
            />
            // </motion.div>
        ))}
          {/* </AnimatePresence> */}
    </div>
  )
}


export default FeedbackList