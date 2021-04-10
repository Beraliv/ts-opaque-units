# ts-opaque-units

Small TypeScript opaque measurement library

## Install

```bash
yarn add ts-opaque-units typescript@^4.0.0
```

## Opaque types

For now, only time units are available:

- `Milliseconds`
- `Seconds`
- `Minutes`
- `Hours`
- `Days`
- `Weeks`
- `Months`
- `Years`
- `Decades`
- `Centuries`
- `Millenniums`

You are not allowed to assign variables of different types, so you are safe ✅

```ts
let hours = 1 as Hours;
let twoHours = 2 as Hours;
let minutes = 1 as Minutes;
let twoMinutes = 2 as Minutes;

/* Cannot assign different types */

// @ts-expect-error
hours = minutes;
// @ts-expect-error
minutes = hours;

/** Can assign the same types */

// ✅
minutes = twoMinutes;
hours = twoHours;
```

### Convert

To transform one type to another safely, use a function `convert`:

```ts
import { convert, Minutes, Years } from "ts-opaque-units";

const minutesInHour = 60 as Minutes;
const secondsInHour = convert(minutesInHour, "minutes", "seconds");

const year = 1 as Years;
const secondsInYear = convert(year, "years", "seconds");
```
