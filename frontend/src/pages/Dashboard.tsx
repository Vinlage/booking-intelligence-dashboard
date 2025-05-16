import type { Booking } from "../store/useBookingStore"
import '../styles/dashboard.scss'

interface DashboardProps {
    bookings: Booking[];
}

const Dashboard = ({ bookings }: DashboardProps) => {
  return (
    <div className="dashboard">
      <h1>Booking Intelligence Dashboard</h1>
      {bookings.length === 0 ? (
        <p>Loading bookings...</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.customer}</td>
                <td>Risk: {booking.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Dashboard;