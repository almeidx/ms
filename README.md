> [!CAUTION]
> Deprecated. Use [parse-duration](<https://www.npmjs.com/package/parse-duration>) for parsing and [pretty-ms](<https://www.npmjs.com/package/pretty-ms>) for pretty-printing instead.

# @almeidx/ms

Use this package to easily convert various time formats to milliseconds.

## Install
```
yarn add @almeidx/ms
```
or
```
npm i @almeidx/ms
```

## Usage
```ts
ms(val: string, long?: boolean, exact?: boolean): number;
ms(val: number, long?: boolean, exact?: boolean): string;
```

## Examples

```js
import ms from '@almeidx/ms'
// or
const { ms } = require('@almeidx/ms')

ms('1y1mo1w1d1h1m1s')   // 34881442000
ms('1y')                // 31557600000
ms('1mo')               // 2629737000
ms('1w')                // 604800000
ms('2 days')            // 172800000
ms('1d')                // 86400000
ms('10h')               // 36000000
ms('2.5 hrs')           // 9000000
ms('2h')                // 7200000
ms('1m')                // 60000
ms('5s')                // 5000
ms('100')               // 100
ms('-200')              // -200
ms('-1h')               // -3600000
ms('-3 days')           // -259200000
```

### Convert from Milliseconds

```js
ms(60000)             // "1m"
ms(2 * 60000)         // "2m"
ms(-3 * 60000)        // "-3m"
ms(ms('10 hours'))    // "10h"
```

### Time Format Written-Out

```js
ms(60000, true)             // "1 minute"
ms(2 * 60000, true)         // "2 minutes"
ms(-3 * 60000, true)        // "-3 minutes"
ms(ms('10 hours'), true)    // "10 hours"
```

### Exact value enabled (with and without time format written-out)

```js

ms(2400, false, true)                // "2.4s"
ms(2400, true, true)                 // "2.4 seconds"
ms(1900, false, true)                // "1.9s"
ms(1900, true, true)                 // "1.9 seconds"
ms(2000 + 1000 * 4/3, false, true)   // "3.333333333333333s"
ms(2000 + 1000 * 4/3, true, true)    // "3.333333333333333 seconds"
ms(ms('10.5 hours'), false, true)    // "10.5h"
ms(ms('10.5 hours'), true, true)     // "10.5 hours"
```
