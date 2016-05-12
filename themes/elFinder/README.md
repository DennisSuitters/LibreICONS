### Bootstrap and LibreICONS theme for elFinder

This is a simple Theme for elFinder that changes only the Styling and Icons, the theme doesn't interfere with elFinder's Functionality.

![LibreICONS-elFinder-Theme](https://raw.githubusercontent.com/StudioJunkyard/LibreICONS/master/themes/elFinder/elfinder-bootstrap-theme.png)

To add, simply copy the `theme-bootstrap-libreicons-svg.css` to elFinder's css folder, and copy the SVG Icons to elFinder's `img` folder.

Then include the css file after elFinder's css include. This theme simply override's elFinder's classes to look more like Bootstrap.

If you would like custom folder type icons add the below option when initialising elFinder:
````
uiOptions:{
    cwd:{
        getClass:function(file){
            if(file.name.match(/archive/i)){
                return'archive-folder';
            }else if(file.name.match(/attachment/i)){
                return'attachments-folder';
            }else if(file.name.match(/avatar|user|users/i)){
                return'users-folder';
            }else if(file.name.match(/backup/i)){
                return'backup-folder';
            }else if(file.name.match(/carousel|featured/i)){
                return'featured-folder';
            }else if(file.name.match(/order/i)){
                return'orders-folder';
            }else if(file.name.match(/photo|picture|image/i)){
                return'picture-folder';
            }else if(file.name.match(/doc/i)){
                return'document-folder';
            }else if(file.name.match(/vid|mov/i)){
                return'video-folder';
            }else{
                return'';
            }
        }
    }
````
