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


<div class="c4wd-patternlab-entry">

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

<style type="text/css">
  .c4wd-ptl-colorswatch {
    display: inline-block;
    width: 13em;
  }
  .c4wd-ptl-colorswatch-color-field {
    width: 8em;
  }
  .c4wd-ptl-colorswatch-color-field, .c4wd-ptl-colorswatch-label {
    font-size: 0.62em;
    height: 5em;
    display: inline-block;
  }
</style>


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



<style type="text/css">

.c4wd-button {
  background-color: yellow;
}

.c4wd-button:hover, .c4wd-button:active, .c4wd-button:active {

}


.c4wd-button__text {

}

.c4wd-button__icon {

}


</style>
