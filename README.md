# [nCOV19.US Vaccine/Treatments R&D Tracker](https://vaccine.ncov19.us)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![CodeFactor](https://www.codefactor.io/repository/github/ncov19-us/ncov19-vacc-dash-front-end/badge)](https://www.codefactor.io/repository/github/ncov19-us/ncov19-vacc-dash-front-end)

## 1️⃣ Description

A Vaccine/Treatment RnD tracker for easily getting the latest SARS-CoV2/COVID-19 research and clinical trials happening all over the world.

## 2️⃣ Tech Stack 

- React/Redux
- Mapbox
- Semantic UI

## 3️⃣ Contributors

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/hurshd0)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/hurshd/)    [<img src="https://twitter.com/favicon.ico" width="20">](https://twitter.com/hurshd0)    **[Hursh Desai](https://hurshdesai.com)**    |   Project Lead

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/ars394)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/anishasunkerneni/)    [<img src="https://twitter.com/favicon.ico" width="20">](https://twitter.com/youfoundanisha)    **[Anisha Sunkerneni](https://github.com/ars394)**    |    Project Lead

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/jpeliares/) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Jan Patrick Eliares](https://www.linkedin.com/in/jpeliares/)**    |    UI/UX Designer

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/ljh-c)    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   **[Lillian Cha](https://github.com/ljh-c)**    |    Maintainer | Core Dev

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/ch04937)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/ch04937-carlos-hernandez/)    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Carlos Hernandez](https://github.com/ch04937)**    |    Maintainer | Core Dev

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/JasonRHemann)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/jason-hemann-181650162/)    [<img src="https://twitter.com/favicon.ico" width="20">](https://twitter.com/hemann_jason)    **[Jason Hemann](https://github.com/JasonRHemann)**    |    Maintainer | Core Dev

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/danimal-johnson)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/dan-johnson-489b151/)    [<img src="https://twitter.com/favicon.ico" width="20">](https://twitter.com/)    **[Dan Johnson](https://github.com/danimal-johnson)**    |    Maintainer | Core Dev

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/tashby)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/timothy-a-31476b125/)    [<img src="https://twitter.com/favicon.ico" width="20">](https://twitter.com/TonkaToughTim)    **[Timothy Ashby](https://github.com/tashby)**    |    Contributor

[<img src="https://github.com/favicon.ico" width="20"> ](https://github.com/llamousse)    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/vickyue/)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     **[Vicky Yue](https://github.com/llamousse)**    |    Contributor

## 4️⃣ Getting Started

### Installation

1. Clone the front end repository to your local machine: `https://github.com/ncov19-us/ncov19-vacc-dash-front-end.git`
2. Run `yarn` at the root of the directory to install the client-side dependencies
3. Run `yarn start` to run the app in development mode
4. Open http://localhost:3000 to view it in the browser

### Testing

Run `yarn test` to launch the test runner. Tests are written with Jest and React Testing Library.

---

## 5️⃣ Contributing

### Git Workflow

- Our commits use a style called **[semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages)**. 
- Pick a task to work on from the Github issues or Trello board, assign your name to it via the top right of the Trello card, and confirm that no one is already working on this task, or another task that is likely to cause merge issues with yours.

```sh
git clone https://github.com/ncov19-us/ncov19-vacc-dash-front-end.git
git checkout staging
git checkout -b <your-feature-branch>
```
Commit your work using semantic commits structure.

When done:
```sh
git checkout staging
git pull  # sync your local feature branch with origin/github
git checkout <your-feature-branch>
git rebase staging  # merge your branch w/ feature-branch
git commit
```

Push your branch: `git push origin <your-feature-branch>`. Then open a pull request from your working branch into `staging` for review.

Please note we have a [CODE OF CONDUCT](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
