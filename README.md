# Project Overview

## Project Schedule
| Day   | Deliverable                                        | Status     |
| ----- | -------------------------------------------------- | ---------- |
| Day 1 | Project Description                                | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline /WorkSheet | Complete   |
| Day 1 | Get Back End Server up and running                 | Incomplete |
| Day 3 | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| Day 4 | MVP & Bug Fixes                                    | Incomplete |
| Day 5 | Final Touches                                      | Incomplete |
| Day 6 | Present                                            | Incomplete |

## Project Description
This is the third project for General Assembly's SEI program, created bu Shaina Earle, Annie Davis, Brock Podgurski. It is a full-stack project, using an agile workflow.

## Wireframes

### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP (examples)
- Fully functioning back end server
- Fully deployed backend and frontend servers
- Full data set listing foods and the appropriate nutrients
- Team page with info on each of the creators and our contributions to the site
- Application using full crud
- Front end using react to effectively pull data from the back end server
- Effective use of react router to navigate through the application
- use of axios to pull data from back end server
- Responsive design for front end, built mobile first
- at least 20 commits from each team member

#### PostMVP
- Create login and user validation capabilities
- create feature that allows user to see info from previous days
- Animated home login page
- usage of circle graph to display data

#### MVP
| Component                           | Priority | Estimated Time | Actual Time Invetsted |
| -----------------------             | :------: | :------------: | :-------------------: |
| CSS and Design                      |    H     |      30 hrs    |         0             |
| Basic Back End Routing              |    H     |      2 hrs     |         0             |
| Deployment for basic backend server |    H     |      1hrs      |         0             |
| Routing updates as needed           |    H     |      2 hours   |         0             |
| Basic React Routing/App Structure   |    H     |      4 hrs     |         0             |
| Wireframes                          |    H     |      2 hrs     |         2             |
| Pulling info from backend - axios   |    H     |      5 hrs     |         0             |
| Displaying/Passing Data             |    H     |      15 hrs    |         0             |


#### PostMVP
| Component             | Priority | Estimated Time | Time Invetsted |
| --------------------- | :------: | :------------: | :------------: |
| Login/User Validation |    L     |      10hr      |     -hr        |
| User History saved    |    L     |      10hr      |     -hr        |
| Animated Login page   |    L     |      2 hr      |     -hr        |
| Circle graphs         |    L     |      5hr       |     -hr        |

## Route Chart

| URL           | HTTP req    | Description        |
| ---           | --------    | -----------        |
|  /foods       | GET         | gets all the foods |
| /foods/:id    | GET         | gets food by id    |
| /foods/:name  | GET         | gets food by name  |
| /foods/:id    | DELETE      | deletes one food   |
| /foods/:name  | DELETE      | deletes one food   |
| /foods/:id    | PUT         | edits one food     |
| /foods/:name  | PUT         | edits one food     |
| /foods        | POST        | creates one food   |

