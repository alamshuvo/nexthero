import React from 'react';

const page = ({params}) => {
    console.log(params);
    
    const blogs=[
        {
          "slug": "introduction-to-react",
          "title": "Introduction to React",
          "description": "Learn the basics of React, a powerful JavaScript library for building user interfaces."
        },
        {
          "slug": "mastering-redux",
          "title": "Mastering Redux",
          "description": "An in-depth guide to state management in React applications using Redux."
        },
        {
          "slug": "modern-javascript-features",
          "title": "Modern JavaScript Features",
          "description": "Explore the latest features of JavaScript, including ES6+ syntax and concepts."
        },
        {
          "slug": "building-restful-apis-with-nodejs",
          "title": "Building RESTful APIs with Node.js",
          "description": "Step-by-step tutorial on creating RESTful APIs using Node.js and Express."
        },
        {
          "slug": "react-hooks-overview",
          "title": "React Hooks Overview",
          "description": "A comprehensive look at React Hooks and how they simplify state and side effects in functional components."
        },
        {
          "slug": "css-grid-vs-flexbox",
          "title": "CSS Grid vs. Flexbox",
          "description": "Comparing CSS Grid and Flexbox, two powerful layout systems in modern web design."
        },
        {
          "slug": "getting-started-with-typescript",
          "title": "Getting Started with TypeScript",
          "description": "Introduction to TypeScript and how it enhances JavaScript with static types."
        },
        {
          "slug": "deploying-apps-to-heroku",
          "title": "Deploying Apps to Heroku",
          "description": "Guide on deploying Node.js applications to Heroku, a popular cloud platform."
        },
        {
          "slug": "mongodb-best-practices",
          "title": "MongoDB Best Practices",
          "description": "Tips and best practices for working with MongoDB, a NoSQL database."
        },
        {
          "slug": "progressive-web-apps-explained",
          "title": "Progressive Web Apps Explained",
          "description": "An introduction to Progressive Web Apps (PWAs) and how they bridge the gap between web and mobile apps."
        }
      ]
      const singleBlog=blogs.find(blog=>blog.slug== params.slug)
    return (
        <div className='h-screen space-y-5'>
           <div className='border-2 p-4 space-y-5'> 
           <h1>{singleBlog.title}</h1>
           <p>{singleBlog.description}</p>
           </div>

        </div>
    );
};

export default page;