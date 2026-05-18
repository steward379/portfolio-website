/** 來源：[橫跨宇宙的星際廢話線](https://murmurline.notion.site/d126ef7a6c16486b80b524cb9197f849?pvs=143) */

export const COMMUNITY_TEACHING_NOTION_URL =
  'https://murmurline.notion.site/d126ef7a6c16486b80b524cb9197f849?pvs=143';

export const WORKSHOPS_AND_LECTURES_URL =
  'https://murmurline.notion.site/f16838ce7f0a44f2852f85a340f7b23e?v=a14d26370e4c4d868bd42f1aab5e3bbc&pvs=18';

export const heroIntro = {
  titleZh: '橫跨宇宙的星際廢話線',
  subtitle: '行銷、設計、社群、區塊鏈',
};

export interface TeachingColumn {
  key: string;
  label: string;
  /** 儲存為完整 URL；若為連結欄會渲染為 <a> */
  isLink?: boolean;
}

export interface TeachingSectionDefinition {
  eyebrow: string;
  title: string;
  caption: string;
  columns: TeachingColumn[];
  rows: Record<string, string | null>[];
}

export const bioParagraph =
  '國立政治大學數位內容所肄、國立臺灣科技大學應用外語系畢、工商業設計系肄、創業管理學程。神明特急有限公司負責人、網路名星際廢話線 (Steward)，擅長跨領域策略合作與內容行銷設計，替客戶規劃社群、設計與網站服務。連續網路創業家，實為視覺設計與翻譯出身，但擅長文字文案，社群內容行銷並有基礎網站技術與設計整合力，擁有約 12k 追蹤臉書設計迷因 meme 自媒體「星際廢話線」，部落格 Medium、有 Podcast。代表作有「賣鬧！你才不是什麼斜槓青年」書評、「設計師轉工程師」懶人包等。自媒體專欄作品散見 udn 鳴人堂、女人迷、科技報橘、「故事：寫給所有人的歷史」等。';

