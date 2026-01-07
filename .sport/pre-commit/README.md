# We support pre-commit hooks!
* Simply add .sh files to .sport/pre-commit/
* make certain they are executable (`chmod +x .sport}pre-commit/*.sh`)
* During pre-commit we will iterate through each and `source` each one.
* It's up to you which hooks you track with git or ignore, in general probably best to commit them