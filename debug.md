---
title: debug
---

{% for speaker in site.speakers %}

{% for talk in site.talks %}

{% if talk.speaker == speaker.name %}

{{ talk.speaker }}

{{ talk }}

{% endif %}

{% endfor %}

{% endfor %}


