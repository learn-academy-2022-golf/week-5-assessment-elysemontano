# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super is a way of referencing the initializers in the parent class. For example, if we have a parent class of animal, with initializer parameters of type, legs, and habitat, we can create a child class called Frog and use super to copy those parameters to Frog to save us from having to type them out again. We still have the ability to add unique parameters for Frog that are not included in Animal, perhaps jump_length, flies_eaten, etc. even though we are using super to bring in type, legs, and habitat

Researched answer: Super is a keyword that can be called within a method. When it is called, the code looks for a parent class that contains a method with the same name. if called without any arguments, it will use the arguments from the original parent method. If it is called with arguments, you can leave it empty and it will not grab any of the arguments from the parent, or, you can place only the specific arguments you want to bring down

class Parent
  def initialize(argument)
    @argument = argument
  end
end

class Child
  def initialize
    super()
  end
end


2. What is a gem?

Your answer:

Researched answer: A snippit of code written by other developers that can help bring in functionality to your application.  It is all about saving time. RSpec is a gem that we have used in the past to test our Ruby code.  Gem is a package manager for Ruby like yarn for Javascript

3. What is a relational database? Are there other kinds of databases?

Your answer:

Researched answer: 
There are 5 types of databases, Hierarrchial, Network, Object-oriented, relational and NoSQL databases. Now we can even get into subcatigories such as relational and non-relational databases. Neither of the two are better than the other and both have a place in the database world. Relational databases focus more on structured data while non relational databases dont use as much structure. Relational data is table and row oriented while  non-relational databases arer document oriented.

A relational database depicts information in rows and columns, similar to an Excel spreadsheet. This type of database holds organized data in a predefined relationship, which allows for easier visibility on the relationship between different types of data. SQL is a common type of relational databases. Objects written in Ruby almost mirror data stored in the columns and rows in relational databases. Ruby's objects conists of key value pairs, which can be reflected in relational databases. PostgreSQL is also another type of relational database, as it is an object-oreinted database. PostgreSQL is very similar to sQL, just an advanced version, with more functionality and relations between objects.

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers in relational databases that ensures that every single entry has at least one distinct characteristic about it. So for example, if two identical entries are put down, everything would be the same except for their primary keys. Typically, those primary keys will look like a random jumble of letters and/or numbers, kind of like car license plates.

Researched answer: Additionally, primary keys can be defined as being either explicit or general. Explicit primary keys refer to primary keys pertaining to one specific table, whereas general primary keys can span across different tables with the same properties (like column headers, table names, etc.).

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: 
A POST request is create used to put new information in the database like a profile for a user for the first time, 

A GET request reads information from our database such as user images loaded in database

PUT and PATCH requests will update our database such as updating a part of the user profile

DELETE request will delete an instance or value in our database

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

2. Ruby on Rails:

3. Database migrations:

4. Params:

5. ERB:
