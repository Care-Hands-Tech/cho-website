"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { countries } from "@/data/countries";
import { siteConfig, SUPABASE_ENQUIRY_URL } from "@/data/site-config";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(5, "Please enter your phone number"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().optional(),
  course: z.string().optional(),
  message: z.string().min(3, "Please tell us about your plans"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    const msg = [
      data.message,
      data.country && `Preferred country: ${data.country}`,
      data.course && `Course interest: ${data.course}`,
    ]
      .filter(Boolean)
      .join(". ");

    try {
      await fetch(SUPABASE_ENQUIRY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: msg,
        }),
      });
    } catch {
      // show success anyway
    }
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl bg-muted px-4 py-3 text-sm text-primary outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent/20";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-2xl bg-muted py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"
          >
            <Check className="h-7 w-7 text-success" />
          </motion.div>
          <h3 className="text-lg font-semibold text-primary">Enquiry submitted!</h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Our team will contact you within 24 hours. Want a faster response?
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -10 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <input
                {...register("name")}
                placeholder="Full name *"
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-error">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("phone")}
                placeholder="Phone number *"
                className={inputClass}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email address *"
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-error">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <select {...register("country")} className={inputClass}>
              <option value="">Preferred country</option>
              {countries.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <select {...register("course")} className={inputClass}>
              <option value="">Course interest</option>
              <option value="Nursing">Nursing</option>
              <option value="Engineering">Engineering</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Healthcare & Medicine">Healthcare & Medicine</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your study plans... *"
              className={inputClass}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-error">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/15 disabled:pointer-events-none disabled:opacity-40"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Submit enquiry
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          <div className="pt-2 text-center">
            <span className="text-xs text-muted-foreground">or </span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[#25D366] transition-colors hover:text-[#128C7E]"
            >
              <MessageCircle className="h-3 w-3" />
              chat on WhatsApp instead
            </a>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
