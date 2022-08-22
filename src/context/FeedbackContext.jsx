
import { createContext, useState, useEffect } from "react";


const FeedbackContext= createContext()

export const FeedbackProvider = ({children})=> {

    const [isLoading,setisLoading] = useState(true)
    //@lummy - when using server file
    //const [feedback, setFeedback] = useState([])

     //@lummy -  using local file

    const [feedback, setFeedback] = useState([{
        "text": "lummy default text",
        "rating": 8,
        "id": 4
      }])

    useEffect(()=>{
        fetchFeedback()

    },[])

    const [feedbackEdit, setFeedbackEdit]= useState({
        item: {},
        status:false
    })

    //fetch feedback from server

    const fetchFeedback= async ()=>{

    //    const response= await fetch(`/feedback?_sort=id&_order=desc`)
    //    const data = await response.json()

    //     console.log(data)
        setFeedback(feedback)
        setisLoading(false)


    }
    //add feedback
    const addFeedback=  async (newFeedback)=> {

         //@lummy -using server file -db.json
    //    const response= await fetch('/feedback', {
    //         method: 'POST', 
    //         headers:{
    //             'Content-Type': 'application/json' 
    //         },
    //         body: JSON.stringify(newFeedback)
    //     })
        
    //     const data= await response.json()
        
    //     console.log(data)
        //setFeedback([data, ...feedback])

        //@lummy -using local file
        setFeedback([newFeedback, ...feedback])
       
    }

    //update feedback Item
    const updateFeedback= async (id, updItem)=> {
       
        //@lummy -using server file -db.json
    //     const response = await fetch(`/feedback/${id}`,{
    //     method: 'PUT',
    //     headers:{
    //         'Content-Type': 'application/json' 
    //     },
    //     body: JSON.stringify(updItem)
    // })
    //     const data= await response.json()
    //     console.log(data)

        
    //     setFeedback(
    //         feedback.map((item)=> item.id=== id ? data : item 
    //         ))


    //@lummy -using local file
         setFeedback(
                feedback.map((item)=> item.id=== id ? feedback : item 
                 ))
    }

   
    // delete feedback
    const deleteFeedback= async (id) =>{

        if(window.confirm('Are you sure you want to delete?')){

             //@lummy -using server file -db.json
            // await fetch(`/feedback/${id}`, {

            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
                
            // })
            
            // setFeedback(feedback.filter((item)=> item.id!== id))

             //@lummy -using local file
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
