import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
    <form>
      <label>
        Your Name:
      </label>
      <input type="text" name="name" />
      <label>
        Email:
      </label>
      <input type="email" name="email" />
      <label>
        Subject:
      </label>
      <input type="text" name="subject" />
      <label>
        Message:
      </label>
      <textarea placeholder="Type your message"></textarea>
      <button className='btn'>Submit</button>
    </form>
    </div>
  );
    
};

export default Form