import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {
    

    

    const [text,setText]= useState('')
    const [rating,setRating]= useState('10')
    const [btnDisable,setbtnDisable]= useState(true)
    const [message,setMessage]= useState('')

    const {addFeedback, updateFeedback, feedbackEdit }= useContext(FeedbackContext)

    useEffect(()=> {
        if(feedbackEdit.status=== true){
            setbtnDisable(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text=== ''){
            setbtnDisable(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setbtnDisable(true)
            setMessage('Characters should be more than 10')
        }else{
            setbtnDisable(false)
            setMessage(null)

        }
      setText(e.target.value)
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
                const newFeedback = {

                    text,
                    rating
                }

                if(feedbackEdit.status===true){
                    updateFeedback(feedbackEdit.item.id, newFeedback)
                }else{
                addFeedback(newFeedback) 
                }
        }

         setText('')
    }

    
  return (
    
    <Card>
        <form onSubmit={handleSubmit}>
        <p>What can you tell us about our service to you?</p>

        <RatingSelect select={(rating)=>setRating(rating)} />
    <div className="input-group">
        <input type="text" onChange={handleTextChange} placeholder="write a review" value={text} />
        <Button type="submit" isDisabled={btnDisable} >Send</Button>

    </div>

    {message && <div className="message">{message}</div>}
    </form>
    </Card>
  )
}

export default FeedbackForm