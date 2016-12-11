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
colors via clrs.cc<br><br>
{% for color in pattern.colors %}
{{ color[0] }}: {{ color[1] }} <br>
{% endfor %}
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
