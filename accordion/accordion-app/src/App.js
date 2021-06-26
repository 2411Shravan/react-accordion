import React ,{useState}from 'react';
import arrayQuestions from './qna';
import DataRequired from './faq';
import './style.css';

function App() {
  const[accords] = useState(arrayQuestions)
  return (
   <div className="container">
    <h2> Hai we are going to build an accordion section</h2>
     <div>
       {
         accords.map((accord)=>{
           return <DataRequired {...accord}/>

         })
       }
     </div>
    </div>
  );
}

export default App;
