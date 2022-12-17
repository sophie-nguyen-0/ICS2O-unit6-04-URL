// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit6-04-URL/sw.js", {
    scope: "/ICS2O-unit6-04-URL/",
  })
}

/**
 * this function
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)
}
