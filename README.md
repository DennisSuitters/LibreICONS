LibreICONS has been developed to provide SVG Icons for LibreCMS, we then decided to seperate them out and make them available to eveyone.

What sets LibreICONS apart from the rest, are the little things.
- The Icons are sized to 12px x 12px inside a 14px x 14px viewBox.
- Each Icon contains ARIA Markup to hide icons from Screen Readers to stop confusion between the Icons and any Presentational Elements that may contain them, and `role="image"` for presentational purposes.
- The source of the Icons are all minified.
- Being minified, also makes embedding cleaner, as we found including Icons using PHP or Javascript to embed icons can break the page layout.
- The standard and original icon set contains no colour or sizing so they can be controlled via CSS or manipulated easily.

Using the Icons:
After downloading the project, copy the libreicons-svg.css (already minified) file from the project css/ folder, and the svg/ folder directory into your project. You can change where you put either the css or svg files where you like, as long as your file paths are accessible. The CSS only provides styling, it does not reference the SVG files allowing you to access them in any way you like.

In the `<head>` of your html, reference the location to your libreicons-svg.css.
`<link rel="stylesheet" href="path/to/libreicons/css/libreicons-svg.css">`
To use the icons in your pages you use `<i class="libre">[svg file to include]</i>`
You can alternatively use any inline element.

There are also CSS classes for controlling sizing such as:
`libre-2x` `libre-3x` `libre-4x` `libre-5x` for sizing.
`libre-fw` for fixed width.

Also included is popular Social Network styles:
`libre-social` for each icon.
Each Social SVG contains a class in the SVG file, and the CSS contains the colour needed for each Social Network Icon.

Or you could do like we do with LibreCMS and use a PHP Function to inject the SVG File directly into your generated pages.
This also allows you to have more control over the size, colour, and animation of your icons, as the function essentially inlines the icons into the HTML.

````php
function svg($svg,$class=null,$size=null){
	echo'<i class="libre'.($size!=null?' libre-'.$size:'').($class!=null?' '.$class:'').'">'.file_get_contents([Edit this to reflect your svg access folder]$svg.'.svg').'</i>';
}
````

You should edit the `[Edit this to reflect your svg access folder]` to point to where the svg files have been placed.
