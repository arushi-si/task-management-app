# Task Management App

## Deployment

- You can see the deployed version here:
  https://task-management-app-six-gamma.vercel.app/

## How to run

- Install packages with `npm i` command
- Run `npm run dev`
- Open url provided in CLI in the browser

## Structure

| Folder     | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| src        | core directory of project, most application code present here |
| components | All reusable components                                       |
| utils      | redux store and slices definition                             |

## Technologies used

- react
- nanoid
- react-icons
- react-redux
- @reduxjs/toolkit

## How to use the application

- Create a user by adding username and password(length should be > 5).
- After user creation and login you'll be redirected to the main page.
- Enter the task in the `search bar` and add it to your list by clicking on the `Add` buttton.
- New task will then be created.
- You can edit the content of your task by clicking on the edit icon.
- Task can be marked as completed by checking the checkbox besides your task.
- Delete your task by clicking on the delete icon.
- All data will be stored in the local storage.
- Click on the `Log Out` to clear user data stored in the localStorage.
