# AI Email Reply Generator

An AI-powered email reply generator that integrates with Gmail and automatically generates smart email responses using Google Gemini AI.
This project is built using Spring Boot for the backend, ReactJS for the frontend, and a Chrome Extension that injects an AI reply button inside Gmail.

---

## Features

* AI-generated email replies
* Gmail interface integration through a Chrome Extension
* One-click "Generate AI Reply" button in Gmail
* Uses Google Gemini AI to generate intelligent responses
* Spring Boot REST API for backend processing
* ReactJS UI for testing and interaction
* Easy deployment to cloud platforms

---

## Tech Stack

### Frontend

* ReactJS
* HTML
* CSS
* JavaScript

### Backend

* Spring Boot
* REST API
* Maven

### AI Integration

* Google Gemini AI API

### Browser Integration

* Chrome Extension (Content Script)

---

## Project Architecture

User → Gmail Interface → Chrome Extension
Chrome Extension → Spring Boot API
Spring Boot → Google Gemini AI API
Gemini AI → Generated Email Reply → Returned to Gmail UI

---

## Folder Structure

project-root

backend
Spring Boot Application
Controllers
Services
API Integration

frontend
ReactJS Application
Components
UI

chrome-extension
manifest.json
content.js
styles.css

---

## How It Works

1. The Chrome Extension detects the Gmail compose or reply area.
2. It injects a "Generate AI Reply" button in the Gmail toolbar.
3. When the user clicks the button:

   * The email content is captured.
   * A request is sent to the Spring Boot API.
4. The backend sends the prompt to Google Gemini AI.
5. Gemini AI generates a smart email response.
6. The response is returned and automatically inserted into the Gmail reply box.

---

## API Endpoint

POST /api/email/generate

Request Body

{
"emailContent": "Original email text"
}

Response

{
"reply": "Generated AI reply text"
}

---

## Setup Instructions

### 1 Clone the Repository

git clone https://github.com/your-username/ai-email-reply-generator.git

cd ai-email-reply-generator

---

### 2 Backend Setup (Spring Boot)

Navigate to backend folder

cd backend

Add your Gemini API key in application.properties

GEMINI_API_KEY=your_api_key

Run the application

./mvnw spring-boot:run

Server will start at

http://localhost:8080

---

### 3 Frontend Setup (React)

Navigate to frontend folder

cd frontend

Install dependencies

npm install

Run the application

npm start

---

### 4 Chrome Extension Setup

Open Chrome
Go to

chrome://extensions/

Enable Developer Mode

Click "Load Unpacked"

Select the chrome-extension folder

Now open Gmail and you will see the AI Reply button.

---

## Deployment

Frontend can be deployed using:

* Vercel
* Netlify

Backend can be deployed using:

* Render
* Railway
* AWS

---

## Future Improvements

* Gmail OAuth integration
* Email tone selection (professional, friendly, formal)
* Multi-language support
* Email summarization
* Response customization

---

## Author

Sudhansu Sekhar Nayak

---

## License

This project is for educational and portfolio purposes.
