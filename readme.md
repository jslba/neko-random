# [Random][index] implement of [neko.Random][nekoRandom]

![npm](https://img.shields.io/npm/v/neko-random?color=blue&style=flat)
![tests](https://img.shields.io/static/v1?label=tests&message=6%20passed&color=brightgreen&style=flat)
![GitHub](https://img.shields.io/github/license/jslba/neko-random?style=flat)

This is one of  the most used PRNG  algorithms by Motion-Twin.  The algorithm is
based  upon [Mersenne Twister, TT800][PRNG]  a 623-dimensionally equidistributed
uniform  PRNG  co-authored  by  松本眞  (Makoto Matsumoto)  and  西村拓士  (Takuji
Nishimura)  in  1994,  1996  ;  reimplemented and  optimized  for  JavaScript by
Angelisium in 2023.

It's  100% compatible  with the  [original C implementation][originalC]  and the
[customized neko implementation][customizedNeko].

> **Note**   
> If you are looking  for how to  use it, you  can look at some  examples in the
> [unit tests][unittests].

## Constructor

```hx
new MT_TT800(?seed: Int = 0)
```

## Methods

```hx
// returns a neko random [0-max] integer
public nekoInteger(max: Int): Int
```

```hx
// return a neko random [0-1] float
public nekoFloat(): Float
```

```hx
// return a MT TT800 [0x0-0xffffffff] integer
public integer(): Int
```

```hx
// return a MT TT800 [0-1] float
public float(): Float
```

[index]: /source/index.js
[nekoRandom]: https://api.haxe.org/neko/Random.html
[unittests]: /test/mt_tt800.test.js
[PRNG]: http://www.math.sci.hiroshima-u.ac.jp/m-mat/MT/ARTICLES/mt.pdf
[originalC]: https://web.archive.org/web/20130612121948/http://random.mat.sbg.ac.at/publics/ftp/pub/data/tt800.c
[customizedNeko]: https://github.com/HaxeFoundation/neko/blob/master/libs/std/random.c
