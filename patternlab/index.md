---
layout: c4wd
title: pattern lab
---

# CODE4WD {{ page.title }}

[to index]({{ site.baseurl }}/)

## Atoms


{% for pattern in site.patterns %}

<!-- TODO **********************************************
- capture color entry and remove from patterns array
- render colors
- render rest of array as pattern entries
**************************************************** -->


<div class="c4wd-patternlab-entry debug">

<h4>{{ pattern.url | remove:'/patterns/' | remove:'/' }}</h4>

{% if pattern.colors %}
<p><b>colors via clrs.cc:</b></p>

{% for color in pattern.colors %}

<div class="c4wd-ptl-colorswatch" >
  <div class="c4wd-ptl-colorswatch-color-field" style="background-color: {{ color[1] }};">
  </div>
  <div class="c4wd-ptl-colorswatch-label">
    <span>{{ color[0] }}</span><br>
    <span>{{ color[1] }}</span>
  </div>
</div>

{% endfor %}


{% endif %}


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
