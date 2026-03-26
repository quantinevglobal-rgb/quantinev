'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  companyName: z.string().min(1, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please describe your project (min 10 characters)'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const industries = [
  'Manufacturing',
  'Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Energy & Utilities',
  'Technology',
  'Logistics & Supply Chain',
  'Government & Public Sector',
  'Other',
];

const projectTypes = [
  'SAP Consulting & Services',
  'Custom Software Development',
  'AI & Data Integration',
  'Cloud & DevOps',
  'Multiple / Not Sure',
];

const budgetRanges = [
  'Under $50,000',
  '$50,000 – $150,000',
  '$150,000 – $500,000',
  '$500,000+',
  'Not Sure Yet',
];

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

const inputBase =
  'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-all';

export function InquiryForm() {
  const [sendError, setSendError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    setSendError('');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.fullName,
          from_email: data.email,
          company_name: data.companyName,
          industry: data.industry,
          project_type: data.projectType,
          budget: data.budget,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
    } catch {
      setSendError('Failed to send. Please try again or email us directly.');
      throw new Error('EmailJS send failed');
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="heading-sm text-green-800 mb-2">Inquiry Received!</h3>
        <p className="text-green-700">
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gray-200 bg-white shadow-xl p-8 md:p-10 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <FormField label="Full Name" error={errors.fullName?.message}>
          <input
            {...register('fullName')}
            placeholder="John Doe"
            className={cn(inputBase, errors.fullName && 'border-red-300')}
          />
        </FormField>

        <FormField label="Email Address" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="john@company.com"
            className={cn(inputBase, errors.email && 'border-red-300')}
          />
        </FormField>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <FormField label="Company Name" error={errors.companyName?.message}>
          <input
            {...register('companyName')}
            placeholder="Acme Inc."
            className={cn(inputBase, errors.companyName && 'border-red-300')}
          />
        </FormField>

        <FormField label="Industry" error={errors.industry?.message}>
          <select
            {...register('industry')}
            className={cn(inputBase, errors.industry && 'border-red-300')}
            defaultValue=""
          >
            <option value="" disabled>
              Select industry
            </option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <FormField label="Project Type" error={errors.projectType?.message}>
          <select
            {...register('projectType')}
            className={cn(inputBase, errors.projectType && 'border-red-300')}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Approximate Budget" error={errors.budget?.message}>
          <select
            {...register('budget')}
            className={cn(inputBase, errors.budget && 'border-red-300')}
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Project Description" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your project, goals, and timeline..."
          className={cn(inputBase, 'resize-none', errors.message && 'border-red-300')}
        />
      </FormField>

      {sendError && (
        <p className="text-sm text-red-500 text-center">{sendError}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}{' '}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}
