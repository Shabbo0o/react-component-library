import React from 'react';
import Button from './Button';
import Alert from './Alert';
import Badge from './Badge';
import './index.css';
import Card from './Card'

import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';


function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Components Library</h1>

      <h2 className="text-xl font-semibold mb-2">1. Buttons</h2>
      <div className="space-y-4">
        <Button size="small" color="blue" disabled={false}>Small Blue Button</Button>
        <Button size="medium" color="green" disabled={false}>Medium Green Button</Button>
        <Button size="large" color="red" disabled={true}>Large Red Button (Disabled)</Button>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Alerts</h2>
      <div className="space-y-4">
        <Alert color="green" icon="fa-solid fa-check-circle">This is a success alert.</Alert>
        <Alert color="yellow" icon="fa-solid fa-info-circle">This is a warning alert.</Alert>
        <Alert color="red" icon="fa-solid fa-exclamation-triangle">This is an error alert.</Alert>
      </div>

      <h2 className="section-title">3. Badges</h2>
      <div className="badge-container">
        <Badge color="blue" size="small" icon={FaCheckCircle} />
        <Badge color="green" size="medium" icon={FaInfoCircle} />
        <Badge color="red" size="large" icon={FaExclamationTriangle} />
      </div>
      <h2 className="section-title">4. Card</h2>
      <div>
        <Card imgSrc="./assets/react.png" imgAlt="React Image" href="https://react.dev/">
          <h3>Card Header</h3>
          <p>This is a description of the card.</p>
        </Card>
      </div>

    </div>
  );
};

export default App;
