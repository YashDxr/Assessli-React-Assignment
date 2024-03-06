# Assessli React Assignment

This is a simple React application for showcasing a contact form with a Google Sheets integration. This README.md file provides clear instructions on setting up the project, running it locally, details on Google Sheets integration, and any additional features implemented.

Project Live on: https://assessli-react-assignment-sigma.vercel.app

## Project Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/YashDxr/Assessli-React-Assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd .\Assessli-React-Assignment\
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```
   or
   ```bash
   npm i
   ```

## How to Run the Project Locally

After setting up the project, you can run it locally using the following steps:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to ` http://localhost:5173` to view the application.

## Google Sheets Integration

This project integrates with Google Sheets for storing form submissions. To set up Google Sheets integration:

1. Create a Google Sheets document.

2. Obtain the Google Sheets API key.

3. Replace the placeholder URL in the `fetch` call within `ContactPage.js` with your Google Sheets API endpoint.

4. Ensure your Google Sheets document has the appropriate structure to receive form submissions.

## Additional Features or Customizations Implemented

- **Form Validation**: Validates user input for email, phone number, and message length before submission.
- **Animated Form**: Utilizes CSS animations for a smooth transition when showing/hiding the form.
- **Toasts**: Uses `react-toastify` library to display success or error messages upon form submission.

## Project Structure

- **App.js**: Main entry point of the application, handles the rendering of the contact form and button.
- **ContactPage.js**: Contains the contact form component with form submission functionality.
- **Button.js**: Represents a button component with click handling functionality.
- **ContactPage.css**: Contains styles specific to the contact form component.

## Dependencies

- React: Used for building the user interface.
- react-toastify: Provides toast notifications for form submission feedback.

## License

This project is licensed under the MIT License.
```
