
import React, {useState} from "react"
import axios from 'axios';

const Mailer = () => {

    const [mailData, setMailData] = useState({name:"", from:"", text:""})
    const [errors, setError] = useState({name:""})
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMailData({ ...mailData, [e.target.id]: e.target.value });
      };

      const showMessage = () => {
        // Set the message
        setMessage('Email Sent Successfully!');
    
        // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000); // 3000 milliseconds = 3 seconds
      };
     
    
      // Handle the form submission
      const handleSubmit = async (e) => {
         // Prevents the default form submission
      

        if(!mailData.name) {
          setError({...errors, name:"Name is missing!"})
          return

        }

        else if(!mailData.from) {
          setError({...errors, name:"Email is missing!"})
          return

        }

        else if(!mailData.from.includes("@")) {
          setError({...errors, name:"@ domain is missing in Email!"})
          return

        }

        e.preventDefault();

        setError({})


        
    
        // Here you would add the code to send the email using mailData
        console.log('Sending mail with the following data:', mailData);
        let demoData = {...mailData}
        setMailData({ name: "", from: "", text: "" });

        try {
            const response = await axios.post('https://events-app-hhd0.onrender.com/api/index', {
              ...demoData
            });
            showMessage()
      
            console.log('Data posted successfully:', response.data);
            // Handle the response further if needed
          } catch (error) {
            console.error('Failed to post data:', error);
            // Handle errors here (both network errors and API response errors)
          }
    
        // Reset the form fields after submission
       
      };
     




    
      return (
       
        <div className="MailerForm w-full mr-2 float-none md:float-right  text-xs sm:text-sm md:text-base">
          <form onSubmit={handleSubmit} className="flex-col ">
          <div className="flex ">
            <label className="w-2/12 mr-2" htmlFor="name">Name:</label>
            <input
              className="w-10/12 dark:bg-black dark:text-gray-300 bg-white text-gray-600h-8 border-2 border-gray-300 dark:border-slate-400 rounded-lg px-2 hover:border-teal-400 focus:border-teal-600 "
              type="text"
              id="name"
              value={mailData.name}
              onChange={handleChange}
              required
            />
            </div>
            <div className="flex my-2">
            
            <label className="w-2/12 mr-2" htmlFor="from">Your Email:</label>
            <input
              className="w-10/12 h-8 border-2 dark:bg-black dark:text-gray-300 bg-white text-gray-600 border-gray-300 dark:border-slate-400 rounded-lg px-2 hover:border-teal-400 focus:border-teal-600"
              type="email"
              id="from"
              value={mailData.from}
              onChange={handleChange}
              required
            />
            </div>

            <div className="flex my-2">
            
            <label className="w-2/12 mr-2" htmlFor="text">Message:</label>
            <textarea
              className="w-10/12 text-sm border-2 dark:bg-black dark:text-gray-300 bg-white text-gray-600 border-gray-300 dark:border-slate-400 rounded-lg px-2 py-1 overflow-fill hover:border-teal-400 focus:border-teal-600"
              id="text"
              value={mailData.text}
              onChange={handleChange}
              style={{minHeight:"96px"}}
            ></textarea>
            </div>
            {errors.name && <div style={{ color: 'purple' }}>{errors.name}</div>}
            {message && <div style={{ color: 'teal' }}>{message}</div> }
            
            <button type="submit" className="w-full h-8 mt-4 bg-teal-400 rounded-lg text-white"  
      onClick={handleSubmit}>
              Send Mail
            </button>
          </form>
          
        </div>
        
        
      );
    
    


}
export default  Mailer