// 算法竞赛常用网站 -- by 凌乱之风
const base_url = '../src/assets/logo/'

const fastlinks = [
  {
    index: 1,
    title: 'OJ评测姬',
    links: [
      {
        title: 'Codeforces',
        icon: 'https://codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        link: 'https://codeforces.com/',
        desc: '全球最大算法竞赛平台'
      },
      {
        title: 'PTA',
        icon: '', // ? 都是svg
        local_icon: base_url + 'pta.png',
        link: 'https://pintia.cn/',
        desc: '程序设计类实验辅助教学平台'
      },
      {
        title: 'VJ',
        icon: 'https://vjudge.net/favicon.ico',
        local_icon: base_url + 'vjudge.ico',
        link: 'https://vjudge.net/',
        desc: '算法竞赛题目爬虫网站'
      },
      {
        title: 'VJ 镜像',
        icon: 'https://vjudge.csgrandeur.cn/favicon.ico',
        local_icon: base_url + 'vjudge.ico',
        link: 'https://vjudge.csgrandeur.cn/',
        desc: '算法竞赛题目爬虫网站镜像'
      },
      {
        title: 'Acwing',
        icon: 'https://www.acwing.com/favicon.ico',
        local_icon: base_url + 'acwing.ico',
        link: 'https://www.acwing.com/',
        desc: '算法竞赛学习平台'
      },
      {
        title: '洛谷',
        icon: 'https://www.luogu.com.cn/favicon.ico',
        local_icon: base_url + 'luogu.ico',
        link: 'https://www.luogu.com.cn/',
        desc: ''
      },
      {
        title: 'Atcoder',
        icon: 'https://atcoder.jp/favicon.ico',
        local_icon: base_url + 'atcoder.png',
        link: 'https://atcoder.jp/',
        desc: '日本最大的算法竞技网站'
      },
      {
        title: '牛客竞赛',
        icon: 'https://ac.nowcoder.com/favicon.ico',
        local_icon: base_url + 'newcoder.ico',
        link: 'https://ac.nowcoder.com/',
        desc: ''
      },
      {
        title: '力扣',
        icon: 'https://leetcode-cn.com/favicon.ico',
        local_icon: base_url + 'leetcode.ico',
        link: 'https://leetcode-cn.com/',
        desc: ''
      },
      {
        title: '计蒜客',
        icon: 'https://www.jisuanke.com/favicon.ico',
        local_icon: base_url + 'jisuanke.ico',
        link: 'https://www.jisuanke.com/',
        desc: ''
      },
      {
        title: 'HDUOJ',
        icon: 'https://acm.hdu.edu.cn/favicon.ico',
        local_icon: base_url + 'HDUOJ.ico',
        link: 'https://acm.hdu.edu.cn/',
        desc: ''
      },
      {
        title: '代码源',
        icon: 'http://oj.daimayuan.top/images/logo_small.png',
        local_icon: base_url + 'daimayuan.png',
        link: 'http://oj.daimayuan.top/',
        desc: ''
      },
      {
        title: 'Codechef',
        icon: 'https://www.codechef.com/favicon.ico',
        local_icon: base_url + 'codechef.ico',
        link: 'https://www.codechef.com/contests/',
        desc: ''
      },
      {
        title: 'LOJ',
        icon: '', // todo 权限拿取不到
        local_icon: base_url + 'loj.svg',
        link: 'https://loj.ac/',
        desc: ''
      },
      {
        title: 'OMC',
        icon: 'https://onlinemathcontest.com/favicon.ico',
        local_icon: base_url + 'onlinemathcontest.ico',
        link: 'https://onlinemathcontest.com/',
        desc: '数学题竞赛平台(日文)'
      },
      {
        title: 'SPOJ',
        icon: 'https://www.spoj.com/favicon.ico',
        local_icon: base_url + 'spoj.ico',
        link: 'https://www.spoj.com/',
        desc: ''
      },
      {
        title: 'UOJ',
        icon: 'https://cdn.uoj.ac/pictures/UOJ_small.png', // ? 需要梯子
        local_icon: base_url + 'uoj.png',
        link: 'https://uoj.ac/',
        desc: ''
      },
      {
        title: 'Kattis',
        icon: 'https://open.kattis.com/images/site-logo?v=50ef049acd5158e8b1df78aea2008ba3',
        local_icon: base_url + 'kattis.png',
        link: 'https://open.kattis.com/',
        desc: ''
      },
      {
        title: 'hydro',
        icon: 'https://hydro.ac/favicon.ico',
        local_icon: base_url + 'hydro.ico',
        link: 'https://hydro.ac/',
        desc: ''
      },
      {
        title: 'Universal Cup',
        icon: '',
        local_icon: '', // ? 无图标
        link: 'https://ucup.ac/',
        desc: '提供算法实战演练'
      }
    ]
  },
  {
    index: 2,
    title: '工具箱',
    links: [
      {
        title: 'OEIS',
        icon: 'http://oeis.org/favicon.ico',
        local_icon: base_url + 'oeis.ico',
        link: 'http://oeis.org/',
        desc: '数列工具'
      },
      {
        title: 'paste.ubuntu',
        icon: 'https://paste.ubuntu.com/favicon.ico',
        local_icon: base_url + 'paste.ubuntu.png',
        link: 'https://paste.ubuntu.com/',
        desc: '代码粘贴板'
      },
      {
        title: 'paste.nugine',
        icon: 'https://paste.nugine.xyz/favicon.ico',
        local_icon: base_url + 'paste.nugine.ico',
        link: 'https://paste.nugine.xyz/',
        desc: '代码粘贴板'
      },
      {
        title: 'paste.洛谷',
        icon: 'https://www.luogu.com.cn/favicon.ico',
        local_icon: base_url + 'luogu.ico',
        link: 'https://www.luogu.com.cn/paste',
        desc: '代码粘贴板'
      },
      {
        title: 'diffchecker',
        icon: 'https://www.diffchecker.com/favicon.ico',
        local_icon: base_url + 'diffchecker.ico',
        link: 'https://www.diffchecker.com/',
        desc: '代码比对工具'
      },
      {
        title: 'deepl',
        icon: 'https://static.deepl.com/img/logo/deepl-logo-blue.svg',
        local_icon: base_url + 'deepl.svg',
        link: 'https://www.deepl.com/translator',
        desc: '翻译工具'
      },
      {
        title: 'latexlive',
        icon: '', // ? base64数据
        local_icon: base_url + 'latex.png',
        link: 'https://www.latexlive.com/',
        desc: '在线 latex 公式'
      },
      {
        title: 'texpage',
        icon: 'https://www.texpage.com/favicon.ico',
        local_icon: base_url + 'texpage.ico',
        link: 'https://www.texpage.com/',
        desc: '在线 latex 工具'
      },
      {
        title: 'overleaf',
        icon: 'https://www.overleaf.com/favicon.ico',
        local_icon: base_url + 'overleaf.ico',
        link: 'https://cn.overleaf.com/',
        desc: '在线 latex 工具'
      },
      {
        title: 'factordb',
        icon: '', // ? 无图标
        local_icon: '',
        link: 'http://www.factordb.com/',
        desc: '超大数快速质因子分解工具'
      },
      {
        title: 'graph editor',
        icon: 'https://csacademy.com/favicon.ico',
        local_icon: base_url + 'graph_editor.png',
        link: 'https://csacademy.com/app/graph_editor/',
        desc: '图论画图工具'
      },
      {
        title: 'wolframalpha',
        icon: 'https://www.wolframalpha.com/favicon.ico',
        local_icon: base_url + 'wolframalpha.ico',
        link: 'https://www.wolframalpha.com/',
        desc: '最强大的数学计算工具'
      },
      {
        title: 'desmos',
        icon: 'https://www.desmos.com/favicon.ico',
        local_icon: base_url + 'desmos.ico',
        link: 'https://www.desmos.com/calculator?lang=zh-CN',
        desc: '函数图像画图工具'
      },
      {
        title: '数字帝国',
        icon: 'https://zh.numberempire.com/favicon.ico',
        local_icon: base_url + 'numberempire.ico',
        link: 'https://zh.numberempire.com/',
        desc: '数学工具'
      },
      {
        title: 'geogebra 2D',
        icon: 'https://www.geogebra.org/favicon.ico',
        local_icon: base_url + 'geogebra.ico',
        link: 'https://www.geogebra.org/geometry',
        desc: '2D 函数图像/几何计算器'
      },
      {
        title: 'geogebra 3D',
        icon: 'https://www.geogebra.org/favicon.ico',
        local_icon: base_url + 'geogebra.ico',
        link: 'https://www.geogebra.org/3d',
        desc: '3D 函数图像/几何计算器'
      },
      {
        title: 'Approach 0',
        icon: 'https://approach0.xyz/search/54f38076f286921e329a59edc6dceb41.png',
        local_icon: base_url + 'approach0.png',
        link: 'https://approach0.xyz/search/', // todo 需要魔法
        desc: 'Latex 搜索数学结论工具'
      },
      {
        title: 'Polygon',
        icon: 'https://polygon.codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        link: 'https://polygon.codeforces.com/',
        desc: '最规范的命题工具'
      }
    ]
  },
  {
    index: 3,
    title: '信息整合网站',
    links: [
      {
        title: 'ICPC',
        icon: 'https://icpc.global/favicon.ico',
        local_icon: base_url + 'icpc.ico',
        link: 'https://icpc.global/',
        desc: '国际官网'
      },
      {
        title: 'CCPC',
        icon: 'https://gw.alicdn.com/tfs/TB1T9YCeVYqK1RjSZLeXXbXppXa-189-189.png',
        local_icon: base_url + 'ccpc.avif',
        link: 'https://ccpc.io/',
        desc: ''
      },
      {
        title: 'ICPC.pku',
        icon: '', // todo 无
        local_icon: base_url + 'xcpc.png',
        link: 'http://icpc.pku.edu.cn/',
        desc: '中国官网'
      },
      {
        title: 'xcpcio',
        icon: 'https://xcpcio.com/assets/favicon.png',
        local_icon: base_url + 'xcpc.png',
        link: 'https://xcpcio.com/',
        desc: 'XCPC 知识百科'
      },
      {
        title: 'ACMer.info',
        icon: 'https://acmer.info/favicon.ico',
        local_icon: base_url + 'acmer.ico',
        link: 'https://acmer.info/',
        desc: 'acmer 资源网站'
      },
      {
        title: '蓝桥杯大赛',
        icon: 'https://static.shiyanlou.com/lanqiaobei-fe/dist/favico.png',
        local_icon: base_url + 'lanqiao.png',
        link: 'https://dasai.lanqiao.cn/',
        desc: ''
      },
      {
        title: '天梯赛',
        icon: 'https://static.pintia.cn/gplt/icons/favicon.ico',
        local_icon: base_url + 'gplt.ico',
        link: 'https://gplt.patest.cn/regulation',
        desc: '团体程序设计天梯赛'
      },
      {
        title: 'Robocom',
        icon: 'https://www.robocom.com.cn/favicon.ico',
        local_icon: base_url + 'robocom.ico',
        link: 'https://www.robocom.com.cn/',
        desc: ''
      },
      {
        title: 'NOI',
        icon: 'https://www.noi.cn/images/logo.png', // ? 左侧图标
        local_icon: base_url + 'noi.png',
        link: 'https://www.noi.cn/',
        desc: '青少年信息学奥林匹克'
      },
      {
        title: 'OI Wiki',
        icon: 'https://oi-wiki.org/favicon.ico',
        local_icon: base_url + 'oi-wiki.ico',
        link: 'https://oi-wiki.org/',
        desc: '算法竞赛知识百科'
      },
      {
        title: 'OIerDb',
        icon: 'https://oier.baoshuo.dev/favicon.ico',
        local_icon: base_url + 'oier.ico',
        link: 'https://oier.baoshuo.dev/',
        desc: '查询选手 OI 经历'
      },
      {
        title: 'CFTracker',
        icon: 'https://codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        link: 'https://cftracker.netlify.app/contests',
        desc: 'Codeforces 题目/比赛清单'
      },
      {
        title: 'AtCoder题集',
        icon: '',
        local_icon: base_url + 'atcoder.ico', // ? 特殊下载curl或者将base64的相应原文转换
        link: 'https://kenkoooo.com/atcoder/#/table/',
        desc: 'Atcoder 题目/比赛清单'
      },
      {
        title: 'XCPC 榜单',
        icon: 'https://board.xcpcio.com/favicon.svg',
        local_icon: base_url + 'board-xcpcio.svg',
        link: 'https://board.xcpcio.com/',
        desc: ''
      },
      {
        title: 'ojhunt',
        icon: 'https://ojhunt.com/favicon.ico',
        local_icon: base_url + 'ojhunt.ico',
        link: 'https://ojhunt.com/statistics',
        desc: 'OJ 做题统计'
      },
      {
        title: 'visualgo',
        icon: 'https://visualgo.net/img/favicon.png',
        local_icon: base_url + 'visualgo.png',
        link: 'https://visualgo.net/zh/',
        desc: '通过动画将数据结构和算法可视化'
      }
    ]
  }
]

export default fastlinks
