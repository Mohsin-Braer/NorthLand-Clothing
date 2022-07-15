<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">NorthLand Clothing Inc.</h3>

  <p align="center">
    Recreating the most popular twitter client for the Web.
    <br />
    <a href="https://github.com/Mohsin-Braer/NorthLand-Clothing/"><strong>Explore the Repo »</strong></a>
    <br />
    <br />
    <a href="https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/">View Demo via Netlify</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Flamingo Homepage][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/)

Flamingo for Android was one of the most popular third-party Twitter clients to have been developed. Unfortunately since it's discontinuationg from the Google Play Store, there has yet to be a web-based version of the app. Introducing Flamingo for the Web! 

This mobile responsive application was built using Next.js (a React framework) along with Firebase in order to recreate Twitter from scratch in addition to the UI components that are unique to the Flamingo twitter client. The following pages have been developed within this application: google sign in page, a homepage & lastly an additional comment page where one can see a thread of comments from a variety of different users attached to an original post. There are three different pages, some using the protected routes functionality from nextAuth. Firebase firestore handles the storage of documents and firebase cloud storage is utilized to store any media files that are attached to any posts (that data is retrieved using a custom hook); authentication is used on all pages, which is handled by nextAuth and Next.js as well. User session is also saved via a userSession, a user can leave the site, come back, and still be logged in. Recoil is utilized as the state managment library of choice to store a selected post's ID in addition to its modal state.

Compound component design architecture to build the components required for this project (see multiple examples through the github repository). The styling is all handled via the tailwindcss and headless UI libraries.

### Homepage
[![Flamingo Homepage][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/)

### Shop Page
[![Flamingo Shop Page][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/shop)

### Individual Category Page (example jackets)
[![Flamingo Category Page][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/shop/jackets)

### Checkout Page
[![Flamingo Checkout Page][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/checkout)

### Authentication Page
[![Flamingo Authentication Page][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/auth)


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [Stripe](https://stripe.com/)
- [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Pretty simple and strightfoward.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mohsin-Braer/Flamingo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Firebase web app API in `firebase.utils.js`

```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username

[homepage-src]: https://postimg.cc/YGXDkWYk
[sign-in-src]: https://postimg.cc/XZkDHhvr
[comment-src]: https://postimg.cc/hJB50gKF
[mobile-responsive-src]: https://postimg.cc/ZBYs1c9V

[demo-img-gallery-link]: https://postimg.cc/gallery/Ym8nYm9
