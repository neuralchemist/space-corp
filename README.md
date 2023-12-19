# Space Corp

<img src="https://github.com/neuralchemist/space-corp/blob/main/src/assets/space-corp.gif" alt="space-corp.gif" style="float: left; margin-right: 10px;" />

## How to use the project

```bash
# clone project
git clone https://github.com/neuralchemist/space-corp.git
# move to root folder
cd space-corp
# install dependencies
yarn
# run in dev mode
yarn dev
```

## How I worked on this project

In developing this project, I adhered to industry best practices to ensure efficiency and maintainability. My goal was to simulate a professional work environment. 

My workflow included:

- **Git and GitHub:** Used for version control

- **Clean Code and Folder Structure:** Maintaining clean, readable code is paramount. I adopted professional feature based folder structures and naming conventions to enhance code clarity and maintainability.

- **TypeScript:** enhances code quality and maintainability. Strongly typed code reduces errors and improves code documentation.

## How to navigate this project

- **Async State Management:** `react-query` for state management and caching. [Example Code](https://github.com/neuralchemist/space-corp/blob/main/src/features/DashBoardA/api/useGetSensorData.tsx)

- **Real-Time Updates:** real-time updates using `react-use-websocket`. [Example Code](https://github.com/neuralchemist/space-corp/blob/main/src/features/DashBoardB/components/DashBoardB/index.tsx)

- **Reusable UI Components:**  UI components for scalability. [Example Code](https://github.com/neuralchemist/space-corp/tree/main/src/features/UI)


## Why I built the project this way

- **Modular Component-Based Architecture:** React.js encourages a modular, component-based architecture, fostering code reusability and maintainability.

- **Clean Architecture:**  used clean architecture to keep business logic separate from implementation details. This approach enhances maintainability, testability, and adaptability to future changes.

- **State Management:** utilized modern state management techniques including `useState` and `react-query`. Consciously avoided introducing a state management library like `Redux`, as many contemporary projects are moving away from them.

- **UI Components:** Material-UI and styled components play a significant role in creating professional and customizable UI components. Styled components offer features such as auto-prefixing and scoped classes.

## Key Features

- **Dashboard A:** Visualize sensor values using StatBox. Values changes color for positive and negative values. UI can be updated by click of a button. Sensor data is cached.

- **Dashboard B:** Visualize Real Time sensor value using StatBox and Line Charts. Alert appears in the backdrop which can't be ignored by the user. Automatically reconnect if connection fails.


## Comment on Potential Improvement of API

Implementation depends on use case and scalability. 

- I would suggest implementing with Socket.io on the server instead of pure websockets. `Socket.io` provides many features which have good performance and reliability in production.
- I would suggest version controlled API for maintainability. eg. "api/v1/Spectrum"


## If I had more time I would change this

Given additional time, I would further improve this project by:

- Adding integration tests and end-to-end tests to enhance robustness.


