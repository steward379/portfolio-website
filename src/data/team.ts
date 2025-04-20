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
      id: 'john-doe',
      name: '張志豪',
      role: '創意總監 / 創辦人',
      bio: '超過 10 年的設計經驗，帶領團隊創造無數令人難忘的品牌和數位體驗。',
      image: '/images/team-1.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 'jane-smith',
      name: '林美玲',
      role: '資深 UI/UX 設計師',
      bio: '專注於使用者體驗設計，擅長將複雜問題轉化為簡單、直觀的設計解決方案。',
      image: '/images/team-2.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 'mike-johnson',
      name: '王偉誠',
      role: '資深前端開發',
      bio: '熱衷於最新的網頁技術，專精於 React 和 Next.js，致力於打造高性能的使用者介面。',
      image: '/images/team-3.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 'sarah-williams',
      name: '陳怡君',
      role: '專案經理',
      bio: '擁有豐富的專案管理經驗，確保每個項目都能按時高質量地交付。',
      image: '/images/team-4.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
  ];