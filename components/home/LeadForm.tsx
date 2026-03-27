"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { countries } from "@/data/countries";
import { siteConfig, SUPABASE_ENQUIRY_URL } from "@/data/site-config";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const schema = z.object({
  name: z.string().min(2, "Required"),
  phone: z.string().min(5, "Required"),
  email: z.string().email("Invalid email").or(z.literal("")),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    try {
      await fetch(SUPABASE_ENQUIRY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || undefined,
          message: data.message || undefined,
        }),
      });
    } catch {
      // show success
    }
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-sm text-primary outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-accent/30 focus:shadow-lg focus:shadow-accent/5";

  return (
    <section className="relative overflow-hidden py-32" id="enquiry">
      <div className="grid-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Start your journey
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Share your details and our counselors will reach out within 24 hours.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-12 max-w-md rounded-2xl border border-border/50 bg-card p-10 text-center shadow-xl shadow-accent/5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.15 }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-success/20 to-success/5"
                >
                  <Check className="h-7 w-7 text-success" />
                </motion.div>
                <h3 className="text-lg font-semibold text-primary">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp for faster response
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mt-12 max-w-xl rounded-2xl border border-border/50 bg-card p-8 shadow-xl shadow-black/[0.03]"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <input {...register("name")} placeholder="Full name *" className={inputClass} />
                    {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("phone")} placeholder="Phone number *" className={inputClass} />
                    {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <input type="email" {...register("email")} placeholder="Email" className={inputClass} />
                  </div>
                  <div>
                    <select
                      className={inputClass + " appearance-none text-muted-foreground/50"}
                      onChange={(e) => {
                        const ta = document.getElementById("lead-msg") as HTMLTextAreaElement;
                        if (ta && e.target.value) ta.value = `Interested in: ${e.target.value}`;
                      }}
                    >
                      <option value="">Preferred country</option>
                      {countries.map((c) => (
                        <option key={c.slug} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="lead-msg"
                      {...register("message")}
                      rows={3}
                      placeholder="Tell us about your plans..."
                      className={inputClass}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/20 disabled:pointer-events-none disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Get free consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <div className="mt-4 text-center">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-[#25D366]"
                  >
                    <MessageCircle className="h-3 w-3" />
                    or chat on WhatsApp
                  </a>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </AnimateIn>
      </Container>
    </section>
  );
}
