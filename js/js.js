String.prototype.escapeSelector = function()
{
  return this.replace(/(.|#)([ #;&,.+*~\':"!^$\[\]\(\)=>|\/])/g, '$1' + '\\\\$2');
}

String.prototype.toInt = function()
{
  return parseInt(this);
}

/* {{{ Hash Scroll */
var jHtmlBody = $('html, body');
function scroll(target, interval)
{
  if (typeof interval == 'undefined') {
    interval = 400;
  }

  var hash = target;
  target = $('[id="' + target.substring(1) + '"]');
  
  var offsetTop = 
    target.offset().top 
    - 52
    - target.css('margin-top').toInt()
  ;

  jHtmlBody.animate(
    {scrollTop: offsetTop}, 
    interval,
    function()
    {
      if (window.location.hash != hash)
      {
        window.location.hash = hash;
        window.scrollTo(0, offsetTop);
      }
    }
  );

  return false;
}
/* }}} */

/** {{{
* jQuery.ScrollTo - Easy element scrolling using jQuery.
* Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
* Dual licensed under MIT and GPL.
* @author Ariel Flesler
* @version 1.4.6
*/
(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
Mousetrap.bind("?",function(){$("#trick").slideToggle()});
Mousetrap.bind("e g g s",function(){$("#eggs").slideToggle()});
Mousetrap.bind("esc",function(){$("#trick").slideUp();$("#eggs").slideUp();$("#goto").slideUp();$("html").off("keydown");$("html").off("keypress")});
Mousetrap.bind("G",function(){var n = $(document).height();$.scrollTo(n,10)});
Mousetrap.bind("g h",function(){window.location.href = "/"});
Mousetrap.bind("g g",function(){$.scrollTo(0,10)});
Mousetrap.bind("g p",function(){var link=$("link[rel=prev]").attr("href");if(link){window.location.href=link}});
Mousetrap.bind("g n", function() {var link=$("link[rel=next]").attr("href");if(link){window.location.href=link}});
Mousetrap.bind("s t o n e d",function(){
    $("body *").css({"background-color":"#0B610B","color":"#2EFE2E","border-color":"#04B404"});
    $("html").delay(1500).queue(function(){
        $(this).addClass("animated hinge");
        $(this).dequeue();
        $(this).delay(2500).queue(function(){
            $(this).removeClass("animated");
            $(this).addClass("lightSpeedIn");
            $(this).dequeue();
        })
    })
//    $("html").addClass("animated hinge").delay(2000).queue(function(){$(this).removeClass("animated hinge");$(this).dequeue()});
});
Mousetrap.bind("b o r k", function() {
    var bork = function(text) {
        var subs = [[/a([nu])/g, 'u$1'], [/A([nu])/g, 'U$1'], [/a\B/g, 'e'], [/A\B/g, 'E'], [/en\b/g, 'ee'], [/\Bew/g, 'oo'], [/\Be\b/g, 'e-a'], [/\be/g, 'i'], [/\bE/g, 'I'], [/\Bf/g, 'ff'], [/\Bir/g, 'ur'], [/(\w*?)i(\w*?)$/g, '$1ee$2'], [/\bow/g, 'oo'], [/\bo/g, 'oo'], [/\bO/g, 'Oo'], [/the/g, 'zee'], [/The/g, 'Zee'], [/th\b/g, 't'], [/\Btion/g, 'shun'], [/\Bu/g, 'oo'], [/\BU/g, 'Oo'], [/v/g, 'f'], [/V/g, 'F'], [/w/g, 'w'], [/W/g, 'W'], [/([a-z])[.]/g, '$1. Bork Bork Bork!']];
        for (var i = 0; i < subs.length; i++) {
            text = text.replace(subs[i][0], subs[i][1]);
        }
        return text;
    };
    $('*:not(iframe)').contents().filter(function() {
            return this.nodeType === 3 && /[^\t\n\r ]/.test(this.textContent);
        }).each(function(_, el) {
            el.textContent = bork(el.textContent);
        });
    Mousetrap.unbind("b o r k");
});
var FIXED_HEADER_HEIGHT = 50;
function cycle(to, from) {
    from.removeClass("current");
    to.addClass("current");
    $.scrollTo(to.offset().top-FIXED_HEADER_HEIGHT);
}
function getNextOrPreviousSibling(node, forward) {
    if (forward) {
        return node.next();
    }
    return node.prev();
}
function cycleMenuItems(current, forward) {
    if (getNextOrPreviousSibling(current, forward).length) {
        cycle(getNextOrPreviousSibling(current, forward), current);
        curr.children("a").first().focus().css({outline: "none"});
    }
}
function cycleHeaders(matches, forward) {
    var gotmatch = 0;
    matches.each(function(k, item) {
        if ($(item).hasClass("current")) {
            if ($(matches[forward ? k+1 : k-1]).length) {
                cycle($(matches[forward ? k+1 : k-1]), $(item));
                gotmatch = 1;
                return false;
            }
        }
    });
    if (!gotmatch) {
        cycle($(matches[forward ? 0 : matches.length-1]), $(matches[forward ? matches.length-1 : 0]));
    }
}
Mousetrap.bind("j", function() {
    var matches = $(".container h1, .container h2, .container h3");
    cycleHeaders(matches, 1);
});
Mousetrap.bind("k", function() {
    var matches = $(".container h1, .container h2, .container h3");
    cycleHeaders(matches, 0);
});
$.expr[":"].icontains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
if (!('contains' in String.prototype)) {
    String.prototype.contains = function(str, startIndex) {
        return -1 !== String.prototype.indexOf.call(this, str, startIndex);
    };
}
var rotate = 0;
Mousetrap.bind("r o t a t e enter", function(e) {
    rotate += 90;
    if (rotate > 360) {
        rotate = 0;
    }
    $("html").css("-webkit-transform", "rotate(" + rotate + "deg)");
    $("html").css("-moz-transform", "rotate(" + rotate + "deg)");
    $("html").css("-o-transform", "rotate(" + rotate + "deg)");
    $("html").css("-ms-transform", "rotate(" + rotate + "deg)");
    $("html").css("transform", "rotate(" + rotate + "deg)");
});
var scale = 1;
Mousetrap.bind("m i r r o r enter", function(e) {
    scale *= -1;
    $("html").css("-webkit-transform", "scaleX(" + scale + ")");
    $("html").css("-moz-transform", "scaleX(" + scale + ")");
    $("html").css("-o-transform", "scaleX(" + scale + ")");
    $("html").css("-ms-transform", "scaleX(" + scale + ")");
    $("html").css("transform", "scaleX(" + scale + ")");
});
Mousetrap.bind("l o g o enter", function(e) {
    $(".navbar-brand i").attr("class", "libre libre-virus color-danger");
    $("#biglogo").attr("class", "libre libre-virus color-danger libre-large animated-hover");
});

$(window).load(function()
{
  // Fire our scroll, webkit needs onload
  if (window.location.hash)
  {
    scroll(window.location.hash, 0);
  }
});

function fixTimeout() {
    Mousetrap.trigger("m i r r o r enter");
    setTimeout(function() {
        Mousetrap.trigger("m i r r o r enter");
    }, 200);
    setTimeout(function() { fixTimeout(); }, 30000);
}
function fixEdges(rotate) {
    if (rotate > 360) {
        rotate = 0;
        $("html").css("zoom", 1);
        $("html").css("-moz-transform", "scale(1)");
        $("html").css("-webkit-transform", "scale(1)");
        setTimeout(function(){fixEdges(36)}, 30000);
    } else {
        $("html").css("zoom", 0.5);
        $("html").css("-moz-transform", "scale(0.5)");
        $("html").css("-webkit-transform", "scale(0.5)");
        setTimeout(function(){fixEdges(rotate+36)}, 100);
    }
    $("html").css("-webkit-transform", "rotate(" + rotate + "deg)");
    $("html").css("-moz-transform", "rotate(" + rotate + "deg)");
    $("html").css("-o-transform", "rotate(" + rotate + "deg)");
    $("html").css("-ms-transform", "rotate(" + rotate + "deg)");
    $("html").css("transform", "rotate(" + rotate + "deg)");
}
