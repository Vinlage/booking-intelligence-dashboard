import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient: string;

  @Column()
  therapist: string;

  @Column()
  date: string;
}
