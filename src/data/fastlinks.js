// 算法竞赛常用网站 -- by 凌乱之风
const base_url = '../src/assets/logo/' // 仅在本地使用
import IconCF from '../assets/logo/codeforces.ico'
import IconPTA from '../assets/logo/pta.png'
import IconVJ from '../assets/logo/vjudge.ico'
import IconAcwing from '../assets/logo/acwing.ico'
import IconLuogu from '../assets/logo/luogu.ico'
import IconAtcoder from '../assets/logo/atcoder.png'
import IconNewcoder from '../assets/logo/newcoder.ico'
import IconLeetcode from '../assets/logo/leetcode.ico'
import IconJisuanke from '../assets/logo/jisuanke.ico'
import IconHDUOJ from '../assets/logo/HDUOJ.ico'
import IconDaimayuan from '../assets/logo/daimayuan.png'
import IconCodechef from '../assets/logo/codechef.ico'
import IconLOJ from '../assets/logo/loj.svg'
import IconOMC from '../assets/logo/onlinemathcontest.ico'
import IconSPOJ from '../assets/logo/spoj.ico'
import IconUOJ from '../assets/logo/uoj.png'
import IconKattis from '../assets/logo/kattis.png'
import IconHydro from '../assets/logo/hydro.ico'
import IconOEIS from '../assets/logo/oeis.ico'
import IconPasteUbuntu from '../assets/logo/paste.ubuntu.png'
import IconPasteNugine from '../assets/logo/paste.nugine.ico'
import IconPasteLuogu from '../assets/logo/luogu.ico'
import IconDiffchecker from '../assets/logo/diffchecker.ico'
import IconDeepl from '../assets/logo/deepl.svg'
import IconLatex from '../assets/logo/latex.png'
import IconTexpage from '../assets/logo/texpage.ico'
import IconOverleaf from '../assets/logo/overleaf.ico'
import IconGraphEditor from '../assets/logo/graph_editor.png'
import IconWolframalpha from '../assets/logo/wolframalpha.ico'
import IconDesmos from '../assets/logo/desmos.ico'
import IconNumberempire from '../assets/logo/numberempire.ico'
import IconGeogebra from '../assets/logo/geogebra.ico'
import IconApproach0 from '../assets/logo/approach0.png'
import IconPolygon from '../assets/logo/codeforces.ico'
import IconICPC from '../assets/logo/icpc.ico'
import IconCCPC from '../assets/logo/ccpc.avif'
import IconICPCPKU from '../assets/logo/xcpc.png'
import IconICPCIO from '../assets/logo/xcpc.png'
import IconACMer from '../assets/logo/acmer.ico'
import IconLanqiao from '../assets/logo/lanqiao.png'
import IconGplt from '../assets/logo/gplt.ico'
import IconRobocom from '../assets/logo/robocom.ico'
import IconNOI from '../assets/logo/noi.png'
import IconOIWiki from '../assets/logo/oi-wiki.ico'
import IconOierDb from '../assets/logo/oier.ico'
import IconCFTracker from '../assets/logo/codeforces.ico'
import IconAtcoderTable from '../assets/logo/atcoder.ico'
import IconXcpcBoard from '../assets/logo/board-xcpcio.svg'
import IconOjhunt from '../assets/logo/ojhunt.ico'
import IconVisualgo from '../assets/logo/visualgo.png'
import IconSDUTOJ from '../assets/logo/sdutoj.ico'
import IconRankland from '../assets/logo/rankland.ico'
import IconMagicbook from '../assets/logo/magicbook.ico'

