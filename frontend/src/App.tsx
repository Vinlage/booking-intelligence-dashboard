import { useEffect } from "react";
import Dashboard from "./pages/Dashboard"
import { useBookingStore } from "./store/useBookingStore";

function App() {
    const { bookings, fetchBookings } = useBookingStore();

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1>Therapy Booking</h1>
            <Dashboard bookings={bookings} />
        </div>
    );
}

export default App
