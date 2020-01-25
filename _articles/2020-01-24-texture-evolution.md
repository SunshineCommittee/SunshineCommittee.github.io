---
title: "Texture Evolution"
date: "2020-01-24"
author: "Tom Farro"
brief: "A step-by-step walkthrough of the evolution of our art pipeline."
thumbnail: "/assets/texture-evolution/swatches.png"
---
 
![swatches](../assets/texture-evolution/swatches.png)
 
As alluded to in the last post, here's a step-by-step walkthrough of the evolution of our art pipeline!
 
<!--more-->
 
## Where We Started

Once we [contracted Megan to handle 3D art][contract] for us on her own time and schedule, it became apparent that we needed to set some guidelines about how assets should be constructed, so that she could work on them without needing constant feedback from us. To that end, we set out to create an internal "Art Bible".

<div class="contact">
{% assign megorn = site.contacts | where: "name", "Megan" | first %}
{{ megorn }}
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
 

### Art Week!
 
Lastly, we were recently asked to prepare a small installation for [Boston's Art Week][artweek] this coming May. Details are sparse, but you can expect more tweets and blog posts as we get closer to the event. It's still almost half a year away!
 

[contract]: ../articles/2019-07-27-warm-welcomes

[artweek]: http://www.artweekma.org/
 
[garden]: ../games/garden
 
[bfig]: https://www.bostonfig.com/
 

