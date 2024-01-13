"use strict";
const { homepage } = require("../package.json");
const axios = require("axios");
const baseurl = homepage;

const headers = {
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  Origin: baseurl,
  Referer: baseurl + "/"
};

class Blackbox {
  constructor() {}
  
  async question(options) {
    if (!options.ask || options.ask === "") {
      throw new Error("The 'ask' option must be a valid question!");
    }
    try {
      const response = await axios.post(baseurl + "/backend/conversation", requestData, { headers });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }
}

module.exports = Blackbox;
