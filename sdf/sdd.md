## Software Design Document
Oh, Shoot!
Jenna Berlinberg

### 6.1. Introduction
Oh, Shoot! is a web-based DBMS system for professional photographers to organize metadata about photoshoots.

#### 6.1.1 System Objectives
Oh, Shoot! aims to allow users the ability to input information on photoshoots with a high volume of storage to allow for easy searching to connect them to their own indexing system. Many photographers have their own personal storage indexing system, yet it is not easy to navigate without a lengthy amount of work. Oh, Shoot! provides ways to indicate these locations and stores helpful information on the photoshoots.

#### 6.1.2 Hardware, Software, and Human Interfaces

The developers must have access to a computer or cloud instance capable of running the server needed for the databases and displaying the web pages. The computers should also be able to handle high intensity database queries.

Users can access the web app with any standard web browser.

  __6.1.2.1__ React.js version 17.0.1
The front end of the web app will be written in React.js with hooks.

  __6.1.2.2__ PostgreSQL version 13.0
The databases for the app use the PostgreSQL server.

  __6.1.2.3__ GraphQL version 15.4.0
GraphQL allows easy communication with PostgreSQL databases with a customizable API.

  __6.1.2.4__ Express version 4.17.1
Express is a web service framework for JavaScript that works well with GraphQL.

  __6.1.2.5__ Apollo Client version 2.6.10
Apollo Client is a JavaScript data management library that manages the state of communication with the GraphQL back-end.

  __6.1.2.6__ User authentication database
TBD time allowing.

### 6.2 Architectural Design

#### 6.2.1 Major Software Components
The major software components are the Front End, the Server, and the Database.
The Front End shall allow clients to interact with the application. They shall have the ability to create, edit, and search through photoshoot objects that are associated with their user.
The Server shall transmit information from the user input to the Database and vice versa.
The Database shall store information on the photoshoot objects, the users, the files, and the tags.

#### 6.2.2 Major Software Interactions
The major software interactions between components are completed in the pipeline between the Front End and the Database.
The Front End receives user input from the UI made in React and communicates it to the Apollo Client. The Apollo Client sends queries to the GraphQL server using Express. GraphQL executes the query in the PostgreSQL database.
GraphQL receives the result and passes it to the Apollo Client. The Apollo Client caches the data and automatically updates the UI component that will display the output.

#### 6.2.3 Architectural Design Diagrams
![Architectural Design](/sdf/img/arch_design.png)

due week 10
### 6.3. CSC and CSU Descriptions
The CSCs are the Front End CSC, the Back End CSC, and the Database CSC.
The Front End CSC consists of the

#### 6.3.1 Class Descriptions
6.3.1.1 Detailed Class Description 1
6.3.1.n Detailed Class Description n
#### 6.3.2 Detailed Interface Descriptions
#### 6.3.3 Detailed Data Structure Descriptions
#### 6.3.4 Detailed Design Diagrams

### 6.4 Database Design and Description
#### 6.4.1 Database Design ER Diagram

![Database Schema](/sdf/img/db_erd.png)

#### 6.4.2 Database Access
#### 6.4.3 Database Security
