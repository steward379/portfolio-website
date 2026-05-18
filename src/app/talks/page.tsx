import Link from 'next/link';
import MagnifierSection from '@/components/ui/MagnifierSection';
import { heroLoupeSourceBackground } from '@/lib/heroGradient';

export const metadata = {
  title: '社群教學 | 縮小檢視工作室 · Setup Studio',
  description:
    '星際廢話線｜社群經營、媒體撰稿、受訪與講述、競賽與課程合作 — 表格整理。',
};

// 簡化的資料結構，避免 build 時的複雜度問題
const heroIntro = {
  titleZh: '橫跨宇宙的星際廢話線',
  subtitle: '行銷、設計、社群、區塊鏈',
};

const COMMUNITY_TEACHING_NOTION_URL =
  'https://murmurline.notion.site/d126ef7a6c16486b80b524cb9197f849?pvs=143';

const WORKSHOPS_AND_LECTURES_URL =
  'https://murmurline.notion.site/f16838ce7f0a44f2852f85a340f7b23e?v=a14d26370e4c4d868bd42f1aab5e3bbc&pvs=18';

const bioParagraph =
  '國立政治大學數位內容所肄、國立臺灣科技大學應用外語系畢、工商業設計系肄、創業管理學程。神明特急有限公司負責人、網路名星際廢話線 (Steward)，擅長跨領域策略合作與內容行銷設計，替客戶規劃社群、設計與網站服務。連續網路創業家，實為視覺設計與翻譯出身，但擅長文字文案，社群內容行銷並有基礎網站技術與設計整合力，擁有約 12k 追蹤臉書設計迷因 meme 自媒體「星際廢話線」，部落格 Medium、有 Podcast。代表作有「賣鬧！你才不是什麼斜槓青年」書評、「設計師轉工程師」懶人包等。自媒體專欄作品散見 udn 鳴人堂、女人迷、科技報橘、「故事：寫給所有人的歷史」等。';

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono-label">{eyebrow}</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
          </div>
          <div className="col-span-12 md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SimpleTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="teaching-table-wrap">
      <table className="teaching-table">
        <caption className="teaching-table-caption">{caption}</caption>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  {cell.startsWith('http') ? (
                    <a
                      href={cell}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline break-all text-[var(--ink)]"
                    >
                      {cell}
                    </a>
                  ) : cell === '—' ? (
                    <span className="text-[var(--muted)]">—</span>
                  ) : (
                    <span className="text-[var(--ink-2)]">{cell}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TalksPage() {
  // 行銷經驗資料
  const marketingExperience = {
    headers: ['專案／公司名稱', '職位', '業主', '標籤'],
    rows: [
      ['Guest What 好客樹共享出租平台', 'Co-Founder (Design, Marketing, BD)', 'Self-initiated', 'Appworks 創業加速器 #9 數位時代專訪'],
      ['JustPrint 微幕列印版面設計印刷服務', 'Co-Founder (Design)', 'Self-initiated', 'Appworks 創業加速器 #9'],
      ['Coolla 露營點數串聯整合 App 服務', 'Co-Founder (Design)', 'Self-initiated', '期待解鎖'],
      ['Scoop 私戲平台', 'Co-Founder (Design, Product)', 'Self-initiated、實習新村', '期待解鎖'],
      ['Triptrip 攻堅旅行社計畫', 'Founder', 'Self-initiated', '台科大創業競賽第三名'],
      ['CBA 亞洲區塊鏈學院', 'BD', '介紹區塊鏈課程予技術人', '巴克夏科技 BuckChaf'],
      ['重力公主 Hearing Action YouTube 頻道', '行銷顧問', '社群行銷、人力介紹', '重力公主 Hearing Action — Youtuber'],
      ['Blocto (portto) 門戶科技區塊鏈錢包', '行銷顧問', '社群行銷、人力介紹', '門戶科技 Blocto, portto'],
      ['庶加林上線管理平台', '行銷負責視覺設計', '社群展廣合作、Logo', '奇異果文創'],
      ['北一區 Moocs、政大 Moocs', '社群行銷負責設計', 'Moocs 措施', '國立政治大學'],
      ['台北眷村文化館', '社群設計執行', '打工展場／工作坊／居民保存', '台北文化局、眷村保存館'],
      ['實體線索媒體', '社群經營、設計', '社群經營', '實體線索媒體'],
    ],
  };

  // 社群渠道資料
  const socialChannels = {
    headers: ['類型', '項目', '定位／說明', '連結'],
    rows: [
      ['長文章／論述', 'Medium｜星際廢話線', '部落格與專題寫作入口（Rogerpilot publication）', 'https://medium.com/%E6%A9%AB%E8%B7%A8%E5%AE%87%E5%AE%99%E7%9A%84%E5%BB%A2%E8%A9%B1%E7%B7%B9%E5%98%B4%E7%A0%B2/rogerpilot/home'],
      ['音訊節目', 'Podcast｜Firstory｜星際廢話線', '線上電台節目／訂閱集合頁', 'https://open.firstory.me/user/murmurline'],
      ['社群經營', 'Facebook｜星際廢話線粉絲專頁', '約 11k（頁面自述；數字會隨時間變動）', 'https://www.facebook.com/murmurline/'],
      ['媒體露出', '動區區塊鏈媒體 BlockTempo', 'NFT／Oursong 相關報導引用', 'https://www.blocktempo.com/nft-oursong-social-token-ourcoin-will-launch-in-august/'],
      ['創作者經濟', 'Oursong｜鄒柏軒 @murmurline87', '作品／社群代幣介面（需下載 App 後續操作）', 'https://www.oursong.com/@murmurline87'],
      ['語音社群', 'Clubhouse｜@murmurline', '約 2.2k（頁面自述）', 'https://www.clubhouse.com/@murmurline'],
    ],
  };

  // 演講與工作坊資料
  const teachingWorkshops = {
    headers: ['主題／內容', '業主 Clients', 'Tags', 'Date'],
    rows: [
      ['台大 d-school 設計設計：開放設計新觀點', '國立台灣大學 D-School 設計學院', '學校、溫暖課程、工作坊', '—'],
      ['NFT 與 DAO', '國立台灣大學 兆豐應用設計系', '學校、正式課程、演講', '2021'],
      ['設計社群行銷 - 新創設計 x 設計', 'Impact Hub 影響力製造所', '社群行銷', '2021'],
      ['Logo / CIS 基礎課程', '師大全人醫院', '學校、溫暖課程、工作坊', '—'],
      ['簡報設計課程', '台北市府公會', '組織、工作坊', '—'],
      ['AI 向基礎實訓練課', '國立台灣科技大學 雜談設計週', '學校、正式課程、工作坊', '—'],
      ['深度實踐宇宙設計課程', '國立彰化師大學 設計系', '學校、社團、工作坊', '—'],
      ['簡報設計', '百軒行政 Bi-Great Things', '組織、工作坊', '—'],
      ['創業與產品級課程實驗論壇', '國立政治大學 DCT 數位內容學士學位學程', '學校、演講', '—'],
      ['Photoshop 課程', '國立台灣科技大學 應用設計社', '視覺設計', '—'],
      ['北科互動設計 - 2025 創新設計實驗設計引導課程', 'IxDA 台灣互動設計協會', '工作坊、學校、組織', '2025/11'],
      ['Google Developer Festival - Gemini↑ 課程規劃', '鐵坦科技 Tech Lead', '工作坊、組織', '2025/11'],
    ],
  };

  // 第三方媒體專欄資料
  const mediaColumns = {
    headers: ['媒體', '標題', '連結'],
    rows: [
      ['科技報橘', '別鬧了，你才不是什麼斜槓青年！', 'https://buzzorange.com/techorange/2018/05/22/no-you-are-not-slash-youth/'],
      ['女人迷', '「想交女友，你需要另一個男性」從《星際終行》談母豬、自助餐與男性解放', 'https://womany.net/read/article/16476'],
      ['鳴人堂（聯合報）', '文組發言被嗆「不意外」強調單一價值的台灣社會是狼性還是沒人性？', 'https://opinion.udn.com/opinion/story/5749/5344935'],
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <MagnifierSection className="relative" data-spotlight>
        <div data-magnifier-stack className="relative pt-[140px] md:pt-[180px]">
          <div
            aria-hidden
            data-magnifier-source
            className="pointer-events-none absolute inset-0 -z-10"
            style={heroLoupeSourceBackground}
          />
          <div className="shell">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-6">
              <div className="col-span-12 md:col-span-3" data-reveal>
                <div className="eyebrow">Community</div>
              </div>
              <div className="col-span-12 md:col-span-9" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
                <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tight">
                  <span className="clip-reveal">
                    <span>社群教學</span>
                  </span>
                  <span className="clip-reveal">
                    <span className="font-display-italic">與創作軌跡</span>
                  </span>
                </h1>
                <p className="mt-6 font-display text-[clamp(1.35rem,3vw,2rem)] tracking-tight text-[var(--ink-2)]">
                  {heroIntro.titleZh}
                </p>
                <p className="mt-3 max-w-[55ch] text-[var(--muted)] md:text-[1.05rem]">{heroIntro.subtitle}</p>
                <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-[var(--ink-2)]">
                  以下將<strong className="font-medium text-[var(--ink)]">行銷渠道、撰稿、受訪／講述、視覺出版與競賽／課程／講座紀錄</strong>
                  以表格整理，連結皆可於新分頁開啟。完整 Notion 資料庫可透過下方按鈕查看。
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={COMMUNITY_TEACHING_NOTION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Notion 原版頁面
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                  <a
                    href={WORKSHOPS_AND_LECTURES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    演講與工作坊資料庫
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                  <Link href="/about" className="btn btn-ghost">
                    站內聯絡
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MagnifierSection>

      <Section eyebrow="Experience" title="行銷經驗與專案參與">
        <SimpleTable
          caption="創業、行銷、設計與產品開發的實務經歷。"
          headers={marketingExperience.headers}
          rows={marketingExperience.rows}
        />
      </Section>

      <Section eyebrow="Channels" title="自主社群與行銷渠道">
        <SimpleTable
          caption="自有／協作的發聲渠道與露出位置。"
          headers={socialChannels.headers}
          rows={socialChannels.rows}
        />
      </Section>

      <Section eyebrow="Education" title="教學與工作坊經歷">
        <SimpleTable
          caption="演講、工作坊、課程與教學活動紀錄。"
          headers={teachingWorkshops.headers}
          rows={teachingWorkshops.rows}
        />
      </Section>

      <Section eyebrow="Columns" title="第三方媒體專欄／撰稿">
        <SimpleTable
          caption="經編輯台發布的代表性稿件。"
          headers={mediaColumns.headers}
          rows={mediaColumns.rows}
        />
      </Section>

      <Section eyebrow="Bio" title="〔鄒柏軒 @murmurline〕">
        <p className="max-w-[68ch] text-[var(--ink-2)] leading-[1.85]">{bioParagraph}</p>
      </Section>
    </div>
  );
}