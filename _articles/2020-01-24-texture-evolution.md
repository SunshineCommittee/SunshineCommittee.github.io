---
title: "Texture Evolution"
date: "2020-01-24"
author: "Tom Farro"
brief: "A step-by-step walkthrough of the evolution of our art pipeline."
thumbnail: "/assets/texture-evolution/swatches.png"
---
 
![swatches](../assets/texture-evolution/swatches.png)
 
What have we been up to in the final quarter of the year? Quite a bit, actually!
 
<!--more-->
 
## What We've Done
 
All the way back in September, we shared a table at [Boston Festival of Indie Games][bfig] with out friends at Surreality. This proved to be a really invaluable experience
 
 
### Meet Darcy!
 
One of our goals was to make the app as a whole a little less opaque to new users. To that end, we decided that having a mascot/mentor character would be good. So, back in the Spring, we (Kelly) started drawing concepts for the palm tree that would become Darcy, the keeper of the nursery. You may have seen them if you stopped by our BFIG table, as they were on our banner!
 
<div>
 <h3 id="gallery">Darcy</h3>
 {% assign gallery = site.galleries | where: "gallery_tag", "2019-wrap-up-2" | first %}
 {{ gallery }}
</div>
 
My personal goal for Darcy is to write them as a bit of a high-strung nerd. Which, hopefully, should be easy, because that's what I am.
 
I'm not sure if we want to have other characters in addition to Darcy; we have a few concepts, but gARden isn't exactly the type of game that necessitates a large cast, so we'll see.
 
### More Intuitive UI
 
The singular complaint we heard again and again at BFIG was that the UI we built for interacting with the plant once you potted it was unclear. Our original approach was to try and lean in to the AR aspect and make the UI itself a 3D object that felt like it existed in world-space.
 
To that end, we made little bubbles containing tools. The idea was that you'd tap and hold the bubble until it popped, and then use the tool following in-game instructions. However, we made several big oversights with this approach:
 
<ul>
   <li>The bubbles bobbed and orbited the plant, which made them somewhat difficult to get a finger on.</li>
   <li>Because they were 3D, the bubbles could sometimes be obscured by the plant itself.</li>
   <li>Knowing to tap and hold the buttons until they popped was not intuitive.</li>
   <li>Knowing what gesture to do after presented with the tool in the bubble was not intuitive.</li>
</ul>
 
So, we took another crack at it.
 
On the left, we have the old style of UI, featuring the 3D bubbles that orbited the plant. On the right, we have the new style of UI, which substitutes the bubbles for more traditional buttons that remain stationary relative to the plant, with tails pointing to it.
 
<div>
 <h3 id="gallery">UI Styles</h3>
 {% assign gallery = site.galleries | where: "gallery_tag", "2019-wrap-up-1" | first %}
 {{ gallery }}
</div>
 
These new UI elements also look quite good in motion, if I do say so myself.
 
<div class="video-container">
<iframe width="853" height="480" src="https://www.youtube.com/embed/4ahqIZz7spc" frameborder="0" allowfullscreen>
</iframe>
</div>
 
### More Plant Variance
 
I will probably do a more in-depth post on this in the future, but we've also rebuilt the way plants get textured, which allowed us and our artist to pretty easily make new color schemes for plants within a species. You might have noticed the two jade plants in the above section were different patterns colors; that's a result of this system.
 
Another neat thing we were able to do was implement a diegetic way of representing plant thirst; they now discolor to varying degrees depending on how much they need water.
 
On the left, we have the plant builder menu presenting the user with new color and pattern combinations each time they select the jade species. On the right, we have the aforementioned thirst indicator. Notice how the plant gets more yellow as the water level drains!
 
<div>
 <h3 id="gallery">Variable Colors</h3>
 {% assign gallery = site.galleries | where: "gallery_tag", "2019-wrap-up-3" | first %}
 {{ gallery }}
</div>
 
## What We're Doing
 
At BFIG, we got a fair amount of interest from visitors signing up for a closed alpha. We initially said we'd like to have that ready for you all by the end of the year. Unfortunately, as you can tell, we missed that window. However, we definitely still will be rolling out an alpha in the near future. If you have any questions or concerns about that, or want to sign up, drop us an email at <a target="_blank" href="mailto:devs@sunshinecommittee.io">devs@sunshinecommittee.io</a>. Thanks once again to you all for both your interest and your patience.
 
### New Plants
 
Currently, our artist Megan is working on a Begonia to add to the list of available plants at launch. This is the first plant we've worked on following the aforementioned refactor of the plant texture, and we're leveraging that as much as we can. You can expect to see more about this in a future post about that system specifically.
 
### Art Week!
 
Lastly, we were recently asked to prepare a small installation for [Boston's Art Week][artweek] this coming May. Details are sparse, but you can expect more tweets and blog posts as we get closer to the event. It's still almost half a year away!
 
[artweek]: http://www.artweekma.org/
 
[garden]: ../games/garden
 
[bfig]: https://www.bostonfig.com/
 

