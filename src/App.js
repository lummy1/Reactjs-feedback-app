
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import DynamicPostExample from "./components/DynamicPostExample"
import NavigationExample from "./components/NavigationExample"

function App(){
      
    

    return (
        <FeedbackProvider>
        <Router>
        <Header  />
        <div className="container">
        
        <Routes>
            <Route exact path='/' element= { 
                <>
                    <FeedbackForm />
                    <FeedbackStats  />
                    <FeedbackList   />
                    <AboutIconLink />
                </>

            }>
                
            </Route>
            <Route path='/about' element={ <AboutPage/> } />
            <Route path='/post/:id/:name' element={ <DynamicPostExample/> } />
            <Route path='/newpage/*' element={ <NavigationExample/> } />
        </Routes>

       
        </div>
        
        
        

        </Router>
        </FeedbackProvider>
    )
}

export default App