import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the different ways to manage a state in a React
              application?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component. Local state
              is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 mb-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is JWT, and how does it work?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              JWT, or JSON Web Token, is an open standard that allows a client
              and a server to exchange security-related data. Every JWT has a
              set of encoded JSON objects, including claims. To ensure that the
              claims cannot be changed after the token is issued, JWTs are
              signed using a cryptographic technique.A client and a server can
              exchange security information using the open standard JSON Web
              Token. Every JWT has a set of encoded JSON objects, including
              claims. To ensure that the claims cannot be changed after the
              token is issued, JWTs are signed using a cryptographic technique.
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is the difference between javascript and NodeJS?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              1. NodeJS: NodeJS is a free, open-source Javascript runtime
              environment that enables server-side execution of Javascript.
              Javascript code can execute outside of a browser thanks to
              Node.js. Node.js has a large number of modules and is primarily
              used for web development. <br />
              <br />
              2. JavaScript: A scripting language is Javascript. The most common
              abbreviation is JS. One may say that Javascript is the ECMA script
              that has been updated. Although it is built on prototype
              inheritance, Javascript is a high-level programming language that
              makes use of the Oops idea.
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How does NodeJS handle multiple requests at the same time?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Numerous client requests are received by NodeJS, which adds them
              to EventQueue. The event-driven architecture approach was used in
              the construction of NodeJS. The EventLoop in NodeJS is an infinite
              loop that accepts and processes requests.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
