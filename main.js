const translations = {
  tc: {
    lang: "zh-Hant-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "燒碟服務香港",
    intro:
      "提供香港本地燒碟服務，主要服務觀塘區及東九龍，可將你的檔案燒錄成光碟，適合交通投訴、影住駕、車cam片、資料備份或提交文件用途，最快即日起貨。收費 $20/1、$50/3，如需燒碟請 WhatsApp 56294422 查詢。",
    deliveryTitle: "交收方法可選：",
    deliveryOption1: "1. 觀塘面交/觀塘上門自取",
    deliveryOption2: "2. 平郵",
    deliveryOption3: "3. 順豐到付/自行安排速遞",
    deliveryOption4: "4. 東九龍區送遞(不可選時間)",
    detailsLabel: "服務資料",
    pillService: "香港服務",
    pillBurning: "CD burning",
    cta: "WhatsApp 56294422",
    ctaLabel: "透過 WhatsApp 56294422 查詢燒碟服務",
    whatsappText: "你好，我想查詢燒碟服務。"
  },
  en: {
    lang: "en-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "CD Burning Service Hong Kong",
    intro:
      "Local disc burning service in Hong Kong, mainly serving Kwun Tong District and East Kowloon. We can burn your files to disc for traffic complaints, dashcam videos, backups, or document submission, with same-day turnaround available. Pricing is $20/1 or $50/3. WhatsApp 56294422 for enquiries.",
    deliveryTitle: "Handover and delivery options:",
    deliveryOption1: "1. Kwun Tong handover / Kwun Tong self pick-up",
    deliveryOption2: "2. Local surface mail",
    deliveryOption3: "3. SF Express collect / arrange your own courier",
    deliveryOption4: "4. East Kowloon delivery (time cannot be selected)",
    detailsLabel: "Service details",
    pillService: "Hong Kong service",
    pillBurning: "CD burning",
    cta: "WhatsApp 56294422",
    ctaLabel: "Enquire about CD burning service on WhatsApp 56294422",
    whatsappText: "Hello, I would like to ask about the CD burning service."
  },
  sc: {
    lang: "zh-Hans-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "烧碟服务香港",
    intro:
      "提供香港本地烧碟服务，主要服务观塘区及东九龙，可将你的档案烧录成光碟，适合交通投诉、影住驾、车cam片、资料备份或提交文件用途，最快即日起货。收费 $20/1、$50/3，如需烧碟请 WhatsApp 56294422 查询。",
    deliveryTitle: "可选交收方式：",
    deliveryOption1: "1. 观塘面交 / 观塘上门自取",
    deliveryOption2: "2. 平邮",
    deliveryOption3: "3. 顺丰到付 / 自行安排快递",
    deliveryOption4: "4. 东九龙区送递（不可指定时间）",
    detailsLabel: "服务资料",
    pillService: "香港服务",
    pillBurning: "CD burning",
    cta: "WhatsApp 56294422",
    ctaLabel: "透过 WhatsApp 56294422 查询烧碟服务",
    whatsappText: "你好，我想查询烧碟服务。"
  }
};

const setLanguage = (lang) => {
  const copy = translations[lang] || translations.tc;

  document.documentElement.lang = copy.lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((binding) => {
      const [attr, key] = binding.split(":");
      element.setAttribute(attr, copy[key]);
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === lang)
    );
  });

  const cta = document.querySelector(".cta");
  cta.href = `https://wa.me/85256294422?text=${encodeURIComponent(
    copy.whatsappText
  )}`;
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});
