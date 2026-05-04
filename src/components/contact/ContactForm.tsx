'use client';

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitStatus({
        success: true,
        message: '您的訊息已成功送出，我們會盡快與您聯絡！',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: `發生錯誤 ${error}，請稍後再試。`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="font-mono-label">Get in touch · 05</div>
      <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">傳送訊息</h3>

      {submitStatus && (
        <div
          className={`mt-8 border-l-2 px-5 py-4 ${
            submitStatus.success
              ? 'border-[var(--accent)] bg-[var(--bg-2)] text-[var(--ink)]'
              : 'border-[var(--accent)] bg-[var(--bg-2)] text-[var(--accent-ink)]'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-mono-label">
              姓名 / Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="field mt-2"
              placeholder="您的姓名"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="field mt-2"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-mono-label">
              電話 / Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="field mt-2"
              placeholder="選填"
            />
          </div>

          <div>
            <label htmlFor="subject" className="font-mono-label">
              主題 / Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="field mt-2"
            >
              <option value="">請選擇主題</option>
              <option value="網站開發">網站開發</option>
              <option value="品牌設計">品牌設計</option>
              <option value="UI/UX設計">UI/UX設計</option>
              <option value="其他服務">其他服務</option>
              <option value="合作機會">合作機會</option>
              <option value="一般詢問">一般詢問</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="font-mono-label">
            訊息內容 / Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="field field-area mt-2"
            placeholder="跟我們聊聊您的專案、目標、預算或想法⋯"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[var(--line)] pt-8">
          <p className="text-sm text-[var(--muted)]">
            * 為必填欄位。我們通常在 24 小時內回覆。
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? '傳送中⋯' : '傳送訊息'}
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
