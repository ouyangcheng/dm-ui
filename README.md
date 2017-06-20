# dm-ui

> 请提前全局安装好 dm-cli

## 安装依赖
```shell
dm install
```

## 启动服务
```shell
dm start

调试 localhost:14001
文档 localhost:14001/docs
```


## 校验格式化代码(默认dm lint 格式化src文件夹)
```shell
dm lint -S [dir]
```

## 打包
```shell
dm pack [newversion]

可以参考npm version
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

## 发布到npm
```shell
npm publish --tag [tagname]
```
