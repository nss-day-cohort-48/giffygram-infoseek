# Giffygram

For this project, you will be building a web application that lets people post their favorite gifs. Each post can be favorited by other users, and deleted by the original author. Users can also send direct messages to each other, and be notified when they have messages.

### Starting the API

Open a terminal window and go to the `giffygram` directory.

1. `cd api`
1. `cp db.json.example giffygram.json`
1. `json-server giffygram.json`

### Starting the Web Server

Open another terminal window and go to the `giffygram` directory.

1. `cd src`
1. `serve`

Use the assets that you created during the deconstruction phase to construct your own working version of Giffygram.

## Using Github

### Issue Tickets and Projects

1. Once your team defines all of the features that need to be built for the application, create an Issue for each one.
1. Create a project for your repository.
1. Create the following columns in your project
    * Backlog
    * Doing
    * Ready to test
    * Done
1. Add each issue to your Backlog column.

Each teammate then drags one issue from the Backlog to the Doing column, and assigns themselves to the issue. You are now accountable for making sure that issue gets done.

You and all of your teammates **share the responsibility** of getting it done. No one works alone. It doesn't matter how many of your teammates you ask for help, as long as you ensure that the issue gets completed during the sprint.

### PR Templates

Create a file named `PULL_REQUEST_TEMPLATE.md` in your repository and place the following content into it. Every new PR you create will have this structure automatically.

```text
#### Changes Made
1. Added file `filename` to `directoryname` directory.
1. Modified file `filename` to include `functionalityname` and functionality.
​
#### Steps to Review
1. Checkout this branch locally.
    ```
    git fetch --all
    git checkout branchname
    ```
2. Open a new Terminal tab (⌘T) and navigate to the server directory.
3. Test app functionality.
    > Instructions for how reviewer can test functionality, and detailed description of what the expected outcome is.
    > Example: When user does BLANK, then BLANK should happen.
4. View code file.
    > Confirm file modifications are present as indicated above.
    > Confirm no unused code or extraneous comments exist.
```
