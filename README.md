# 仮想環境を使用して開発環境を用意します。

Windows の場合様々な仮想環境の構築があります

- WSL2 + VSCode

- Docker ＋ Docker Compose

等のやり方があります。

# WSL2 を使用して環境構築に必要なもの
- [ ] Windows 10の64bit版
- [ ] バージョンが2004、ビルドが19041以上
- [ ] Hardware が Hyper-Vに対応

## Reference
細かい設定などは以下リンクにて

Windows Subsystem for Linux で Visual Studio Code の使用を開始する

Link
[Microsoft 公式ページ](https://docs.microsoft.com/ja-jp/windows/wsl/tutorials/wsl-vscode)


# Docker で仮想環境を構築する際に必要なもの
- Docker
- docker-compose



# typescript-react-sass-webpack-babel-boilerplate
以下React とTypescript Sassのテンプレートとなります。
This is a basic boilerplate for these technologies:
- TypeScript
- React
- SASS
- Webpack
- Babel

### Setup dev environment
- `docker-compose build`
- `docker-compose up -d`
- `docker-compose exec frontend ash`

#### 以下Docker内コマンド

- `yarn install`
- develop `yarn run webpack:dev`
- open `http://localhost:8000/`

# Production　本番環境の場合
- production `yarn run webpack:prod`

## Reference Material
- typescript-react-sass-webpack-babel-boilerplate

link:[https://github.com/maxbause/typescript-react-sass-webpack-babel-boilerplate]

## React + Typscript Reference

- 仕事ですぐに使えるTypeScript

https://future-architect.github.io/typescript-guide/

- 動画　React+typescript入門

https://www.youtube.com/playlist?list=PLp_EUEO9JJP2CpdD9myEwF0CxVIJEWIgG