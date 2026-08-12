"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectDetails: string;
  rawFootageLink: string;
  budget: string;
}

interface ContactFormProps {
  className?: string;
}

const BUDGET_OPTIONS = [
  "$1,000 â€“ $1,500",
  "$1,500 â€“ $2,000",
  "$2,000 â€“ $3,000",
  "$3,000+",
];

export function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectDetails: "",
    rawFootageLink: "",
    budget: BUDGET_OPTIONS[0],
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-charcoal-800 border border-charcoal-600 text-slate-100 px-4 py-3 rounded-none focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30 hover:border-charcoal-500 transition-all placeholder:text-slate-200/30 font-body";
  const labelClasses =
    "text-slate-200/70 text-sm font-medium uppercase tracking-wider mb-2 block font-body";

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-charcoal-900 border border-charcoal-700 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
          >
            <CheckCircle className="w-16 h-16 text-cyan-500 mb-6 stroke-[1.5]" />
            <h3 className="font-heading text-2xl sm:text-3xl text-slate-100 mb-3 tracking-wide">
              Message Sent
            </h3>
            <p className="text-cyan-500 font-medium text-lg">
              Thank you! We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-charcoal-900 border border-charcoal-700 p-6 sm:p-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name <span className="text-cyan-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email <span className="text-cyan-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className={labelClasses}>
                Project Details <span className="text-cyan-500">*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                required
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us about your project vision, goals, and requirements..."
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="rawFootageLink" className={labelClasses}>
                Raw Footage / Drive Link
              </label>
              <input
                id="rawFootageLink"
                name="rawFootageLink"
                type="text"
                value={formData.rawFootageLink}
                onChange={handleChange}
                placeholder="Paste your Google Drive or Dropbox link"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="budget" className={labelClasses}>
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`${inputClasses} cursor-pointer`}
              >
                {BUDGET_OPTIONS.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-charcoal-800 text-slate-100"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-charcoal-950 font-semibold py-4 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded-none cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              {!loading && <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            </button>
            
            {error && (
              <p className="text-red-400 text-sm text-center font-body mt-2">
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
