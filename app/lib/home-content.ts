export const todayPhenology = {

  term: "小满",

  note: "山中开始潮湿，母鸡更喜欢待在竹林边。",

};



export const todayJournal = {

  subtitle: "来自武夷山的今日晨记",

  dailyLine: "武夷山昨夜下了雨。母鸡今天都躲在竹林边。",

  updated: "今日清晨",

  weather: "晴转多云 · 22°C",

  eggs: "186",

  status: "在竹林边安静觅食",

  activity: "母鸡带小鸡溪边觅食",

};



export const missionStats = [

  { label: "已加入家庭", value: "30" },

  { label: "被善待的鸡", value: "2,200" },

  { label: "累计安心鸡蛋", value: "72,000" },

  { label: "已支持鸡院", value: "1" },

] as const;



export const lifeTimeline = [

  "小鸡",

  "少年",

  "青年",

  "恋爱",

  "建立家庭",

  "拥有孩子",

  "守护家族",

  "成为祖母",

  "成为长者",

  "礼敬回馈",

] as const;



export const industrialFate = [

  "没见过太阳",

  "没有家庭",

  "没有孩子",

  "没有名字",

  "没有土地",

  "终生生活在笼中",

] as const;



export const yardFate = [

  "晒太阳",

  "刨泥土",

  "恋爱",

  "成家",

  "带小鸡",

  "拥有后代",

  "成为祖母",

  "成为长者",

] as const;



export const tribeLadder = [

  "祖母鸡",

  "母鸡",

  "小鸡",

  "守护公鸡",

  "下一代",

] as const;



export const yardTiers = [

  {

    level: "一",

    name: "初盟善院子",

    desc: "不笼养，有基础活动空间，以自然谷物为主食。这是善鸡的起点。",

    rules: ["鸡不入笼", "可见阳光", "有泥土活动区"],

  },

  {

    level: "二",

    name: "笃行善院子",

    desc: "有阳光、洁净水源、树木遮阴与沙浴区。鸡群能自由活动。",

    rules: ["鸡群自由活动", "有树荫与沙浴区", "主食天然谷物"],

  },

  {

    level: "三",

    name: "赤诚善院子",

    desc: "低密度养殖，极少药物依赖。护院人长期记录鸡群真实生活。",

    rules: ["极少药物依赖", "护院人长期记录鸡群生活"],

  },

  {

    level: "四 · 共生",

    name: "共生善院子",

    desc: "鸡群形成稳定部落结构，母鸡可以孵蛋带小鸡，人与鸡长期共生。",

    featured: true,

    rules: ["母鸡可带小鸡", "鸡群形成稳定部落", "人与鸡长期共生"],

  },

] as const;



export const yardStandards = [

  "每只鸡平均活动空间 ≥ 5㎡",

  "鸡群长期自然繁衍",

  "拒绝高密度笼养",

] as const;



export const products = [

  {

    name: "母爱蛋®",

    priceMain: "58元/斤",

    priceSub: "约10枚",

    image: "/images/egg.jpg",

    badge: "鸡蛋",

    paragraphs: [

      "不是所有鸡蛋都来自同样的人生。",

      "这些鸡蛋来自会晒太阳、会带小鸡、会拥有家庭的母鸡。",

    ],

  },

  {

    name: "慢养土母鸡®",

    priceMain: "88元/斤",

    priceSub: "每只约3~4斤 · 约300~380元/只",

    image: "/images/chicken.jpg",

    badge: "母鸡",

    paragraphs: [

      "她曾在竹林觅食。曾在溪边饮水。曾孵化自己的孩子。曾陪伴一个家族成长。",

      "最终，她以另一种方式继续温暖一个家庭。",

    ],

  },

  {

    name: "金汤老母鸡®",

    priceMain: "108元/斤",

    priceSub: "约380~450元/只",

    image: "/images/chicken.jpg",

    badge: "老母鸡",

    paragraphs: [

      "她经历过春夏秋冬。经历过产蛋、抱窝、孵化与养育。",

      "她的鸡汤带着时间的味道。",

    ],

  },

  {

    name: "鸡部落祖母鸡®",

    priceMain: "128元/斤",

    priceSub: "约500元/只 · 限量预约",

    image: "/images/chicken.jpg",

    badge: "祖母",

    paragraphs: [

      "她的孩子有了孩子。她的后代奔跑在整个山坡。",

      "她是一座鸡院子的记忆。也是一个鸡部落的祖母。",

    ],

    limited: true,

  },

  {

    name: "部落守护者®",

    priceMain: "118元/斤",

    priceSub: "约700元/只",

    image: "/images/chicken.jpg",

    badge: "公鸡",

    paragraphs: [

      "他曾在黎明鸣叫。曾在暴雨前发出警报。曾带领鸡群寻找食物。曾守护母鸡与孩子。曾拥有自己的家庭。",

      "他不是流水线上的肉鸡。而是一位真正生活过的守护者。",

    ],

  },

  {

    name: "鸡王®",

    priceMain: "138元/斤",

    priceSub: "约800~1100元/只",

    image: "/images/chicken.jpg",

    badge: "鸡王",

    paragraphs: [

      "有些生命天生承担守护。他巡视院落。守护族群。与母鸡共同建立一个家族。",

      "多年以后，当新的公鸡接替职责，他成为鸡部落的长者。",

    ],

  },

] as const;



