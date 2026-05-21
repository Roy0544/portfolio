"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mvzykynw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl uppercase">
                Let's <span className="text-emerald-500">Connect</span>
              </h2>
              <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
                Have a vision you want to bring to life? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-medium">roycomp44@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Availability</p>
                  <p className="text-lg font-medium text-emerald-400">Freelance / Full-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Shadcn Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-neutral-900/50 backdrop-blur-xl border border-white/5 shadow-2xl relative"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-400 uppercase text-[10px] font-black tracking-widest ml-1">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
                          <Input 
                            placeholder="John Doe" 
                            className="bg-neutral-800/50 border-white/5 focus-visible:ring-emerald-500 h-14 pl-12 rounded-2xl transition-all" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-emerald-500 text-xs font-bold" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-400 uppercase text-[10px] font-black tracking-widest ml-1">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
                          <Input 
                            placeholder="john@example.com" 
                            className="bg-neutral-800/50 border-white/5 focus-visible:ring-emerald-500 h-14 pl-12 rounded-2xl transition-all" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-emerald-500 text-xs font-bold" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-400 uppercase text-[10px] font-black tracking-widest ml-1">Message</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <MessageSquare className="absolute left-4 top-5 text-neutral-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
                          <Textarea 
                            placeholder="How can I help you bring your project to life?" 
                            className="bg-neutral-800/50 border-white/5 focus-visible:ring-emerald-500 min-h-[150px] pl-12 pt-4 rounded-2xl resize-none transition-all" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-emerald-500 text-xs font-bold" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={cn(
                    "w-full h-14 font-black uppercase tracking-widest rounded-2xl transition-all flex gap-2 group",
                    isSuccess 
                      ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/20" 
                      : "bg-emerald-600 hover:bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : isSuccess ? (
                    <>
                      Message Sent!
                      <CheckCircle2 size={18} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Tuhin Roy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
