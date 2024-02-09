import ContactForm from "../../Components/ContactForm/ContactForm";
import "./ContactUs.css"

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="ContactUs" id="ContactUs">
            <div>
                <h1>
                    Contact Us
                </h1>
            </div>
            <div className="contactCard">
                {/* <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter full name..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select Category</option>
                            <option>Education</option>
                            <option>Hotel/Room Booking</option>
                            <option>Property/Real-Estate</option>
                            <option>Restaurants & Cafes</option>
                            <option>Pubs</option>
                            <option>Banquet Halls</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs