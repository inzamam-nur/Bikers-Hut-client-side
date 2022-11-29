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
              How does prototypical inheritance work?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Javascript has a feature called prototypal inheritance that allows
              you to add methods and properties to objects. It is a technique
              that allows an item to take on the attributes and operations of
              another object. We typically use Object.getPrototypeOf and Object
              to obtain and change an object's [[Prototype]].
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
              What is a unit test? Why should we write unit tests?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              The smallest testable components of an application, known as
              units, are separately and independently examined for appropriate
              operation as part of the unit testing phase of software
              development. Software developers and occasionally QA employees use
              this testing methodology when the software is still in the
              development stage. Unit testing's primary goal is to separate
              written code for testing to see if it functions as intended. Unit
              testing is a crucial stage in the development process because,
              when done properly, it can aid in finding early code flaws that
              might be more challenging to find in later testing stages.
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
              React vs. Angular vs. Vue?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              <h2>React</h2>
              <p>
                Facebook created React, which was first made available in 2013.
                Facebook heavily utilizes React in their products. On the blog
                page of the React website, just like with Vue, the developers of
                React post information about their most recent version.
              </p>
              <h2>Angular</h2>
              <p>
                The oldest of the bunch, Angular, was initially released in 2010
                and was created by Google. It is a JavaScript framework built on
                TypeScript. With the release of Angular 2 in 2016 (and the
                removal of the "JS" from the original name, AngularJS), there
                was a significant shift in the industry. Angular 2+ is also
                referred to as Angular. Although AngularJS (version 1) still
                receives updates, we will concentrate on Angular in this
                discussion.
              </p>
              <h2>Vue</h2>
              <p>
                The most recent addition to the group is Vue, sometimes known as
                Vue.js. Evan You, a former Google employee, created it in 2014.
                Vue has experienced a significant increase in popularity over
                the past several years despite not having the support of a major
                corporation. On the releases page of the official Vue website,
                the most recent version is always noted. Patreon provides
                support for Vue contributors. It should be noted that Vue uses
                TypeScript and has a GitHub repository of its own. Additional
                reading: Beginner Developers' Guide to Vue.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