/** Notion `frame-ancestors` 禁止第三方嵌入；本站改以表格呈現，並保留原始頁連結 */
export const teachingSections: TeachingSectionDefinition[] = [
  {
    eyebrow: 'Experience',
    title: '行銷經驗與專案參與',
    caption: '創業、行銷、設計與產品開發的實務經歷。',
    columns: [
      { key: 'name', label: '專案／公司名稱' },
      { key: 'role', label: '職位' },
      { key: 'type', label: '業主' },
      { key: 'tags', label: '標籤' },
    ],
    rows: [
      {
        name: 'Guest What 好客樹共享出租平台',
        role: 'Co-Founder (Design, Marketing, BD)',
        type: 'Self-initiated',
        tags: 'Appworks 創業加速器 #9 數位時代專訪',
      },
      {
        name: 'JustPrint 微幕列印版面設計印刷服務',
        role: 'Co-Founder (Design)',
        type: 'Self-initiated',
        tags: 'Appworks 創業加速器 #9',
      },
      {
        name: 'Coolla 露營點數串聯整合 App 服務',
        role: 'Co-Founder (Design)',
        type: 'Self-initiated',
        tags: '期待解鎖',
      },
      {
        name: 'Scoop 私戲平台',
        role: 'Co-Founder (Design, Product)',
        type: 'Self-initiated、實習新村',
        tags: '期待解鎖',
      },
      {
        name: 'Triptrip 攻堅旅行社計畫',
        role: 'Founder',
        type: 'Self-initiated',
        tags: '台科大創業競賽第三名',
      },
      {
        name: '賽博士狗公益保護產品品牌規劃與擘劃案',
        role: '行銷總監',
        type: '行銷總管',
        tags: '實體特殊',
      },
      {
        name: 'CBA 亞洲區塊鏈學院',
        role: 'BD',
        type: '介紹區塊鏈課程予技術人',
        tags: '巴克夏科技 BuckChaf',
      },
      {
        name: '重力公主 Hearing Action YouTube 頻道運營方科技研究',
        role: '行銷顧問',
        type: '社群行銷、人力介紹',
        tags: '重力公主 Hearing Action — Youtuber',
      },
      {
        name: 'Blocto (portto) 門戶科技區塊鏈錢包',
        role: '行銷顧問',
        type: '社群行銷、人力介紹',
        tags: '門戶科技 Blocto, portto',
      },
      {
        name: '庶加林上線管理平台',
        role: '行銷負責視覺設計',
        type: '社群展廣合作、Logo',
        tags: '奇異果文創',
      },
      {
        name: '北一區 Moocs、政大 Moocs',
        role: '社群行銷負責設計',
        type: 'Moocs 措施',
        tags: '國立政治大學',
      },
      {
        name: '台北眷村文化館',
        role: '社群設計執行銷',
        type: '打工展場／工作坊／居民保存',
        tags: '台北文化局、眷村保存館',
      },
      {
        name: '實體一個微安管定 Bot',
        role: '社群設計',
        type: '聊天機器人',
        tags: '實體一個微安',
      },
      {
        name: '實體線索媒體',
        role: '社群經營、設計',
        type: '社群經營',
        tags: '實體線索媒體',
      },
    ],
  },
  {
    eyebrow: 'Channels',
    title: '自主社群與行銷渠道',
    caption: '自有／協作的發聲渠道與露出位置。',
    columns: [
      { key: 'type', label: '類型' },
      { key: 'name', label: '項目' },
      { key: 'detail', label: '定位／說明' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        type: '長文章／論述',
        name: 'Medium｜星際廢話線',
        detail: '部落格與專題寫作入口（Rogerpilot publication）',
        url: 'https://medium.com/%E6%A9%AB%E8%B7%A8%E5%AE%87%E5%AE%99%E7%9A%84%E5%BB%A2%E8%A9%B1%E7%B7%B9%E5%98%B4%E7%A0%B2/rogerpilot/home',
      },
      {
        type: '音訊節目',
        name: 'Podcast｜Firstory｜星際廢話線',
        detail: '線上電台節目／訂閱集合頁',
        url: 'https://open.firstory.me/user/murmurline',
      },
      {
        type: '社群經營',
        name: 'Facebook｜星際廢話線粉絲專頁',
        detail: '約 11k（頁面自述；數字會隨時間變動）',
        url: 'https://www.facebook.com/murmurline/',
      },
      {
        type: '媒體露出',
        name: '動區區塊鏈媒體 BlockTempo',
        detail: 'NFT／Oursong 相關報導引用',
        url: 'https://www.blocktempo.com/nft-oursong-social-token-ourcoin-will-launch-in-august/',
      },
      {
        type: '創作者經濟',
        name: 'Oursong｜鄒柏軒 @murmurline87',
        detail: '作品／社群代幣介面（需下載 App 後續操作）',
        url: 'https://www.oursong.com/@murmurline87',
      },
      {
        type: '語音社群',
        name: 'Clubhouse｜@murmurline',
        detail: '約 2.2k（頁面自述）',
        url: 'https://www.clubhouse.com/@murmurline',
      },
    ],
  },
  {
    eyebrow: 'Columns',
    title: '第三方媒體專欄／撰稿',
    caption: '經編輯台發布的代表性稿件。',
    columns: [
      { key: 'outlet', label: '媒體' },
      { key: 'headline', label: '標題' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        outlet: '科技報橘',
        headline: '別鬧了，你才不是什麼斜槓青年！',
        url: 'https://buzzorange.com/techorange/2018/05/22/no-you-are-not-slash-youth/',
      },
      {
        outlet: '女人迷',
        headline: '「想交女友，你需要另一個男性」從《星際終行》談母豬、自助餐與男性解放',
        url: 'https://womany.net/read/article/16476',
      },
      {
        outlet: '鳴人堂（聯合報）',
        headline: '文組發言被嗆「不意外」強調單一價值的台灣社會是狼性還是沒人性？',
        url: 'https://opinion.udn.com/opinion/story/5749/5344935',
      },
    ],
  },
  {
    eyebrow: 'Web3',
    title: '區塊鏈／NFT 論述與評論',
    caption: '鏈上敘事與主流媒體案例評析。',
    columns: [
      { key: 'lang', label: '語言／载体' },
      { key: 'title', label: '標題' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        lang: '中文｜Medium',
        title: '永久典藏一份「歷史本文」：CNN 的歷史時刻 NFT 是什麼',
        url: 'https://medium.com/%E6%A9%AB%E8%B7%A8%E5%AE%87%E5%AE%99%E7%9A%84%E5%BB%A2%E8%A9%B1%E7%B7%B9%E5%98%B4%E7%A0%B2/%E6%B0%B8%E4%B9%85%E8%92%90%E8%97%8F%E4%B8%80%E4%BB%BD-%E6%AD%B7%E5%8F%B2%E6%9C%AC%E6%96%87-cnn-%E7%9A%84%E6%AD%B7%E5%8F%B2%E6%99%82%E5%88%BB-nft-%E6%98%AF%E4%BB%80%E9%BA%BC-2a304f291e39',
      },
      {
        lang: 'English｜Medium (Blockick)',
        title: 'Grab a Moment: How CNN Rocked the Boat by Minting Historical Moments NFTs on CNN Vault',
        url: 'https://medium.com/blockick/grab-a-moment-how-cnn-rocked-the-boat-by-issuing-historical-moments-nft-on-cnn-vault-788228725d6d',
      },
    ],
  },
  {
    eyebrow: 'Broadcast',
    title: '受訪、Podcast 與公開講述',
    caption: '廣播、Podcast、公民新聞與長篇側寫。',
    columns: [
      { key: 'format', label: '形式' },
      { key: 'outlet', label: '媒體／單位' },
      { key: 'topic', label: '主題／標題' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        format: '廣播',
        outlet: '台北教育廣播電台',
        topic: 'Slash青年 替老眷村規劃新起點',
        url: 'https://www.ner.gov.tw/program/5a83f4eac5fd8a01e2df01a1/5b69647999ffce00064e5e83',
      },
      {
        format: 'Podcast',
        outlet: '聲動台北 Podcast',
        topic: '#85 在台北蓋一座最潮的網路募資土地公廟 — ft 蓋廟特急嘖嘖上蓋土地公廟',
        url: 'https://soundsintaipei.firstory.io/episodes/cklaoh12t6ziv08729swjy9v6',
      },
      {
        format: '公民新聞',
        outlet: 'Peopo（公視體系）',
        topic: '就業模式轉型 斜槓青年崛起',
        url: 'https://www.peopo.org/news/369277',
      },
      {
        format: '深度報導／側寫',
        outlet: '清大設計小組（nthu.xyz）',
        topic: '此通非彼「通」──從設計、社運再到區塊鏈的鄒柏軒',
        url: 'https://design-group.nthu.xyz/2021/%e5%be%9e%e8%a8%ad%e8%a8%88%e7%a4%be%e9%81%8b%e5%86%8d%e5%88%b0%e5%8d%80%e5%a1%8a%e9%8f%88%e7%9a%84%e9%84%92%e6%9f%8f%e8%bb%92/',
      },
    ],
  },
  {
    eyebrow: 'Visual',
    title: '視覺作品與書籍／出版美術',
    caption: '插畫、封面與書籍視覺合作。',
    columns: [
      { key: 'work', label: '作品／書名' },
      { key: 'scope', label: '合作範圍' },
      { key: 'note', label: '備註' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        work: '微 S/M 女性向按摩棒心理測驗',
        scope: '插畫',
        note: 'Behance 作品集頁',
        url: 'https://www.behance.net/gallery/92853351/-Pink-Rotor-Mental-Test-Illustration',
      },
      {
        work: '《ＹＯ，這位ＢＲＯＴＨＥＲ》（名為變態的神父）',
        scope: '插畫圖文、美術／書封',
        note: '博客來／ptt 名人 g6m3kimo',
        url: 'https://www.books.com.tw/products/0010692205',
      },
      {
        work: '人渣文本《超渡莊子》',
        scope: '美術設計、書封設計',
        note: '—',
        url: null,
      },
      {
        work: '《邁向目的之路》（親子天下）',
        scope: '書封設計',
        note: '—',
        url: null,
      },
    ],
  },
  {
    eyebrow: 'Education',
    title: '教學與工作坊經歷',
    caption: '演講、工作坊、課程與教學活動紀錄。',
    columns: [
      { key: 'name', label: '主題／內容' },
      { key: 'client', label: '業主 Clients' },
      { key: 'tags', label: 'Tags' },
      { key: 'date', label: 'Date' },
    ],
    rows: [
      {
        name: '台大 d-school 設計設計：開放設計新觀點',
        client: '國立台灣大學 D-School 設計學院',
        tags: '學校、溫暖課程、工作坊',
        date: null,
      },
      {
        name: 'NFT 與 DAO',
        client: '國立台灣大學 兆豐應用的設計系 油畫重置 保溫專業學院',
        tags: '學校、正式課程、演講',
        date: '2021',
      },
      {
        name: '設計社群行銷 - 新創設計 x 設計 - 業界私密化（僱上）',
        client: 'Impact Hub 影響力製造所',
        tags: '社群行銷',
        date: '2021',
      },
      {
        name: 'Logo / CIS 基礎課程',
        client: '師大全人醫院',
        tags: '學校、溫暖課程、工作坊',
        date: null,
      },
      {
        name: '簡報設計課程',
        client: '台北市府公會',
        tags: '組織、工作坊',
        date: null,
      },
      {
        name: 'AI 向基礎實訓練課',
        client: '國立台灣科技大學 雜談設計週',
        tags: '學校、正式課程、工作坊',
        date: null,
      },
      {
        name: '深度實踐專宇宙設計課程',
        client: '國立彰化師大學 設計系',
        tags: '學校、社團、工作坊',
        date: null,
      },
      {
        name: '簡報設計',
        client: '百軒行政 Bi-Great Things',
        tags: '組織、工作坊',
        date: null,
      },
      {
        name: '創業與產品級課程實驗論壇',
        client: '國立政治大學 DCT 數位內容學士學位學程',
        tags: '學校、演講',
        date: null,
      },
      {
        name: '簡報設計',
        client: '奇異果文創',
        tags: null,
        date: null,
      },
      {
        name: 'Photoshop 課程',
        client: '國立台灣科技大學 應用設計社',
        tags: '視覺設計',
        date: null,
      },
      {
        name: '【春】台灣眷村文化館',
        client: null,
        tags: '自辦、工作坊',
        date: null,
      },
      {
        name: 'meme 空間 角色設計小課',
        client: '創業思考者',
        tags: '自辦、工作坊',
        date: null,
      },
      {
        name: '【許】LOGO 創作小課 廠牌修身課',
        client: null,
        tags: null,
        date: null,
      },
      {
        name: '北科互動設計 - 2025 創新設計實驗設計引導課程 (Contributor)',
        client: 'IxDA 台灣互動設計協會',
        tags: '工作坊、學校、組織',
        date: '2025/11',
      },
      {
        name: 'Google Developer Festival - Gemini↑ 課程規劃 (Contributor)',
        client: '鐵坦科技 Tech Lead',
        tags: '工作坊、組織',
        date: '2025/11',
      },
    ],
  },
  {
    eyebrow: 'Awards',
    title: '競賽獎項與課程推廣',
    caption: '競賽成果與教育合作紀錄。',
    columns: [
      { key: 'kind', label: '類型' },
      { key: 'name', label: '項目／場域' },
      { key: 'role', label: '角色／說明' },
      { key: 'url', label: '連結', isLink: true },
    ],
    rows: [
      {
        kind: '競賽／黑客松',
        name: '臺大黑客松 — 台北市政府開放應用獎',
        role: 'Chatbot 聊天機器人（獲獎作品／應用方向）',
        url: null,
      },
      {
        kind: '課程／教育客戶',
        name: '股股學院｜加密貨幣課程',
        role: '課程推廣／行銷合作',
        url: null,
      },
      {
        kind: '演講／工作坊總表',
        name: 'Notion｜演講與工作坊 Lectures & Workshops',
        role: '完整場次、標籤、業主（Clients）、日期與簡報連結（若在資料庫中有維護）',
        url: WORKSHOPS_AND_LECTURES_URL,
      },
    ],
  },
];
