---
layout: Post
title: 如何使 a == 1 && a == 2 && a == 3 为 true
# subtitle: A Test Post with a Header Image
date: 2022-04-07
useHeaderImage: true
headerImage: /img/in-post/2022-04-07/cover.jpeg
headerMask: rgba(40, 57, 101, .4)
tags:
  - JavaScript
---

<!-- more -->

## 问题描述

> 在 JavaScript 中，如何使 `(a == 1 && a == 2 && a == 3)` 返回 `true` ？

## 解决方案

### 方案一：使用 getter 存储器

```js
var n = 1

Object.defineProperty(globalThis, 'a', {
  get() {
    return n++
  },
})

a == 1 && a == 2 && a == 3 // true
a === 1 && a === 2 && a === 3 // true
```

::: info

使用 getter 存储器的方式，也就是以全局变量 `n` 存储一个值，每次调用的时候都使 `n = n + 1`。

:::

### 方案二：重写对象的 `valueOf()` 或 `toString()` 方法

```js
const a = {
  value: 1,
  valueOf() {
    return this.value++
  },
}

a == 1 && a == 2 && a == 3 // true
```

```js
const a = {
  value: 1,
  toString() {
    return a.value++
  },
}

a == 1 && a == 2 && a == 3 // true
```

::: info <b> 这里的 <code>valueOf()/toString()</code> 为什么会被调用 ？</b>

原因参考如下：

1. 如果一个是 `null`，一个是 `undefined`，则它们相等。
2. 如果一个是数字，一个是字符串，先将字符串转换成数字，然后使用转换后的值进行比较。
3. 如果其中的一个值为 `true`，则转换成 1 再进行比较；如果其中一个值为 `false`，这转换成 `0` 再进行比较。
4. 如果一个值是对象，另一个值是数字或者字符串，则将对象转换成原始值再进行比较。转换成字符串时，会先调用 `toString()`，如果没有`toString()` 方法或者返回的不是一个原始值，则再调用 `valueOf()`，如果还是不存在或者返回不是原始值，则会抛出一个类型错误的异常。返回的原始值会被转换成字符串；如果转换成数字时，也是类似的，不过是会先调用 `valueOf()`，再调用 `toString()`，返回的原始值会被转换成数字。
5. 其他不同类型之间的比较均不相等。

所以在这里使用 `a` 与这些字符进行比较时会被转换成数字，此时会默认调用字符串的 `valueOf()/toString()` 方法，我们将这个方法进行重写，用于拦截处理 `a` 的值。
:::

### 方案三：Proxy

```js
const a = new Proxy(
  { i: 0 },
  {
    get(target, name) {
      return name === Symbol.toPrimitive ? () => ++target.i : target[name]
    },
  }
)

a == 1 && a == 2 && a == 3 // true
```
