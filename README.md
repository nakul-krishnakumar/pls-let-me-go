- **HOW TO CLONE FORKED REPOSITORY?**
    1.  To clone your fork into your local machine
        
         `git clone https://github.com/YOUR-USERNAME/REP-NAME`
        
        after this, do `cd REP-NAME`  to move into newly made folder (with name `REP-NAME` )
        
    
    2.   To connect to main repository (to update changes made in main repository)
    
    `git remote add upstream https://github.com/ORIGINAL-OWNER/REP-NAME` 
    
- **HOW TO UPDATE LOCAL DIRECTORY?**
    1. Fetches updates made in main repository
        
        `git fetch upstream`
        
    
    1. Merges the updates made in main repository to your local clones repository
    `git merge upstream/main`
    
- **HOW TO PUSH INTO FORKED REPOSITORY?**
    1. Add all changes made in your local directory to a push queue
        
        `git add .`   (here “.” means add all changes)
        
        *(do a `git status` to see all changes in the push queue)*
        
    2. Make a commit
        
        `git commit -m "enter commit message here"` 
        
    3. Pushes the committed changes from your local directory to your forked repository
    `git push origin main`
        
        
        *(do a `git log`  to see all commits made so far)*
        
- **HOW TO RUN THE PROJECT IN BROWSER?**
    1. To install npm modules:
        
        `npm install` 
        
    
    1. To run the project in browser
        
        `npm run dev`
        
        (this varies depending on the build tool used, in this case we are using vite)
        
    
- **HOW TO CREATE PULL REQUESTS?**
    1. Go to your forked repository
    2. click contribute
    3. click create pull request

- **COLOR PALETTE**
    - LIGHT MODE:
        Primary: #F0ECE5
        Secondary: #161A30
    
    - DARK MODE:
        Primary: #161A30
        Secondary: #F0ECE5 or #B6BBC4

NOTES:
    APPLICATION DATA IS STORED INTO HISTORY ONLY AFTER STUDENT COMES BACK TO COLLEGE
    
