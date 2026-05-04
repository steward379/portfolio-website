export interface Project {
    id: string;
    title: string;
    client: string;
    description: string;
    fullDescription?: string;
    category: 'website' | 'design';
    industry: 'healthcare' | 'finance' | 'food' | 'technology' | 'education' | 'retail';
    image: string;
    images?: string[];
    featured: boolean;
    date: string;
    url?: string;
    /** 設為 true 時不顯示於首頁精選、作品集列表，且不產生詳情頁 */
    hidden?: boolean;
  }

const isPublicProject = (p: Project) => !p.hidden;
  
  export const projects: Project[] = [
    {
      id: 'futual-website',
      title: '共生未來官網開發',
      client: 'Futual 共生未來',
      description: '與設計師合作開發的現代化企業官網，展現品牌理念與核心價值。',
      fullDescription: '與設計師合作為 Futual 共生未來開發的企業官網。網站採用 Next.js 和 Tailwind CSS 構建，具有流暢的動畫效果和互動式設計元素。我們專注於創造一個能夠清晰傳達品牌理念和核心價值的數位平台，同時提供優雅的用戶體驗。網站設計強調視覺層次和內容可讀性，確保訪客能夠輕鬆了解公司的使命和服務。<br/><br/><small>前端：Steward (創辦人)、Timothy (合作前端工程師)<br/>設計：Futual 團隊主理人</small>',
      category: 'website',
      industry: 'technology',
      image: '/portfolio-website/Futual_main.png',
      images: [
        '/portfolio-website/Futual_1.png',
        '/portfolio-website/Futual_2.png',
        '/portfolio-website/Futual_3.png',
      ],
      featured: true,
      date: '2024-11',
      url: 'https://futual.co/',
    },
    {
      id: 'aromase-shampoo',
      title: '艾瑪絲洗髮精：職場壓力心理測驗',
      client: 'Supermedia 超人氣媒體',
      description: 'Mobile First 手機優先的互動式行銷網站，整合客戶證言影片、試用表單與職場壓力心理測驗。',
      fullDescription: '為 Supermedia 超人氣媒體開發的 Mobile First 互動式行銷網站。此專案採用手機優先的開發策略，整合多項功能包括客戶證言影片展示、試用申請表單以及職場壓力心理測驗，創造完整的用戶體驗流程。網站設計以清新自然的視覺風格呈現產品特色，透過互動式測驗吸引用戶參與，並引導完成試用申請，有效提升品牌曝光與轉換率。<br/><br/><small>前端：Timothy (合作前端工程師)<br/>後端、雲端、設計：Supermedia 團隊</small>',
      category: 'website',
      industry: 'retail',
      image: '/portfolio-website/aromase_1.png',
      images: [
        '/portfolio-website/aromase_1.png',
        '/portfolio-website/aromase_2.png',
        '/portfolio-website/aromase_3.png',
        '/portfolio-website/aromase_4.png',
        '/portfolio-website/aromase_5.png',
        '/portfolio-website/aromase_6.png',
        '/portfolio-website/aromase_7.png',
      ],
      featured: true,
      date: '2025-03',
      url: 'https://event.ttshow.tw/scalp_dandruff',
    },
    {
      id: 'meowbti-quiz',
      title: '鐵鎚牌貓砂：貓咪到底在喵什麼？心理測驗',
      client: 'supermedia 超人氣媒體',
      description: 'Mobile First 手機優先的互動式心理測驗網站，結合創意微互動與流暢動畫效果。',
      fullDescription: '為 supermedia 超人氣媒體開發的 Mobile First 互動式心理測驗網站。此專案採用手機優先的開發策略，與設計師密切合作，自行發想並實作多個微互動效果與動畫，大幅提升用戶體驗的趣味性與流暢度。除了前端開發工作外，也協助完成部分平面設計的 UX 完稿，確保視覺與互動的完美結合。網站提供豐富的互動體驗，讓用戶透過有趣的測驗了解自己的個性特質。特別註明：上傳功能目前已停用。<br/><br/><small>前端設計、互動：Steward (創辦人)<br/>後端、雲端、視覺設計：Supermedia 團隊</small>',
      category: 'website',
      industry: 'technology',
      image: '/portfolio-website/Cat_main.png',
      images: [
        '/portfolio-website/Cat_main.png',
        '/portfolio-website/Cat_2.png',
        '/portfolio-website/Cat_3.png',
        '/portfolio-website/Cat_4.png',
      ],
      featured: true,
      date: '2025-02',
      url: 'https://event.ttshow.tw/whatsyourmeowbti',
    },
    {
      id: 'wealth-quiz-temple',
      title: '測測你是哪隻小財怪：台中廣天宮心理測驗',
      client: 'supermedia 超人氣媒體',
      description: 'Mobile First 手機優先的互動式財運測驗網站，融合傳統廟宇文化與現代互動設計。',
      fullDescription: '為 supermedia 超人氣媒體開發的 Mobile First 互動式財運心理測驗網站。此專案採用手機優先的開發策略，結合傳統廟宇文化元素與現代互動設計，創造出獨特的用戶體驗。與設計師密切合作，自行發想並實作多個微互動效果與動畫，包括載入動畫、測驗流程動畫以及結果頁面的視覺呈現。網站採用傳統紅金配色與廟宇建築元素，讓用戶透過有趣的測驗了解自己的財運特質，並引導參與財神借庫活動。<br/><br/><small>前端設計、互動：Steward (創辦人)<br/>後端、雲端：Ming (合作工程師)<br/>視覺設計：Supermedia 團隊</small>',
      category: 'website',
      industry: 'finance',
      image: '/portfolio-website/temple_4.png',
      images: [
        '/portfolio-website/temple_4.png',
        '/portfolio-website/temple_3.png',
        '/portfolio-website/temple_2.png',
        '/portfolio-website/temple_1.png',
      ],
      featured: true,
      date: '2025-01',
      url: 'https://www.gtg.org.tw/psychological',
    },
    {
      id: 'office-worker-escape',
      title: '社畜大逃殺：職場求生挑戰 2025 文博會',
      client: 'supermedia 超人氣媒體',
      description: 'Mobile First 手機優先的互動式職場生存遊戲，重現職場真實情境與社畜生活體驗。',
      fullDescription: '為 supermedia 超人氣媒體開發的 Mobile First 互動式職場生存遊戲。此專案採用手機優先的開發策略，以幽默詼諧的方式重現職場中的各種奇葩 NPC 與真實情境，讓玩家體驗社畜生活的挑戰。與設計師密切合作，自行發想並實作多個微互動效果與動畫，包括角色選擇、遊戲進行中的動態效果、生存計時系統以及遊戲結束後的結果呈現。遊戲結合排行榜功能，增加互動性與競爭感，讓用戶在輕鬆的遊戲體驗中產生共鳴。<br/><br/><small>前後端、雲端：Ming (合作工程師)<br/>遊戲：Supermedia 合作 Unity 工程師<br/>視覺設計：Supermedia 團隊</small>',
      category: 'website',
      industry: 'technology',
      image: '/portfolio-website/ghost_1.png',
      images: [
        '/portfolio-website/ghost_1.png',
        '/portfolio-website/ghost_2.png',
        '/portfolio-website/ghost_3.png',
        '/portfolio-website/ghost_4.png',
        '/portfolio-website/ghost_5.png',
      ],
      featured: true,
      date: '2024-12',
      url: 'https://bowlcutlife2025.ttshow.tw/',
    },
    {
      id: 'dr-growup-website',
      title: '黃世綱：剛剛好醫師 兒童內分泌權威 官方網站與文章',
      client: 'FUTUAL 共生未來',
      description: '為兒童內分泌權威醫師打造的專業醫療官網，整合醫師介紹、服務內容、文章專欄與預約功能。',
      fullDescription: '為 FUTUAL 共生未來開發的兒童內分泌權威醫師官方網站。此專案為黃世綱醫師打造專業的醫療品牌形象，網站包含醫師介紹、服務內容說明、長高秘訣專欄文章系統以及預約功能。採用清新友善的視覺設計，結合可愛的卡通角色元素，讓醫療資訊更容易親近，同時保持專業權威的形象。網站設計強調內容可讀性與用戶體驗，幫助家長更容易了解兒童成長相關資訊。<br/><br/><small>前端：John (合作工程師)<br/>雲端、後端：Joe (合作工程師)<br/>設計：FUTUAL 共生未來團隊</small>',
      category: 'website',
      industry: 'healthcare',
      image: '/portfolio-website/doctor-1.png',
      images: [
        '/portfolio-website/doctor-1.png',
        '/portfolio-website/doctor-2.png',
        '/portfolio-website/doctor-3.png',
        '/portfolio-website/doctor-4.png',
      ],
      featured: true,
      date: '2024-10',
      url: 'https://www.drgrowup.com.tw/',
    },
    {
      id: 'dr-amber-website',
      title: 'Dr.Amber 官方網站與文章',
      client: 'FUTUAL 共生未來',
      description: '為兒童成長專科醫師打造的專業醫療官網，整合醫師介紹、服務內容、文章專欄與線上預約功能。',
      fullDescription: '為 FUTUAL 共生未來開發的兒童成長專科醫師官方網站。此專案為 Dr.Amber 醫師打造專業的醫療品牌形象，網站包含醫師介紹、服務內容說明、成長小教室專欄文章系統以及線上預約功能。採用溫暖親和的視覺設計，結合柔和的色彩與友善的插畫元素，讓醫療資訊更容易親近，同時保持專業權威的形象。網站設計強調內容可讀性與用戶體驗，幫助家長更容易了解兒童成長與體態健康相關資訊。<br/><br/><small>前端：John (合作工程師)<br/>雲端、後端：Joe (合作工程師)<br/>設計：FUTUAL 共生未來團隊</small>',
      category: 'website',
      industry: 'healthcare',
      image: '/portfolio-website/Amber-1.png',
      images: [
        '/portfolio-website/Amber-1.png',
        '/portfolio-website/Amber-2.png',
        '/portfolio-website/Amber-3.png',
        '/portfolio-website/Amber-4.png',
      ],
      featured: true,
      date: '2024-09',
    },
    {
      id: 'restaurant-branding',
      hidden: true,
      title: '餐廳品牌視覺識別設計',
      client: '福味居餐廳',
      description: '為高級餐廳設計的完整品牌視覺識別系統，包括標誌、菜單和網站設計。',
      fullDescription: '為新開業的高級餐廳打造的全方位品牌視覺識別系統。項目包括標誌設計、色彩方案、印刷品設計（名片、菜單、宣傳冊）以及完整的網站設計和開發。我們的設計理念融合了現代美學與傳統飲食文化，創造出獨特且令人難忘的品牌形象。網站設計著重於展示餐廳的菜品和環境，同時提供便捷的訂位功能。',
      category: 'design',
      industry: 'food',
      image: '/portfolio-website/portfolio-website/projects/restaurant-1.jpg',
      images: [
        '/portfolio-website/portfolio-website/projects/restaurant-1.jpg',
        '/portfolio-website/portfolio-website/projects/restaurant-2.jpg',
        '/portfolio-website/portfolio-website/projects/restaurant-3.jpg',
      ],
      featured: true,
      date: '2024-12',
      url: 'https://example.com/restaurant',
    },
    {
      id: 'education-platform',
      hidden: true,
      title: '線上教育平台',
      client: '知識樹教育中心',
      description: '全方位的線上學習平台，整合課程管理、直播教學和學習進度追蹤。',
      fullDescription: '為教育機構開發的綜合性線上學習平台。該平台使用 Next.js 和 Tailwind CSS 構建，包含課程管理系統、視頻串流功能、互動式練習和學習進度追蹤。我們特別注重平台的易用性和無障礙設計，確保所有用戶（包括有特殊需求的學生）都能充分利用平台資源。此外，平台還具備響應式設計，可在各種設備上提供一致的學習體驗。',
      category: 'website',
      industry: 'education',
      image: '/portfolio-website/portfolio-website/projects/education-1.jpg',
      images: [
        '/portfolio-website/portfolio-website/projects/education-1.jpg',
        '/portfolio-website/portfolio-website/projects/education-2.jpg',
      ],
      featured: true,
      date: '2024-10',
      url: 'https://example.com/education-platform',
    },
    {
      id: 'retail-app-design',
      hidden: true,
      title: '零售電商應用設計',
      client: '時尚精品店',
      description: '專為精品零售店設計的電商應用，提供流暢的購物體驗和會員管理。',
      fullDescription: '為高級精品零售商設計的電商應用界面，將實體店購物體驗與數位購物便利性相結合。設計著重於產品展示、個性化推薦和無縫結帳流程。我們運用了最新的UI/UX設計趨勢，並進行了多輪用戶測試以優化購物流程。最終的設計不僅美觀時尚，還提供了流暢的用戶體驗，大幅提高了轉換率和用戶滿意度。',
      category: 'design',
      industry: 'retail',
      image: '/portfolio-website/portfolio-website/projects/retail-1.jpg',
      images: [
        '/portfolio-website/portfolio-website/projects/retail-1.jpg',
        '/portfolio-website/portfolio-website/projects/retail-2.jpg',
      ],
      featured: true,
      date: '2024-09',
    },
  ];
  
  export const getFeaturedProjects = () => {
    return projects.filter((p) => p.featured && isPublicProject(p));
  };

  export const getProjectById = (id: string) => {
    return projects.find((project) => project.id === id);
  };

  /** 僅供詳情頁／路由：隱藏專案回傳 undefined */
  export const getPublicProjectById = (id: string) => {
    const p = getProjectById(id);
    return p && isPublicProject(p) ? p : undefined;
  };
  
  export const getProjectsByCategory = (category: Project['category'] | null) => {
    const visible = projects.filter(isPublicProject);
    if (!category) return visible;
    return visible.filter((project) => project.category === category);
  };
  
  export const getProjectsByIndustry = (industry: Project['industry'] | null) => {
    const visible = projects.filter(isPublicProject);
    if (!industry) return visible;
    return visible.filter((project) => project.industry === industry);
  };
  
  export const filterProjects = (
    category: Project['category'] | null,
    industry: Project['industry'] | null
  ) => {
    let filteredProjects = projects.filter(isPublicProject);
    
    if (category) {
      filteredProjects = filteredProjects.filter(
        project => project.category === category
      );
    }
    
    if (industry) {
      filteredProjects = filteredProjects.filter(
        project => project.industry === industry
      );
    }
    
    return filteredProjects;
  };