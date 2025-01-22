# React Components Library

This project showcases various reusable React components, including Buttons, Alerts, Badges, and Cards. Each component demonstrates different styles and functionalities, making it easy to integrate into various React applications.

## Table of Contents

- [Components](#components)
  - [Button](#button)
  - [Alert](#alert)
  - [Badge](#badge)
  - [Card](#card)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Components

### Button

The `Button` component supports different sizes, colors, and states (enabled/disabled).

#### Props:

- `size`: Defines the size of the button (`small`, `medium`, `large`).
- `color`: Sets the color of the button (`blue`, `green`, `red`).
- `disabled`: Disables the button if set to `true`.
- `label`: The text displayed on the button.

### Alert

The `Alert` component displays messages with different colors and icons.

#### Props:

- `color`: The background color of the alert (`green`, `yellow`, `red`).
- `icon`: The icon class for the alert.
- `message`: The message text inside the alert.

### Badge

The `Badge` component can display an icon, label, and supports different sizes and colors.

#### Props:

- `color`: The background color of the badge.
- `size`: The size of the badge (`small`, `medium`, `large`).
- `icon`: The icon to display inside the badge.
- `label`: The text label for the badge.

### Card

The `Card` component displays an image, content, and a link.

#### Props:

- `href`: The URL the card links to.
- `imgAlt`: Alternative text for the image.
- `imgSrc`: The source path of the image.
- `children`: The content inside the card (e.g., title, description).

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/Shabbo0o/react-component-library.git
    cd react-component-library
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

3. Start the development server:
   ```bash
    npm run dev
   ```

## Project Structure

```bash
    react-components-showcase/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── Alert.css
│   ├── Alert.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Badge.css
│   ├── Badge.jsx
│   ├── Button.css
│   ├── Button.jsx
│   ├── Card.css
│   ├── Card.jsx
│   ├── index.css
│   ├── main.jsx
│   └── gitignore
├── Index.html
├── package.json
└── README.md

```
