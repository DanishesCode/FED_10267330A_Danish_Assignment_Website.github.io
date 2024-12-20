PizzaHut(Danish version)

Design Process
This website was created with the goal of providing Pizza Hut customers a more user-friendly and efficient online experience for placing their orders. By incorporating a sleek black-and-white theme complemented by signature Pizza Hut red accents, we aimed to modernize the website’s design while staying true to the brand's identity. The revamped interface is not only visually appealing but also highly intuitive, ensuring that customers can find what they need quickly and easily. With a streamlined layout and improved navigation, every feature and functionality is accessible within just three clicks, making the ordering process faster and more convenient than ever.


As a customer, I want a seamless and hassle-free experience when placing orders and tracking them. It should be straightforward and intuitive, allowing me to navigate the platform effortlessly without the need to press an excessive number of buttons to get to where I need to be. The process should be quick, efficient, and user-friendly, ensuring that I can place my order and monitor its status with minimal effort. A well-designed system that prioritizes convenience and ease of use would make the overall experience more enjoyable and stress-free, saving me time and frustration.

Features

Navbar:
This navbar is a fixed position which allows users to switch between
pages hassle free.When in mobile view, the navbar will have a hamburger
menu for you to click instead of squeezing all the content into 
one bar but it will be switched to a column instead of row.

ReviewSection(in index):
This reviewsection let the potential buyers have a easier mind to buy pizza from here
as there are many good reviews and good status associated with this website.

SearchBar:
This searchbar is useful for users to find for a specifc item they want to order
which saves them time rather than scrolling to find the items. This search bar
was made via looping through a list after any input is detected.

SearchFilter:
This filter is almost similar to the searchBar but it is different as you can press
and categorize each variation individually. By doing so, this will help users to select 
a category they want. How i implemented this was also similar, I would give each div an
attribute and it loops through the elements. Using flexbox so when Display:None is use on the rest of
the div, the div that I want will automatically get pushed up.

AddToCart Button:
This addtocart button on each product allows users to place the food they want into the shopping cart
on the top right. Animations are also used for seamless design. Animations are made by cloning the image
of the product and resizing it and transforming its position to the cart's position within (x) duration.
Items are then saved into the localstorage with an Array(not a dictionary) using this format [name,quantity,price,image] which
will be stringified to be saved.

Locations page:
This page allows users to discover various pizzahut locations nearby them using the google map api(https://developers.google.com/maps)
users are able to navigate through the map to find their routes to the pizzahuts.

Contact us page:
This contact us page is made so that users could get contact information and also send messages for help via the website. This is made
by forms and there is validation whether you have filled in all the blanks and whether your email actually exists. Once validation has
passed they are allowed to submit the form.

Tracking page:
This tracking allows users to know when their order is going to arrive approximately. How this works is by saving tracking orders inside
the localStorage after customers make their orders, looping through the saved tracking orders and returning whether the tracking
id provided by the customer exists. If it doesnt exist, an alert will pop up but if it exists, the website will provide you with the status
and ETA of your delivery and this status and ETA are randomized.

Checkout:
This page allows users to add or remove their items that they want to order. This page receives data from the localStorage array
cart which was saved from the addtocart button and will clone a template div and fill in the blanks. The cloned div will then be
appended to the container which is flexbox which arranges itself nicely and the total will be calculated as well.

Discount: 
This feature allows users to apply a discount which is represented in an array. Once a user selects the correct discount the total
will be deducted accordingly. This feature also uses looping to make sure that the user's discount code is valid or else it will return
an alert.The subtotal will then be saved into the localStorage.

Secure payment page:
This feature allows users to make payment securely. This form validates all information before letting the user submit it. The pay button
also receives the amount from the lpcalStorage that is saved and will be displayed. Once validation finishes and user presses submit, 2
lottiefile animations will play one after the other. The first one will play after submitting, the 2nd one will play after detecting that the first
one has finished playing. After that it will redirect you to a successful payment page providing and generating you with a tracking id which
is being saved in an array into the localStorage.


Figma link:
https://www.figma.com/design/U2RMSoAizYU30EEBq0cLMF/Danish_Wireframe_Assg1?node-id=0-1&t=q5IegkuKuhiApHRI-1

Credits
https://chatgpt.com/
https://www.w3schools.com/
https://stackoverflow.com/
Content
SearchBar,Google maps were copied from chatgpt
Learned a few things from w3schools
Some solutions were taken and modified from stackoverflow
Media
The photos used in this site were obtained from https://icons8.com/icons
Acknowledgements
I received inspiration for this project from Pizzahut
