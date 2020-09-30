#### 5.0 Requirements Specification

##### 5.1 Introduction

Oh, Shoot! is a web-based DBMS system for professional photographers to organize metadata about photoshoots.

##### 5.2 CSCI Component Breakdown

CSCI Oh, Shoot! is composed of the following CSCs:

  5.2.1 Front End CSC -- written using React.

  5.2.1.1 Home Page CSU

  5.2.1.1.1 User Log-in module

  5.2.1.2 User Profile CSU

  5.2.1.2.1 User-owned objects module

  5.2.1.3 Create Object CSU -- fields to fill in, also used for editing pre-existing objects.

  5.2.1.4 Search Tags CSU -- search functionality for users to search their work.  

  5.2.1.4.1 Search Bar module -- search bar for entering tags.

  5.2.1.4.1 Search Options module -- displays filtering and sorting options for search results.

  5.2.2 Server CSC -- connecting the front-end and the database.

  5.2.2.1 GraphQL CSU -- allows simple communication from app to database.

  5.2.2.2 User Info CSU -- retrieves information on users.  

  5.2.3 Database CSC

  5.2.3.1 User Info Database CSU -- stores information about users.

  5.2.3.2 Photoshoot Objects Database CSU -- stores information on created photoshoots.

  5.2.3.3 Tags Database -- stores all tags used on photoshoot objects.
