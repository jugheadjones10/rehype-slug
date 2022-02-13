This package is a fork of [this](https://github.com/rehypejs/rehype-slug) project. It proudly boasts to be ESM only, but because I
need to use this with a CommonJS project, I decided to add CommonJS support.

The only difference with the original project is that there's an extra step in the npm build command where I bundle ESM code into
CommonJS. Then in package.json I export both the CommonJS and ESM version using
[exports](https://nodejs.org/api/packages.html#conditional-exports).
