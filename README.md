🎓 House of Edtech – AI-Powered Course Management System

A full-stack, secure, and production-grade Instructor CMS built using Next.js 16, Prisma, PostgreSQL, shadcn/ui, and AI integration.
This project demonstrates real-world full-stack engineering, not just basic CRUD.

📌 Project Overview

This application is designed for Instructors to:

Create and manage courses

Add and manage lessons

Generate AI-powered lesson summaries

Securely authenticate using cookie-based JWT

Use a clean, modern, and accessible UI

The system follows industry best practices for:

Security

Scalability

Code quality

Maintainability

🧠 Key Highlights (Why This Project Stands Out)

✅ Next.js 16 App Router (Server + Client Components)

✅ Secure Authentication using HTTP-only JWT Cookies

✅ Role-based Authorization (Instructor)

✅ Full CRUD via UI (No Postman needed)

✅ AI-Powered Lesson Summary with Fallback Logic

✅ Prisma ORM + PostgreSQL

✅ shadcn/ui + Tailwind CSS (Accessible & Responsive UI)

✅ Production-grade folder structure

✅ Global Navbar via App Router Layouts

🧱 Tech Stack
Frontend

Next.js 16 (App Router)

React.js

Tailwind CSS

shadcn/ui

TypeScript

Backend

Next.js API Routes

Prisma ORM

PostgreSQL

JWT (Cookie-based Auth)

AI (Optional Add-on)

AI summary generation with graceful fallback

Designed to support OpenAI / Gemini / Groq

📂 Folder Structure (Important)
app/
 ├── login/
 ├── dashboard/
 │   ├── page.tsx
 │   ├── layout.tsx
 │   └── courses/
 │       ├── new/
 │       └── [id]/
 └── api/
     ├── auth/
     ├── courses/
     └── lessons/
components/
 ├── Navbar.tsx
 ├── CourseCard.tsx
 ├── LessonCard.tsx
 ├── CreateLessonForm.tsx
 ├── AISummaryButton.tsx
 └── LogoutButton.tsx
lib/
 ├── prisma.ts
 ├── requireInstructor.ts
 └── getUserFromToken.ts
prisma/
 └── schema.prisma

🔐 Authentication & Authorization

Uses JWT stored in HTTP-only cookies

No tokens exposed to frontend

Server-side validation on every protected route

Instructor-only access enforced at API level

⚙️ Environment Variables

Create a .env file in the root:

DATABASE_URL="postgresql://postgres:<password>@localhost:5432/edtech_ai"
JWT_SECRET=supersecretkey

🗄️ Database Setup (Prisma)
Install dependencies
npm install

Generate Prisma Client
npx prisma generate

Push schema to database
npx prisma db push


⚠️ This project uses db push for local development simplicity.

▶️ Run the Project Locally
npm run dev


Open:

http://localhost:3000/login

🧪 Demo Workflow (UI-Based)

Login as Instructor

Redirected to /dashboard

Create a new course

Open course details

Add lessons

Generate AI summaries

Logout securely

✔️ All actions are available via UI only (no Postman required)

🤖 AI Summary Feature

Generates concise lesson summaries

If AI quota/model is unavailable → fallback summary

AI mode clearly labeled in response

Designed for extensibility with multiple providers

🔒 Security Considerations

HTTP-only cookies prevent XSS token theft

Server-side validation for all mutations

Role-based authorization enforced

Clear separation of concerns

🚀 Deployment

This project is deployment-ready and optimized for platforms like:

Vercel

Netlify (API supported platforms)

CI/CD can be easily added via GitHub Actions.

📈 Real-World Scalability Notes

Prisma supports connection pooling

API routes are modular

AI services are abstracted

UI follows component-driven design

Easy to add:

Student roles

Public course pages

Analytics

👤 Author

Aakash Nishad
