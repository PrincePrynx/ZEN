// import React, { useState } from 'react';
// import './HomePage.css'; // Optional: add styling

// const calculateColor = (inputLength) => {
//   const minColor = 200; // Dull color (e.g., grey)
//   const maxColor = 255; // Bright color (e.g., green)

//   const colorValue = Math.min(Math.max(inputLength * 10, minColor), maxColor);
//   return `rgb(${255 - colorValue}, ${colorValue}, ${100 + colorValue / 2})`;
// };

// function HomePage() {
//   const [thought, setThought] = useState('');
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color (white)

//   const handleThoughtChange = (event) => {
//     const input = event.target.value;
//     setThought(input);
//     const color = calculateColor(input.length);
//     setBackgroundColor(color);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (thought.trim()) {
//       console.log('Thought submitted:', thought);
//       // You can perform additional actions here, like sending data to a server
//       setThought('');
//       setBackgroundColor('#ffffff'); // Reset to default color
//     } else {
//       console.log('Please enter a thought before submitting.');
//     }
//   };

//   return (
//     <div className="home-page" style={{ backgroundColor }}>
//       <h1>Welcome to ZEN</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={thought}
//           onChange={handleThoughtChange}
//           placeholder="Type your thoughts here..."
//           rows="4"
//           cols="50"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>
//         <a href="/mood-tracker">Go to Mood Tracker</a>
//       </p>
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  console.log("Rendering HomePage"); // Debug statement

  return (
    <div className="home-page">
      <h1>Welcome to ZEN</h1>
      <p>Select an option to get started:</p>
      <div className="button-container">
        <Link to="/thoughts-villa">
          <button className="home-button">Thoughts Villa</button>
        </Link>
        <Link to="/mood-tracker">
          <button className="home-button">Mood Tracker</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
