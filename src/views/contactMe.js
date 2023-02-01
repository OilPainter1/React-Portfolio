
function SubmitBtn() {
 
        return <button type="submit"
        className="btn btn-primary"
        disabled>
            Submit</button>

}



function ContactMe() {
  

    return (<div className="container">
        <strong>Contact Me</strong>
        <p>(please fill out all fields)</p>
        <hr></hr>
        <form>
       <div className="mb-3">
           <label htmlFor="form-name" className="form-label">
               Name:
           </label>
           <input type="text" className="form-control" id="form-name">
           </input>
       </div>
       <div className="mb-3">
            <label htmlFor="form-email" className="form-label">
                Email:
            </label>
            <input type="text" className="form-control" id="form-email">
            </input>
       </div>
       <div className="mb-3">
            <label htmlFor="form-message" className="form-label">
                Message:
            </label>
            <textarea className="form-control" id="form-message" rows="4"></textarea>
       </div>

        
        {SubmitBtn()}

   </form>
    </div>)

}

export default ContactMe