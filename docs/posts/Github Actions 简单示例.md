---
# layout: Post
title: Github Actions 简单示例
subtitle: 使用 Github Actions 自动发布应用到 Github Pages
author: Shaul
date: 2022-04-13
useHeaderImage: true
headerImage: /img/in-post/2022-04-13/github-actions.jpeg
headerMask: rgba(40, 57, 101, .4)
tags:
  - CI/CD
  - Github Actions
  - Github Pages
---

## Github Actions 是什么

[Github Actions](https://github.com/features/actions) 是 Github 于 2018 年 10 月推出的持续继承服务。与其他 `CI/CD` （如：`Jenkins`, `Travis` 等）不同的是，由于很多操作在不同的项目里都很类似（如：代码抓取、运行脚本等），这些操作完全是可以共享的。于是 Github 将常用的操作写成了独立的脚本，供开发者直接使用。

开发者可以直接在[官方市场](https://github.com/marketplace?type=actions)中搜索到他人提交的插件，不必自己写复杂的脚本。

## 我们要做什么

## 应用发布流程

### 第一步：将应用源代码上传到 Github
