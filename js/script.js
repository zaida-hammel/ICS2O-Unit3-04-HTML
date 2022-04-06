// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById('degrees-fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5/9

  // output
  document.getElementById('celsius').innerHTML = 'The degrees celsius is: ' + celsius.toFixed(2) + '°'
}
