
GIT - Version control System
---------------------------------------------------------------------------
$ git -version


$ git init
    .git folder added to project

$ git status
    shows all folders and files current status in repsitory:( prject )

$ git add .
    add all files except .gitignore paths to the project to track the changes until next commit command.

$ git commit -m "type the message here"
    commit the recent changes.

$ git log
    shows the all changes made with commits.

$ git remote add origin https://github.com/denbarkin/expensify-app.git
    add github rep.

$ git push -u origin master
    uploads all commits and synch the rep with online.

SSH Communication with GIT Hub.
---------------------------------------------------------------------------
First create ssh key with -t type rsa and size 4096
$ ssh-keygen -t rsa -b 4096 -C "barkin.takmaz@gmail.com"

$ eval "$(ssh-agent -s)"
    Check ssh agent is running.

$ ssh-add ~/.ssh/id_rsa
    Add private  identity file to the agent.

$ pbcopy < ~/.ssh/id_rsa.pub
    Copy SSH Key to clipboard to make copy / paste mambo cambo :)

