# Pepe ascii art library

This module exports an object named `pepe` whose string properties are ASCII art representations of different [Pepe the Frog](https://en.wikipedia.org/wiki/Pepe_the_Frog) emotes.

## Install

```sh
npm install @mulekick/pepe-ascii
```

**IMPORTANT:** This package uses [ESM type modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules).

## Usage
```js
import pepe from "@mulekick/pepe-ascii";

try {

    // log a pepe to console
    console.log(pepe.monkaHmm);

} catch (err) {
    console.error(err.message);
}
```

## Notes
- All the Pepes presented hereby come from [here](https://www.twitchquotes.com/copypastas/labels/pepe?ascii-art=true).
- *"My Pepe philosophy is simple: 'Feels good man.' It is based on the meaning of the word Pepe: 'To go Pepe'. I find complete joy in physically, emotionally, and spiritually serving Pepe and his friends through comics. Each comic is sacred, and the compassion of my readers transcends any differences, the pain, and fear of 'feeling good'."* - Matt Furie, creator of Pepe 