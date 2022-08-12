import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

  const {feedback, isLoading}= useContext(FeedbackContext)
    //console.log(feedback)
    if(!isLoading && (!feedback || feedback.length===0)){
      return   <div className=""> No feedback yet</div>
    }
  
    return isLoading ? <Spinner/> : (
    <div className="feedback-list">
    <AnimatePresence>
  {feedback.map((item)=>(
      <motion.div 
      key={item.text}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit= {{opacity:0}}
      layout
      >
      <FeedbackItem  
      key={item.id} 
      item={item} 
      />
      </motion.div>
  ))}
    </AnimatePresence>
</div>
)
 

  // return (
  //     <div className='feedback-list'>
  //       {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item} />
  //       ))}
  //     </div>
  //   )
}


export default FeedbackList