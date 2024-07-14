## User Stories

🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post

### Stretch goal

🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category

## Wireframes

![Wireframe of UI reviews](/public/wireframe.jpg)

## SQL Tables

![Diagram of SQL relational database](/public/sql.png)

# Reflections

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

- Created using create-next-app
- Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.
- Created a form where users can add posts where comments can be added.
- Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.
- Refresh the /posts route data when adding a new post, and redirect the user to the list of posts
- Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page
- Add static and dynamic metadata to pages
- Added Filter by categories
- Added Delete button to posts and comments

🎯 Were there any requirements or goals that you were not quite able to achieve?

- To be able to edit posts and comments.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

- I decided to focus attention elsewhere, as the delete button is on the website users can always delete and add another post or comment.

## Attributions and sources

- List of UK industries: https://www.ibisworld.com/united-kingdom/list-of-industries/
- Datalist input type: https://www.w3schools.com/tags/tag_datalist.asp
- Homepage image source: https://dribbble.com/shots/24289937-Stacklist-mobile-app
- Theo, Manny and Richard for Debugging sessions
