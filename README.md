# BRING WALDO.

### WHAT IS BRING WALDO.?

Bring Waldo uses a database of locations – bars, cafes, parks, etc – that allow your canine best friend, created through user input. People can upload new places they find with their dogs so others can enjoy even more canine companionship in their own lives.

### Concept

Bring Waldo. came about with my frustrations as well as conversations with other dog parent friends. The web app fills a need in the market – an easy way to find dog-friendly places. Rather than calling ahead or finding out the hard way, people can use Bring Waldo. to easily know whether or not their furry bestie can come.

The web app uses user-input to compile a database of dog-friendly locations and categorize them – bars, coffee, parks and doggie stores – for other dog parents. User-input allows for unofficial and occasional dog-friendly zones as well as the officially designated places to be known and available.

## View Deployed Site:

<a href="http://stephcmartin.github.io/waldo">You can view Bring-Waldo here</a>

### My Entity Relationship Diagram and User Story:

<a href="https://imgur.com/86qi5qA">Here is my initial ERD.</a>

I had originally thought I would create a Many-To-Many relationship between users and locations. However, I realised that step was unnessecary and would evidently over complicate things. Therefore, I edited the controller to show a collective list of locations; however, only the user who created it would have access to updating and deleteing the location from the list.

### Google Maps Integration:

After sucessfully creating the MVP version of my app, I decided to try incorperating google maps to my app.

I found a list of Massachusetts verified dog parks online and thought it'd be a great starting point. I added all the verified locations I could find and added it to an <a herf="https://stephcmartin.github.io/waldo/#/locations/gov-verified"> open source google map</a> that I created. This page is open and doesn't require a user to sign-in, as I want the informationt to be accessible to the general public.

### Wireframe for Bring-Waldo:

https://imgur.com/a/MIVsl

### My Project Schedule + Planning:

<a herf="https://imgur.com/a/Z1Qza">Here is my initial project planning schedule</a>

When I first started the project, I knew the core features that I wanted the app to have. I anticipated that it would take 3 days to create the backend, as well as 'create', 'update', 'read' and 'delete' feature of the app. However, I soon realised it would only take me 1.5 days to create the backend, as well as implement 'CRUD'.

I did not forsee the tremendous difficulty of the initial deployment of ember, and was glad I gave myself a buffer to the project.

### Link to My Back End Repo:
https://github.com/stephcmartin/waldo-api

### List Of Technologies Used In This Project:
- Ember
- Handelbars
- Javascript
- HTML
- CSS
- Rails
- Git
- Bootstrap

### List of Usolved Problems Which Would Be Fixed In Future Iterations:
-
