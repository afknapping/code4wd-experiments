---
layout: default
---


---

# talks




{% for talk in site.talks %}

<div id="{{ talk.talk_id }}" class="c4wd-talks-entry">



## {{ talk.title }} dfsd

- {{ talk.talk_id }}
- {{ talk.speaker_id }}
- image
- abstract
- slides
- video
- <a href="/speakers#{{ talk.speaker_id }}" class="c4wd-xxxx">{{ talk.speaker }}</a>
  - bio, links
- <a href="/schedule#{{ talk.id }}" class="c4wd-xxxx">see on schedule</a>



</div> <!-- c4wd-talks-entry -->


{% endfor %}






---