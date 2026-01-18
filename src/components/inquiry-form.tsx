'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const inquirySchema = z
  .object({
    villa: z.enum(['blackbox', 'other'], {
      required_error: 'Please select a villa option.',
    }),
    checkIn: z.date({
      required_error: 'Please select a check-in date.',
    }),
    checkOut: z.date({
      required_error: 'Please select a check-out date.',
    }),
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    message: z.string().optional(),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: 'Check-out date must be after check-in date.',
    path: ['checkOut'],
  });

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  defaultVilla?: 'blackbox' | 'other';
}

export function InquiryForm({ defaultVilla = 'other' }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      villa: defaultVilla,
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: InquiryFormData) {
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    try {
      console.log('Form data:', data);
      // TODO: Implement actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form after successful submission
      form.reset();
      alert("Thank you for your inquiry! We'll get back to you soon.");
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='villa'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel className='text-brand-font text-3xl font-medium'>
                Your enquiry is related to?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-2'
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='blackbox' id='blackbox' />
                    <label
                      htmlFor='blackbox'
                      className='text-brand-font cursor-pointer'
                    >
                      The Blackbox
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='other' id='other' />
                    <label
                      htmlFor='other'
                      className='text-brand-font cursor-pointer'
                    >
                      Other Enquiry
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='checkIn'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='text-brand-font font-medium'>
                  Check-in Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className={`w-full pl-3 text-left font-normal ${
                          !field.value && 'text-muted-foreground'
                        }`}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='checkOut'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='text-brand-font font-medium'>
                  Check-out Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className={`w-full pl-3 text-left font-normal ${
                          !field.value && 'text-muted-foreground'
                        }`}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-brand-font font-medium'>
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder='Enter your full name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-brand-font font-medium'>
                Email Address
              </FormLabel>
              <FormControl>
                <Input placeholder='Enter your email address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-brand-font font-medium'>
                Message (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us about your stay preferences, special requests, or any questions you have...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full'
          size='lg'
        >
          {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
