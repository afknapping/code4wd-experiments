---
layout: c4wd
title: pattern lab
---

# CODE4WD {{ page.title }}


## Atoms

### Markdown elements

Markdown elements do not come with classes, so they need to be styled by an enclosing element, eg `.c4wd-defaults p` or `.c4wd-defaults h3`



<div class="c4wd-defaults" markdown="1">

<!-- markdown="1"? http://stackoverflow.com/a/23384161 -->

# H1 Headline
## H2 Headline
### H3 Headline
#### H4 Headline
##### H5 Headline
###### H6 Headline

---

Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw. Dessert gingerbread dragée sweet roll liquorice fruitcake marzipan donut. I love I love sugar plum marshmallow jujubes. Cotton candy jujubes oat cake chocolate cake chocolate cake marshmallow bear claw chocolate cake. Jelly cupcake gingerbread I love cupcake sesame snaps apple pie oat cake.

---

![a kitten looking down a table's edge](http://placekitten.com/g/300/200)

*Cupcake ipsum dolor. **Sit amet** I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love.*

**Cupcake ipsum dolor. *Sit amet* I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love.**

> Cupcake *ipsum dolor*. **Sit amet** I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love.

`Cupcake ipsum dolor. *Sit amet* I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love.`

    Cupcake ipsum dolor.
    *Sit amet* I love bonbon*
    bear claw tootsie roll jelly.
    * I love chocolate
    ice cream* chupa
    chups I love.

- Cupcake ipsum dolor. Sit amet I love bonbon* bears
- Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw.
- Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw. Dessert gingerbread dragée sweet roll liquorice fruitcake marzipan donut. I love I love sugar plum marshmallow jujubes. Cotton candy jujubes oat cake chocolate cake chocolate cake marshmallow bear claw chocolate cake. Jelly cupcake gingerbread I love cupcake sesame snaps apple pie oat cake.

1. Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw.
1. Cupcake ipsum dolor. Sit amet I love bonbon* bears
1. Cupcake ipsum dolor. Sit amet I love bonbon* bears


Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi

</div><!-- c4wd-defaults -->


### Non-Markdown elements



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
<p>{{ pattern.desc }}</p>
{% endif %}

{{ pattern }}
<code><pre>
{{ pattern | xml_escape }}
</pre></code>
</div><!-- c4wd-patternlab-entry -->





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
