#### 5.0 Requirements Specification

##### 5.1 Introduction

Oh, Shoot! is a web-based DBMS system for professional photographers to organize metadata about photoshoots.

##### 5.2 CSCI Component Breakdown

CSCI Oh, Shoot! is composed of the following CSCs:

5.2.1 Front End CSC -- written using React.

  5.2.1.1 Home Page CSU -- prompts for creating a new photoshoot object, creating an account, or logging in.

  5.2.1.1.1 User Log-in module -- input fields for user information.

  5.2.1.2 Create Account CSU -- user provides information for creating a new account.

  5.2.1.3 User Profile CSU -- displays a basic overview of the information the user has inserted.

  5.2.1.3.1 User-owned objects module -- displays preview info on user's created objects.

  5.2.1.4 Create Object CSU -- fields to fill in, also used for editing pre-existing objects.

  5.2.1.5 Search Tags CSU -- search functionality for users to search their work.  

  5.2.1.5.1 Search Bar module -- search bar for entering tags.

  5.2.1.5.1 Search Options module -- displays filtering and sorting options for search results.

  5.2.1.6 View Object CSU -- displays all fields and documents associated with the photoshoot object.

5.2.2 Server CSC -- connecting the front-end and the database.

  5.2.2.1 GraphQL CSU -- allows simple communication from app to database.

  5.2.2.2 User Info CSU -- retrieves information on users.  

5.2.3 Database CSC -- PostgreSQL databases for information relating to the application.

  5.2.3.1 User Info Database CSU -- stores information about users, possibly through FireBase or using Google authentication.

  5.2.3.2 Photoshoot Objects Database CSU -- custom database that stores information on created photoshoots.

  5.2.3.3 Tags Database -- custom database that stores all tags used on photoshoot objects.

##### 5.3 Functional Requirements

5.3.1 Front End CSC

The front end allows clients to interact with the application. They can create, edit, and search through photoshoot objects that are associated with their user.

  5.3.1.1 The Front End CSC shall be displayed in a web page.

  5.3.1.2 The Front End CSC shall be made using React.

  5.3.1.3 The Front End CSC shall consist of 6 web pages.

  5.3.1. The Front End CSC shall have a Home Page CSU.

  5.3.1. The Home Page CSU shall have 3 options provided to the user.

  5.3.1. The Home Page CSU shall have a prompt for logging into the account.

  5.3.1. The Home Page CSU shall have a prompt for creating a new account.

  5.3.1. The Home Page CSU shall have a prompt for creating a new photoshoot object.

  5.3.1. The Front End CSC shall have a Create Account page.

  5.3.1. The Create Account CSU shall have text entry fields for an email. 

  5.3.1. The Create Account CSU shall provide error checking on the text entry fields such that the user is provided immediate feedback in case of erroneous entry.




5.3.2 Server CSC


5.3.3 Database CSC
