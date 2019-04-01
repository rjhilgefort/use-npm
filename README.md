#use-npm 
> Force users to use `npm` instead of `yarn`.

If run from `yarn` instead of `npm`, the process will exit with error code `1`
and print an [error message](https://raw.github.com/rjhilgefort/use-npm/blob/master/message.txt).

Note: this will not work if used with `yarn add --dev --ignore-scripts`.

## Install

```shell
npm install --save-dev use-npm
# or
yarn add --dev use-npm
```

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "use-npm || ( npm install --save-dev --no-scripts --no-save use-npm && use-npm )"
  }
}
```

Or if you're on `npm >=5` or have [`npx`](https://www.npmjs.com/package/npx):
```json
{
  "scripts": {
     "preinstall": "npx use-npm"
  }
}
```

You may provide a custom message via the `-m` flag:
```
{
  "scripts": {
     "preinstall": "npx use-npm -m 'Please use npm!'"
  }
}
```

Or, you may also provide a custom message read from a file via the `-f` flag:
```
{
  "scripts": {
     "preinstall": "npx use-npm -f path/to/customMessage.txt"
  }
}
```

You may disable use-npm by setting the `DISABLE_USE_NPM` environment variable to `true`:
```
{
  "scripts": {
     "preinstall": "DISABLE_USE_NPM=true npx use-npm"
  }
}
```

### API

```js
var useNpm = require('use-npm')

useNpm()

// or a custom message
useNpm('You idiot!')
```
