export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string; // URL to the image
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 'steward-tsou',
      name: 'Steward Tsou',
      role: 'Founder<br/>視覺與介面設計、前後端工程 Node.js/React、前端設計、社群行銷、文字文案寫作',
      bio: '5年以上設計與工程師合作接案經驗，並曾成立行銷公司與自媒體，目前跨足前後端工程，主要經驗在網站前端工程，並與 App 工程師、資深前後端工程師通力合作，給您完整從內容、社群、行銷、設計、網站乃至應用終端的完整數位體驗。',
      image: '/portfolio-website/profile.jpeg',
      socialLinks: {},
    },
    {
      id: 'timothy',
      name: 'Timothy',
      role: '合作工程師 (銀行乙方工程師)<br/>React 前端工程、Node.js 後端工程',
      bio: '3 年以上經驗的前端工程師，有完整硬體經驗與銀行端大型系統經驗，協助您打造成熟應用。',
      image: '/portfolio-website/team-2.jpg',
      socialLinks: {},
    },
    {
      id: 'ming',
      name: 'Ming',
      role: '合作工程師 (醫材甲方工程師)<br/>Node.js 後端工程、AWS/GCP/Azure 等雲端架構、React 前端工程',
      bio: '2 年以上經驗的後端工程師，職涯背景並有會計師牌照、金融產業業務經驗，並在醫材相關產業，熟捻第一線醫療中心合作需求、地端雲端調校架設。',
      image: '/portfolio-website/team-3.jpg',
      socialLinks: {},
    },
    {
      id: 'joe',
      name: 'Joe',
      role: '合作工程師（法律新創工程師）<br/>AI 營運架設、PHP/Laravel 後端工程、Wordpress',
      bio: '3 年以上後端工程師，熟悉傳統 PHP 現代架構與 Wordpress 架站，職涯包含停車場系統建置，AI 相關系統建置。',
      image: '/portfolio-website/team-4.jpg',
      socialLinks: {},
    },
    {
      id: 'John',
      name: 'John',
      role: '合作工程師（上市櫃硬體、Web3 前端工程師)',
      bio: '具有供應鏈背景、3 年以上經驗的前端工程師，並曾負責區塊鏈 DeFi 去中心化金融 Web3 前端開發、硬體業高度複雜內部系統等，經驗豐富、敏捷應對。',
      image: '/portfolio-website/team-6.jpeg',
      socialLinks: {},
    },
    {
      id: 'Xyloc',
      name: 'Xyloc',
      role: '合作系統架構公司、技術顧問',
      bio: '完整的開發人力與體驗，App 開發、韌體與大型系統皆可討論，知名外商資深工程師顧問。',
      image: '/portfolio-website/team-5.png',
      socialLinks: {},
    },
    {
      id: 'Futual',
      name: 'Futual',
      role: '合作資訊設計、SDGS永續與醫病關係創新公司',
      bio: '深厚資訊設計、視覺設計背景與經驗，結合設計研究與大量永續 SDGS、ESG 專案雨醫病關係跨領域經驗，與強大的動態設計團隊',
      image: '/portfolio-website/team-7.svg',
      socialLinks: {},
    }
  ];