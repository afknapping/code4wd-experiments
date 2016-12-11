---
desc: Markdown elements (which cover all the most important typo basics) do not come with classes, so they need to be styled by an enclosing element, eg `.c4wd-defaults p` or `.c4wd-defaults h3`
---

<div class="c4wd-markdown" markdown="1">
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


<style type="text/css">




{% capture numberOfWobbles %}30{% endcapture %}

{% for i in (0..numberOfWobbles) %}

{% capture keyframes  %}
// these keyframes are later applied with JS
@keyframes wobbling{{i}} {
  0%, 100% {
    transform: translate(#{random(20) / 100}em, #{random(50) / -100}em) skew(#{random(15) / 10}deg, #{random(15) / -10}deg);
  }
  50% {
    transform: translate(#{random(70) / -100}em, #{random(30) / -100}em) scaleY(#{random(10) / 100 + 1})  skew(#{random(40) / -10}deg, #{random(8) / 10}deg);
  }
}



{% endcapture %}

{{ keyframes | scssify }}

{% endfor %}




  .c4wd-markdown > *, .c4wd-markdown > * > img {
    max-width: 32em;
    animation-duration: 50s;
    animation-name: wobbling;
    animation-iteration-count: infinite;

    background-color: #111;
    color: #FFDC00;
    padding: 1em 2em;
    animation-duration: 50s;
    animation-name: wobbling;
    animation-iteration-count: infinite;
}


.c4wd-markdown > *::after, .c4wd-markdown > * > img::after {
  content: " ";
  border: 3px solid #FFDC00;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation-duration: 50s;
  animation-name: wobbling;
  animation-iteration-count: infinite;
}



</style>

<script type="text/javascript">

  var markdownP = document.querySelectorAll('.c4wd-markdown > *');
  console.log(markdownP);

  markdownP.forEach(function(element, index) {
    console.log(element);
    console.log(index);
    element.style.animationName = "wobbling"+index;
    console.log("wobbling"+index);
  });

// a
// b
// c

</script>
