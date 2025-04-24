# designElements
A repository containing javascript modules of various design features to be used with html and css.

This repository will contain individual features that I create which can be reused. First I will create a dropdown menu and an image carousel as part of my Odin Project course, then gradually will add others that I make.

1) Dropdown menu - dropdownMaker()
    To use this write the html for a button and a div that contains the menu elements. Then put the two inside a div container and give it a class name common for all dropdowns. Use this function and pass the classname as argument. 
    Eg. if the div has a class name of XYZ, call dropdownMaker('XYZ') after adding the module.
    Then add whatever styling you need in CSS.

2) Image carousel - imageCarousel()
    To use this write the html for a div that contains all the images with equal dimensions. Contain that div in another div with a unique ID. Use this function and pass the id name, height, width, and total number of images.
    Eg. if the dimensions are height: 300px width: 400px. And there are 5 images. And let the id be XYZ.
    Call imageCarousel('XYZ', 300px, 400px, 5) after adding the module.
    Style it afterwards.