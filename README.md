# Beauty/Cosmetic Trademark Monitor

This app will utilize the United States Patent and Trademark Office's APIs to monitor new trademarks submitted by various cosmetics companies. It will return a list of trademarks, which will be filterable by filing date; status; status date; word mark; mark drawing; and classification. 

> Consumers are typically forced to sign up for spammy email lists or follow controversy-prone influencers if they want to keep up with new product news. By pulling trademark information directly from the source filings, I'll be able to flag potential new products from brands I care about while minimizing unwanted interactions.


### Table of Contents
- [Approach](#approach)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- Usage
- Screenshots
- Notes


## Approach

There's no single source of unbiased truth for what beauty brands are up to, and that's really annoying. I just want one site where I can see what's new and rumored for the companies I'm interested in. I don't want to be on an email list for the smallest crumbs of news way after everyone else has it, and I don't want to follow social media influencers that regularly incite drama and behave badly.  

This feels like a fixable problem. I'm already in the habit of looking up new trademarks, because I am a super nerd who appreciates government transparency and knowing things before everyone else; I figured I could probably use that habit to start taking a wider, FOMO-free look at beauty brands.

My intent is to tackle this in three stages: 

### Stage 1: Initial Exploration
- [x] Identify a framework to use
  - [x] Landed on Next.js w/ React; not totally foreign, not totally familiar.
- [x] Learn about trademarks/patents/copywrites, how to find them, and what parts of each are relevant for my use case
- [x] Figure out how to access the trademark/patent/copywrite information I want
  - [x] Web crawler, to sites that already compile this info? 
    - I've used Playwright to crawl before, and it always felt very slow when rendering. Cosmetics are visual, didn't feel right to write a script w/o an aesthetic & pleasing front-end.
  - [x] USPTO Trademark Assignment Search API
    - Would like to use this one; contains the most relevant information for my use case and doesn't require an API key. Running into a certificate error on fetch.
  - [x] USPTO Trademark Status Document Retrieval API
    - Returns images and PDF documents submitted; this API works most easily for me, but will require additional work to drill down to the info I want.
- [ ] Nail down scope of project; SPA? 
- [ ] Populate US-based indie brand list
  - Conglomerate parent companies like Estee Lauder/LVMH may add complexity; unsure, skipping for now
  - Not certain if the World International Property Organization has an API, and I'm not certain if brands file with one organization before the other or simultaneously? 
- [ ] Nail down testing: best practices, expected behavior, etc.

### Stage 2: Initial Build
- [ ] Begin pulling meaningful data
  - [ ] Figure out XML to JSON conversion
  - [ ] Figure out how to extract the data I want from what I've pulled
  - [ ] Bundle multiple companies into one API call? Determine if this is worth it or if it's too messy.
- [ ] Get the data to the DOM
  - [ ] Render trademark info on the DOM
  - [ ] Make sure it's accessible
    - [ ] Use semantic HTML
    - [ ] Add labels/scope/name
    - [ ] Confirm navigable by tab key
- [ ] Basic styling

### Stage 3: Improvements
- [ ] Styling for readability, morale-boosting, endorphins, etc.
  - [ ] Make responsive
  - [ ] Keep accessible
  - [ ] Add filtering for company, date, image included, status, etc.
- [ ] Add additional features
  - [ ] Integrate brand social media
    - [ ] Instagram posts
    - [ ] Company news/brand announcements
- [ ] Integrate metrics
  - [ ] Dead/abandoned trademarks vs live per company, per year, etc.
  - [ ] Avg. trademarks submitted per company, per year, etc.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/docs/)


### Installation

Using your package manager, install the dependencies.
```
$ ~ npm install
```

Run the development server.
```
$ ~ npm run dev
```

With the server running, navigate to http://localhost:3000 if the run client script doesn't automatically open the application.

## Built With

- [dotenv](https://www.npmjs.com/package/dotenv)
- [Next.js](https://nextjs.org/)
- [React.js](https://beta.reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [xml2js](https://www.npmjs.com/package/xml2js) 

## Usage


## Screenshots


## Notes

