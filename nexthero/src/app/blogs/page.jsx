import Link from 'next/link';
import React from 'react';

const page = () => {
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
      
    return (
        <div>
            {
                blogs.map(blog=><div key={blog.slug} className='border-2 my-2 p-12'>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <button className='bg-red-400 p-4 rounded-lg text-white'>

                       <Link href={`/blogs/${blog.slug}`}>View More </Link>
                    </button>
                </div>)
            }
        </div>
    );
};

export default page;