const fastlinks = [
  {
    index: 1,
    title: 'OJ评测姬',
    links: [
      {
        title: 'Codeforces',
        net_icon: 'https://codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        icon: IconCF,
        link: 'https://codeforces.com/',
        desc: '全球最大算法竞赛平台'
      },
      {
        title: 'PTA',
        net_icon: '', // ? 都是svg
        local_icon: base_url + 'pta.png',
        icon: IconPTA,
        link: 'https://pintia.cn/',
        desc: '程序设计类实验辅助教学平台'
      },
      {
        title: 'VJ',
        net_icon: 'https://vjudge.net/favicon.ico',
        local_icon: base_url + 'vjudge.ico',
        icon: IconVJ,
        link: 'https://vjudge.net/',
        desc: '算法竞赛题目爬虫网站'
      },
      {
        title: 'VJ 镜像',
        net_icon: 'https://vjudge.csgrandeur.cn/favicon.ico',
        local_icon: base_url + 'vjudge.ico',
        icon: IconVJ,
        link: 'https://vjudge.csgrandeur.cn/',
        desc: '算法竞赛题目爬虫网站镜像'
      },
      {
        title: 'Acwing',
        net_icon: 'https://www.acwing.com/favicon.ico',
        local_icon: base_url + 'acwing.ico',
        icon: IconAcwing,
        link: 'https://www.acwing.com/',
        desc: '算法竞赛学习平台'
      },
      {
        title: '洛谷',
        net_icon: 'https://www.luogu.com.cn/favicon.ico',
        local_icon: base_url + 'luogu.ico',
        icon: IconLuogu,
        link: 'https://www.luogu.com.cn/',
        desc: ''
      },
      {
        title: 'Atcoder',
        net_icon: 'https://atcoder.jp/favicon.ico',
        local_icon: base_url + 'atcoder.png',
        icon: IconAtcoder,
        link: 'https://atcoder.jp/',
        desc: '日本最大的算法竞技网站'
      },
      {
        title: '牛客竞赛',
        net_icon: 'https://ac.nowcoder.com/favicon.ico',
        local_icon: base_url + 'newcoder.ico',
        icon: IconNewcoder,
        link: 'https://ac.nowcoder.com/',
        desc: ''
      },
      {
        title: '力扣',
        net_icon: 'https://leetcode-cn.com/favicon.ico',
        local_icon: base_url + 'leetcode.ico',
        icon: IconLeetcode,
        link: 'https://leetcode-cn.com/',
        desc: ''
      },
      {
        title: '计蒜客',
        net_icon: 'https://www.jisuanke.com/favicon.ico',
        local_icon: base_url + 'jisuanke.ico',
        icon: IconJisuanke,
        link: 'https://www.jisuanke.com/',
        desc: ''
      },
      {
        title: 'HDUOJ',
        net_icon: 'https://acm.hdu.edu.cn/favicon.ico',
        local_icon: base_url + 'HDUOJ.ico',
        icon: IconHDUOJ,
        link: 'https://acm.hdu.edu.cn/',
        desc: ''
      },
      {
        title: '代码源',
        net_icon: 'http://oj.daimayuan.top/images/logo_small.png',
        local_icon: base_url + 'daimayuan.png',
        icon: IconDaimayuan,
        link: 'http://oj.daimayuan.top/',
        desc: ''
      },
      {
        title: 'Codechef',
        net_icon: 'https://www.codechef.com/favicon.ico',
        local_icon: base_url + 'codechef.ico',
        icon: IconCodechef,
        link: 'https://www.codechef.com/contests/',
        desc: ''
      },
      {
        title: 'LOJ',
        net_icon: '', // todo 权限拿取不到
        local_icon: base_url + 'loj.svg',
        icon: IconLOJ,
        link: 'https://loj.ac/',
        desc: ''
      },
      {
        title: 'OMC',
        net_icon: 'https://onlinemathcontest.com/favicon.ico',
        local_icon: base_url + 'onlinemathcontest.ico',
        icon: IconOMC,
        link: 'https://onlinemathcontest.com/',
        desc: '数学题竞赛平台(日文)'
      },
      {
        title: 'SPOJ',
        net_icon: 'https://www.spoj.com/favicon.ico',
        local_icon: base_url + 'spoj.ico',
        icon: IconSPOJ,
        link: 'https://www.spoj.com/',
        desc: ''
      },
      {
        title: 'UOJ',
        net_icon: 'https://cdn.uoj.ac/pictures/UOJ_small.png', // ? 需要梯子
        local_icon: base_url + 'uoj.png',
        icon: IconUOJ,
        link: 'https://uoj.ac/',
        desc: ''
      },
      {
        title: 'Kattis',
        net_icon: 'https://open.kattis.com/images/site-logo?v=50ef049acd5158e8b1df78aea2008ba3',
        local_icon: base_url + 'kattis.png',
        icon: IconKattis,
        link: 'https://open.kattis.com/',
        desc: ''
      },
      {
        title: 'hydro',
        net_icon: 'https://hydro.ac/favicon.ico',
        local_icon: base_url + 'hydro.ico',
        icon: IconHydro,
        link: 'https://hydro.ac/',
        desc: ''
      },
      {
        title: 'Universal Cup',
        net_icon: '',
        local_icon: '', // ? 无图标
        icon: null,
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
        net_icon: 'http://oeis.org/favicon.ico',
        local_icon: base_url + 'oeis.ico',
        icon: IconOEIS,
        link: 'http://oeis.org/',
        desc: '数列工具'
      },
      {
        title: 'paste.ubuntu',
        net_icon: 'https://paste.ubuntu.com/favicon.ico',
        local_icon: base_url + 'paste.ubuntu.png',
        icon: IconPasteUbuntu,
        link: 'https://paste.ubuntu.com/',
        desc: '代码粘贴板'
      },
      {
        title: 'paste.nugine',
        net_icon: 'https://paste.nugine.xyz/favicon.ico',
        local_icon: base_url + 'paste.nugine.ico',
        icon: IconPasteNugine,
        link: 'https://paste.nugine.xyz/',
        desc: '代码粘贴板'
      },
      {
        title: 'paste.洛谷',
        net_icon: 'https://www.luogu.com.cn/favicon.ico',
        local_icon: base_url + 'luogu.ico',
        icon: IconPasteLuogu,
        link: 'https://www.luogu.com.cn/paste',
        desc: '代码粘贴板'
      },
      {
        title: 'diffchecker',
        net_icon: 'https://www.diffchecker.com/favicon.ico',
        local_icon: base_url + 'diffchecker.ico',
        icon: IconDiffchecker,
        link: 'https://www.diffchecker.com/',
        desc: '代码比对工具'
      },
      {
        title: 'deepl',
        net_icon: 'https://static.deepl.com/img/logo/deepl-logo-blue.svg',
        local_icon: base_url + 'deepl.svg',
        icon: IconDeepl,
        link: 'https://www.deepl.com/translator',
        desc: '翻译工具'
      },
      {
        title: 'latexlive',
        net_icon: '', // ? base64数据
        local_icon: base_url + 'latex.png',
        icon: IconLatex,
        link: 'https://www.latexlive.com/',
        desc: '在线 latex 公式'
      },
      {
        title: 'texpage',
        net_icon: 'https://www.texpage.com/favicon.ico',
        local_icon: base_url + 'texpage.ico',
        icon: IconTexpage,
        link: 'https://www.texpage.com/',
        desc: '在线 latex 工具'
      },
      {
        title: 'overleaf',
        net_icon: 'https://www.overleaf.com/favicon.ico',
        local_icon: base_url + 'overleaf.ico',
        icon: IconOverleaf,
        link: 'https://cn.overleaf.com/',
        desc: '在线 latex 工具'
      },
      {
        title: 'factordb',
        net_icon: '', // ? 无图标
        local_icon: '',
        icon: null,
        link: 'http://www.factordb.com/',
        desc: '超大数快速质因子分解工具'
      },
      {
        title: 'graph editor',
        net_icon: 'https://csacademy.com/favicon.ico',
        local_icon: base_url + 'graph_editor.png',
        icon: IconGraphEditor,
        link: 'https://csacademy.com/app/graph_editor/',
        desc: '图论画图工具'
      },
      {
        title: 'wolframalpha',
        net_icon: 'https://www.wolframalpha.com/favicon.ico',
        local_icon: base_url + 'wolframalpha.ico',
        icon: IconWolframalpha,
        link: 'https://www.wolframalpha.com/',
        desc: '最强大的数学计算工具'
      },
      {
        title: 'desmos',
        net_icon: 'https://www.desmos.com/favicon.ico',
        local_icon: base_url + 'desmos.ico',
        icon: IconDesmos,
        link: 'https://www.desmos.com/calculator?lang=zh-CN',
        desc: '函数图像画图工具'
      },
      {
        title: '数字帝国',
        net_icon: 'https://zh.numberempire.com/favicon.ico',
        local_icon: base_url + 'numberempire.ico',
        icon: IconNumberempire,
        link: 'https://zh.numberempire.com/',
        desc: '数学工具'
      },
      {
        title: 'geogebra 2D',
        net_icon: 'https://www.geogebra.org/favicon.ico',
        local_icon: base_url + 'geogebra.ico',
        icon: IconGeogebra,
        link: 'https://www.geogebra.org/geometry',
        desc: '2D 函数图像/几何计算器'
      },
      {
        title: 'geogebra 3D',
        net_icon: 'https://www.geogebra.org/favicon.ico',
        local_icon: base_url + 'geogebra.ico',
        icon: IconGeogebra,
        link: 'https://www.geogebra.org/3d',
        desc: '3D 函数图像/几何计算器'
      },
      {
        title: 'Approach 0',
        net_icon: 'https://approach0.xyz/search/54f38076f286921e329a59edc6dceb41.png',
        local_icon: base_url + 'approach0.png',
        icon: IconApproach0,
        link: 'https://approach0.xyz/search/', // todo 需要魔法
        desc: 'Latex 搜索数学结论工具'
      },
      {
        title: 'Polygon',
        net_icon: 'https://polygon.codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        icon: IconPolygon,
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
        net_icon: 'https://icpc.global/favicon.ico',
        local_icon: base_url + 'icpc.ico',
        icon: IconICPC,
        link: 'https://icpc.global/',
        desc: '国际官网'
      },
      {
        title: 'CCPC',
        net_icon: 'https://gw.alicdn.com/tfs/TB1T9YCeVYqK1RjSZLeXXbXppXa-189-189.png',
        local_icon: base_url + 'ccpc.avif',
        icon: IconCCPC,
        link: 'https://ccpc.io/',
        desc: ''
      },
      {
        title: 'ICPC.pku',
        net_icon: '', // todo 无
        local_icon: base_url + 'xcpc.png',
        icon: IconICPCPKU,
        link: 'http://icpc.pku.edu.cn/',
        desc: '中国官网'
      },
      {
        title: 'xcpcio',
        net_icon: 'https://xcpcio.com/assets/favicon.png',
        local_icon: base_url + 'xcpc.png',
        icon: IconICPCIO,
        link: 'https://xcpcio.com/',
        desc: 'XCPC 知识百科'
      },
      {
        title: 'ACMer.info',
        net_icon: 'https://acmer.info/favicon.ico',
        local_icon: base_url + 'acmer.ico',
        icon: IconACMer,
        link: 'https://acmer.info/',
        desc: 'acmer 资源网站'
      },
      {
        title: '蓝桥杯大赛',
        net_icon: 'https://static.shiyanlou.com/lanqiaobei-fe/dist/favico.png',
        local_icon: base_url + 'lanqiao.png',
        icon: IconLanqiao,
        link: 'https://dasai.lanqiao.cn/',
        desc: ''
      },
      {
        title: '天梯赛',
        net_icon: 'https://static.pintia.cn/gplt/icons/favicon.ico',
        local_icon: base_url + 'gplt.ico',
        icon: IconGplt,
        link: 'https://gplt.patest.cn/regulation',
        desc: '团体程序设计天梯赛'
      },
      {
        title: 'Robocom',
        net_icon: 'https://www.robocom.com.cn/favicon.ico',
        local_icon: base_url + 'robocom.ico',
        icon: IconRobocom,
        link: 'https://www.robocom.com.cn/',
        desc: ''
      },
      {
        title: 'NOI',
        net_icon: 'https://www.noi.cn/images/logo.png', // ? 左侧图标
        local_icon: base_url + 'noi.png',
        icon: IconNOI,
        link: 'https://www.noi.cn/',
        desc: '青少年信息学奥林匹克'
      },
      {
        title: 'OI Wiki',
        net_icon: 'https://oi-wiki.org/favicon.ico',
        local_icon: base_url + 'oi-wiki.ico',
        icon: IconOIWiki,
        link: 'https://oi-wiki.org/',
        desc: '算法竞赛知识百科'
      },
      {
        title: 'OIerDb',
        net_icon: 'https://oier.baoshuo.dev/favicon.ico',
        local_icon: base_url + 'oier.ico',
        icon: IconOierDb,
        link: 'https://oier.baoshuo.dev/',
        desc: '查询选手 OI 经历'
      },
      {
        title: 'CFTracker',
        net_icon: 'https://codeforces.com/favicon.ico',
        local_icon: base_url + 'codeforces.ico',
        icon: IconCFTracker,
        link: 'https://cftracker.netlify.app/contests',
        desc: 'Codeforces 题目/比赛清单'
      },
      {
        title: 'AtCoder题集',
        net_icon: '',
        local_icon: base_url + 'atcoder.ico', // ? 特殊下载curl或者将base64的相应原文转换
        icon: IconAtcoderTable,
        link: 'https://kenkoooo.com/atcoder/#/table/',
        desc: 'Atcoder 题目/比赛清单'
      },
      {
        title: 'XCPC 榜单',
        net_icon: 'https://board.xcpcio.com/favicon.svg',
        local_icon: base_url + 'board-xcpcio.svg',
        icon: IconXcpcBoard,
        link: 'https://board.xcpcio.com/',
        desc: ''
      },
      {
        title: 'ojhunt',
        net_icon: 'https://ojhunt.com/favicon.ico',
        local_icon: base_url + 'ojhunt.ico',
        icon: IconOjhunt,
        link: 'https://ojhunt.com/statistics',
        desc: 'OJ 做题统计'
      },
      {
        title: 'visualgo',
        net_icon: 'https://visualgo.net/img/favicon.png',
        local_icon: base_url + 'visualgo.png',
        icon: IconVisualgo,
        link: 'https://visualgo.net/zh/',
        desc: '通过动画将数据结构和算法可视化'
      }
    ]
  }
]

const sdutlinks = [
  {
    title: 'SDUT OJ',
    link: 'https://acm.sdut.edu.cn/onlinejudge3/',
    desc: '山东理工大学ACM实验室自研的第三代在线评测系统',
    // icon: '../src/assets/logo/sdutoj.ico'
    icon: IconSDUTOJ
  },
  {
    title: 'RankLand',
    link: 'https://rl.algoux.cn/',
    desc: '由我们的开源组织algoUX开发、算法竞赛爱好者们自发维护的、专注于托管和分享任何竞赛榜单的宝地',
    // icon: '../src/assets/logo/rankland.ico'
    icon: IconRankland
  },
  {
    title: '光之魔法书',
    link: 'https://lcl-magicbook.sdutacm.cn/',
    desc: '光锥实验室的入门魔法指南，你需要通过学习、实践、总结进而对web魔法体系有一个清晰的概念',
    // icon: '../src/assets/logo/magicbook.ico'
    icon: IconMagicbook
  }
]

export { fastlinks, sdutlinks }
