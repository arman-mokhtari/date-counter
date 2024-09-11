# React `useReducer` Practices 🎯

Welcome to the **React `useReducer` Practices** repository! This collection demonstrates different approaches and best practices for using the `useReducer` hook in React functional components to manage state effectively. From simple to advanced use cases, this repository will help you master the `useReducer` pattern in your projects.

## 🛠️ Features

- **Basic Usage**: Understand the fundamentals of `useReducer` with clear examples.
- **Complex State Management**: Learn how to manage deeply nested state and perform multiple state updates.
- **Action Patterns**: Implement action types, payloads, and side effects for robust state handling.
- **Middleware Examples**: Discover how to integrate with middleware (like `useEffect`) for async actions.
- **Custom Reducers**: Build your own custom reducers and improve your application’s scalability.

## 🚀 Quick Start

1. **Clone the repo**:

   ```bash
   git clone https://github.com/arman-mokhtari/quiz-reducer.git
   cd quiz-reducer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the project**:

   ```bash
   npm start
   ```

   Navigate to `http://localhost:3000` to explore the examples.

## 🏗️ Examples Overview

### 1. **Basic Counter with `useReducer`**  
A simple counter example to introduce the core concepts of `useReducer`.

```js
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
```

### 2. **Todo App**  
A classic Todo app to demonstrate how to manage a list of tasks and handle complex state updates.

### 3. **Fetching Data with Side Effects**  
How to fetch data asynchronously using `useReducer` and `useEffect`.

### 4. **Managing Complex State**  
Learn how to deal with complex state structures using nested objects and arrays.

## 🧠 Concepts Covered

- State and action types
- Action payloads
- Conditional logic in reducers
- Side effects with `useEffect`
- Best practices for organizing reducer logic

## 📚 Learn More

- [React Docs - `useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [How to manage state with `useReducer`](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

## 🤝 Contributing

Feel free to open issues or submit pull requests! Contributions are welcome.