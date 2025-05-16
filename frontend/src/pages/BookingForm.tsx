import { useState, type ChangeEvent, type FormEvent } from "react";
import { useBookingStore } from "../store/useBookingStore";
import { z } from "zod";

const bookingSchema = z.object({
  patient: z.string().min(1, "Nome do paciente é obrigatório"),
  therapist: z.string().min(1, "Nome do terapeuta é obrigatório"),
  date: z.string().min(1, "Data e hora são obrigatórias")
});

type BookingInput = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSubmit: (data: BookingInput) => void;
}

export function BookingForm({ onSubmit }: BookingFormProps) {
  const [form, setForm] = useState<BookingInput>({
    patient: "",
    therapist: "",
    date: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const { fetchBookings } = useBookingStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsedForm = bookingSchema.parse(form);

    const response = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(parsedForm)
    });

    if (response.ok) {
      alert("Sessão criada com sucesso!");
      
      fetchBookings();
      setErrors({});
      onSubmit(form)
      setForm({ patient: "", therapist: "", date: "" });
    } else {
      alert("Erro ao criar sessão.");
      const fieldErrors: Record<string, string> = {};
      response.json().then((data) => {
        if (data.errors) {
          for (const error of data.errors) {
            fieldErrors[error.field] = error.message;
          }
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        className="border p-2 w-full rounded mb-2"
        type="text"
        name="patient"
        placeholder="Nome do paciente"
        value={form.patient}
        onChange={handleChange}
      />
      {errors.patient && <p>{errors.patient}</p>}

      <input
        className="border p-2 w-full rounded mb-2"
        type="text"
        name="therapist"
        placeholder="Nome do terapeuta"
        value={form.therapist}
        onChange={handleChange}
      />
      {errors.therapist && <p>{errors.therapist}</p>}

      <input
        className="border p-2 w-full rounded mb-2"
        type="datetime-local"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      {errors.date && <p>{errors.date}</p>}

      <button type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Agendar sessão
      </button>
    </form>
  );
}

export default BookingForm;