import type { Booking } from "../store/useBookingStore"
import { BookingForm } from "../pages/BookingForm"
import { BookingList } from "./BookingList";

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
      <BookingList bookings={bookings} />
    </div>
  )
};