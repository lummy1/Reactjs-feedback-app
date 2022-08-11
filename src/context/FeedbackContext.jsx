import {v4 as uuidv4} from "uuid"
import { createContext, useState } from "react";


const FeedbackContext= createContext()

export const FeedbackProvider = ({children})=> {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This is a sample text 1',
            rating:10
        },
        {
            id:2,
            text:'This is a sample text 2',
            rating:6
        },
        {
            id:3,
            text:'This is a sample text 3',
            rating:8
        }
    ])

    const [feedbackEdit, setFeedbackEdit]= useState({
        item: {},
        status:false
    })
    //add feedback
    const addFeedback= (newFeedback)=> {

        newFeedback.id= uuidv4()

        setFeedback([newFeedback, ...feedback])
        //console.log(setFeedback)
    }

    //update feedback Item
    const updateFeedback= (id, updItem)=> {
        //console.log(id, updItem)
        
        setFeedback(
            feedback.map((item)=> item.id=== id ? updItem : item 
            ))
    }

    //setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    // delete feedback
    const deleteFeedback=(id)=>{

        if(window.confirm('Are you sure you want to delete?')){

            setFeedback(feedback.filter((item)=> item.id!== id))
        }
        
     }

     // Set Item to be updated
     const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            status: true
        })
        
     }

     

    return <FeedbackContext.Provider value={{
        feedback, 
        feedbackEdit,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback,
        

    }}>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext
