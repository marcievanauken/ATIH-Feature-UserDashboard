# Code Challenge for Full Stack Engineer at All Tech Is Human

[Code Challenge Instructions](https://github.com/schmidtfutures/sf-eng-challenge-server)

## Technology
- Built with [Sveltekit Framework](https://kit.svelte.dev/)
- Uses the [Flowbite Component Library](https://flowbite-svelte.com/) and [Tailwind CSS](https://tailwindcss.com/) for simple UI development

## Feature Details
- This feature is a **User Dashboard** for users who are hoping to match with opportunities
- The user can view their dashboard for a snapshot summary of their opportunity matches

## How to navigate
- The app will take you to the "homepage" route by default. Enter a userid in the input field to "sign in" and render the dashboard from the `user/dashboard/` route
- Once viewing a dashboard, you can update the userid param to view a different users' dashboard

## MVP Notes
- All handling is server-side due to time constraint. To ideally utilize the `src/components` and `src/pageTemplates` directories for client-side rendering and better component structuring

### Use Cases
- "Homepage" route - http://localhost:5173/
- Example User Dashboard: http://localhost:5173/user/dashboard?userid=5
  
### Handled Edge Cases
- userid 4 is missing interests: http://localhost:5173/user/dashboard?userid=4
- Failed to fetch API - To test, do not run the API and try to access a User Dashboard
- "Not Signed In" - To test, make sure the API is running, go to a User Dashboard, remove the userid query param from the URL: http://localhost:5173/user/dashboard
- Handling 1 vs Many results per role. For example, if a user interest results in 1 matched result, do not show the "Show All Matches" button for that role. See an example here: http://localhost:5173/user/dashboard?userid=1

## Running the app
```bash
npm run dev
```
## Building the app
```bash
npm run build
```

