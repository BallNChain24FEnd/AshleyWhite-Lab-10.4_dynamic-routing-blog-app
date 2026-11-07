# Lab 10.4 — Dynamic Routing Blog App

## The Dev Journal

A React blog application built with Vite, JavaScript JSX, and React Router. Users can explore blog posts, navigate dynamic pages, and access a protected admin dashboard after logging in.

## Features

1. **Dynamic Blog Routing:** Displays blog posts using URL slugs and React Router's `useParams()`.
2. **Authentication:** Uses React Context to simulate login and logout with conditional navigation.
3. **Protected Admin Dashboard:** Redirects logged-out users to the login page.

**Added Extra Features:** Responsive styling, hover effects, and a simple CSS fade-in animation.

## Technologies

- React (JavaScript JSX)
- Vite
- React Router
- React Context API
- CSS

## Getting Started

`npm install`
`npm run dev`

Open the localhost URL displayed in your terminal.

To verify the production build:

`npm run build`

## Reflection Questions

**1. How did you implement dynamic routing?**

I used React Router with `/blog/:slug` and `useParams()` to display the correct blog post.

**2. How did you manage authentication?**

I used React Context and `useState` to share login and logout functionality across components.

**3. How did you protect the Admin page?**

I created a `ProtectedRoute` component that redirects logged-out users to `/login`.

**4. What was challenging?**

Connecting dynamic routes with authentication while keeping the components organized.

## Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vite.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Search](https://www.google.com/)


## Possible Future Improvement

Add full fade-in/fade-out page transitions using Motion's `AnimatePresence` component.