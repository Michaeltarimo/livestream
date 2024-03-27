
# Live Streaming Demo Project Setup Guide

This document provides comprehensive instructions on how to set up, configure, and launch the Live Streaming Demo project. It includes guidance on installation, running the project in development and production environments, and additional scripts to facilitate development workflows.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm (comes with Node.js)

## Installation

### Clone the Project

Start by cloning the repository or downloading and extracting the ZIP file.

```bash
git clone https://your-repository-url/live-streaming-demo-main.git
cd live-streaming-demo-main
```

### Install Dependencies

Install the necessary dependencies with npm:

```bash
npm install
```

Or, if you prefer yarn:

```bash
yarn install
```

## Configuration

### API Keys and Endpoints

Edit the `api.json` file in the project directory to include your API keys and endpoint URLs.

```json
{
  "API_KEY": "your_api_key_here",
  "ENDPOINT_URL": "your_endpoint_url_here"
}
```

### Adjust API Configuration

Ensure the endpoint URLs in `agents-client-api.js` and `streaming-client-api.js` are correctly configured to match your backend.

## Running the Project

### Development Mode

To run the application in development mode with live reloading:

```bash
npm run dev
```

### Production Mode

For production, start the application with:

```bash
npm start
```

This command serves your application on the default port (usually `http://localhost:3000`).

### Accessing the Application

Open your browser and navigate to `http://localhost:3000`. Adjust the URL if you've changed the default port.

## Scripts Overview

- `npm start`: Launches the application in production mode.
- `npm run dev`: Starts the application with `nodemon` for automatic reloading.
- `npm run test`: Runs test suites (configure tests in your project as needed).
- `npm run lint`: Lints the codebase with ESLint (ensure ESLint is configured).
- `npm run build`: Placeholder for build scripts, if necessary.
- `npm run prettify`: Formats the code using Prettier.

## Additional Information

The project includes HTML, CSS, and JavaScript files for the UI and agent interactions. Multimedia files like `emma_idle.mp4` are used for demonstration purposes. Ensure these files are correctly referenced in your code.

## License

This project is licensed under the terms of the `LICENSE` file.

## Conclusion

This guide provides the steps to set up and run the Live Streaming Demo project efficiently. For more detailed configuration options, refer to the specific files mentioned in this guide.

- `By Gutoshi`