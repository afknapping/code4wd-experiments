---
layout: default
title: pattern lab
---


# CODE4WD {{ page.title }}

[to index]({{ site.baseurl }}/)

### Colors: ["Rebel Yell" palette on colourlovers](http://www.colourlovers.com/palette/44764/Rebel_Yell)

<span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span> <span class="c4wd-ptl-newcolorswatch"></span>

## Atoms


{% for pattern in site.patterns %}

<!-- TODO **********************************************
- capture color entry and remove from patterns array
- render colors
- render rest of array as pattern entries
**************************************************** -->


<div class="c4wd-patternlab-entry debug">

<h4>{{ pattern.url | remove:'/patterns/' | remove:'/' }}</h4>

{% if pattern.desc %}
<p>{{ pattern.desc | markdownify }}</p>
{% endif %}

{% capture name %}{{ pattern.url | remove:'/patterns/' | remove:'/' }}{% endcapture %}

{{ pattern }}

{% if name != "markdown" %}
<code><pre>
{{ pattern | xml_escape }}
</pre></code>
</div><!-- c4wd-patternlab-entry -->
{% endif %}




{% endfor %}


<script src="{{ 'EQCSS.min.js' | prepend:'/node_modules/eqcss/' | prepend: site.baseurl }}"></script>