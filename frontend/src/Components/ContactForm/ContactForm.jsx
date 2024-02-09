import { useForm } from "react-cool-form";
import "./ContactForm.css"

export default function ContactForm() {
    

    const { form, use } = useForm({
        defaultValues: { firstName: "", lastName: "", framework: "" },
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
    });
    const errors = use("errors");

    return (
        <div className="ContactForm">
            <img src="https://www.letzstepin.com/logo13.png" alt="" />
            <form  noValidate>
                <div>
                    <input name="firstName" placeholder="First name..." required />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div>
                    <input type="email" name="emial" placeholder="Email..." required />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <select name="framework">
                    <option value="">Select Catagory</option>
                    <option value="Education">Education</option>
                    <option value="Hotel/Room Booking">Hotel/Room Booking</option>
                    <option value="Property/Real-Estate">Property/Real-Estate</option>
                    <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                    <option value="Pubs">Pubs</option>
                    <option value="Banquet Halls">Banquet Halls</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
}