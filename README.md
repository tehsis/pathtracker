[Path tracker](http://tehsis.com.ar/map-test)
=

Description
-

Usage example of a Mapbox application.
It will follow your path while moving and displays it on a Mapbox map.

Build Instructions
-

This example relies on browserify to handle dependencies:

```bash
$npm install -g browserify
```

Install the dependencies (eg. mapbox):

```bash
$npm install
```

Browserify the main script:

```bash
$browserify main.js -o bundle.js 
```

Serve the app:

```bash
python -m SimpleHTTPServer
```


