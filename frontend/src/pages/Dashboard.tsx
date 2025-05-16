import type { Booking } from "../store/useBookingStore"
import { BookingForm } from "../pages/BookingForm"

interface DashboardProps {
    bookings: Booking[];
}

export default function Dashboard({ bookings }: DashboardProps) {
  const handleNewBooking = (booking: Omit<Booking, 'id'>) => {
    console.log("New booking created:", booking);
  }

  return (
    <div className="dashboard">
      <BookingForm onSubmit={handleNewBooking} />
      <h2>Agendamentos</h2>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-item">
            <p>Paciente: {booking.patient}</p>
            <p>Terapeuta: {booking.therapist}</p>
            <p>Data: {booking.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
};