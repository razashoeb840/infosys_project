# Campus Event Hub (Infosys Project)

A modern, scalable web platform designed to streamline and manage college/campus events. Built with Angular (with Server-Side Rendering capabilities), this application provides an intuitive interface for students, faculty, and administrators to discover, organize, and participate in campus activities.

## Features

- **Event Discovery:** Browse upcoming events happening around the campus.
- **Event Management:** Create, update, and manage events with ease.
- **User Engagement:** RSVP, registration, and notification functionality for students.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Server-Side Rendering (SSR):** Improved SEO and fast initial page loads using Angular Universal/SSR.

## Technology Stack

- **Frontend:** Angular
- **Styling:** CSS / SCSS
- **Rendering:** Angular SSR / Pre-rendering

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed a recent version of [Node.js](https://nodejs.org/) and NPM.
* You have the [Angular CLI](https://angular.io/cli) installed globally.

## Installation

To install all dependencies for the project, run:

```bash
npm install
```

## Running the Application

### Development Server
Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Production Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory (or the root output directory based on your current setup).

### Running with SSR
To start the server-side rendered application, run:
```bash
npm run serve:ssr
```
Or use the node server directly from the `server/` directory.

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Please refer to the `3rdpartylicenses.txt` file for information regarding third-party licenses used in this project.