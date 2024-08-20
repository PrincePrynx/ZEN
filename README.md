
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

- **MoodTracker**: Allows users to cultivate a personalized garden based on the users' daily moods and emotions entry. Users can customize how frequently they are prompted to record their feelings, such as every two hours. The app will send a notification asking, "How are you feeling?" with a range of mood options to choose from.Each mood is represented by a unique plant, so each entry adds a new plant to the users' garden, visually reflecting users' emotional journey throughout the day.
- **Mood Garden**: At the end of the day, this provides the users an analysis of their emotional patterns and offers suggestions to enhance their well-being. The garden evolves as more mood entries are made.
- **Thoughts Villa**: As part of my ALX portfolio assignment, ZEN's primary functionality in its initial iteration is a thought shredder app under the Thoughts Villa feature.
  - The thought shredder is designed for scenarios where users want to let go of intrusive thoughts. It's akin to writing a negative thought on a piece of paper and burning it as a way of freeing themselves from those thoughts or giving heavy emotions a place to go.
  - The app interacts with users by changing the color of the page to match the tempo of their keystrokes, moving from a dull, sad color to a bright, cheerful hue by the time they are done typing and shredding their thoughts. The idea is that the background color change will help soothe the user and regulate their unsettled feelings into a calmer state of mind. Users get directed another page to see motivational messages after clicking "Let it Go."
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
- **Voice Interaction**: Voice-Activated features to allow users to interact with the app using voice commands, making it easier to log moods or access features without needing to type.- **Integration with Mental Health Resources**: Provide resources and links to professional help and mental health support networks.

## Author

- **Name**: [Prince Afful]
- **Email**: [affulprinceenoch@gmail.com || aspiringdevout@gmail.com]
- **GitHub**: [https://github.com/PrincePrynx]
- **LinkedIn**: [www.linkedin.com/in/prince-enoch-afful]
