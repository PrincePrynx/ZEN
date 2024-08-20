
# ZEN

ZEN is a mental health and well-being app designed to help users track their moods, reflect on their thoughts, and cultivate positive habits. The app offers features like mood tracking, a Thoughts Villa for journaling, a personalized garden that grows based on your mood entries, and much more.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the App](#running-the-app)
- [Future Improvements](#future-improvements)
- [Author](#author)

## Features

- **MoodTracker**: Allows users to track their mood daily, select a plant that represents their emotion, and view these plants in their personal garden.
- **Thoughts Villa**: A space for users to release their thoughts in a text box and see motivational messages after clicking "Let it Go."
- **Garden**: A visual representation of the user's mood over time, with plants representing each day's mood. The garden evolves as more mood entries are made.
- **Thoughts Backlog**: Stores all thoughts entered in the Thoughts Villa, allowing users to revisit them and engage in a fun math quiz before viewing each entry.
- **ZenAnimation**: A welcoming screen with the ZEN logo and slogan, providing an engaging entry point into the app.

## Architecture

The app follows a component-based architecture, using React to manage the user interface. Each major feature, such as the MoodTracker, Thoughts Villa, and Garden, is encapsulated in its own component, ensuring modularity and reusability.

The app also uses state management techniques within React to manage user data, such as mood entries and thoughts, and CSS modules for styling individual components, ensuring consistency and responsiveness across different devices.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **CSS Modules**: For styling individual components and ensuring consistency.
- **JavaScript**: Core programming language for building interactive elements.
- **HTML5**: Markup language for structuring the app's content.
- **Git**: Version control system for tracking changes in the project.

## Setup and Installation

To set up and run the ZEN app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ZEN.git
   cd ZEN
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm start
   ```

4. **Access the app**:
   Open your browser and go to `http://localhost:3000`.

## Running the App

- **Development Mode**:
  - To run the app in development mode with hot-reloading:

    ```bash
    npm start
    ```

- **Production Mode**:
  - To build the app for production:

    ```bash
    npm run build
    ```

  - The production-ready files will be in the `build` directory. You can deploy these files to any static server.

## Future Improvements

- **Advanced Analytics**: Add more detailed analytics and insights based on mood entries.
- **Customization**: Allow users to customize their garden with different types of plants and decorations.
- **Social Sharing**: Enable users to share their gardens and thoughts on social media.
- **Integration with Mental Health Resources**: Provide resources and links to professional help and mental health support networks.

## Author

- **Name**: [Prince Afful]
- **Email**: [affulprinceenoch@gmail.com]
- **GitHub**: [PrincePrynx]
- **LinkedIn**: [prince-enoch-afful]
