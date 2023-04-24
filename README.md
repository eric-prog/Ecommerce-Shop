# Ecommerce Project


## Dependencies

- Three.js:
    - npm install three @types/three @react-three/fiber
    - npm i @react-three/drei
- Redux (could also do npm installation):
    - npm install @react-three/drei
    - npm install @reduxjs/toolkit react-redux
- React webcam (for account page):
    - npm install react-webcam


## Learning

- Redux: 
    - TS Quickstart: https://redux.js.org/tutorials/typescript-quick-start
    - slice: "a collection of Redux reducer logic and actions for a single feature in your app." 


## Instructions
- Author: Dark Trooper (random name i chose) 
    - Note: Assume there is only a single account within this system
- Pages: Home, Products, Cart, Account, and Item page <-- navigation bar on the top of all pages
    - Home page: 
        - Three.js canvas spanning the full viewport
        - 3D cube show image of the author head-on on page load. Rotate cube to reveal a 150-word description of the chosen author, highlighting their works and life, on the backside.
            - 150 words: Trikon is a spartan warrior and avid time traveller. After fighting countless wars and battles throughout Italy, Greece, & Rome, Trikon has never lost even once. His accomplishments include 1v20 entire army, rank of super commando, the victory of Rome, the highest medal of honour for any spartan. As war still rages throughout the globe, Trikon looks to the sky people for help. The sky people are the gods of the Earth with access to technology never seen before. With their help, Trikon is able to time travel. With time travel, Trikon has come across an ecommerce platform that he plans on using to his advantage. The platform includes Netflix, XBox, Macbook Air, and Lego. All of these objects are imperative to victory and the pleasure of his spartan armies. His current hobbies are boring and include constant battle training, farming, and travelling the scorched earth for any formidable enemies.
    - Product page: 
        - Multiple clickable tiles with the Book cover as a thumbnail. 4 item pages, each featuring a given book and containing the following data: title, author, price, quantity, thumbnail, and product description (see image-product)
    - Account page: 
        - User fields: first name, last name, email, billing status, and profile image. The user must be able to select the “update image” button and replace their current account image with a newly taken image (from their webcam).
        - Update their first name and last name (see image-account).
- Redux state management to create and manage two data slices. 
    - One slice called “Cart” will store the cart information, including; total-price and total-quantity. 
    - Second slice called “Profile”, which will store the current and updated user first-name, last-name, and profile-image-url. The user must be able to adjust the quantity of a given book in the cart and on the item page.
- Note: Only consider desktop layouts starting at a min-width of 950px
- Tailwind CSS to create a cohesive light theme design on all pages, you are encouraged to incorporate this design into the homepage canvas.