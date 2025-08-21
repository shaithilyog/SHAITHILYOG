# ShaithilYog Platform - Form Backend Setup

## Overview
This project implements form handling for the ShaithilYog healthcare platform using Supabase as the backend database for storing form submissions.

## Form Implementation Features

### 1. Contact Form
- **Location**: Contact Us page (`/contact-us`) and Contact section on homepage
- **Fields**: Name, Email, Subject, Message
- **Functionality**: Stores submissions in Supabase `contact_submissions` table
- **Success**: Shows success modal with confirmation message

### 2. Join the Future Form
- **Location**: Join the Future page (`/join-the-future`)
- **Fields**: Name, Email, Profession, Interest, Newsletter subscription
- **Functionality**: Stores submissions in Supabase `form` table
- **Success**: Shows welcome modal with community message

## Database Schema

### Supabase Tables Required

#### 1. `form` table (for Join the Future submissions)
```sql
CREATE TABLE form (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  profession VARCHAR(255),
  interest TEXT,
  newsletter BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE form ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON form
  FOR INSERT WITH CHECK (true);
```

#### 2. `contact_submissions` table (for Contact form submissions)
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  type VARCHAR(50) DEFAULT 'contact',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous inserts
CREATE POLICY "Allow anonymous contact inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

## Environment Variables

Create a `.env` file in the project root with:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://qxehfwutgjfbnnnpzgdz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4ZWhmd3V0Z2pmYm5ubnB6Z2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MjQ1NDYsImV4cCI6MjA2MzEwMDU0Nn0.D6ijwT8YvstjtpPKGmfaBMpDVHX4hqOguQeht4YcspM

# Email Configuration (for future backend implementation)
VITE_CONTACT_EMAIL=support@shaithilyog.tech
VITE_ADMIN_EMAIL=admin@shaithilyog.tech
```

## File Structure

```
src/
├── lib/
│   ├── supabase.ts          # Supabase client configuration
│   └── formService.ts       # Form submission service functions
├── components/
│   └── ui/
│       └── success-message.tsx  # Success modal component
├── pages/
│   ├── ContactUs.tsx        # Contact form page
│   └── JoinTheFuture.tsx    # Join community form page
└── components/sections/
    └── ContactSection.tsx   # Contact form on homepage
```

## Dependencies Added

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.49.8"
  }
}
```

## Form Features

### Frontend Validation
- Required field validation
- Email format validation
- Form state management with React hooks
- Loading states during submission
- Error handling and display

### Success Handling
- Animated success modals
- Form reset after successful submission
- User-friendly success messages

### Error Handling
- Network error handling
- Supabase error handling
- User-friendly error messages
- Form validation errors

## Implementation Details

### Form State Management
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  // ... other fields
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSent, setIsSent] = useState(false);
const [error, setError] = useState('');
```

### Submission Flow
1. Form validation on client side
2. Submit to Supabase via `formService.ts`
3. Show loading state during submission
4. Display success modal or error message
5. Reset form on success

## Future Enhancements

### Email Integration (Next Phase)
For production implementation, consider adding:
- Email notification service (SendGrid, Mailgun, etc.)
- Automated response emails
- Admin notification emails
- Email templates

### Backend API (Optional)
For more complex workflows:
- Express.js or Next.js API routes
- Email sending logic
- Form data validation
- Rate limiting
- Spam protection

## Usage

1. Ensure Supabase project is set up with the required tables
2. Update `.env` file with your Supabase credentials
3. Run `npm install` to install dependencies
4. Start development server: `npm run dev`
5. Test forms on Contact Us and Join the Future pages

## Supabase Project URL
Current project: `https://qxehfwutgjfbnnnpzgdz.supabase.co`

## Contact
For questions about the form implementation: support@shaithilyog.tech
