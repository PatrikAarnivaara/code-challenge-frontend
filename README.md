# Image Grid
Application for showing images in a grid overview. Clicking an image opens up a large view of the image in a lightbox modal. Where an info button can be clicked to view info about each image. Browsing images in the Lightbox view is done by clicking left and right arrows.

## API
Unsplash

## Technologies
* ReactJS
* Node/Express
* JEST
* CSSinJS
* Prettier

## Features
* Responsive image grid
* Detailed view of clicked image with caption containing author, location and date.
* Lightbox modal where images can be viewed in larger scale
* Infinite scroll
* Lazy loading
* Unit testing

## Improvements
* Performance: occasional speed and largest contentful paint issues on iOS 
* Improved unit testing
* CSSinJS: theme and reusability
* UI: animated transitions, improve LightBox layout, possibility to hide arrows and info button/caption
* Reusable modal component that wraps content in LightBox
* Mobile view swipe between images in Lightbox instead of clicking  

## Setup
1. Clone repo and open in optional IDE. 
2. cd into client directory. 
3. Run "yarn install".
4. To fetch images from Unsplash get an API-key from  https://unsplash.com/developers
5. Create a .env file in your client directory, add env variable REACT_APP_UNSPLASH_CLIENT_ID=[YOUR_API_KEY]
6. When dependencies are installed and api-key is added run "yarn start" to start the development server. 
7. Server starts application on localhost:3000

## Status
Project is: _completed_ a deployed version can be viewed at this url: https://limitless-falls-85097.herokuapp.com/

## Contact
Created by Patrik Aarnivaara
