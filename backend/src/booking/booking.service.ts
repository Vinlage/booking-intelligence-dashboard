import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './entities/booking.entity';

const mockBookings: Booking[] = [];
let idcounter = 1;

@Injectable()
export class BookingService {
  create(createBookingDto: CreateBookingDto) {
    const booking: Booking = {
      id: idcounter++,
      patient: createBookingDto.patient,
      therapist: createBookingDto.therapist,
      date: createBookingDto.date,
    };
    mockBookings.push(booking);
  }

  findAll() {
    return mockBookings;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
