---
layout: default
---


---

# talks




{% for talk in site.talks %}

<div id="{{ talk.talk_id }}" class="c4wd-talks-entry"> </div> <!-- c4wd-talks-entry -->


## {{ talk.title }}

- <a href="{{ '/speakers#' | append: talk.speaker_id | prepend: site.baseurl }}" class="c4wd-xxxx">by {{ talk.speaker }}</a>
- image
- abstract
- slides
- video


  - bio, links

<a href="{{ '/schedule#' | append: talk.talk_id | prepend: site.baseurl }}" class="c4wd-xxxx">locate this talk on the schedule...</a>








{% endfor %}






---