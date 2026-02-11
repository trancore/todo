# ベースイメージ
FROM node:24.13.0

# ワーキングディレクトリを移動
WORKDIR /usr/src/app

# pnpmをインストール
RUN npm install -g pnpm

# ルートプロジェクトの依存関係をコピー
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# APIプロジェクトの依存関係をコピー
COPY apps/api/package.json ./apps/api/

# 自動生成されたPrismaクライアントのスキーマをコピー
COPY apps/api/prisma/schema.prisma ./apps/api/prisma/

# 依存関係のインストール
RUN pnpm install

# プロジェクトのソースコードをコピー
COPY apps/api/ ./apps/api

# ワーキングディレクトリをAPIプロジェクトに変更
WORKDIR /usr/src/app/apps/api

# APIサーバの起動
CMD ["pnpm", "start"]
