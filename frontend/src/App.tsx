import { useEffect } from "react";
import Dashboard from "./pages/Dashboard"
import { useBookingStore } from "./store/useBookingStore";

function App() {
    const { bookings, fetchBookings } = useBookingStore();

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    return (
        <div className="app">
            <Dashboard bookings={bookings} />
        </div>
    );
}

export default App
