<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-generating function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Raised cosine][cosine-distribution] distribution [moment-generating function][mgf].

<section class="intro">

The [moment-generating function][mgf] for a [raised cosine][cosine-distribution] random variable is

<!-- <equation class="equation" label="eq:cosine_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{ \pi^{2} \sinh(st) }{ st(\pi^{2}+s^{2}t^{2}) } \,e^{\mu t}" alt="Moment-generating function for a raised cosine distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{ \pi^{2} \sinh(st) }{ st(\pi^{2}+s^{2}t^{2}) } \,e^{\mu t}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{ \pi^{2} \sinh(st) }{ st(\pi^{2}+s^{2}t^{2}) } \,e^{\mu t}" data-equation="eq:cosine_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cosine/mgf/docs/img/equation_cosine_mgf.svg" alt="Moment-generating function for a raised cosine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mgf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mgf@deno/mod.js';
```

#### mgf( t, mu, s )

Evaluates the [moment-generating function][mgf] (MGF) for a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = mgf( 2.0, 0.0, 3.0 );
// returns ~7.234

y = mgf( 0.5, 0.0, 1.0 );
// returns ~1.016

y = mgf( -1.0, 4.0, 2.0 );
// returns ~0.024
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 0.0 );
// returns NaN
```

#### mgf.factory( mu, s )

Returns a function for evaluating the [moment-generating function][mgf] of a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mymgf = mgf.factory( 10.0, 2.0 );

var y = mymgf( 0.1 );
// returns ~2.725
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mgf@deno/mod.js';

var mu;
var s;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 10.0;
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = mgf( t, mu, s );
    console.log( 't: %d, µ: %d, s: %d, M_X(t;µ,s): %d', t.toFixed( 4 ), mu.toFixed( 4 ), s.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cosine-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cosine-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cosine-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cosine-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cosine-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cosine-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cosine-mgf/main/LICENSE

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
