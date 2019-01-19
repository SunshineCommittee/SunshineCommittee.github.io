---
title: "gARden Turns 1!"
date: "2019-01-19"
author: "Tom Farro"
brief: "Today marks 1 year of extremely part-time development for gARden!"
thumbnail: "/assets/birthday_1.jpg"
---

![happy](../assets/birthday_1.jpg)

Today marks 1 year of extremely part-time development for [gARden][garden]! While it's definitely hard to maintain a steady trend of progress in addition to our full-time jobs, we wanted to share some info about where we are now, compared to then

<!--more-->

## 1 Year Ago

As a recap, here's the original tweet and video I made to initially share the project with the world:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">pleased to debut <a href="https://twitter.com/hashtag/gARden?src=hash&amp;ref_src=twsrc%5Etfw">#gARden</a>, an Augmented Reality houseplant app for mobile platforms, from myself and <a href="https://twitter.com/chiffles_?ref_src=twsrc%5Etfw">@chiffles_</a>!~<br> <br>📲🌿🌺<a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://twitter.com/hashtag/indiedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiedev</a> <a href="https://twitter.com/hashtag/AugmentedReality?src=hash&amp;ref_src=twsrc%5Etfw">#AugmentedReality</a> <a href="https://twitter.com/hashtag/unity3d?src=hash&amp;ref_src=twsrc%5Etfw">#unity3d</a> <a href="https://t.co/8t9maI7IrU">pic.twitter.com/8t9maI7IrU</a></p>&mdash; Tom Farro (@FomTarro) <a href="https://twitter.com/FomTarro/status/954408572791742464?ref_src=twsrc%5Etfw">January 19, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

If I'm being honest, I think we laid a lot of excellent groundwork in that original hackathon. We had rudimentary marker tracking set up, and a rough plan for what the UI should be structured like. But we've been working away at some solid improvements.

## Plant Simulation

The biggest thing we've been working on has been plant simulation, which has largely been [Kelly's][contact] domain. 

In the video above, our plant was simply a pre-animated model, which meant that every plant lifecycle would be identical within a species. We felt that such a system didn't really encourage growing multiple plants, so we got very, very in to algorithmic botany. Kelly has previously written about that [here][lsys].

The festive little spider plant in the banner of this article is the product of such a system. Furthermore, generative design patterns allow us to work towards player interactions such as plant pruning and propgation, which works us a little closer towards our [original vision and goal][dad].

This is by and large out biggest focus, and the biggest consumer of our time. Currently we're examining ways to efficiently save and load plants made with tis system, without needing to cycle through all the generation steps since the beginning each time (because that would be [blockchain][blockchain]).

## Performance Enhancements 

Mid way through development, Unity released the Job System, which is like an engine-handled threading system. I've been able to use that to squeeze extra performance out of our Computer Vision image processing system, which I've previously described [here][cv].

## Localization

We've already built and integrated a pretty robust localization system. While some may say that we're too early in development to worry about such things, I believe that building a system like this early is a good way to keep yourself concious of just how text-heavy your game is. Ultimately, text can be a limter of accessibility, so I think it's good to be mindful of that. So far, [gARden][garden] already has 96 lines of text between menu prompts and plant names!


[garden]: ../games/garden
[contact]: ../about/
[lsys]: ../articles/2018-08-30-procedural-plants
[dad]: ../articles/2018-06-17-fathers-day
[cv]: ../articles/2018-06-28-computer-vision
[blockchain]: https://twitter.com/FomTarro/status/1048948071248396290