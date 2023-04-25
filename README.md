# Brain Bounce 🧠

Brain Bounce is an interactive project showcasing various concepts I've learned in JavaScript, such as event listeners, animation, DOM manipulation, and more. This project features an image of a brain that bounces around the screen, changing its direction and velocity when it hits the edges. You can start, stop, and reset the animation.


## Table of Contents
1. [Features](#features)
2. [How It Works](#how-it-works)
3. [Run Locally](#run-locally)
4. [Roadmap](#roadmap)
5. [License](#license)

## Features

- **Event Listeners:** Event listeners are used to handle user interactions with the application. In this project, they are used to detect window resize, canvas clicks, and button clicks.
- **Animation:** The animation is achieved using a combination of the Canvas API and setTimeout. The brain image's position is updated based on its velocity, and the screen is cleared before redrawing the image in its new position.
- **getElementById & DOM Manipulation:** The getElementById function is used to access various elements on the page, such as the canvas and buttons. The project demonstrates how to interact with these elements and manipulate their properties and behavior.
- **DOM:** The Document Object Model (DOM) is an in-memory representation of the HTML document, which can be manipulated using JavaScript. This project showcases DOM manipulation through resizing the canvas, updating the image's position, and controlling the animation state.


## How It Works
    1. The canvas is initialized, and its dimensions are set to match the window's dimensions.
    2. An image of a brain is loaded and drawn on the canvas.
    3. The brain bounces around the screen, reversing direction and changing velocity when it reaches the edges.
    4. Users can start, stop, and reset the animation using the provided buttons.
    5. When the user clicks on the brain, its velocity is randomized.
    6. The canvas automatically resizes when the window is resized, ensuring the brain's visibility at all times.

## Run Locally

Clone the project

```bash
  git clone https://github.com/annanizhoni/brainbounce.git
```

Go to the project directory

```bash
  cd brainbounce
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Roadmap

- Create my own digital art of a padded cell and the brain, instead of using clipart

- Add a gaming element, such as a quiz about JavaScript concepts. When the correct answer is selected the brain can shoot a laser at the concept or code. After so many correct answers the brain can be freed from the padded cell. 


## License

[MIT](https://choosealicense.com/licenses/mit/)

