## How to Run the React Website Locally

### Prerequisites

You only need one thing installed on your computer: **Node.js**.

1.  **Install Node.js:** Node.js includes **npm** (Node Package Manager), which is essential for managing JavaScript projects and installing React tools.
      * Go to the official Node.js website and download the **LTS (Long-Term Support)** version for your operating system (Windows, macOS, or Linux).
      * Install it, accepting the default options.

### Step 1: Set Up the React Project

We will use **Vite**, a modern, fast tool for creating front-end projects, which is the easiest way to run single-file React apps like this one.

1.  **Open your Terminal or Command Prompt (CMD/PowerShell).**

2.  **Create a New Project Directory:** Navigate to where you want to save the project (e.g., your Desktop or Documents folder) and run:

    ```bash
    npm create vite@latest al-quran-academy-app -- --template react
    ```

      * This command creates a new folder named `al-quran-academy-app` with a basic React setup.

3.  **Navigate into the New Directory:**

    ```bash
    cd al-quran-academy-app
    ```

4.  **Install Dependencies:** Vite installs the necessary packages (like React and ReactDOM) to make the app run.

    ```bash
    npm install
    ```

-----

### Step 2: Integrate the Code

Now, you will replace the default React code with the code I generated for the Al Quran Academy website.

1.  **Find the Source File:** In your new project folder (`al-quran-academy-app`), navigate to the following path:

    ```
    /src/
    ```

2.  **Delete/Rename the Default `App.jsx`:** Delete the existing `App.jsx` file (or rename it to `App.bak` if you want to keep a backup).

3.  **Create the New File:** Create a new file named **`App.jsx`** in the `/src/` folder.

4.  **Paste the Code:** Copy the entire code block from my previous response (the content of `AlQuranAcademyWebsite.jsx`) and paste it completely into your new **`App.jsx`** file.

-----

### Step 3: Run the Website

With the code in place, you can now start the local development server.

1.  **Make sure your Terminal/Command Prompt is still in the project directory** (`al-quran-academy-app`).

2.  **Start the Server:** Run the development command:

    ```bash
    npm run dev
    ```

3.  **Access the Website:**

      * The terminal will usually display a message like:
        ```
        Local: http://127.0.0.1:5173/
        ```
      * **Click on that link** (or copy and paste it into your web browser's address bar).

The website should now load in your browser, running locally on your computer\! Any changes you make to the `App.jsx` file will automatically refresh in the browser.

Let me know if you run into any issues with the setup\!