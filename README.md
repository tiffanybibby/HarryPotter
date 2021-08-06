# Project Overview

## Project Name
[HarryPotter](https://tiffanybibby.github.io/HarryPotter/)

## Project Description

This app will display info about well-known Harry Potter characters. The user will be able to view facts about their favorite characters or maybe learn something new or about a character they are less familiar with. Additional functionality to be added to view characters by student/staff or house.

## API and Data Sample

http://hp-api.herokuapp.com/api/characters/

{
        "name": "Harry Potter",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "31-07-1980",
        "yearOfBirth": 1980,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
            "wood": "holly",
            "core": "phoenix feather",
            "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Daniel Radcliffe",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/harry.jpg"
    },

## Wireframes

Desktop:
https://wireframe.cc/pro/pp/c71126146461445

![Homepage 2](https://user-images.githubusercontent.com/88211804/127904614-43f48cec-208d-4a7c-877e-9a5461ed4b45.png)


#### MVP 

- Find and use external api 
- Successfully pull info from API - including images of characters
- Use of HTML, CSS, & JAVASCRIPT
- User can see all characters and facts

#### PostMVP  

- Working sorting function
- Add filter by staff
- Add filter by student
- Add filter by house w/ dropdown for all 4
- Add a quiz based on characters

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|August 3| Pseudocode / actual code | Complete
|August 4| Initial Clickable Model  | Complete
|August 5| MVP | Complete
|August 6| Presentations | Incomplete

## Priority Matrix

https://app.conceptboard.com/board/t09k-bch4-bua5-p36d-tekz

![image](https://user-images.githubusercontent.com/88211804/127892837-d373308d-5336-4af7-a0d2-04ca154f7643.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pseudocode | H | 2hrs| 1hr| 1hr |
| HTML Structure | H | 4hrs| 2hrs| 2hrs |
| Setting up JavaScript frame | H | 3hrs|4hrs |4hrs |
| Creating loop | H | 3hrs|10hrs | 10hrs |
| Working with API | H | 5hrs|10hrs|10hrs  |
| Creating Buttons | H | 3hrs|2hrs | 2hrs |
| Creating Functions| H | 3hrs|16hrs | 16hrs |
| Linking images | H | 3hrs| 1hr| 1hr |
| Working with Event Listeners | H | 3hrs|5hrs | 5hrs |
| CSS Formating | H | 3hrs|20hrs |20hrs  |
| Organizing code | H | 3hrs|3hrs |3hrs  |
| Polishing Design| H | 3hrs|2hr | 2hr |
| Debugging | H | 5hrs|5hrs |5hrs  |
| Testing | H | 3hrs|3hrs |3hrs  |
| Total | H | 49hrs|84hrs  | 84hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
@media only screen and (min-width: 320px) and (max-width: 480px){
  .card-container{
    width: 50%;
  }
  .character-container{
    width: 90%;
    padding: 0px 0px;
  }
  .page-header{
    width: max-content;
    align-items: center;
    font-size: 18px;
  }
  img {
    max-width: 318px;
  }
  #btn1{
    margin-left: 70px;
  }
  #btn2, #btn3{
  margin-right: 10px;
  }
  #btn4 {
    flex-wrap: wrap; 
    width: 90px;
  }
  .button-container{
    max-width: 70%;
    padding: 10px 20px;
  }
  form{
    max-width: 18%;
    margin-left:32px; 
    flex-wrap: wrap;
  } 
  button {
    margin: 0px 0px 0px 3px;
  }
  .card-header{
    font-size: 10px;
  }
}
  // This media query optimizes the site for mobile
```

## Change Log
Changes were made to the wireframe/layout of the site because I decided to have details hovered over each card.
