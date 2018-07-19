Genius Plaza About Page:

The components are:
      App
      |___MainCopy
      |___Employees
          |___Employee
MainCopy Component:
  takes a 'vidurl' attribute, which should be the url to the desired video, 
  and all of the children inside the MainCopy component, idealy the copy,  
  are shown above the video. 
Employees Component:
  takes a url where it can request the employee info. Mainly, this component
  is a delegator, creating the components and organizing them into the grid.
  Function: 
    I used axios to create the get request, which runs only when the component
     first mounts. 
Employee Component(yes I regret choosing this name):
  takes a url, alt, name, and title, which are used to build one member of the
  employee grid. Each of these members include an image using the given 
  url and alt, the given name, and the given title.


Trello Extra Credit:
  I threw what I put together at the bottom of the about page, for simplicity.
  
  Trello:
    4 Areas labeled To Do, Doing, Done, and Delete.
    Create an item in any of the 3 data sections, and drag and drop anywhere you like.
    To delete, drag to the delete area.
    














































## Instructions

For this project you will recreate the Genius Plaza [About Us Page](https://www.geniusplaza.com/en/aboutus/) (header and footer excluded.)  You will need the following:

* employee data endpoint: https://gp-frontend-exam.herokuapp.com/get_employees

* video: https://www.geniusplaza.com/media/videos/Genius_Plaza_Hiring_Video.mp4

*All media files start with origin https://www.geniusplaza.com*

## Getting Started

To get started fork this repository and create feature branches.  The repository already has a starter [create react app](https://github.com/facebook/create-react-app) project you can work with.  Make sure to make frequent and detailed commits.  Once you finish make a detailed pull request and send an email to Dylan@geniusplaza.com.

*[Good Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)*

## Focus

This project is open ended but things to focus on include:

* Clean bug/error free code - a good way to avoid bug free code is through well thought out planning before implementation
* File Structure/Management
* Good and Latest React Practices - We stay up on the latest in the React/Javascript community here.  Showing that you do the same can be beneficial.
* Unit Testing - Either TDD/BDD are appreciated
* README - Your code should include a README describing the general implementation, outline for future use of any reusable components/functions, and the build process if required.

*Focus first on creating a replica of the existing About Us page meeting these criteria.  After that you can implement any additional features to really show off your skills.*


## Extra Credit

If you would like more of a challenge implement a Drag and Drop Note Page.  Something in the design of [Trello](https://trello.com/b/jNPTiiVB/untitled-board). ![Trello Boards](./trello-example.png)

Features are up to you but could include things such as:
* add list
* remove list
* add card
* edit card
* remove card
* card descriptions
* data persistence
* drag card to new list
* attach image to card
* set card due date

*There is no need to create a separate application, you can implement routing or any other mechanism you're familiar with to incorporate both projects in the repo*
