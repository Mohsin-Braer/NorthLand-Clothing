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
    Devloping a massive E-Commerce site for NorthLand Clothing Inc built with Hooks, Redux, Firebase, Stripe, and GraphQL
    <br />
    <a href="https://github.com/Mohsin-Braer/NorthLand-Clothing/"><strong>Explore the Repo »</strong></a>
    <br />
    <br />
    <a href="https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/">View Demo via Netlify</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![NorthLand Homepage][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/)

This mobile responsive E-Commerce application was built using React (Custom Hooks, Compound Component Architecture), Redux, Stripe Payments API, Firebase & Styled Components. I utilize Firebase firestore to handle all things related to data retrieval of store iventory (this data is retrieved using a custom hook); authentication is used on all pages, which is handled by Firebase as well. Users have the option to either sign in via their already registered email and password or through Google authentication (which creates a username/password instance within Firebase firestore if they don't already have an registed account). User session is also saved via localStorage, user can leave the site, come back, and still be logged in.

### Homepage
[![NorthLand Homepage][homepage-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/)

### Shop Page
[![NorthLand Shop Page][shop-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/shop)

### Individual Category Page (example category: jackets)
[![NorthLand Category:Jackets Page][jacket-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/shop/jackets)

### Checkout Page
[![NorthLand Checkout Page][checkout-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/checkout)

### Authentication Page
[![NorthLand Authentication Page][auth-src]](https://62d19d7d94f05f4934e81c8f--gorgeous-kleicha-071edb.netlify.app/auth)


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
   git clone https://github.com/Mohsin-Braer/NorthLand-Clothing.git
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

[homepage-src]: ./images/Northland-Home-Page.png
[shop-src]: ./images/Northland-Shop-Page.png
[checkout-src]: ./images/Northland-Checkout-Page.png
[jacket-src]: ./images/Northland-Jacket-Page.png
[auth-src]: ./images/Northland-Auth-Page.png


[demo-img-gallery-link]: https://postimg.cc/gallery/Ym8nYm9
