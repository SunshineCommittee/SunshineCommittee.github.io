---
title: "Contracts and Contests"
date: "2018-02-28"
author: "Tom Farro"
brief: "It's been a hot minute! We have mixed bag of development updates about projects old and new that we'd like to share with you."
thumbnail: "/assets/pots.png"
---

![pots](../assets/pots.png)

With February coming to an end, it's time for a brief reflection on the month.

<!--more-->

## Contracts

We're thrilled to formally announce a new collaboration partner for [gARden][garden]. Please join us in welcoming Chelsea Saunders, aka PIXELATEDCROWN, aboard!

{% assign pcrown = site.contacts | where: "name", "Chelsea Saunders" | first %}
<div class="contact">
<div>
    <h3>{{ pcrown.name }}</h3>
    <div class="flex-row">
        {% if pcrown.avatar %}
            <div class="col col-sm-12 col-md-3 contact-avatar"><img src= "{{ pcrown.avatar }}"></div>
            <div class="col col-sm-12 col-md-9">
        {% else %}
            {% if pcrown.bio or pcrown.avatar %}
                <div class="col col-sm-12 col-md-12">
            {% else %}
                <div class="col col-sm-12 col-md-12">
            {% endif %}
        {% endif %}
            {% if pcrown.bio %}
                {{ pcrown.bio }}
            {% endif %}
            <div>
                {% if pcrown.twitter %}
                    <div class="contact-info">
                        {% assign twitter_url = 'https://twitter.com/' | append: pcrown.twitter %}
                        <span class="fa fa-twitter fa-lg"></span> <a target="_blank" href="{{ twitter_url }}">@{{ pcrown.twitter }}</a>
                    </div>
                {% endif %}
                {% if pcrown.website %}
                    <div class="contact-info">
                        <span class="fa fa-external-link fa-lg"></span> <a target="_blank" href="{{ pcrown.website }}" >{{ pcrown.website }}</a>
                    </div>
                {% endif %}
                {% if pcrown.email %}
                    <div class="contact-info">
                        <span class="fa fa-envelope fa-lg"></span> <a target="_blank" href="mailto:{{ pcrown.email}}" >{{ pcrown.email }}</a>
                    </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
</div>

Chelsea is a wonderfully talented 3D artist, and as such will be helping us by producing the 3D art for [gARden][garden] as a contractor. So far, she's produced several adorable pots and plants for us, and we're excited to even more in the futue.

![sunset](../assets/pincushion_sliders.gif)


## Contests

Also, this weekend (March 2nd and 3rd), we will be participating in the [Mass DiGI Game Challenge][massdigi] with [gARden][garden]! This year, the contest is being held on Becker College's campus, so If you're in the Worcester area, come on and stop by! We'll have a demo build running, if you want to see some virtual plants for yourself! 


[massdigi]: https://www.massdigi.org/gamechallenge/
[gARden]: ../games/garden