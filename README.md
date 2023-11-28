# Article Craft Dashboard Project

## Overview

This project is a full-stack CRUD (Create, Read, Update, Delete) application for managing articles. It utilizes modern web development technologies and tools including Vue 3, Vite, Pinia, Bulma CSS, Composition API, Prettier, ESLint, JavaScript, and Firebase.

## Structure Overview

The project structure is organized as follows:

-   **`/src`**: The main source code directory.

    -   **`/assets`**: Contains static assets like images, fonts, and other resources.
    -   **`/components`**: Houses Vue components used in the application.
    -   **`/composables`**: Contains Composition API composables for modular logic.
    -   **`/layouts`**: Defines layout components for structuring pages.
    -   **`/pages`**: Contains Vue views and pages for routing.
    -   **`/plugins`**: Holds Vue plugins and integrations.
    -   **`/services`**: Includes services for interacting with Firebase or external APIs.
    -   **`/store`**: The Pinia store module for state management.
    -   **`/styles`**: Stores global CSS styles, including Bulma CSS configurations.
    -   **`/utils`**: Houses utility functions and helper scripts.
    -   **`App.vue`**: The root Vue component.
    -   **`main.js`**: The entry point for the application.

-   **`/public`**: Contains public assets and the `index.html` file.
-   **`/tests`**: Holds unit and integration tests.
-   **`/vite.config.js`**: Configuration for Vite build tool.
-   **`.eslintrc.js`**: ESLint configuration for code linting.
-   **`.prettierrc.js`**: Prettier configuration for code formatting.
-   **`firebaseConfig.js`**: Firebase configuration file (if applicable).
-   **`README.md`**: Project documentation.

## Usage

To run the Monster Slayer game, follow these steps:

1. Clone this repository to your local machine.
2. Ensure you have Vue 3 and npm/yarn installed.
3. Navigate to the project directory in your terminal.
4. Run the following command to install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Development

-   Start the development server:
    ```
    npm run serve
    # OR
    yarn serve
    ```
-   Open your browser and visit http://localhost:5173 to see the application in action.

## Technologies Used

-   **Frontend**:

    -   Vue 3
    -   JavaScript
    -   Vite
    -   Pinia (State Management)
    -   Bulma CSS (Styling)
    -   Composition API
    -   Prettier (Code Formatting)
    -   ESLint (Code Linting)

-   **Backend**:
    -   Firebase (Database and Authentication)

## Features

-   Create, Read, Update, and Delete articles.
-   Real-time data synchronization with Firebase.
-   State management with Pinia.
-   Modern UI design with Bulma CSS.
-   Code formatting with Prettier.
-   Code quality assurance with ESLint.

### Contributing

If you'd like to contribute to this project or have suggestions for improvement, please feel free to open issues or submit pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.

### Acknowledgments

This project is designed to demonstrate proficiency in building a full-stack web application with Vue 3 and Firebase, emphasizing clean code and modern development practices.

Happy coding!
