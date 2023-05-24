// Created by: Mariam Kasim
// Created on: March 2023
//
// This program finds does multiplication

package main

import (
	"fmt"
)

func main() {
	var number1 int
	var number2 int
	var counter = 0

	// input
	// input
	fmt.Println("Let's do long division!")
	fmt.Println("Enter the first number:")
	fmt.Scanln(&number1)
	fmt.Println("Enter the second number: ")
	fmt.Scanln(&number2)

	// process
	for number1 >= number2 {
		number1 -= number2
		counter++
	}

	// output
	fmt.Println("")
	fmt.Println("The answer is:", counter)
	fmt.Println("Done.")
}
