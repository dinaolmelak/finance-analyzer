# Finance Analyzer

Finance Analyzer is a web app that allows users to track their expenses and visualize their spending in a bar chart. It helps users manage their finances by allowing them to add, view, and analyze their expenses over time.

---

## **Table of Contents**

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

---

## **Technologies Used**

- **React**: For building the user interface.
- **Vite**: A fast build tool for React that provides a smooth development experience.
- **Chart.js**: For rendering the bar chart visualization of expenses.
- **Material-UI**: For UI components like `List`, `ListItem`, and `CustomCard`.
- **ReactCardFlip**: For the flip-card effect used to toggle between views. [ReactCardFlip GitHub](https://github.com/AaronCCWong/react-card-flip)

---

## **Installation**

Follow these steps to get the project running locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/finance-analyzer.git
   ```

2. **Navigate to the project folder:**

    ```bash
    cd finance-analyzer
    ```

3. **Install dependencies: Since this project uses Vite, install the required dependencies with:**

    ```bash 
    npm install
    ```

4. **Start the app: Run the development server using Vite:**

   ```bash
   npm run dev
   ```

The app will open in your browser at http://localhost:5173 (default Vite port).

## Usage

### Adding Expenses

1. Click on the "Add Expenses" button.
2. Enter the Expense Name, Amount, and Date.
    1. The Amount must be a non-negative number.
    2. The Date cannot be a future date.
3. Click on the Add button to save the expense.

### Viewing Expenses

1. Click on the "View Expenses" button to see the list of added expenses.
    1. Each item shows the expense name, amount, and the date when it was added.

### Visualizing Spending

1. Once you’ve added expenses, click on the "Visualize Spending" button to view a bar chart representation of your expenses.
    1. The x-axis shows the expense names.
    2. The y-axis shows the amount spent.

## Features

- **Expense Input Form:** Users can add new expenses with the expense name, amount, and date.
- **Expense List:** View a list of added expenses, showing the expense name, amount, and date.
- **Bar Chart Visualization:** A dynamic bar chart updates as users add expenses, providing a visual representation of their spending.
- **Input Validation:** Ensures that the amount is non-negative, and the date is not in the future.

## Contributing

Feel free to fork this repository and submit pull requests! If you have any suggestions or feature requests, open an issue on the GitHub repository.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
