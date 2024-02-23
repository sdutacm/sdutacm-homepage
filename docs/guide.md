# 运维指南

## 启动项目

Node.js 建议版本在 14.x 以上

```bash
# 安装依赖（推荐使用 pnpm）
pnpm install
```

```bash
# 启动项目
pnpm run dev
```

## 项目结构

```bash
.
├── .github
│   └── workflows
│       └── ci.yml             # CI/CD 配置，使用 GitHub Actions 进行自动化构建，无需关心
├── public
│   └── favicon.ico            # 网站图标
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css       # 基础样式
│   │   │   ├── main.css       # 全局样式，入口css
│   │   │   └── theme.css      # 主题样式
│   │   ├── img
│   │   └── logo
│   ├── components
│   │   ├── GodRays            # 极光
│   │   ├── SnowBackground     # 雪花背景
│   │   ├── NavigationBar      # 导航栏
│   │   ├── ToggleThemeButton  # 主题切换按钮
│   │   └── SectionXXX         # 页面区块

│   ├── data                   # 数据
│   ├── store                  # 状态管理
│   ├── utils                  # 工具函数
│   ├── App.vue
│   └── main.js
├── package.json              # 项目配置
├── README.md
└── ...
```

## 开发指南

### 更新新闻

1. 准备素材

- 图片尺寸建议 `1600x1200`，格式建议 `jpg/png`，大小要求 `< 500KB`
- 命名格式 `sdutacm-homepage-news-xx.png`，`xx` 为新闻序号
- 将图片放在 `src/assets/img` 目录下

2. 添加新闻

前往 [`src/data/news.js`](../src/data/news.js)，按照格式添加新闻内容，追加到 `newsItems` 数组中。

```javascript
{
  title: '',
  summary: '',
  date: '',
  imgSrc: '',
  link: '' // 可选
},
```

- `title`：新闻标题
- `summary`：新闻摘要
- `date`：新闻日期 (格式：`yyyy-mm-dd`)
- `imgSrc`：新闻图片路径 (相对路径，如 `../../src/assets/img/xxx.jpg`)
- `link`：新闻链接，可选。如果没有可以不填写或者填 `'#'`，不要填空字符串
- 新闻标题和摘要不要太长，因为宽度响应式和网格布局，宽度不定，所以具体长度限制以实际情况为准。

### 主题开发

todo
