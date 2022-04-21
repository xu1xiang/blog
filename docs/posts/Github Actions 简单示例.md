---
layout: Post
title: Github Actions 部署前端应用
subtitle: 使用 Github Actions 自动部署应用到 Github Pages
author: Shaul
date: 2022-04-18
useHeaderImage: true
headerImage: /img/in-post/2022-04-18/github-actions.jpeg
headerMask: rgba(40, 57, 101, .4)
tags:
  - Github Actions
---

## 概述

`Github Pages` 提供免费的静态托管服务，使用静态托管可以大大节省服务器和域名的费用（_白嫖使人快乐_）。

本篇文章将介绍一下如何使用 `Github Actions` 将应用部署到 `Github Pages` 上。

## 为什么选择 Github Actions ？

首先 `Github Actions` 的功能非常强大，其 [Github Market](https://github.com/marketplace?category=&query=&type=actions&verification=) 还提供了大量的 `Action` 供开发者使用。而且由于应用的源代码本身就托管在 Github 上， `Github Actions` 可以非常方便的获取到应用的源代码。最最重要的是 `Github Actions` 也是免费的(_白嫖再次使人快乐_)。

## 部署流程：

## Workflow 流程

1. 拉取源码
2. 安装 Nodejs
3. 安装应用依赖（`yarn install`)
4. 打包（`yarn build`)
5. 将打包后的产物部署到 `Github Pages` 上

## 创建 Workflow 文件

应用源代码根目录下创建 `.github/workflows/deploy-gh-pages.yml`

```yml
# .github/workflows/deploy-gh-pages.yml

name: Deploy to Github Pages # 当前 workflow 的名称
on:
  push:
    branches: # 当 release 分支发生 push 事件，触发该 workflow
      - release

jobs:
  build-and-deploy: # job 的名称
    runs-on: ubuntu-latest # 指定虚拟环境类型

  steps:
    # 获取当前 repository 代码
    - name: Checkout
      uses: actions/checkout@v3

    # 在工作流中安装 Node v16
    - name: Setup Node.js enviroment
      uses: actions/setup-node@v3
      with:
        node-version: 16

    # 安装依赖，执行 yarn build
    - name: Install dependencies && Build application
      env:
        BASE: 'blog' # 配置环境变量
      run: yarn install && yarn build

    # 将打包后的产物部署到 Github Pages 上
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

::: warning
由于部署之后 `Github Pages` 的访问地址是 `https://{username}.github.io/blog`, 所以需要注意指定应用的 `basePath` 为 `blog`（此处通过环境变量 `BASE` 传递，**每个项目情况不同，没有参考意义**）。
使用 `peaceiris/actions-gh-pages@v3` 时，`publish_dir` 应该是打包得到产物的文件夹路径（类似 `vue-cli-service build --dest build`)。
:::

## 最后

当 `release` 分支发生 `push` 事件时，可以在 `https://github.com/{repostory}/actions` 页面看到当前 `workflow` 已经被触发，待 `workflow` 成功运行完毕，访问 `https://{username}.github.io/blog` 即可看到部署后的页面。
