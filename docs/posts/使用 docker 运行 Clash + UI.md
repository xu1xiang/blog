---
layout: Post
title: 使用 Docker 运行 Clash + UI
date: 2022-06-24
useHeaderImage: true
headerImage: https://www.bing.com/th?id=OHR.BannerPeak_ZH-CN2693006060_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
headerMask: rgba(40, 57, 101, .4)
tags:
  - Docker
  - Clash
---

## 前言

本篇文章不会涉及如何安装 docker 和 docker-compose，以及如何获取 Clash 配置文件，以上部分请自行解决。

_涉及工具：_
* docker
* [docker-compose](https://github.com/docker/compose)
* [Dreamacro/clash](https://github.com/Dreamacro/clash/wiki)
* [haishanh/yacd](https://github.com/haishanh/yacd)

## 步骤

### 1.准备 Clash 配置文件

在获取到 Clash 配置文件（`config.yaml`）后，需要确认以下配置：
```yml
# config.yaml

port: 7890
socks-port: 7891
allow-lan: true
external-controller: 0.0.0.0:9090
```
::: info
`7890` 为 `http/https` 监听端口，`7891` 为 `socks5` 监听端口，`9090` 为 UI 监听端口，`allow-lan` 为允许局域网访问。
:::

### 2.创建并运行 Container

```shell
# 运行 Clash

mkdir ~/clash
cp ./config.yaml ~/clash/ # config.yaml 是 Clash 的配置文件
docker run --name clash \
    -p 5090:9090 -p 5890:7890 -p 5891:7891 \
    -v ~/dk/config.yaml:/root/.config/clash/config.yaml \
    -v ~/dk/ui:/ui -d dreamacro/clash
```

::: warning
如果修改过 `config.yaml` 中相关端口的配置，请确保以上端口和 `config.yaml` 中的端口对应。
:::


```shell
# 运行 Clash UI

docker run --name clash-ui -p 5080:80 -d haishanh/yacd
```

🚀 如果顺利完成以上步骤，那么 Clash 和 Clash UI 就已经成功运行了。

### 3.通过 Clash UI 管理、监控 Clash 服务

使用浏览器打开地址：`http://[主机IP]:5080`，然后在输入框内输入 `http://[主机IP]:5090`，再点击 `ADD` 按钮，然后点击下方新增的 `http://[主机IP]:5090` 链接进入监控界面。

![](/img/in-post/2022-06-24/clash-ui.png)
![](/img/in-post/2022-06-24/clash-dashboard.png)

### 4.使用 docker-compose

如果觉得上面手动敲命令行的方式太麻烦，可以使用 `docker-compose` 来运行 Clash 和 Clash UI。

根据 [步骤1](#_1-准备-clash-配置文件) 准备好 Clash 的配置文件 `config.yaml` 后，在 `config.yaml` 的同级目录下创建 `docker-compose.yml` 文件，并写入以下内容：
```yml
# docker-compose.yml

version: '3.7'
services:
  clash-server:
    image: dreamacro/clash
    container_name: clash
    ports:
      - "5090:9090"
      - "5890:7890"
      - "5891:7891"
    volumes:
      - ./config.yaml:/root/.config/clash/config.yaml

  clash-ui:
    image: haishanh/yacd
    container_name: clash-ui
    ports:
      - 5080:80
```
然后在当前目录下执行命令：`docker-compose up -d` 即可创建并运行 Clash 和 Clash UI 了。

## References
[_群晖docker安装并运行Clash+UI_](https://roov.org/2020/07/docker-clash-ui/)
