# Design Challenge

Using Node.JS, create a people directory using the [Random User](https://randomuser.me/) API.

The people directory should list all people in a format of your choosing (grid, table, etc..).

Each people displayed should have the following information:

- A profile image
- Name
- Age
- City

When a person is clicked, it should take you to a more detailed information page. This page should display:

- Profile Image
- Name
- Age
- Full Address
- Email Address
- Date of Birth
- Phone number

The application must run in Node.js and use React JS. Feel free to choose a framework (Remix, NextJS, etc...).

You can use any styling library you wish (Tailwindcss, Bootstrap, MaterialUI etc...)

## Acceptance Criteria

- Is server-side rendered
- Should display up to 10 users
- A user should be able to drill down to each person and view details:
  - Profile Image
  - Name
  - Age
  - Full Address
  - Email Address
  - Date of Birth
  - Phone number
- Runs in Node.js
- Uses React

## Bonus points

- Should work offline
- Test coverage
- Internationalized
- Paginated directory page with 10 users per page
- 95+ [Lighthouse](https://developers.google.com/web/tools/lighthouse/) scores
  for performance and accessibility

## Starting the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
