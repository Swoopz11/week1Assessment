/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a program that allows programmers to create checkpoints in their code and allows collaboration with other programmers.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'GitHub is a website where programmers can push their projects to through Git repositories'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {description: 'Initializes a repository', code: 'git init'}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {description: 'Creates a working copy of an existing git repository', code: 'git clone'}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {description: 'Displays the state of the working directory. Displays tracked and untracked files. Displays changes made, if there are any.', code: 'git status'}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {description: 'Sets up changes to be made to the working directory to the staging area', code: 'git add .'}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {description: 'Creates a snapshot of the staged changes', code: 'git commit -m "insert a comment"'}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {description: 'Pushes the local repository to a remote repository', code: 'git push'}