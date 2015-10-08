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

join("http://test.com/a", "b", "/c", "?d=1", "/#e");
//-> "http://test.com/a/b/c?d=1#e"
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
