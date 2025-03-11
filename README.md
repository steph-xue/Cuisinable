<p align="center">


<h1 align="center">
 Cuisinable
</h1>

<h1 align="center">
 Making every meal possible, enjoyable, and accessible—because everyone deserves a plate that's made just for them.
</h1>

Try it out here: https://cuisinable.onrender.com
<br>
Devpost link: https://devpost.com/software/cuisinably

<p align="center">
 <img src="public/images/bear-chef.png" alt="drawing" width="350"/>
</p>

## Contributors
- Aaqib Patel
- Ryan Ariles
- Stephanie Xue
- Victor Yu
  
<br>

## Problem Statement:

Dietary restrictions are an issue that many people struggle with on a daily basis. It’s a frustrating and excluding experience, and Cuisinable aims to solve this issue.

Cuisinable is your new personal culinary assistant, empowering individuals with food intolerences to enjoy diverse and delicious cuisines from around the world, safely. With approximately 7% of Canadians self-reporting food allergies—and many more indicating food intolerances—finding recipes that meet specific dietary needs without sacrificing flavour can be a challenge. Cuisinable seeks to solve this problem by offering a welcoming, accessible platform where users can discover tailored recipes based on their dietary restrictions. Simply input your food intolerances and cuisine preferences, and Cuisinable will generate a variety of recipes tailored to your specific needs. 

With a commitment to accessibility and thoughtful design, Cuisinable ensures a seamless experience for users of all abilities. Our friendly mascot, Chef Bearable, greets users on the landing page, setting a warm and approachable tone and guiding them through the recipe-generation process.

Cuisinable is there every step of the way to ensure your recipe can be enjoyed by everyone. 

<br>

## Features

- Landing page to welcome the user
![Landing](./bear/landing.png?raw=true "Landing")

<br>

Allergy and intolerance selection, where users can start by choosing their specific dietary restrictions, to ensure all generated recipes align with their needs:
 - Dairy
 - Egg
 - Gluten
 - Grain
 - Peanut
 - Seafood
 - Sesame
 - Shellfish
 - Soy
 - Sulfite
 - Tree Nut
 - Wheat

Filter by cuisine preferences, where users can select a preferred cuisine to tailor the recipes even further:
 - American
 - British
 - Caribbean
 - Chinese
 - Eastern European
 - French
 - German
 - Greek
 - Indian
 - Italian
 - Japanese
 - Korean
 - Latin American
 - Mediterranean
 - Mexican
 - Middle Eastern
 - Spanish
 - Thai

![Selector](./bear/selector.png?raw=true "Selector")

<br>
 
 - Discover new meals from cuisines from around the world based on your intolerences and dietary restrictions:
  - View a detailed summary of the dish
  - Breakdown of the ingredients
  - Instructions on how to prepare the dish
 - A ‘change cuisine’ button allows users to easily restart the recipe search process, updating their cuisine and intolerance preferences for a fresh set of recipes.

![Meals](./bear/meals.png?raw=true "Meals")  
![Recipes](./bear/recipes.png?raw=true "Recipes")

<br>

## Cuisinable is built using:
- Front-end: Used React.js with Vite, JavaScript, HTML5, CSS3, and Bootstrap4 to create a responsive and visually appealing user interface, parse and map JSON responses from the backend into reusable UI components, and render curated recipe cards with images, summaries, and step-by-step instructions through state management and props
- Back-end: Implemented a Node.js and Express.js backend to handle user requests, dynamically constructing API calls to the Spoonacular API by constructing URL query strings and fetching filtered recipe data via fetch and .then( ) promise chaining
- API: The Spoonacular API found at https://spoonacular.com/food-api, which provides a comprehensive database of recipes that Cuisinable filters to match user specifications.

<br>

## Some of the technical challenges and achievements of our project include:
- Connecting front-end to back-end and establishing seamless communication between the components for smooth functionality.
- API Data Management: Learning to filter and retrieve specific data from the Spoonacular API to ensure only allergy and intolerance-safe recipes are displayed.
- Server Configuration: Determining appropriate server ports and navigating Git branches for effective collaboration.
- Prototyping and designing a user-friendly interface for an intuitive user experience.

<br>
   
##  To enhance the Cuisinable experience, we envision the following:
- User profiles which allow users to save their dietary preferences and favorite recipes.
- An expanded recipe database to integrate a larger variety of recipes for more culinary choices.
- A search function that enables keyword searches for specific dishes or ingredients.
- Adding animations for a more dynamic and engaging interface.
- Introducing options for users to invite friends and collaborate on recipe lists for events like potlucks.

<br>

With Cuisinable, we aim to make cooking more possible, enjoyable, and accessible for everyone, empowering individuals to create meals they can truly enjoy.

<br>

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
    - Check the version using the command
        - ```node --version```
- Install the latest version of npm (JavaScript package manager)
    - Check the version using the command
        - ```npm --version```
- Clone the repository from github by typing in the command line
    - HTTPS: ```git clone https://github.com/steph-xue/Cuisinable.git```
    - SSH: ```git clone git@github.com:steph-xue/Cuisinable.git```
- Install any dependencies by using the command
    - ```npm install```
- The web application can be run on your local server by typing the command
    - ```npm run dev```


