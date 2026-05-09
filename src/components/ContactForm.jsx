import { CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const initial = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
  await addDoc(collection(db, "contacts"), {
    name: form.name,
    email: form.email,
    message: form.message,
    createdAt: new Date(),
  });

  setSubmitted(true);
  setForm(initial);

  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  }
  }

  return (
    <form className="rounded-card border border-teal-700/10 bg-white p-5 shadow-soft sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-teal-900">
          Name
          <input
            className="min-h-12 rounded-2xl border border-teal-700/15 bg-mist px-4 text-base font-medium text-ink outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
            name="name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-teal-900">
          Email
          <input
            className="min-h-12 rounded-2xl border border-teal-700/15 bg-mist px-4 text-base font-medium text-ink outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-teal-900">
          Message
          <textarea
            className="min-h-36 resize-y rounded-2xl border border-teal-700/15 bg-mist px-4 py-3 text-base font-medium text-ink outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
            name="message"
            value={form.message}
            onChange={updateField}
            required
          />
        </label>
      </div>
      {error ? <p className="mt-4 text-sm font-semibold text-orange-700" role="alert">{error}</p> : null}
      {submitted ? (
        <p className="mt-4 flex items-center gap-2 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-900" role="status">
          <CheckCircle2 aria-hidden="true" size={18} /> Thanks. We received your note and will respond soon.
        </p>
      ) : null}
      <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto" type="submit">
        Send message <Send aria-hidden="true" size={17} />
      </button>
    </form>
  );
}
