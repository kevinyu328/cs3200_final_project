# cs3200_final_project - Car Dealerships
This repository is for the final project for CS3200 at Northeastern University.

## Team Name
Team 37

## Team Members
Kevin Yu - Section 4

## Project Description
Problem: The more common way to buy cars today is still to go to car dealerships and make the purchase there. 
However, sometimes sleazy car salesmen will try and manipulate clueless buyers to pay a higher price. 
This is problematic as buyers are not offered a transparent and honest quote, which greatly reduces the joy and excitement of purchasing a new car.

Solution: My project models a database for car dealerships. It aims to solve the problem of transparency in 
regards to buying cars. With my solution, buyers will be able to quickly see the owners of each lot and the 
cars that are sold in each lot. Using this information, the buyer can look up reviews of the owner to see if
the dealerships that they own can be trusted or not. Not only that, the prices are listed clearly on the screen, 
so the buyer can easily compare prices with other dealerships. This allows the buyer to do research before going to the dealership, 
which reduces the chance of them being manipulated by salesmen. 

## UML Class Diagram
The UML class diagram for my project is linked [here](https://drive.google.com/file/d/1MvmbwbgDPZ8XwzKr4anI752tllACwStb/view?usp=sharing)

## User Data Model
The user data model in my project represents an owner of a car lot. Information such as the owner's first name, 
last name, username, password, email, and date of birth are stored in the data model.

## Domain Object Data Models
The two domain objects implemented in my solution are lots and cars. A lot represents a car lot and contains information 
such as the lot's name, location, and revenue. Each lot can only have one owner, but can contain many cars. A car represents 
a car that is being sold in one of the lots. It contains information such as the car's year, manufacturer, model, type, and price.
My solution assumes that each car can only belong to one lot. 

## User to Domain Object Relationship
An one to many relationship exists between an owner and a lot. Each owner can own many lots, but each lot can only be owned by one person.

## Domain Object to Domain Object Relationship 
An one to many relationship exists between a lot and a car. Each lot contains many cars, but each car can only be a part of one lot. 

## Portable Enumeration
The portable enumeration that is implemented for this project is the enumeration of car types. Although many types of cars exist, 
I chose to represent the most commmon car types that are available today: sedan, SUV, hatchback, and pickup. 

## User Interface
The user interface that is implemented allows the users to navigate between each of the user and domain objects. The landing page of the application
is the 'owner-list' page where the user is presented with a list view
of all the owners in the database. At this screen, the user can choose to add a new owner or click on an existing owner to view and edit their 
information. Clicking on either the 'Add owner' button or an existing owner brings the user to the 'owner-editor' page. Here, the user can add 
a new owner or edit an the information of an existing owner. If the user chose to edit an existing owner, a link is present on the bottom of the screen
that navigates the user to another page where a list of lots owned by the owner is displayed. 

Similar to the 'owner-list' page, the 'lot-list' page allows the user to add
a new lot for the owner that they clicked into or edit an existing lot. Choosing either option takes the user to a 'lot-editor' page. If the user chose
to edit an existing lot, a link is shown at the bottom of the screen that allows the user navigate to another page to see a list of cars that are being sold in the specific lot. 
Here, The user can again choose to add a new car to the chosen lot or click into a specific car to edit the car's information. If the user chooses to edit an existing car,
a link is shown at the bottom of the screen to allow them to navigate to the editor screen of the lot the car belongs to. 

The user can also choose to view a list
of all the lots and cars at the URLs `/lots` and `/cars` respectively. However, at these screens, the user cannot add lots and/or cars. If they user wishes to 
add lots, they need to navigate to the 'lot-list' page for a specific owner. If the user wishes to add cars, they need to navigate to the 'car-list' page for a
specific lot.
