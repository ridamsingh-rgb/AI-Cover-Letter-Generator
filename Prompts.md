# Prompts.md

# AI Cover Letter Generator - Development Prompts

## Prompt 1 - Project Planning

I have been assigned a Sprint 04 project called "AI Cover Letter Generator".

The project needs to collect Candidate Name, Job Role, Target Company, and Key Skills and generate a professional cover letter.

Explain how to implement this project using HTML, CSS, JavaScript, and an AI API.

Divide the project into Phase 1, Phase 2, and Phase 3 according to the sprint requirements.

---

## Prompt 2 - Base MVP

Create the HTML structure for an AI Cover Letter Generator.

The form should contain:

- Candidate Name
- Job Role
- Target Company
- Key Skills

Add a Generate Cover Letter button.

Create a separate output section for the generated cover letter.

Also add a Copy to Clipboard button.

---

## Prompt 3 - JavaScript Logic

Write JavaScript logic for the AI Cover Letter Generator.

The application should:

- Read form values
- Validate required fields
- Create a prompt dynamically
- Display a Generating state
- Display the generated cover letter
- Handle errors
- Provide a Copy to Clipboard feature

---

## Prompt 4 - Gemini API Integration

Explain how to integrate the Google Gemini API into a Vite JavaScript project.

Use fetch() to send a POST request to the Gemini API.

The prompt should dynamically include:

- Candidate Name
- Job Role
- Target Company
- Key Skills

Show the generated response in the webpage.

---

## Prompt 5 - API Key Security

Explain how to securely store a Gemini API key in a Vite project using an environment variable.

The API key must not be hardcoded inside JavaScript.

Use:

VITE_GEMINI_API_KEY

Also explain how to add .env to .gitignore so that the API key is not pushed to GitHub.

---

## Prompt 6 - Prompt Engineering

Create a professional prompt for generating an ATS-friendly cover letter.

The prompt should include:

Candidate Name: ${name}

Job Role: ${role}

Target Company: ${company}

Skills: ${skills}

Requirements:

- Professional tone
- ATS friendly
- Approximately 250 words
- Return only the cover letter

---

## Prompt 7 - Loading State

Add a loading state to the application.

When the user clicks Generate Cover Letter, display:

"Generating cover letter..."

After the API response is received, replace the loading message with the generated cover letter.

---

## Prompt 8 - Gemini API Error Handling

My Gemini API may return a 429 RESOURCE_EXHAUSTED quota error.

Create an error handling system so that the application does not completely fail when the API is unavailable.

Create a fallback cover letter generator using:

- Candidate Name
- Job Role
- Target Company
- Key Skills

The fallback should generate a professional cover letter.

---

## Prompt 9 - Resume Upload

Add a Resume Upload feature to the AI Cover Letter Generator.

Requirements:

- Allow the user to upload a PDF resume
- Accept PDF files only
- Read the uploaded file
- Extract text from the PDF
- Store the extracted text
- Use the extracted text in the AI prompt

---

## Prompt 10 - PDF Text Extraction

Explain how to extract text from a PDF in a Vite JavaScript application.

Use the pdfjs-dist library.

The implementation should:

- Read the uploaded PDF
- Load the PDF
- Read every page
- Extract text from each page
- Combine the extracted text
- Store the final resume text

---

## Prompt 11 - Resume Personalization

Modify the Gemini prompt to include the extracted resume text.

The AI should use:

- Candidate Name
- Job Role
- Target Company
- Key Skills
- Resume Information

The generated cover letter should be personalized according to the uploaded resume.

---

## Prompt 12 - Phase 3 Testing

Create a testing checklist for the Resume Upload feature.

Check:

- PDF file can be selected
- PDF text can be extracted
- Resume text is added to the AI prompt
- Cover letter can be generated
- API errors are handled
- Fallback generation works
- Copy button works

---

## Prompt 13 - GitHub Security Check

Review the project for API key security.

Check that:

- API key is stored in .env
- .env is included in .gitignore
- API key is not hardcoded in script.js
- API key is not committed to GitHub

---

## Prompt 14 - README Documentation

Create professional README documentation for the project.

Include:

- Project overview
- Sprint objective
- Features
- Phase 1
- Phase 2
- Phase 3
- Technologies used
- API security
- PDF resume processing
- Fallback system
- Installation instructions
- Testing
- Project structure

---

## Prompt 15 - QA Video

Create a short technical explanation for a maximum 3-minute QA demonstration video.

The video should demonstrate:

1. Project interface
2. Candidate details form
3. Resume PDF upload
4. Cover letter generation
5. Generated output
6. Copy to Clipboard
7. API integration
8. Environment variable security
9. GitHub repository

Keep the explanation professional and concise.

---

# Development Summary

AI assistance was used during development for:

- Project planning
- HTML structure
- JavaScript logic
- Gemini API integration
- Prompt engineering
- Environment variable configuration
- API error handling
- Fallback generation
- PDF text extraction
- Resume personalization
- Testing
- Documentation

The generated suggestions were reviewed, implemented, tested, and modified according to the project requirements.