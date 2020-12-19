# x-script
Experimental export scripting
--

* * * 

# Usage

## Serving files from GitHub

```html
<script src="https://cdn.jsdelivr.net/gh/mitchallen/x-script/dist/x-factory.js"></script>
```

## Serving Min Version from GitHub

```html
<script src="https://cdn.jsdelivr.net/gh/mitchallen/x-script/dist/x-factory.min.js"></script>
```

## Tag and Release

```
 npm version patch -m "Upgrade to %s for reasons"
```


### Reference by tag / version number

**index.html**

```html
<html>
  <head>
    <title>x-script test</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js"></script>
   </head>
  <body>
    <script type="module" src="./test-app.js"></script>
  </body>
</html>
```

**test-app.js**

```js
import {
  YO_FACTORY,
  HELLO_FACTORY,
  ToolsFactory,
  ExpressionFactory,
  MitchAllen,
} from 'https://cdn.jsdelivr.net/gh/mitchallen/x-script@0.1.4/dist/x-factory.modern.min.js'

const world = new THREE.Group();
world.name = 'demo';

YO_FACTORY.yo();

HELLO_FACTORY.hello('Yo World!');

ToolsFactory.hello();

ExpressionFactory.hello();

MitchAllen.NamespaceFactory.hello();
```

* * * 

# References

* https://www.jsdelivr.com/