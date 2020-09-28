# 仮想環境を使用して開発環境を用意します。

Windows の場合とMacの場合で異なります。

- WSL2 + VSCode

- Docker ＋ Docker Compose

等のやり方があります。

※こちらのGithub内ではDocker環境用となります。
またDocker-Composeに環境を追加する事でバックエンドも使用できます。

 - OS Alpine Linux
 - Node.js インストール済

## WSL2 を使用して環境構築に必要なもの
- [ ] Windows 10の64bit版
- [ ] バージョンが2004、ビルドが19041以上
- [ ] Hardware が Hyper-Vに対応
問題点として仮想環境としてLinuxが使えますがOSがUbuntuなど数が少ないところです。

### Reference
細かい設定などは以下リンクにて

Windows Subsystem for Linux で Visual Studio Code の使用を開始する

Link
[Microsoft 公式ページ](https://docs.microsoft.com/ja-jp/windows/wsl/tutorials/wsl-vscode)


# Docker とDocker-Composeで仮想環境を構築する際に必要なもの
- [ ] Docker
- [ ] docker-compose

DockerFileだけでもできますが、Docker-Compose を使うことで複数の機能を起動することができます。

# typescript-react-sass-webpack-babel-boilerplate
以下React とTypescript Sassのテンプレートとなります。
Webpackを使用しBabelの設定でIEの対応を行ったり、ReactとSassをPure.JSにリアルタイムで書き出します。
This is a basic boilerplate for these technologies:
- TypeScript
- React
- SASS
- Webpack
- Babel

## Docker Setup dev environment
Dockerを使用する際に使用する起動コマンドです。

- `docker-compose build`
- `docker-compose up -d`
- `docker-compose exec frontend ash`

## 以下Terminal 内コマンド

- `yarn install`
- develop `yarn run webpack:dev`
- open `http://localhost:8000/`

# Production　本番環境の場合
- production `yarn run webpack:prod`

## Reference Material
- typescript-react-sass-webpack-babel-boilerplate

link:[https://github.com/maxbause/typescript-react-sass-webpack-babel-boilerplate]

## React + Typscript Reference
学習用リンク

- 仕事ですぐに使えるTypeScript

https://future-architect.github.io/typescript-guide/

- 動画　React+typescript入門

https://www.youtube.com/playlist?list=PLp_EUEO9JJP2CpdD9myEwF0CxVIJEWIgG