// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  //This function does division using a loop
  //input
  let number1 = parseInt(document.getElementById("number1").value)
  let number2 = parseInt(document.getElementById("number2").value)

  //process
  let counter = 0
  while (number1 >= number2) {
    number1 -= number2
    counter++
  }

  //output
  if (number1 != 0) {
    document.getElementById("answer").innerHTML = "The answer is " + counter + " with a remainder of " + number1
  } else {
    document.getElementById("answer").innerHTML = "The answer is " + counter
  }
}