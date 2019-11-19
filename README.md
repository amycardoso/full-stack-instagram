---


---

<h1 id="full-stack-instagram">Full Stack Instagram</h1>
<p><img src="https://raw.githubusercontent.com/amycardoso/full-stack-instagram/master/prints/Feed.png" alt="Posts feed page"><br>
<img src="https://raw.githubusercontent.com/amycardoso/full-stack-instagram/master/prints/New.png" alt="Page to make a new post"></p>
<h2 id="technologies">Technologies</h2>
<p>This project was developed at the <a href="https://rocketseat.com.br">RocketSeat OmniStack Week 7</a> with the following technologies:</p>
<ul>
<li><a href="https://nodejs.org">Node.js</a></li>
<li><a href="https://expressjs.com/">Express</a></li>
<li><a href="https://github.com/remy/nodemon">nodemon</a></li>
<li><a href="https://mongodb.com">MongoDB</a></li>
<li><a href="https://mongoosejs.com/">Mongoose</a></li>
<li><a href="https://github.com/expressjs/multer">Multer</a></li>
<li><a href="https://socket.io/">Socket.io</a></li>
<li><a href="https://reactjs.org/">ReactJS</a></li>
<li><a href="https://github.com/ReactTraining/react-router">React Router v4</a></li>
<li><a href="https://www.styled-components.com/">styled-components</a></li>
<li><a href="https://github.com/axios/axios">axios</a></li>
<li><a href="http://facebook.github.io/react-native/">React Native</a></li>
<li><a href="https://reactnavigation.org/">React Navigation</a></li>
<li><a href="https://kmagiera.github.io/react-native-gesture-handler/">React Native Gesture Handler</a></li>
<li><a href="https://github.com/react-native-community/react-native-image-picker">react-native-image-picker</a></li>
</ul>
<h2 id="environment-setting">Environment Setting</h2>
<p>To use and test the mobile app on a simulator or smartphone, you must already have set up the React Native app development environment. You can follow the following article in Portuguese to set up your environment:</p>
<p><a href="https://docs.rocketseat.dev/ambiente-react-native/introducao">React Native Environment (Android/iOS)</a></p>
<h2 id="requirements">Requirements</h2>
<ul>
<li><a href="https://nodejs.org">Node.js v12.9.1+</a></li>
<li><a href="https://yarnpkg.com">Yarn 1.19.1+</a></li>
</ul>
<h2 id="how-to-use">How To Use</h2>
<p>From your command line:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token comment"># Clone this repository</span>
$ <span class="token function">git</span> clone https://github.com/amycardoso/full-stack-instagram 

<span class="token comment"># Go into the repository</span>
$ <span class="token function">cd</span> full-stack-instagram

<span class="token comment"># Go into backend</span>
$ <span class="token function">cd</span> backend

<span class="token comment"># Install dependencies</span>
$ yarn <span class="token function">install</span>

<span class="token comment"># Start the backend server</span>
$ yarn dev

<span class="token comment"># On another terminal, go to the frontend folder</span>
$ <span class="token function">cd</span> <span class="token punctuation">..</span>/frontend

<span class="token comment"># Install dependencies</span>
$ yarn <span class="token function">install</span>

<span class="token comment"># Start the backend server</span>
$ yarn start

<span class="token comment"># On another terminal, go to the mobile folder</span>
$ <span class="token function">cd</span> <span class="token punctuation">..</span>/mobile/instarocket

<span class="token comment"># Install dependencies</span>
$ yarn <span class="token function">install</span>

<span class="token comment"># If you want to run the project on a simulador, start the react-native server as it is</span>
$ react-native start

<span class="token comment"># On another terminal, install the app on your simulator</span>
<span class="token comment"># Use the command below for iOS devices</span>
$ react-native run-ios

<span class="token comment"># Use the command below for Android devices</span>
$ react-native run-android

<span class="token comment"># If you want to run the project on your smartphone, change the baseURL on src/services/api.js to your machine's ethernet adapter IP. Use the ethernet adapter IP if you're on a cable connection or the WiFi adapter IP if you're on a wireless connection.</span>
<span class="token comment"># After changing the baseURL, start the react-native server</span>
$ react-native start

<span class="token comment"># On another terminal, install the app on your smartphone</span>
<span class="token comment"># Use the command below for iOS devices</span>
$ react-native run-ios

<span class="token comment"># Use the command below for Android devices</span>
$ react-native run-android
</code></pre>

