
import { createContext, useState, useEffect } from "react";


const FeedbackContext= createContext()

export const FeedbackProvider = ({children})=> {

    const [isLoading,setisLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect(()=>{
        fetchFeedback()

    },[])

    const [feedbackEdit, setFeedbackEdit]= useState({
        item: {},
        status:false
    })

    //fetch feedback from server

    const fetchFeedback= async ()=>{

       const response= await fetch(`/feedback?_sort=id&_order=desc`)
       const data = await response.json()
        //console.log(data)
        setFeedback(data)
        setisLoading(false)


    }
    //add feedback
    const addFeedback=  async (newFeedback)=> {

       const response= await fetch('/feedback', {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newFeedback)
        })
        
        const data= await response.json()
        
        console.log(data)
        setFeedback([data, ...feedback])
       
    }

    //update feedback Item
    const updateFeedback= async (id, updItem)=> {
       
        const response = await fetch(`/feedback/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updItem)
    })
        const data= await response.json()
        console.log(data)

        
        setFeedback(
            feedback.map((item)=> item.id=== id ? data : item 
            ))
    }

    //setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    // delete feedback
    const deleteFeedback= async (id) =>{

        if(window.confirm('Are you sure you want to delete?')){

            await fetch(`/feedback/${id}`, {

                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            })
            
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
        isLoading,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback,
        

    }}>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext
