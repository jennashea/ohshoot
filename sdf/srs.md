#### 5.0 Requirements Specification

##### 5.1 Introduction

Oh, Shoot! is a web-based DBMS system for professional photographers to organize metadata about photoshoots.

##### 5.2 CSCI Component Breakdown

CSCI Oh, Shoot! is composed of the following CSCs:

5.2.1 Front End CSC -- written using React.

  5.2.1.1 Home Page CSU -- prompts for creating a new photoshoot object, creating an account, or logging in.

  *5.2.1.1.1 User Log-in module* -- input fields for user information.

  *5.2.1.2 Create Account CSU* -- user provides information for creating a new account.

  *5.2.1.3 User Profile CSU* -- displays a basic overview of the information the user has inserted.

  *5.2.1.3.1* User-owned objects module -- displays preview info on user's created objects.

  5.2.1.4 Create Object CSU -- fields to fill in, also used for editing pre-existing objects.

  5.2.1.5 Search Tags CSU -- search functionality for users to search their work.  

  5.2.1.5.1 Search Bar module -- search bar for entering tags.

  5.2.1.5.2 Search Options module -- displays filtering and sorting options for search results.

  5.2.1.6 View Object CSU -- displays all fields and documents associated with the photoshoot object.

  5.2.1.7 Banner CSU -- constant banner with links to go to home, create new object, profile, search, log in, or log out.

  5.2.1.7.1 Search Bar module -- search bar for entering tags.

5.2.2 Server CSC -- connecting the front-end and the database.

  5.2.2.1 GraphQL CSU -- allows simple communication from app to database.

  *5.2.2.2 User Info CSU* -- retrieves information on users.  

  5.2.2.3 Apollo Client CSU -- manages the state of queries.

  5.2.2.4 Express GraphQL CSU -- creates the server for the GraphQL API.

5.2.3 Database CSC -- PostgreSQL databases for information relating to the application.

  *5.2.3.1 User Info Database CSU* -- stores information about users, possibly through FireBase or using Google authentication.

  5.2.3.2 Photoshoot Objects Database CSU -- custom database that stores information on created photoshoots.

  5.2.3.3 Tags Database CSU -- custom database that stores all tags used on photoshoot objects.

  5.2.3.4 Shoot Tags Database CSU -- custom database that stores all relationships.

##### 5.3 Functional Requirements

5.3.1 Front End CSC

The front end shall allow clients to interact with the application. They shall have the ability to create, edit, and search through photoshoot objects that are associated with their user.

  5.3.1.1 The Front End CSC shall be displayed in a web page.

  5.3.1.2 The Front End CSC shall be made using React.

  5.3.1.3 The Front End CSC will consist of 6 web pages, Home Page CSU, Create Account CSU, User Profile CSU, Create Object CSU, View Object CSU, and Search Tags CSU.

  5.3.1.4 The Front End CSC shall have a consistent banner on all pages that links to the other pages.

  5.3.1.5 The Front End CSC shall have a Home Page CSU.

  5.3.1.6 The Home Page shall have the User Log-In Module.

  5.3.1.7 The Home Page shall have a link to the Create Account page CSU.

  5.3.1.8 The Create Account CSU shall have text entry fields for new user information.

  5.3.1.9 The Create Account CSU shall provide error checking on the text entry fields such that the user is provided immediate feedback in case of erroneous entry.

  5.3.1.10 The User Account CSU shall be accessed right after creating an account or logging into an existing account.

  5.3.1.11 The User Account CSU shall list previews of the users' 10 most-recently created pre-existing photoshoots objects and

  5.3.1.12 The User Account CSU shall list links to the View Objects page for each one.

  5.3.1.13 If the user has no objects, the User Account CSU shall display a link to the Create Object page.

  5.3.1.14 The Create Object CSU shall have text entry fields for entering the information of the photoshoot.

  5.3.1.15 The Create Object CSU shall provide file upload prompts for business documents and a preview picture.

  5.3.1.16 The Create Object CSU shall provide error checking on the text entry fields such that the user is provided immediate feedback in case of erroneous entry.

  5.3.1.17 The Create Object CSU shall provide error checking for  uploaded file types such that the user is provided immediate feedback in case of erroneous entry.

  5.3.1.18 The Create Object page shall have a save button that sends the user to the View Object page.

  5.3.1.19 The Search Tags CSU shall be accessed from initiating a search from the banner at the top of any page in the Front End CSC.

  5.3.1.20 The Search Tags CSU shall display the text entry of the query provided by the user.

  5.3.1.21 The Search Tags CSU shall provide a right-side panel with filtering options.

  5.3.1.22 The Search Tags CSU shall provide a right-side panel with sorting options.

  5.3.1.23 The Search Tags CSU shall display the results of the search query below the search bar entry in a list with the default sorting by most recent by photoshoot date.

  5.3.1.24 The Search Tags CSU shall refresh the results after changes are indicated in the text entry by pressing 'Enter' or in the side panel by pressing an 'Save' button.

  5.3.1.25 The Search Tags CSU shall display each query result with a preview picture and a link to the View Object page.

  5.3.1.26 The View Object CSU shall display all information associated with that object.

  5.3.1.27 The View Object CSU shall have an 'Edit' button that takes the user to the Create Object CSU.

  5.3.1.28 The View Object CSU shall have a delete button that allows the user to remove the object from their account.

5.3.2 Server CSC

The Server CSC shall transmit information from the user input to the Database CSC and vice versa. The Server CSC shall use GraphQL, Express GraphQL, and Apollo Client to accomplish this task.

  5.3.2.1 The GraphQL CSU shall insert objects into the Database CSC based on input from the Front End CSC.

  5.3.2.2 The GraphQL CSU shall edit objects in the Database CSC based on input from the Front End CSC.

  5.3.2.3 The GraphQL CSU shall remove objects from the Database CSC based on input from the Front End CSC.

  5.3.2.4 The GraphQL CSU shall manipulate the result of queries to a useable format.

  5.3.2.5 The User Info CSU shall track the User ID while performing queries to ensure information is secure.

  5.3.2.6 The User Info CSU shall reject requests to remove or edit objects if the User ID of the objects does not match the User ID of the user making the request.

  5.3.2.7 The User Info CSU shall validate search queries received by the Front End CSC.

  5.3.2.8 The Apollo Client CSU shall query the Database CSC using the information received from the Front End CSC.

  5.3.2.9 The Apollo Client CSU shall send the result back to the Front End CSC.

  5.3.2.10 The Express GraphQL CSU shall start the GraphQL server.

5.3.3 Database CSC

The Database CSC shall store information on the photoshoot objects, the users, the files, and the tags.

  5.3.3.1 The Database CSC shall be made in PostgreSQL.

  5.3.3.2 The Database CSC shall consist of 3 tables.

  5.3.3.3 The Database CSC shall have a table containing entries for all users, known as the User Info Database CSU.

  5.3.3.4 The User Info Database CSU shall have an object ID in the form of an integer as a primary key.

  5.3.3.5 The Database CSC shall have a table containing all photoshoot objects, known as the Photoshoot Objects Database CSU.

  5.3.3.6 The Photoshoot Objects Database CSU shall have an object ID in the form of an integer as a primary key.

  5.3.3.7 The Photoshoot Objects Database CSU shall have a column that contains the unique ID from the User Info Database of the user who created the object.

  5.3.3.8 The Photoshoot Objects Database CSU shall return objects in queries only if the User ID from the query matches the User ID in all results.

  5.3.3.9 The Database CSC shall have a table containing entries for all tags used in photoshoots called the Tags Database.  

  5.3.3.10 The Tags Database CSU shall assign unique IDs to each tag used by any user as a primary key.

  5.3.3.11 The Database CSC shall have a table containing all relationships between tags and shoot.

  5.3.3.12 The Shoot Tags Database CSU shall contain a reference to a Photoshoot ID.

  5.3.3.13 The Shoot Tags Database CSU shall contain a reference to a Tags ID.

  5.3.3.14 Each row in the Shoot Tags Database CSU shall represent one relationship between a tag to the shoot it was assigned to.


##### 5.4 Performance Requirements

5.4.1 First search results from tag search are displayed within 20 seconds.
From the time the user initiates a new tag search, including filter changes, the preview photo and link of the first search result should have appeared.

5.4.2 Photos on the User Profile are displayed within 10 seconds.
The most recent photoshoots (by object creation date) made by the user that is logged in will be displayed with the preview photo and the link to the View Object page associated with it.  

5.4.3 Photoshoot information on the View Object page is displayed within 10 seconds.
The View Objects page takes all the information associated with a photoshoot and displays it, including the preview photo and links to downloading the documents associated with the object.

##### 5.5 Project Environment Requirements

5.5.1 Development Environment Requirements

The developers must have access to a computer or cloud instance capable of running the server needed for the databases and displaying the web pages. The computers should also be able to handle high intensity database queries. The computers must have downloaded the following software/modules: PostgreSQL, GraphQL, React, Apollo Client, Express, and some form of linter.

5.5.2 Execution Environment Requirements

Users can access the web app with any standard web browser.
