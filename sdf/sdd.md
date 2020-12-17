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

  __6.1.2.6__ Material UI version 4.11.1

 Material UI is a React component library

  __6.1.2.7__ User authentication database

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


### 6.3. CSC and CSU Descriptions

*Italics means for next semester.*

The CSCs are the Front End CSC, the Back End CSC, and the Database CSC.

The Front End CSC consists of the Home Page CSU, *Create Account CSU, User Profile CSU,* Search Tags CSU, View Object CSU, and Banner CSU.

The Back End CSC consists of the Apollo Client CSU, Express GraphQL CSU, GraphQL API CSU, *and the User Info CSU.*

The Database CSC consists of the *User Database CSU*, Photoshoot Objects Database CSU, and the Tags Database CSU.

#### 6.3.1 Class Descriptions
The following sections provide the details of all classes used in the Oh, Shoot! application.

__6.3.1.1__ Photoshoot Objects Class

This class represents the information on a given photoshoot object.

+ shoot: Shoot

__6.3.1.2__ Shoot Display Class

This class displays information from the above class and reacts to input that might manipulate it.

+ shootDetails: Form
+ createShoot()
+ deleteShoot()
+ displayInfo()

__6.3.1.3__ Express Server Class

This class runs the GraphQL server.

+ app: Express server
+ root: provides resolver function for each API endpoint.
+ schema: provide GraphQL API schema  
+ use()

__6.3.1.4__ Apollo Client Class

This class uses query and caching help from the Apollo Client.

+ client: the Apollo client
+ schema: GraphQL API schema
+ cache: instance of the clients' `InMemoryCache` class.
+ readFragment()
+ readQuery()
+ useQuery()
+ writeFragment()
+ writeQuery()
+ identify()
+ modify()


__6.3.1.5__ React App Class

This class represents components from the React app, mostly from Material-UI.

__6.3.1.6__ Tags Class

This class represents the information on a tag.

+ tag: Tag

__6.3.1.7__ Search Tags Class

This class handles queries of the tags database.

+ filterOptions: dictionary representing the filter options provided or default to none
+ sortOptions: dictionary representing the sort options provided or default to recent

__6.3.1.8__ Display Search Tags Class

This class displays results from the search and communicates modification inputs.

+ result: Shoot[]
+ filter(filterOptions)
+ sort(sortOptions)

__6.3.1.9__ Home Display Class

This class displays the front page.

__6.3.1.10__ Navigation Class

This class deals with navigation between pages, primarily displayed in the banner.

#### 6.3.2 Detailed Interface Descriptions
The following sections provide the details of all interfaces used in the Oh, Shoot! application.

__6.3.2.1__ Photoshoot Objects Interface

This interface sends query results to Shoot Display Interface and Display Search Tags Interface and executes CMD commands from Shoot Display Interface.

__6.3.2.2__ Shoot Display Interface

This interface sends queries and CMD instructions to the Photoshoot Objects Interface.

__6.3.2.3__ Express Server Interface

This interface creates the GraphQL server for the Apollo Client interface.

__6.3.2.4__ Apollo Client Interface

This interface receives schema and query instructions from Tags and Photoshoot Object Interfaces and sends them to the Express Server Interface.

__6.3.2.5__ React App Interface

This interface renders information from the Shoot Display, Display Search Tags, Home Display, and Navigation Interfaces using Material UI components.

__6.3.2.6__ Tags Interface

This interface sends query results to Search Tags Interface and executes CMD commands from .

__6.3.2.7__ Search Tags Interface

This interface sends queries to Tags Interface and sends results to the Display Tag Interface.  

__6.3.2.8__ Display Search Tags Interface

This interface sends results to Shoot Display and React App Interfaces and sends sort and filter requests to the Search Tags Interface.

__6.3.2.9__ Home Display Interface

This interface supplies information to the React App interface.

__6.3.2.10__ Navigation Interface

This interface supplies information to the React App interface.

#### 6.3.3 Detailed Data Structure Descriptions

  __6.3.3.1__ Shoot Data Structure

  - id: the primary key of the shoots database.
  - name: string
  - subject: string
  - client: string
  - shoot_date{year:YYYY, month:MM, day:DD}: dictionary with integer values
  - shoot_loc: string
  - storage_loc: string
  Those above represent the information of a single row in the shoots database table.
  - tags\[\]:Tag\[\]
  This represents all of the tags in string format being added to a shoot.

  - update(): Shoot
  - addTag(): Tag
  - newTag(): Tag
  - deleteTag(): Tag
  - updateTags(): int[]



  __6.3.3.2__ Tags Data Structure

  - id: int
  - tag: string


  __6.3.3.3__ Form Data Structure

  - editable: bool
  - saveIcon: Icon
  - editIcon: Icon
  - textField: TextField
  - datePicker: TextField
  - tagField: Autocomplete
  - edit(): bool
  - create(): Shoot
  - save(): Shoot
  - delete(): Shoot

#### 6.3.4 Detailed Design Diagrams

![Packages Diagram](/sdf/img/packages.png)
![Class Diagram](/sdf/img/class_diagram.png)
![Sequence Diagram](/sdf/img/shoot_sequence.png)

### 6.4 Database Design and Description

The database for this app has three tables in a PosgreSQL server. The three tables are `shoot`, `tags`, and   `shoot_tag`.

The `shoot` table contains all info about each shoot object as one row and the assigned id as the primary key.

The `tags` table contains the unique string of the tag as a row and the assigned id as the primary key.

The `shoot_tag` table contains all relationships between shoots and tags using their ids as foreign keys.

#### 6.4.1 Database Design ER Diagram

![Database Schema](/sdf/img/db_erd.png)

#### 6.4.2 Database Access
The database will be accessed through GraphQL and Apollo client.

The `shoot` table can have a row added to it when a new shoot is created, can have a row edited when any info of the shoot is edited, and can have a row deleted if the shoot is deleted. The queries involving this table include fetching information on individual shoots based on id which can be further sorted.

The `tags` table will be added to when a new unique tag string is added to any shoot. If the tag is not new, then no further action is needed.

Any addition to the tags of a shoot will add a row to the `shoot_tags` table and any removal of a tag from the shoot will delete the row associated.

#### 6.4.3 Database Security

__Database security will be addressed further in 402.__
