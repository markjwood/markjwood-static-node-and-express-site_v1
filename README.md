# Static Node.js and Express Site

## Description

This project was done for Treehouse's Full Stack JavaScript Techdegree - Unit 6. The goal was to build a portfolio website using Node.js and Express.

This project demonstrated an understanding of setting up a server, importing dependencies, creating routes in Express, using Pug templates to render HTML, and handling errors.

## Storing data

All portfolio data, including urls of screenshots and links to "live" demos, is stored in a JSON file. This file includes an array of project objects; within each object are the following:

- The name of the project
- A description
- A list of technologies used
- The url for a live link
- The url for the GitHub repository
- An 'images' array of objects, each object containing a source url and an "alt" description.

## Navigating the site

The index page displays thumbnails of each project. Clicking the thumbnails takes the user to the page for that project, where additional screenshots are displayed.

On the project page, in addition to screenshots there is a list of technologies used and buttons linking to a live demo of the project and to the GitHub repo.

## Personalization

I have added my own logo to the site which links to the site's index page. It is displayed at the top of the sidebar and in the header on smaller screens.

I have added a `:hover` and `:focus` effect to the thumbnails on the index page. When those links are hovered/focused, the thumbnail enlarges to emphasize that it is a clickable link.

The buttons on the projects page have been given a `background-color` to match the logo, and a `:hover` effect reducing the opacity. I also changed the sidebar's `background-color` to a lighter blue to match the logo.

I have created custom error (error.pug) and 404 (page-not-found.pug) pages that display when an error is thrown. Each page displays an appropriate error message and has a link back to the index page.
