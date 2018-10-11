# cocobambu
This project was developed as a coding exercise for MEAN stack.

You need to have installed:
*  nodejs
*  npm
*  angular-cli

Also, you need an instance of `MongoDB` running

## Running the API
1. Go to `backend/` folder and run `npm install`.
2. Adjust you MongoDB connection string in the `app.js` file.
3. Seed the database with `npm run seed`
4. Start your dev server with `npm run start`

Seeding creates two users (username / password):
*  luiz / luiz
*  caio / caio

## Running the Angular frontend
1. Go to `frontend/` folder and run `npm install`.
2. (Optional) Test it with `ng test`.
3. Start the webserver with `ng serve`
4. Enjoy!
