import { create } from 'zustand';
import axios from 'axios';

export interface Booking {
  id: string;
  customer: string;
  risk: string;
}

interface BookingState {
  bookings: Booking[];
  fetchBookings: () => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  fetchBookings: async () => {
    const res = await axios.get('http://localhost:3000/api/bookings');
    set({ bookings: res.data });
  },
}));
