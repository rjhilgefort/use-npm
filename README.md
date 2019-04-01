# force-npm 
> Force users to use `npm` instead of `yarn`.

If run from `yarn` instead of `npm`, the process will exit with error code `1`
and print an [error message](https://raw.github.com/rjhilgefort/force-npm/blob/master/message.txt).

Note: this will not work if used with `yarn add --dev --ignore-scripts`.
Note: This is fork of [`use-yarn`](https://github.com/AndersDJohnson/use-yarn)

## Install

```shell
npm install --save-dev force-npm 
# or
yarn add --dev force-npm 
```

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "force-npm || ( npm install --save-dev --no-scripts --no-save force-npm && force-npm )"
  }
}
```

Or if you're on `npm >=5` or have [`npx`](https://www.npmjs.com/package/npx):
```json
{
  "scripts": {
     "preinstall": "npx force-npm"
  }
}
```

You may provide a custom message via the `-m` flag:
```
{
  "scripts": {
     "preinstall": "npx force-npm -m 'Please use npm!'"
  }
}
```

Or, you may also provide a custom message read from a file via the `-f` flag:
```
{
  "scripts": {
     "preinstall": "npx force-npm -f path/to/customMessage.txt"
  }
}
```

You may disable force-npm by setting the `DISABLE_FORCE_NPM` environment variable to `true`:
```
{
  "scripts": {
     "preinstall": "DISABLE_FORCE_NPM=true npx force-npm"
  }
}
```

### API

```js
var forceNpm = require('force-npm')

forceNpm()

// or a custom message
forceNpm('You idiot!')
```
