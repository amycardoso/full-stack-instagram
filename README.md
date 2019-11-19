# Full Stack Instagram
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/amycardoso/full-stack-instagram/blob/master/LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/amycardoso/full-stack-instagram)
![Codacy grade](https://img.shields.io/codacy/grade/adc4ff7f52af47ddaedc8fe578217e85)

Full Stack Instagram clone with NodeJS, ReactJS and React Native. 

![Posts feed page](https://raw.githubusercontent.com/amycardoso/full-stack-instagram/master/prints/Feed.png)
![Page to make a new post](https://raw.githubusercontent.com/amycardoso/full-stack-instagram/master/prints/New.png)
## Technologies

This project was developed at the [RocketSeat OmniStack Week 7](https://rocketseat.com.br) with the following technologies:

-  [Node.js](https://nodejs.org)
-  [Express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [Multer](https://github.com/expressjs/multer)
-  [Socket.io](https://socket.io/)
-  [ReactJS](https://reactjs.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [styled-components](https://www.styled-components.com/)
-  [axios](https://github.com/axios/axios)
-  [React Native](http://facebook.github.io/react-native/)
-  [React Navigation](https://reactnavigation.org/)
-  [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
-  [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker)

## Environment Setting

To use and test the mobile app on a simulator or smartphone, you must already have set up the React Native app development environment. You can follow the following article in Portuguese to set up your environment:

[React Native Environment (Android/iOS)](https://docs.rocketseat.dev/ambiente-react-native/introducao)

## Requirements

 -  [Node.js v12.9.1+](https://nodejs.org)
 - [Yarn 1.19.1+](https://yarnpkg.com)

## How To Use

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/amycardoso/full-stack-instagram 

# Go into the repository
$ cd full-stack-instagram

# Go into backend
$ cd backend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn dev

# On another terminal, go to the frontend folder
$ cd ../frontend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn start

# On another terminal, go to the mobile folder
$ cd ../mobile/instarocket

# Install dependencies
$ yarn install

# If you want to run the project on a simulador, start the react-native server as it is
$ react-native start

# On another terminal, install the app on your simulator
# Use the command below for iOS devices
$ react-native run-ios

# Use the command below for Android devices
$ react-native run-android

# If you want to run the project on your smartphone, change the baseURL on src/services/api.js to your machine's ethernet adapter IP. Use the ethernet adapter IP if you're on a cable connection or the WiFi adapter IP if you're on a wireless connection.
# After changing the baseURL, start the react-native server
$ react-native start

# On another terminal, install the app on your smartphone
# Use the command below for iOS devices
$ react-native run-ios

# Use the command below for Android devices
$ react-native run-android
```
