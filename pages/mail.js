
import React, {useState} from "react"
import axios from 'axios';

const Mailer = () => {

    const [mailData, setMailData] = useState({name:"", from:"", text:""})



  
        


    const handleChange = (e) => {
        setMailData({ ...mailData, [e.target.id]: e.target.value });
      };
    
      // Handle the form submission
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission
    
        // Here you would add the code to send the email using mailData
        console.log('Sending mail with the following data:', mailData);

        try {
            const response = await axios.post('http://localhost:4000/api/index', {
              ...mailData
            });
      
            console.log('Data posted successfully:', response.data);
            // Handle the response further if needed
          } catch (error) {
            console.error('Failed to post data:', error);
            // Handle errors here (both network errors and API response errors)
          }
    
        // Reset the form fields after submission
        setMailData({ name: "", from: "", text: "" });
      };
     




    
      return (
       
        <div className="MailerForm md:w-7/12 w-full float-none md:float-right  text-xs sm:text-sm md:text-base">
          <form onSubmit={handleSubmit} className="flex-col">
          <div className="flex my-2">
            <label className="w-2/12 mr-2" htmlFor="name">Name:</label>
            <input
              className="w-10/12  h-8 border-2 border-gray-300 dark:border-slate-400 rounded-lg px-2 hover:border-teal-400 focus:border-teal-600 "
              type="text"
              id="name"
              value={mailData.name}
              onChange={handleChange}
            />
            </div>
            <div className="flex my-2">
            
            <label className="w-2/12 mr-2" htmlFor="from">Your Email:</label>
            <input
              className="w-10/12 h-8 border-2 border-gray-300 dark:border-slate-400 rounded-lg px-2 hover:border-teal-400 focus:border-teal-600"
              type="email"
              id="from"
              value={mailData.from}
              onChange={handleChange}
            />
            </div>

            <div className="flex my-2">
            
            <label className="w-2/12 mr-2" htmlFor="text">Message:</label>
            <textarea
              className="w-10/12 text-sm border-2 border-gray-300 dark:border-slate-400 rounded-lg px-2 py-1 overflow-fill hover:border-teal-400 focus:border-teal-600"
              id="text"
              value={mailData.text}
              onChange={handleChange}
              style={{minHeight:"96px"}}
            ></textarea>
            </div>
            
            <button type="submit" className="w-full h-8 mt-4 bg-teal-400 rounded-lg text-white"  
      onClick={handleSubmit}>
              Send Mail
            </button>
          </form>
          
        </div>
        
        
      );
    
    


}
export default  Mailer