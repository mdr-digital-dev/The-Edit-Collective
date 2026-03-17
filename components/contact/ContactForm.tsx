"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // TODO: Replace mailto with Formspree or backend endpoint
  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nService: ${data.service}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <CheckCircle size={48} className="text-royal mb-4" />
        <p className="font-display text-2xl text-charcoal text-center">
          Message received. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-body text-xs uppercase tracking-wider text-charcoal/70 mb-2">
            Name *
          </label>
          <input
            type="text"
            className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-royal transition-colors"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 font-body">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-body text-xs uppercase tracking-wider text-charcoal/70 mb-2">
            Email *
          </label>
          <input
            type="email"
            className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-royal transition-colors"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-body">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block font-body text-xs uppercase tracking-wider text-charcoal/70 mb-2">
            Company / Brand Name
          </label>
          <input
            type="text"
            className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-royal transition-colors"
            {...register("company")}
          />
        </div>

        {/* Service Interest */}
        <div>
          <label className="block font-body text-xs uppercase tracking-wider text-charcoal/70 mb-2">
            Service Interest
          </label>
          <select
            className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-royal transition-colors"
            {...register("service")}
          >
            <option value="">Select a service...</option>
            <option value="All Services">All Services</option>
            <option value="SEO">SEO</option>
            <option value="Digital Brand Audit">Digital Brand Audit</option>
            <option value="Content Strategy">Content Strategy</option>
            <option value="Social Media">Social Media</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Website Creation">Website Creation</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Digital Content">Digital Content</option>
            <option value="Creative Strategy">Creative Strategy</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-body text-xs uppercase tracking-wider text-charcoal/70 mb-2">
            Tell us about your project *
          </label>
          <textarea
            rows={5}
            className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-royal transition-colors"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 font-body">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-royal text-cream py-3 font-body uppercase tracking-widest text-sm hover:bg-royal-deep transition-colors cursor-pointer border-none mt-8"
      >
        Send Message
      </button>
    </form>
  );
}
