Step-by-Step Plan: Building a Static React Website with Typescript

------------------------------------------------------------------

Project Setup (2 Days):

1\.  Initialize Project:

    -   Use `create vite@latest` with Typescript enabled:

    -   This creates a project structure with basic React and Typescript configurations.

2\.  Install Dependencies:

    -   Install packages for styling and routing:

        ```

        npm install react-router-dom
        material ui
        npm install typed.js

        ```

    -   Styled Components for CSS framework.

    -   React Router Dom enables navigation between different pages.
    -   typed.js for a flashy homepage header with dynamic responses.

3\.  Folder Structure:

    -   Create separate folders for components, styles, and assets (images, fonts).

    -   Organize components based on feature (e.g., `Home`, `WorkExamples`, etc.).

## Checking in with the boys

-quick site rundown, answer question, then ask for tagline

Tyler:\ 
        - Featured Product instead of Featured Project \
        - Imagining your Reality\
Pao:\
        - Make sure its AECOM Viz Studio\
        - Doesn't want it to seem like its too removed from AECOM\
        - Beautify your work\
Chris Murph:\
        - Site feels more human\
        - When hovering over a project, it displays an overlay with name, general info, maybe some tech specs. Like 3 bulletpoints \
        - This is the way\
Jeremy
        - 
Jimmy
        -

Component Development (30 Days):

1\.  Define Main Layout:

    -   Create a `Layout.tsx` component to house the overall structure of the website (header, navigation, content area, footer).

    -   Use styled-components to style the layout elements.

2\.  Develop Individual Pages:

    -   Create separate React components for each page (Homepage, WorkExamples, AboutUs, HighlightedProject).

    -   Each page component should handle its own content and logic.

    -   Utilize reusable components like buttons, cards, or sections within each page.

    -   Make sure to type components using interfaces or props with specific types.

3\.  Responsiveness (0.5 Day):

    -   Use media queries within styled-components to adjust styles for different screen sizes (desktop, mobile).

    -   Consider libraries like `react-responsive` for advanced responsive design features.

Navigation and Routing (0.5 Day):

1\.  Configure Routes:

    -   Set up routes using `react-router-dom`.

    -   Define routes for each page (homepage, work examples, etc.) in `App.tsx`.

    -   Use components as the route render functions.

2\.  Navigation Bar:

    -   Create a reusable `Navbar.tsx` component to display navigation links.

    -   Use `Link` from `react-router-dom` for navigation between pages.

Deployment (0.5 Day):

1\.  Build for Production:

    -   Run `npm run build` to create an optimized production build.

    -   This creates a `build` folder with static HTML, CSS, and JavaScript files.

2\.  Heroku Deployment:

    -   Configure Heroku with a custom domain pointing to your existing website.

    -   Follow Heroku's documentation to deploy the built static files from your project.

3\.  Testing:

    -   Thoroughly test the website on various devices and browsers before deployment.

    -   Ensure smooth navigation and responsive layouts across different screen sizes.

Additional Considerations:

-   SEO: Implement basic SEO practices like meta descriptions and title tags for improved search engine visibility.

-   Content Management: If content updates are frequent, explore Content Management Systems (CMS) integrations like headless CMS or static site generators for managing content outside the React codebase.

-   Performance Optimization: For larger websites, consider code-splitting and lazy loading of components to improve initial load times.

By following this step-by-step plan, you can build a clean, efficient, and responsive static website using React and Typescript with minimal backtracking.