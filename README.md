# COVID-19 Vaccine R&D Dashboard

# Installation

1. Clone the front end repository to your local machine: `https://github.com/ncov19-us/ncov19-vacc-dash-front-end.git`
2. Run `yarn` at the root of the directory to install the client-side dependencies
3. Run `yarn start` to run the app in development mode
4. Open http://localhost:3000 to view it in the browser

# Contributing

## Git Workflow

- Our commits use a style called **[semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages)**. 
- Pick a task to work on from the Trello board, assign your name to it via the top right of the Trello card, and confirm that no one is already working on this task, or another task that is likely to cause merge issues with yours.

```sh
git clone https://github.com/ncov19-us/ncov19-vacc-dash-front-end.git
git checkout <staging-branch>
git checkout -b <your-feature-branch>
Commit your work according to the semantic commits structure
```
Commit your work using semantic commits structure.

When done:
```sh
git checkout staging-branch
git pull  # sync your local feature branch with origin/github
git checkout <your-feature-branch>
git rebase <staging-branch>  # merge your branch w/ feature-branch
git commit
```
Open a pull request from your working branch into `staging-branch` for review.

**If you do not have experience working with GitHub, or are confused about certain instructions, please message your project lead.**
- Create a **new feature branch** with a name that accurately describes the task you are working on, and commit in a way that follows semantic guidelines. _DO NOT COMMIT OR MERGE TO MASTER_
- When you complete a feature and it is **bug-free**, create a pull request to merge into **staging**, _NOT MASTER_, and request a review from at minimum your project lead.  It is a good idea to have other team members review your code as well.
- _Your project lead_ will be the one to approve your PR. Should they make any comments/merge conflicts arise, please be responsive and communicate with them.
- Once the PR has been successfully merged, you can delete the feature branch on GitHub (if all work on that branch is complete) and move your task's Trello card to _the appropriate "completed" column_ on the Trello board.
- Remember, do not hesitate to ask questions. Questions now are better than merge conflicts later!

## Testing

Run `yarn test` to launch the test runner. Tests are written with Jest and React Testing Library.
