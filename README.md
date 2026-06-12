# Profile
For this profile page assignment, I reused the FlexNavbar and User Card concepts from previous assignments and expanded them into a complete profile layout. 

For the HTML code, I added additional cards to the User card such as an education card to display bootcamp information and achievements . I also created a connection requests card that includes user names, profile icons, and accept/reject buttons. I added a connection card that shows the user’s connections along with a “view more” section. Then used (span) to create the notification badges. 

To organize the layout, I used a container and column divs to separate the page into two sections. One column contains the user and education cards, while the second column contains connection requests and connections cards.

For the styling, I styled the main page layout using (.container) with display:flex so the content would appear in two columns. I centered the layout on the page and added spacing between the columns using (gap). I set each column to display:flex and flex-direction:column so the cards stack vertically with equal spacing between them. 

For the user card, I gave it a width and height, a gray border, and position:relative so the profile picture could overlap the top section using position:absolute. The (.top) class creates the blue header area, while (.content) adds spacing and typography styling to the user information. 

For the education, request, and connection cards, I reused similar card styling patterns to keep the design consistent across the page. Each card has borders, padding, typography styling, and dark header sections created with (.top2)
.
In the connection request section, I used Flexbox again inside .name to align the profile image, username, and action buttons on the same row. I also styled the notification badges with rounded borders and background colors to imitate social media notification. Finally, I styled the “View More” section with blue underlined text and a top border to separate it visually from the connections list.