export const subscriptionPlans = [

  {

    name: "两人之家",

    price: "¥268/月",

    dailyCost: "平均每天不到9元",

    note: "给两个人长期安心的早餐。",

  },

  {

    name: "三口之家",

    price: "¥498/月",

    dailyCost: "平均每天不到17元",

    note: "让孩子每天都能吃到来自阳光下的鸡蛋。",

    featured: true,

  },

  {

    name: "成长家庭",

    price: "¥698/月",

    dailyCost: "平均每天不到24元",

    note: "一家人的早餐安心计划。",

  },

  {

    name: "共生家庭",

    price: "¥888/月",

    dailyCost: "平均每天不到30元",

    note: "三代同堂共享阳光早餐。",

  },

] as const;



export const subscriptionClosing = [

  "真正昂贵的，",

  "不是高品质鸡蛋。",

  "而是失去健康后的代价。",

] as const;



export const readyToCookDefaults = [

  "默认洗净",

  "默认冷链",

  "默认分割",

  "默认真空包装",

  "顺丰冷链配送",

] as const;



export const readyToCookSteps = [

  "整鸡",

  "专业分割",

  "真空包装",

  "冷链配送",

  "家庭餐桌",

] as const;



export const safetyStandards = [

  "0激素",

  "0违禁药物",

  "0抗生素残留",

  "0农残超标",

] as const;



export const labReports = [

  {

    id: "egg-2025-03",

    title: "母爱蛋专项检测",

    date: "2025年3月",

    agency: "福建省产品质量检验研究院",

    items: "抗生素残留、重金属、农残",

    result: "未检出 / 符合国标",

  },

  {

    id: "chicken-2025-01",

    title: "慢养土鸡专项检测",

    date: "2025年1月",

    agency: "第三方独立检测机构",

    items: "兽药残留、重金属、微生物",

    result: "未检出 / 符合国标",

  },

] as const;



export const trustQuote =

  "情怀让人第一次购买。可信让人长期留下。" as const;



export const brandPromiseLines = [

  "每一颗母爱蛋，都可以追溯到对应鸡院。",

  "每一只慢养土鸡，都拥有完整成长记录。",

  "每一份检测报告，都向公众开放。",

] as const;



export const brandPromiseClosing = [

  "真正的安心，",

  "不是宣传出来的。",

  "而是经得起长期验证。",

] as const;



export const breakfastLetters = [

  {

    title: "林女士 · 上海",

    date: "乙巳年春",

    excerpt:

      "孩子第一次自己剥鸡蛋，问：为什么蛋黄这么黄。我说，因为鸡住在有太阳的院子里。他点点头，好像听懂了一件很大的事。",

  },

  {

    title: "陈先生 · 杭州",

    date: "乙巳年仲春",

    excerpt:

      "母亲八十岁，只吃煮鸡蛋。订阅以后，她总说：这蛋有香味。我不知道那是不是阳光，但我知道，她愿意每天都吃。",

  },

  {

    title: "周家 · 成都",

    date: "乙巳年暮春",

    excerpt:

      "周末早餐成了全家最安静的时刻。孩子会把蛋壳剥得很完整，像完成一件小事。我们不说大道理，只是慢慢吃。",

  },

] as const;



export const wuyishanLetters = [

  {

    month: "五月来信",

    season: "小满 · 山中潮湿",

    flock: "母鸡带小鸡在溪边觅食，竹林边又多了六枚蛋。",

    yard: "雨停后的早晨，院子里的青苔又深了一层。",

  },

  {

    month: "四月来信",

    season: "谷雨 · 茶山新绿",

    flock: "老母鸡开始抱窝，公鸡在黎明前长鸣。",

    yard: "阿英在檐下晒谷，等一场真正的晴。",

  },

] as const;



export const ourGoals = [

  "我们不只是卖鸡蛋。",

  "我们不只是卖土鸡。",

  "我们希望：让更多鸡拥有完整的一生。",

  "让更多家庭拥有长期安心的食物。",

  "让更多生命重新回到阳光下。",

] as const;


