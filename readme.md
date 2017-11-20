#How to install
1. Download and install Node JS https://nodejs.org/en/download/
2. Extract zip file or clone git repository.
3. Navigate to folder and execute npm install (it may take several minutes)
4. Run "npm start"
5. Open localhost:3000 in your browser


#How would you decompose this page into components? It is important to discuss the purpose of each of the components you have identified. It is also important to discuss how these components interact and exchange data with one another.

- In designing an app or a page, I would group each smallest element and create a component. Components should be reusable and not tightly coupled on any other components. In this exercise, I would create the following as a component.
	
	a. speechList - the left pane which lists all speeches
	b. speechForm - the right pane which the user use to enter information to create, update, delete or share.
	c. login - used for authentication (currently hardcoded the credentials for this demo)
	d. view - the main layout of the page

- These components will interact with each other using services and events. These methods are called dependency injection and are used to decouple components so the can easily be reused and unit tested.

#Discuss how you would design this page in a responsive in nature. This page should be able to be rendered on different screen sizes including tablets and desktops. Specific details on the different Bootstrap and CSS features would be very helpful

- I would use the bootstrap grid using classes: row, col-md-*, col-md-sm, pull-right, hidden-md, hidden-sm. I can also use @media for the css 3 media queries.