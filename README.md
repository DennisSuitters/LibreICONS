Born out of frustration of other Icon Sets not containing Icons needed when developing LibreCMS, we created LibreICONS to fill the gap that we needed, and ended up consolidating all the Icons we were using into one set.

What sets LibreICONS apart from the rest, are the little things.
- The Icons are sized to 12px x 12px inside a 14px x 14px viewBox.
- Each Icon contains ARIA Markup to hide icons from Screen Readers to stop confusion between the Icons and any Presentational Elements that may contain them.
- The source of the Icons are all minified.
- Being minified, also makes embedding cleaner, as we found including Icons using PHP or Javascript to embed icons can break the page layout.
- The standard and original icon set contains no colour or sizing so they can be controlled via CSS or manipulated easily.

Using the Icons:
After downloading the project, copy the libreicons-svg.css or libreicons-svg.min.css file from the project css/ folder, and the svg/ folder directory into your project.
In the <head> of your html, reference the location to your libreicons-svg.css.
<link rel="stylesheet" href="path/to/libreicons/css/libreicons-svg.css">
To use the icons in your pages you use
<i class="libre">[svg file to include]</i>
Or you could do like we do with LibreCMS and use a PHP Function to inject the SVG File directly into your generated pages. This also allows you to have more control over the size, colour, and animation of your icons.

![LibreICONS](svg-icons.png)
