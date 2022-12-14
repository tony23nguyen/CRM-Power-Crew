## Back-end
Lorem ipsum the back-end team.

### Database schemas

### User collection schema
- id (default primary key)
- Username
- Password (this *should* be encrypted but we don't have passportJS yet installed yet so will ignore for testing purposes)
- Account creation date
- Email
- Phone number (nullable)
- Refresh token (not sure if we are using this, maybe need to discuss)
- Auth token

#### Leads collection schema
- id (default primary key)
- Name 
- Company
- Phone number
- Email
- Lead category (cold, warm, hot)
- Contact status (Not Contacted, Could Not Contact, Qualified, Unqualified, Refused)
- Date-time added (default now)

#### Contacts collection schema
- id (default primary key)
- Name 
- Company
- Phone number
- Email
- Total deal value
- Date-time added (default now)
- Archived (y/n)


#### Deals collection schema
- id (default primary key)
- Company name
- Deal value
- Deal priority
- Deal category (Won, Lost, Waiting for Response, Update Required, Won-Closed, Lost-Closed)
- Last Update (update this whenever the document gets updated)
- Archived (y/n)

### Routing
- /login - Needs a post route for logging in and authentication.
- /deals - Needs a get, post, update and delete route.
- /leads - Needs a get, post, update and delete route.
- /contacts - Needs a get, post, update and delete route.
- /token - Not sure if we'll be using refresh tokens, but if we are we will probably want to use this route

Routes that are not vital to the app but still useful:
- /subscribe - Subscribe to the website's newsletter.
- /unsubscribe - Unsubscribe to the website's newsletter. 

### Other notes
None at the moment.