---
title:  "gARden"
date:   2018-02-10 12:00:00 -0500
brief: "An augmented reality gardening app for mobile devices!"
logo: "../assets/garden_logo.png"
icon: "../assets/garden_icon.png"
thumbnail: "/assets/garden_logo.png"
gallery_tag: "garden"
platforms: 
    - iOS 
    - Android
modes: 
    - Single-player
inputs:
    - Touchscreen
---

An augmented reality gardening app for mobile devices!
<!--more-->
## Summary

Using printable real-world markers, you can decorate your desk, office or home with digital plants, which require even less maintenance than real ones! The plants are persistently stored, and grow in real time, so you can watch them blossom as the days go by. 

Check out our cool pitch video for more details!

<iframe width="100%" height="560" src="https://www.youtube.com/embed/r6fwPkCOyX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
Development for gARden started mid-January as part of a hackathon project at WPI. We loved the idea so much that we devided to keep working on it, even after the event. Most recently, gARden was [the category winner for "Indie" at the Mass DiGI Game Challenge in 2018][massdigi].

## Features

<ul>
    <li>Marker-based AR that allows you decorate your physical space with digital plants!</li>
    <li>Plants grow slowly in real time. Check in whenever to see how they're doing!</li>
    <li>Prune and sclupt your plants however you wish! Each one will grow back in a unique way!</li>
    <li>Share photos of your plants on social media with the built-in camera!</li>
</ul>

## Additional Credits
All the audio for gARden is the work  longtime collaborator Matt Martin.
<div class="contact">
{% assign matt = site.contacts | where: "name", Matt Martin" | first %}
{{ matt }}
</div>

Some of the 3D art assets for gARden are the wonderful work of our friend Chelsea Saunders.
<div class="contact">
{% assign pcrown = site.contacts | where: "name", "Chelsea Saunders" | first %}
{{ pcrown }}
</div>

[massdigi]: ../articles/2018-03-03-mass-digi
