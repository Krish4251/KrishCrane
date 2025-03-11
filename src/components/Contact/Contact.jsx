import React from 'react'
import './Contact.css'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4461b2fe-1549-45d0-a0ad-5ad2cd970446");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-bg">
      <div className="contact">
      <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out through our contact form or find our contact information below. Your inquiries, project requirements, and feedback are valuable to us as we strive to deliver top-quality crane solutions and exceptional service.</p>
            <ul>
                <li>Contact@krishcranes.com</li>
                <li>Phone: +1 123-456-7890</li>
                <li>Address</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number'/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Write your message here' required></textarea>
                <button type='submit' className='btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>

      </div>
        
    </div>
  )
}

export default Contact
