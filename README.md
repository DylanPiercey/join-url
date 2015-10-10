# Join-URL
Like `path.join` for urls.

# Installation

#### Npm
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

* Use gulp to run tests.

Please feel free to create a PR!
