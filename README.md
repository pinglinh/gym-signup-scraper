# Gym Sign-up Web Scraper

This project stemmed from me having to manually sign up to the next gym class exactly a week before the class takes place. The reason for this was because the classes were fully booked very quickly (people do sign up at 12.30pm on the dot, a week before) so I needed something automated to do this for me. I thought, why not do a bit of scraping and learn a bit about how [Pupeeter](https://github.com/GoogleChrome/puppeteer) works. Pupeeter is a tool which allows you to do end-to-end testing and because of that you can also use it to automate some stuff for you. It also allows you to run it in a headless mode (meaning the browser won't be opened and you won't see any interaction, rather everything will be done in the background).

**NOTE: As this was not made dynamic and only worked for signup to a gym class on 12-02-2018, it most likely won't work now. CSS classes chosen for target were very specific to dates and the website may have changed since then. However it was a good learning exercise.**

## Installation

1.  To run this project, both [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) should be installed.
1.  Run `npm install`.
1.  Run `node index.js`.
