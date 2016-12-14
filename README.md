<h1 align="center">
  <!-- Logo -->
  Join-URL
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/join-url">
    <img src="https://img.shields.io/npm/v/join-url.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/join-url">
    <img src="https://img.shields.io/npm/dm/join-url.svg?style=flat-square" alt="Downloads"/>
  </a>
</h1>

Like `path.join` for urls.

# Installation

```console
npm install join-url
```

# Example

```javascript
var join = require('join-url');

join.pathname("/admin/", "dashboard/", "/messages", "new");
//-> "/admin/dashboard/messages/new"

join.hostname(".sub.", "domain.", ".co", "uk");
//-> "sub.domain.co.uk"

join.query("&a=1&", "b=2&", "&c=3", "d=4");
//-> "a=1&b=2&c=3&d=4"
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
