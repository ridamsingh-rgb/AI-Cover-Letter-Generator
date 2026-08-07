# AI Cover Letter Generator

An AI-powered SaaS utility that generates professional, ATS-friendly cover letters based on candidate details, job role, target company, key skills, and uploaded resume information.

## 🚀 Project Overview

The AI Cover Letter Generator helps job seekers quickly create customized cover letters without writing them from scratch.

The application collects candidate information and uses the Google Gemini API to generate a professional cover letter. It also supports PDF resume upload and extracts resume text for contextual personalization.

If the Gemini API is unavailable or the free-tier quota is exceeded, the application automatically generates a professional fallback cover letter.

---

## 🎯 Sprint Objective

Build a Software-as-a-Service utility that:

- Collects candidate information
- Integrates an AI/LLM API
- Uses prompt engineering
- Generates professional cover letters
- Securely manages API credentials
- Supports resume PDF upload
- Extracts resume text
- Personalizes generated content
- Provides a fallback generation mechanism

---

## ✨ Features

### Phase 1 — Base MVP

- Candidate Name input
- Job Role input
- Target Company input
- Key Skills input
- Form validation
- Dynamic cover letter generation
- Professional ATS-friendly output
- Copy to Clipboard functionality

### Phase 2 — LLM Integration & Security

- Google Gemini API integration
- Programmatic prompt engineering
- Candidate data injected into the AI prompt
- `Generating...` loading state
- Environment variable based API key
- `.env` excluded from GitHub using `.gitignore`
- Automatic fallback cover letter when API quota is unavailable

### Phase 3 — SaaS Capabilities

- Resume PDF upload
- PDF text extraction using `pdfjs-dist`
- Resume content used for contextual generation
- Dynamic personalization
- AI-generated cover letter based on candidate information and resume
- Clean generated output

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- Google Gemini API
- PDF.js / `pdfjs-dist`
- Git & GitHub
- Environment Variables

---

## 📁 Project Structure

```text
AI-cover-letter-generator/
│
├── index.html
├── script.js
├── style.css
├── README.md
├── Prompts.md
├── package.json
├── package-lock.json
├── .gitignore
├── .env
│
├── public/
│
└── src/
    ├── main.js
    ├── style.css
    └── assets/