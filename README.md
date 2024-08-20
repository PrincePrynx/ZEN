
# ZEN

Through interactive and engaging features, ZEN is designed to support and help manage emotional and mental well-being. With a focus on providing personalized experiences, ZEN combines mood tracking, color therapy, thought documentation, journaling, and creative expression to enhance overall mental health and well-being.

Currently in its conceptual phase, the project aims to evolve into an ecosystem of tools that foster a supportive and positive environment for users to manage their emotions, care for their headspace, and well-being.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the App](#running-the-app)
- [Secondary Future Improvements And Expansion](#secondary-future-improvements-and-expansion)
- [Future Primary Expansion Features](#future-primary-expansion-features)
- [Conclusion](#conclusion)
- [Author](#author)

## Features

- **MoodTracker**: Allows users to cultivate a personalized garden based on the users' daily moods and emotions entry. Users can customize how frequently they are prompted to record their feelings, such as every two hours. The app will send a notification asking, "How are you feeling?" with a range of mood options to choose from.Each mood is represented by a unique plant, so each entry adds a new plant to the users' garden, visually reflecting users' emotional journey throughout the day.
- **Mood Garden**: At the end of the day, this provides the users an analysis of their emotional patterns and offers suggestions to enhance their well-being. The garden evolves as more mood entries are made.
- **Thoughts Villa**: As part of my ALX portfolio assignment, ZEN's primary functionality in its initial iteration is a thought shredder app under the Thoughts Villa feature.
  - The thought shredder is designed for scenarios where users want to let go of intrusive thoughts. It's akin to writing a negative thought on a piece of paper and burning it as a way of freeing themselves from those thoughts or giving heavy emotions a place to go.
  - The app interacts with users by changing the color of the page to match the tempo of their keystrokes, moving from a dull, sad color to a bright, cheerful hue by the time they are done typing and shredding their thoughts. The idea is that the background color change will help soothe the user and regulate their unsettled feelings into a calmer state of mind. Users get directed another page to see motivational messages after clicking "Let it Go."
- **Motivational Messages**: After you release your thoughts in the Thoughts Villa section, the app will display a motivational message selected from a curated backlog.
The message is designed to provide a positive boost and support your emotional well-being and as a way of validating your efforts you used to shred your intrusive thoughts. Each message is randomly chosen to ensure fresh and engaging encouragement with every visit.
- **Thoughts Backlog**: This allows users to revisit and reflect on their past thoughts. When a user enters their thoughts in the Thoughts Villa section, they are automatically saved in their backlog for future reference.
- To ensure that they are ready to view the intrusive thoughts they've let go, a brief and engaging math quiz is presented. This quiz serves as a preliminary check to help manage potential triggers and ensure that users are in a suitable mindset before accessing your previous entries.
- This is a simplified approach to a future, more complex method that will involve answering questions and receiving insights based on analysis. The goal is to provide a safe and supportive environment for reviewing and reflecting on your thoughts.
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

# Secondary Future Improvements And Expansion

## 1. Personalized Wellness Plans

- **Customizable Routines:** Create tailored mental wellness plans based on user preferences, goals, and daily schedules.
- **Progress Tracking:** Monitor progress and adapt plans over time to align with users' changing needs.

## 2. Mindfulness and Meditation Library

- **Guided Sessions:** A library of guided meditation and mindfulness exercises tailored to different moods and stress levels.
- **Breathing Exercises:** Interactive breathing techniques to help users relax and manage anxiety.

## 3. Mental Health Journaling

- **Daily Reflection:** A journaling feature where users can reflect on their day, track moods, and set intentions.
- **Mood Patterns:** Insights into mood patterns over time, helping users identify triggers and positive influences.

## 4. Community Support

- **Peer Support Groups:** Connect with others who share similar experiences or challenges in safe, moderated forums.
- **Wellness Challenges:** Participate in group wellness challenges to motivate and support each other.

## 5. Therapist/Coach Integration

- **Professional Support:** Options to connect with certified therapists or mental health coaches for additional support.
- **Virtual Sessions:** Schedule and track virtual therapy sessions within the app.

## 6. Stress Level Detection

- **Wearable Integration:** Sync with wearable devices to monitor stress levels and provide real-time coping strategies.
- **Instant Relief:** Quick access to calming exercises or music when high-stress levels are detected.

## 7. Mental Health Education

- **Learning Modules:** Educational content on mental health topics, coping strategies, and self-care practices.
- **Quizzes and Self-Assessments:** Interactive tools to help users understand their mental health better and discover areas of improvement.

## 8. Emergency Support Features

- **Crisis Hotline Integration:** Direct access to mental health crisis hotlines and emergency contacts.
- **Panic Button:** A feature that provides instant calming techniques and emergency resources during a panic attack.

## 9. Voice Interaction

- **Voice-Activated Features:** Allow users to interact with the app using voice commands, making it easier to log moods or access features without needing to type.

# Future Primary Expansion Features

## Social Cue Feature

In the future, the Social Cue Feature in ZEN will be designed to assist users who find it challenging to interpret and respond to social cues like facial expressions, tone of voice, body language, or contextual nuances. This feature enhances users' social skills, reduces anxiety in social situations, and improves overall communication abilities.

### Components For Social Cue Feature

1. **Real-Time Social Cue Assistance**
   - **Situation Analyzer:** Users can input or describe a social scenario, and the feature provides insights, suggested responses, and potential outcomes.
   - **Cue Buddy:** Users can have friends they can interact with to help diffuse social cues on the go.

2. **Social Scenario Practice**
   - **Role-Playing Scenarios:** Simulated social interactions for practicing everyday situations like small talk or workplace interactions. This can be done with a cue buddy too.
   - **Feedback Loop:** Constructive feedback on user responses with tips for improving social cue interpretation.
   - **Gradual Progression:** Scenarios range from basic to complex, allowing users to build their skills progressively.

3. **Social Cue Education**
   - **Learning Modules:** Educational modules on recognizing and interpreting social cues, including facial expressions, body language, tone of voice, and context.
   - **Visual Guides:** Interactive visual guides that break down social cues and their meanings.
   - **Quizzes and Assessments:** Regular quizzes to track users' understanding and progress.

4. **Personalized Social Cue Tracker**
   - **Progress Tracking:** Monitor the user's ability to recognize and respond to social cues, with insights into strengths and areas for improvement.
   - **Custom Challenges:** Personalized exercises to help users practice specific social skills.

5. **Social Cue Library**
   - **Cue Encyclopedia:** A comprehensive library of social cues with examples and explanations.
   - **Cultural Differences:** Information on how social cues vary across cultures, helping users navigate diverse social settings.

The idea behind the Social Cue Feature is to make ZEN an inclusive, supportive tool that offers practical, hands-on assistance for those struggling with social interactions, helping them build the skills needed for effective communication and meaningful connections.

## Buddy Support System Feature

The Buddy Support System is a future feature for ZEN designed to enhance social support and connection. It allows users to pair with a "buddy"—a friend, family member, or fellow ZEN user—to mutually support and encourage each other on their mental health journeys. This feature aims to improve motivation, accountability, and emotional well-being through shared experiences and collaborative activities.

### Components for Buddy Support System Feature

1. **Buddy Matching**
   - **Find a Buddy:** Users can invite known contacts or be matched with other ZEN users based on mental health goals and preferences.
   - **Profile Compatibility:** View potential buddies' profiles to find a good match based on goals, interests, and wellness activities.

2. **Daily Check-Ins**
   - **Shared Mood Tracking:** Exchange daily mood logs with your buddy, providing and receiving support on tough days.
   - **Custom Reminders:** Set reminders to check in with your buddy, maintaining engagement with mental health goals.
   - **Progress Sharing:** Celebrate milestones and achievements together, fostering mutual encouragement.

3. **Joint Wellness Activities**
   - **Shared Challenges:** Participate in wellness challenges together, such as mindfulness exercises or journaling prompts, earning shared achievements and rewards.
   - **Buddy Exercises:** Engage in guided exercises like mindfulness or meditation designed for two or more.

4. **Crisis Support**
   - **Instant Alerts:** Receive alerts if your buddy logs high-stress levels, allowing for timely support.
   - **Emergency Contacts:** Designate each other as emergency contacts for immediate help if needed.

5. **Buddy Journal**
   - **Shared Journal:** Collaborate on a joint journal to reflect on experiences and plan wellness activities.
   - **Memory Wall:** Create a visual memory wall with photos, quotes, and positive memories of your journey together.

The idea behind the Buddy Support System is to transform ZEN into more than just a personal assistant, turning it into a platform for collaborative well-being and mutual support.

# Conclusion

I am still refining additional future features not detailed above, as these concepts are in the early stages of development and organization. This outline is a preliminary draft and lacks full details and specifications at this point.

The current phase of development is focused on establishing ZEN's foundational capabilities, with the Thoughts Villa and Mood Garden features serving as the core components. This initial iteration aims to address the immediate needs of users by providing tools to express and track their emotions daily, making it easier to manage feelings on the go. (In addition to the fact that I will need to present a working project to be able to graduate and these two features seem more feasible with my given timeline)

ZEN reflects my desire to gift individuals with the tools and resources necessary to overcome barriers to mental well-being and effectively navigate life and its school of hard knocks.

While the project's current focus is on developing Thoughts Villa, Mood Tracker and Mood Garden, the long-term vision includes creating a comprehensive ecosystem of features designed to transform the mental health experience.

Through continuous innovation, ZEN aspires to become an indispensable companion for everyone.

Consider this an accountability update, and I am very open to collaboration.

Oh and, wish me luck in my final days of being an ALX SE student

## Author

- **Name**: [Prince Afful]
- **Email**: [affulprinceenoch@gmail.com || aspiringdevout@gmail.com]
- **GitHub**: [https://github.com/PrincePrynx]
- **LinkedIn**: [www.linkedin.com/in/prince-enoch-afful]
