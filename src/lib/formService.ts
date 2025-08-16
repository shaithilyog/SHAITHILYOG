import { supabase } from './supabase';

// Contact form submission interface
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Join the Future form submission interface
export interface JoinFormData {
  name: string;
  email: string;
  profession?: string;
  interest?: string;
  newsletter: boolean;
}

// Submit contact form (for now, we'll simulate email sending)
export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    // For now, we'll store contact submissions in a separate table
    // In a real implementation, this would also trigger an email
    const submissionData = {
      ...formData,
      type: 'contact',
      created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('contact_submissions')
      .insert([submissionData]);

    if (error) {
      console.error('Contact form submission error:', error);
      throw new Error('Failed to submit contact form. Please try again.');
    }

    // In a real implementation, you would also send an email here
    // For now, we'll just log the success
    console.log('Contact form submitted successfully:', formData);
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
};

// Submit Join the Future form to Supabase
export const submitJoinForm = async (formData: JoinFormData): Promise<void> => {
  try {
    const submissionData = {
      ...formData,
      created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('form')
      .insert([submissionData]);

    if (error) {
      console.error('Join form submission error:', error);
      throw new Error('Failed to join our community. Please try again.');
    }

    console.log('Join form submitted successfully:', formData);
  } catch (error) {
    console.error('Join form error:', error);
    throw error;
  }
};

// Simulate email sending (for contact form)
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // This would be implemented with a backend service
  // For now, we'll simulate the email sending
  console.log('Email would be sent with data:', {
    to: 'support@shaithilyog.live',
    subject: formData.subject || 'New Contact Message',
    from: formData.email,
    message: formData.message,
    name: formData.name
  });

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000));
};
