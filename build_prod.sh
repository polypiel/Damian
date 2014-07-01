#!/bin/bash

# Compile and  minifies CSS
for f in `ls src/css/*.scss`; do
  sass --update $f:${f%.scss}.css --style compressed
done

# Build site
jekyll build

# Minifies JS
# dont work! yui-compressor _build/js/damian.js -o _build/js/damian.js
yui-compressor _build/js/simplespi.js -o _build/js/simplespi.js
# Minifies CSS files
yui-compressor _build/css/animate-custom.css -o _build/css/animate-custom.css
yui-compressor _build/css/normalize.css -o _build/css/normalize.css
