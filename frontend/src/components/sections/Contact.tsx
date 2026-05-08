import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../../types';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

const initialForm: ContactFormData = { name: '', email: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(data.message ?? 'Something went wrong.');
        setStatus('error');
        return;
      }
      setForm(initialForm);
      setStatus('success');
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-20 px-6 md:py-28">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-10 text-2xl md:text-3xl"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="Your message..."
            />
          </div>
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
          {status === 'success' && (
            <p className="text-sm font-medium text-[var(--color-sage)]">Message sent. I'll get back to you soon.</p>
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary rounded-lg px-6 py-3 text-sm disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
