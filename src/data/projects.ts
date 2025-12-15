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
  }
  
  export const projects: Project[] = [
    {
      id: 'meowbti-quiz',
      title: '讀喵術：貓砂心理測驗',
      client: '超人氣媒體 Super Media',
      description: 'Mobile First 手機優先的互動式心理測驗網站，結合創意微互動與流暢動畫效果。',
      fullDescription: '為超人氣媒體開發的 Mobile First 互動式心理測驗網站。此專案採用手機優先的開發策略，與設計師密切合作，自行發想並實作多個微互動效果與動畫，大幅提升用戶體驗的趣味性與流暢度。除了前端開發工作外，也協助完成部分平面設計的 UX 完稿，確保視覺與互動的完美結合。網站提供豐富的互動體驗，讓用戶透過有趣的測驗了解自己的個性特質。特別註明：上傳功能目前已停用。',
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
      id: 'finance-app-design',
      title: '個人財務管理應用設計',
      client: '智慧財富管理',
      description: '現代化金融應用的 UI/UX 設計，具有直觀的儀表板和數據視覺化。',
      fullDescription: '為領先的金融科技公司設計的移動應用界面，專注於個人財務管理。我們創建了直觀且美觀的用戶界面，結合了強大的數據視覺化和易於使用的財務工具。設計過程包括詳細的用戶研究、使用者旅程規劃和反覆的原型測試。最終產品不僅美觀，還提供了出色的用戶體驗，幫助用戶輕鬆管理他們的財務。',
      category: 'design',
      industry: 'finance',
      image: '/portfolio-website/images/projects/finance-1.jpg',
      images: [
        '/portfolio-website/images/projects/finance-1.jpg',
        '/portfolio-website/images/projects/finance-2.jpg',
        '/portfolio-website/images/projects/finance-3.jpg',
      ],
      featured: true,
      date: '2025-01',
    },
    {
      id: 'restaurant-branding',
      title: '餐廳品牌視覺識別設計',
      client: '福味居餐廳',
      description: '為高級餐廳設計的完整品牌視覺識別系統，包括標誌、菜單和網站設計。',
      fullDescription: '為新開業的高級餐廳打造的全方位品牌視覺識別系統。項目包括標誌設計、色彩方案、印刷品設計（名片、菜單、宣傳冊）以及完整的網站設計和開發。我們的設計理念融合了現代美學與傳統飲食文化，創造出獨特且令人難忘的品牌形象。網站設計著重於展示餐廳的菜品和環境，同時提供便捷的訂位功能。',
      category: 'design',
      industry: 'food',
      image: '/portfolio-website/images/projects/restaurant-1.jpg',
      images: [
        '/portfolio-website/images/projects/restaurant-1.jpg',
        '/portfolio-website/images/projects/restaurant-2.jpg',
        '/portfolio-website/images/projects/restaurant-3.jpg',
      ],
      featured: true,
      date: '2024-12',
      url: 'https://example.com/restaurant',
    },
    {
      id: 'futual-website',
      title: '共生未來官網開發',
      client: '共生未來',
      description: '與設計師合作開發的現代化企業官網，展現品牌理念與核心價值。',
      fullDescription: '與設計師合作為共生未來開發的企業官網。網站採用 Next.js 和 Tailwind CSS 構建，具有流暢的動畫效果和互動式設計元素。我們專注於創造一個能夠清晰傳達品牌理念和核心價值的數位平台，同時提供優雅的用戶體驗。網站設計強調視覺層次和內容可讀性，確保訪客能夠輕鬆了解公司的使命和服務。',
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
      id: 'education-platform',
      title: '線上教育平台',
      client: '知識樹教育中心',
      description: '全方位的線上學習平台，整合課程管理、直播教學和學習進度追蹤。',
      fullDescription: '為教育機構開發的綜合性線上學習平台。該平台使用 Next.js 和 Tailwind CSS 構建，包含課程管理系統、視頻串流功能、互動式練習和學習進度追蹤。我們特別注重平台的易用性和無障礙設計，確保所有用戶（包括有特殊需求的學生）都能充分利用平台資源。此外，平台還具備響應式設計，可在各種設備上提供一致的學習體驗。',
      category: 'website',
      industry: 'education',
      image: '/portfolio-website/images/projects/education-1.jpg',
      images: [
        '/portfolio-website/images/projects/education-1.jpg',
        '/portfolio-website/images/projects/education-2.jpg',
      ],
      featured: true,
      date: '2024-10',
      url: 'https://example.com/education-platform',
    },
    {
      id: 'retail-app-design',
      title: '零售電商應用設計',
      client: '時尚精品店',
      description: '專為精品零售店設計的電商應用，提供流暢的購物體驗和會員管理。',
      fullDescription: '為高級精品零售商設計的電商應用界面，將實體店購物體驗與數位購物便利性相結合。設計著重於產品展示、個性化推薦和無縫結帳流程。我們運用了最新的UI/UX設計趨勢，並進行了多輪用戶測試以優化購物流程。最終的設計不僅美觀時尚，還提供了流暢的用戶體驗，大幅提高了轉換率和用戶滿意度。',
      category: 'design',
      industry: 'retail',
      image: '/portfolio-website/images/projects/retail-1.jpg',
      images: [
        '/portfolio-website/images/projects/retail-1.jpg',
        '/portfolio-website/images/projects/retail-2.jpg',
      ],
      featured: true,
      date: '2024-09',
    },
  ];
  
  export const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
  };
  
  export const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };
  
  export const getProjectsByCategory = (category: Project['category'] | null) => {
    if (!category) return projects;
    return projects.filter(project => project.category === category);
  };
  
  export const getProjectsByIndustry = (industry: Project['industry'] | null) => {
    if (!industry) return projects;
    return projects.filter(project => project.industry === industry);
  };
  
  export const filterProjects = (
    category: Project['category'] | null,
    industry: Project['industry'] | null
  ) => {
    let filteredProjects = projects;
    
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