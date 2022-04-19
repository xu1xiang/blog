---
layout: Post
title: classnames 模块的源码学习
subtitle: 探索 classnames 模块的内部实现
author: Shaul
date: 2022-04-19
useHeaderImage: true
headerImage: /img/in-post/2022-04-19/classnames.png
headerMask: rgba(40, 57, 101, .8)
tags:
  - classnames
  - 源码学习
---

## 概述

日常在使用 `react` 进行开发时，大多数人都会使用 [`classnames`]('xx') 这个库帮助我们判断、拼接 `className`。
如果没有 `classnames` ，在拼接组件的 `className` 时可能是这样子的：

```jsx
const Button = ({ isActive }) => {
  const className = isActive ? 'btn active' : 'btn'

  return <button className={className}>Click Me!</button>
}
```

上面举例的判断条件算是比较简单的了，如果判断条件和需要拼接的类名很多，还这样手动拼接类名就很痛苦了。

如果使用 `classnames` 的话就方便多了！😄

```jsx
import classnames from 'classnames'

const Button = ({ isActive }) => {
  const className = classnames('btn', {
    active: isActive,
  })

  return <button className={className}>Click Me!</button>
}
```

## 源码实现

下面让我们来看看 `classnames` 内部是怎么实现的。

```js
// https://github.com/JedWatson/classnames/blob/master/index.js

;(function () {
  'use strict'
  // 判断对象是否拥有某个成员
  var hasOwn = {}.hasOwnProperty

  function classNames() {
    // 该数组用户存储每一个类名
    var classes = []
    // 遍历 arguments
    for (var i = 0; i < arguments.length; i++) {
      // 获取调用 classNames 方法时传入的每一个实参
      var arg = arguments[i]
      // 当实参类型为 falsy (e.g, false, 0, null, undefined, NaN, ...)，跳过本次循环
      if (!arg) continue
      // 实参类型
      var argType = typeof arg
      // 如果是字符串或数字，直接将参数追加到 classes 中
      if (argType === 'string' || argType === 'number') {
        classes.push(arg)
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          // 如果是参数类型是数组，且数组长度不为 0，调用 classNames 自身
          var inner = classNames.apply(null, arg)
          // 如果返回长度不为 0 的字符串，将字符串追加到 classes 中
          if (inner) {
            classes.push(inner)
          }
        }
      } else if (argType === 'object') {
        // 如果实参是对象，且 arg.toString 方法和 Object.prototype.toString 指向同一个引用。
        if (arg.toString === Object.prototype.toString) {
          for (var key in arg) {
            // 如果该键的值为 truthy，将值追加到 classes 中
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key)
            }
          }
        } else {
          // 为什么这里要对自定义的 toString 方法特殊处理，见下方的 issue
          // https://github.com/Semantic-Org/Semantic-UI-React/issues/2599
          classes.push(arg.toString())
        }
      }
    }

    // 最后，将 classes 的每一项以空格拼接得到字符串（e.g, [a, b, c] => "a b c"）
    return classes.join(' ')
  }

  // 支持 cjs 模式
  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames
    module.exports = classNames
  } else if (
    // 支持 AMD 模式
    typeof define === 'function' &&
    typeof define.amd === 'object' &&
    define.amd
  ) {
    // register as 'classnames', consistent with npm package name
    define('classnames', [], function () {
      return classNames
    })
  } else {
    // 支持浏览器环境
    window.classNames = classNames
  }
})()
```

## 最后

不少人会在项目中自己写一个方法用于拼接字符串。个人觉得有现成的轮子就没必要再自己造轮子了，更何况是 `classnames` 这种用 API 友好、单测覆盖率高达 100% 的高质量第三方库呢。
