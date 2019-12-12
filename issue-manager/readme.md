# issue-Manager

This is our module for managing issues based on a directory. We
assume that, given a path, there is an issues sub-folder, and each of
its individual sub-folders are themselves the issues. Files in those
sub-folders are issue.

## issue Manager

The issue manager exposes a single function, `issues`, which returns
an array of `issue` objects for each issue it contains.

## issue Object

The issue object has the following two properties and one method:

* `name` -- The name of the issue
* `path` -- The path to the issue
* `issues()` -- Calling this method will return all the issues(folder of all of the issues) issues(each issue in the issues folder)