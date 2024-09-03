// lib/contentful.js
// import { createClient } from "contentful";
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
