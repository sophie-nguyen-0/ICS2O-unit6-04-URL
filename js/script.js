// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit6-04-URL/sw.js", {
    scope: "/ICS2O-unit6-04-URL/",
  })
}

/**
 * this function calculates the volume of a sphere
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  //input
  const r = params.get("r")

  //process
  const vol = (4 / 3) * Math.PI * r ** 3
  const radius = "<p> radius = " + r + "</p>"

  //output
  document.getElementById("radius").innerHTML = radius
  document.getElementById("answer").innerHTML = "the volume is: " + vol
}
