# StanChallenge
My submission for StanChallenge(ReactJS + NodeJS + Webpack)

How to use:

1. Build a folder
2. Open command line, cd to the folder
3. git pull https://github.com/XBLDev/StanChallenge.git
4. npm install
5. npm start
6. In web browser, enter: http://localhost:3000/

Q: How did you decide which technologies to use as part of your solution?
A: I was just doing a tutorial about ReactJS user auth: https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
when I recieved the email, and in the tutorial, it uses webpack to bundle jsx files to js in a "dist" folder, and in the instruction of 
this challenge, it says "The deployable solution should be built in a folder named dist with an entry point file of index.html", and I decided
I should follow the tool used in the tutorial: ReactJS + NodeJS + webpack

Q: Are there any improvements you could make to your submission?
A: In my submission I just render conditionally based on the state changes, which is not I think how it's supposed to be done. I think 
the better way is to send POST request to backend and render different pages accordingly.

Q: What would you do differently if you were allocated more time?
A: 

Make subcomponents so the code is more readable/reusable;
Routing between pages;
Testing;
Putting comments.


