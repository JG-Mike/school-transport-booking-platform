import BookingForm from "./BookingForm"

// will diplay data from the booking form and and the booking list provided
function BookingPage({list}){
    return(
        <BookingForm  list ={list}/>
    )
}

export default BookingPage