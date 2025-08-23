# Booking Form App - Step 1

This is a **React-based booking form** (Step 1) project that allows users to select a date, time, number of guests, occasion, and add an optional note. It includes validation to ensure required fields are filled before proceeding.

## Features

- Select date (cannot be in the past)
- Choose available times dynamically filtered based on date and existing reservations
- Enter number of guests (minimum 1, maximum 20)
- Select occasion (Birthday, Engagement, Anniversary, Other)
- Add a short optional note
- Validation messages for required fields
- LocalStorage support to save step 1 data
- Integration-ready for multi-step booking workflow
- Unit testing

## Tech Stack

- React (Functional Components & Hooks)
- React Router (for navigation)
- JavaScript (ES6+)
- LocalStorage for temporary data persistence
- Tailwind CSS (optional, if you use it for styling)

## Getting Started

### Prerequisites

- Node.js (>= 16)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-project-folder>
Install dependencies:


npm install
# or
yarn install
Run the app locally:


npm start
# or
yarn start
Open http://localhost:3000 to view in the browser.

Project Structure
---
```
src/
├── component/
│   └── BookingFormSteps.js   # Main form component with validation
├── App.js
├── index.js

```
---
Usage
Select a date (today or future dates only).

Choose an available time.

Enter the number of guests.

Select an occasion.

Add a short note (optional).

Click Proceed to go to the next step.

Validation errors will appear if required fields are missing.



License
This project is licensed under the MIT License.

Author
Israel Olasehinde- https://github.com/JOULifestyle


---

