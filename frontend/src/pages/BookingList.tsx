import type { Booking } from "../store/useBookingStore";


interface BookingListProps {
  bookings: Booking[];
}

export const BookingList: React.FC<BookingListProps> = ({bookings}) => {
    return (
        <div className="max-w-full mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Bookings this week</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4">
                {bookings.length == 0 ? 
                    <p className="text-sm">No bookings yet</p> :
                    bookings.map((booking) => (
                        <div key={booking.id} 
                            className="bg-blue-100 p-6 mb-4 rounded shadow-md"
                        >
                            <p>Patient: {booking.patient}</p>
                            <p>Therapist: {booking.therapist}</p>
                            <p className="">Date: {booking.date}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
    
}