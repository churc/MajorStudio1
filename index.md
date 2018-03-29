##### Major Studio 1, Parsons
##### Spring 2018


### Quantitative Project

#####   [Gender at The Met, What % of the Modern & Contemporary Art Collection's 14,350 works are by women?](https://churc.github.io/MajorStudio1/MetProjects/gender) 
   
###### The aim of this quantitative project is to look at the Met's Modern and Contemporary Art department collection by gender and visualize how many artworks by men and how many artworks by women are in the collection. The displays are by number of artworks. Two visualizations show total numbers by gender, and a timeline uses the artwork's date - using 'Object Begin Date' - by gender to see what changes there are from 1850-2017. [Source: MetObjects.csv, January 2018](https://github.com/churc/MajorStudio1/tree/master/MetProjects/gender/assets)

###### There are 14,350 artworks in the Modern and Contemporary Art Collection. They range from 1437 – 2017, together with a number that are undated, most 'Object Begin Date' entries fall after 1850. The ‘Artist Display Name’ column was used to identify artists by gender. Gender categories:        
       -    female; male; couple/collaborative with both genders; unknown; and artist name but not yet identified.


###### Using total numbers, wrapped bar visualization, 1 pixel represents 2 artworks: [Gender at The Met](https://churc.github.io/MajorStudio1/MetProjects/gender)
###### Using total numbers, vertical bar visualization: [Another View of All Artworks by Gender](https://churc.github.io/MajorStudio1/MetProjects/gender#c2)
###### For a timeline, visualization years 1850-2017 (14,284 artworks):  [What Year Were These Artworks Made](https://churc.github.io/MajorStudio1/MetProjects/gender/#c3) Note that there was a spike in the number of artworks in 1900: hundreds of artworks have Object Begin Date (and Object End Date) recorded as 1900, most of these are manufactoring companies noted as 'unknown designer' in the csv.





![by Year](MetProjects/gender/assets/image_timeline.png)









### Qualitative Project


#####   [Where uncertainty falls, the incidence of the word "uncertain" in The Met's collection](https://churc.github.io/MajorStudio1/MetProjectsQual/uncertainty)


###### The aim of this qualitative project is to look at artworks in The Met in relation to the contextual words surrounding them, displaying groupings of artworks connected by a particular search word, using this approach as another way of entering the collection. Are the images related and do they convey the meaning of the word? Where do the references appear and what similarities or variations can be seen in these references between different objects? 
###### The starting point is a research project on uncertainty in visual art I have been a part of. This qualitative project thus uses the search word 'uncertain' where that word appears in any part of the textural material surrounding an art object. The visualization focuses on the relation of text and image, and aggregating specific groups of artworks. Part of the concept is to include a degree of hiding / uncertainty in the interface. 

###### The display is by artworks across the whole of The Met. A json file was made from the artworks returned by two searches on The Met Collection for objects that are in the public domain and that have artwork images. One search was "uncertain," the other was "uncertainty." This resulted in a file containing 425 artworks (March 2018.)
###### 11 titles have uncertain/ty in them, none of those are titles given by the artist. Titles and dates are hidden and can be seen on hover. 198 artworks have uncertain/ty in their web label descriptions. Since these descriptions are not meant to be used elsewhere, each artwork is linked to its website image to access the web label. In the visualization, the word uncertain/ty is depicted where it occurs within the web label text.
###### Artworks can be selected by various time periods, and by some material types: paintings, sculpture, textiles, clay, stone, glass, ink, paper - selecting any of these takes you to The Met Collection. Clicking on uncertainty in the header makes the title and date text visible. 





![where uncertainty falls](MetProjectsQual/uncertainty/assets/qual_uncertain.png)
