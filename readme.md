# log-gulp-sigh
Intercepts gulp-log messages and output it in sigh style.

INSTALL
-------
```sh
npm install --save-dev log-gulp-sigh
```

USAGE
-----
Put in your sigh.js file:
```js
require("log-gulp-sigh")();
```
Now, your log messages from gulp plugins will be transformed from this:
![](https://i.gyazo.com/2cf81616435c045152c7100e66e369e3.png)

to this:

![](https://i.gyazo.com/74250fc3dc1a2cfe87996e6d7dc9dad7.png)
