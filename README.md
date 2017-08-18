#### Project

Your challenge is to build the front-end of a micro blogging platform - think
a very basic Twitter. A plain mock-up of the primary screen has been supplied.
Use this as a base to build the front-end of the application.

![Mock-up](mock-up.png)

This repo contains a simple HTTP server that serves up a list of posts (tweets)
via a GET request to `http://localhost:8000/posts`. Use the data returned to
populate the `Latest Posts` section. The back-end returns some posts that should
be hidden; please ensure these aren't displayed to the end user.

Hiding, liking and submitting new posts should be handled on the client-side;
there's no requirement to persist this data to the back-end and, therefore, no
requirement to write any server-side code to complete this challenge.

It is also not a requirement to implement every feature. It would be preferred
if the end product was well-structured, maintainable, and something you'd be
comfortable having deployed to a production environment. It would definitely be
advantageous for you to show off your technical expertise in the various areas
of front-end application design and development.

Finally, it's your choice to pick the front-end tools that you think are most
appropriate for this application. You're more than welcome to use a starter kit
as place to kick off from.


#### Running the server

    $ git clone git@github.com:PrimarySite/frontend-candidate-challenge.git
    $ cd frontend-candidate-challenge
    $ npm i
    $ npm start

The web server will now be listening on http://localhost:8000/.
