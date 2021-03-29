# Image Grid
Application for showing images in a grid overview. Clicking an image opens up a large view of the image in a lightbox modal. Where an info button can be clicked to view info about each image. Browsing images in the Lightbox view is done by clicking left and right arrows.

##API
Unsplash

## Technologies
* ReactJS
* JEST
* CSSinJS

## Features
* Responsive image grid
* Detailed view of clicked image with caption containing author, location and date.
* Lightbox modal where images can be viewed in larger scale
* Infinite scroll
* Unit testing

## Possible improvements
* Improved and further unit testing, e.g. mock api call and more
* CSSinJS: theme and reusability
* UI: animated transitions, improve LightBox layout, possibility to hide arrows and info button/caption, show skeleton loaders on preload 
* Reusable modal component that could wrap content in LightBox
* Mobile view swipe between images in Lightbox instead of clicking 
* Redux or Context can simplify and improve separation of concerns 
* Get Blurhash library to work for preloading images and improve performance

## Setup
1. To run the application you need to get an API-key from Unsplash https://unsplash.com/developers
2. Clone repo and open in optional IDE. 
3. cd into client directory. 
4. Run "yarn install".
5. When dependencies are installed run "yarn start" to start the development server. 
6. Server starts application on localhost:3000

## Status
Project is: _in progress_ a deployed version can be viewed at this url: https://limitless-falls-85097.herokuapp.com/

## Contact
Created by Patrik Aarnivaara
