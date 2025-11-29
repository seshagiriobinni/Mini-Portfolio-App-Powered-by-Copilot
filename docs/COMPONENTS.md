# Mini Portfolio App – Components & Helpers

## Components

### App
- Location: `src/App.tsx`
- Purpose: Main layout, navigation, and section switching.
- Usage: Renders `Navigation`, `AboutMe`, `ProjectGallery`, and `ContactForm`.

### Navigation
- Location: `src/components/Navigation.tsx`
- Purpose: Navigation bar for switching between sections.
- Props:
  - `current: string` – current section
  - `onNavigate: (section: string) => void` – callback to change section

### AboutMe
- Location: `src/components/AboutMe.tsx`
- Purpose: Displays About Me info.

### ProjectGallery
- Location: `src/components/ProjectGallery.tsx`
- Purpose: Lists projects loaded from `projects.json`.
- Data: `src/projects.json` (array of project objects)
- Project type:
  - `id: number`, `title: string`, `description: string`, `url: string`

### ContactForm
- Location: `src/components/ContactForm.tsx`
- Purpose: Contact form with validation and helper functions.
- State: `name`, `email`, `phone`, `message`, `errors`, `submitted`
- Validation: Checks required fields, email format, phone length.
- Shows error messages and success feedback.

## Helper Functions

### validateEmail
- Location: `ContactForm.tsx`
- Purpose: Checks if a string is a valid email address.
- Usage: `validateEmail(email: string): boolean`

### formatPhone
- Location: `ContactForm.tsx`
- Purpose: Formats a 10-digit phone number as `(XXX) XXX-XXXX`.
- Usage: `formatPhone(phone: string): string`

### validate (ContactForm)
- Location: `ContactForm.tsx`
- Purpose: Validates all form fields and returns error messages.
- Usage: `validate(): { [key: string]: string }`

### handleSubmit (ContactForm)
- Location: `ContactForm.tsx`
- Purpose: Handles form submission, validates fields, and sets feedback.
- Usage: `handleSubmit(e: React.FormEvent)`

---

For more details, see inline comments in each file. Powered by Copilot.
