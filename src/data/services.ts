export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string; // This will be the SVG path
  }
  
  export const services: Service[] = [
    {
      id: 'web-design',
      title: '網站設計',
      description: '我們創造現代、直觀且符合使用者體驗的網站設計，幫助您的品牌在數位世界脫穎而出。',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    },
    {
      id: 'web-development',
      title: '網站開發',
      description: '我們使用最新技術如 React、Next.js 和 Tailwind CSS 開發高效能、響應式的網站，確保跨裝置的絕佳體驗。',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX 設計',
      description: '透過深入的使用者研究和人性化設計，我們創造流暢且直觀的使用者體驗，提高轉換率和用戶滿意度。',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    },
    {
      id: 'branding',
      title: '品牌設計',
      description: '我們幫助企業建立獨特且一致的品牌形象，從標誌設計到整體視覺識別系統，為您打造難以忘懷的品牌記憶點。',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    },
  ];