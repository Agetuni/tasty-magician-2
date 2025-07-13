import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-xl mx-auto my-32 px-6">
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
      <p className="mb-8 text-gray-600">Interested in working together, or just want to say hello? Fill out the form or email me at <a href="mailto:alexdoe@email.com" className="underline">alexdoe@email.com</a></p>
      <form className="bg-white rounded-2xl shadow px-8 py-10 flex flex-col gap-6 border relative animate-fade-in" onSubmit={handleSubmit}>
        {status === "success" && (
          <div className="flex items-center gap-2 mb-4 text-green-700 font-medium"><CheckCircleIcon className="w-6 h-6"/>Message sent!</div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} disabled={status==='submitting'} required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" name="email" value={form.email} onChange={handleChange} disabled={status==='submitting'} required placeholder="you@email.com" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea id="message" name="message" value={form.message} onChange={handleChange} disabled={status==='submitting'} required placeholder="What would you like to discuss?" rows={5}/>
        </div>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <Button type="submit" disabled={status !== 'idle'}>Send Message</Button>
      </form>
    </section>
  );
};
