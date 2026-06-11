const translations = {
  tc: {
    lang: "zh-Hant-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "燒碟服務香港",
    intro:
      "提供香港本地燒碟服務，服務範圍覆蓋全香港，可將你的檔案燒錄成光碟。",
    useCasesLabel: "適用用途",
    useCase1: "車cam片燒碟：交通投訴、影住駕、交通意外證據",
    useCase2: "法律文件、法庭證據呈堂",
    useCase3: "交功課、做 project",
    useCase4: "資料備份、提交文件",
    pricingLine: "最快即日起貨 · 收費 $20/1、$50/3",
    promoLine: "訂購 5 隻光碟或以上，包平郵上門",
    deliveryTitle: "交收方法可選：",
    deliveryOption1: "1. 觀塘面交/觀塘上門自取",
    deliveryOption2: "2. 平郵",
    deliveryOption3: "3. 順豐到付/自行安排速遞",
    deliveryOption4: "4. 東九龍區送遞(不可選時間)",
    detailsLabel: "服務資料",
    pillFreeShipping: "5隻起包郵",
    pillService: "香港服務",
    pillBurning: "CD burning",
    ctaPrimary: "WhatsApp 查詢",
    ctaSecondary: "56294422",
    stickyCta: "立即查詢",
    ctaLabel: "透過 WhatsApp 56294422 查詢燒碟服務",
    whatsappText: "你好，我想查詢燒碟服務。"
  },
  en: {
    lang: "en-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "CD Burning Service Hong Kong",
    intro:
      "Local disc burning service across Hong Kong. We burn your files to disc.",
    useCasesLabel: "Common uses",
    useCase1:
      "Dashcam videos for traffic complaints, Safe Driving, or accident evidence",
    useCase2: "Legal documents and court evidence",
    useCase3: "Homework and school projects",
    useCase4: "File backup and document submission",
    pricingLine: "Same-day turnaround available · $20/1 or $50/3",
    promoLine: "Order 5 discs or more — free surface mail to your door",
    deliveryTitle: "Handover and delivery options:",
    deliveryOption1: "1. Kwun Tong handover / Kwun Tong self pick-up",
    deliveryOption2: "2. Local surface mail",
    deliveryOption3: "3. SF Express collect / arrange your own courier",
    deliveryOption4: "4. East Kowloon delivery (time cannot be selected)",
    detailsLabel: "Service details",
    pillFreeShipping: "Free delivery on 5+",
    pillService: "Hong Kong service",
    pillBurning: "CD burning",
    ctaPrimary: "WhatsApp enquiry",
    ctaSecondary: "56294422",
    stickyCta: "Enquire now",
    ctaLabel: "Enquire about CD burning service on WhatsApp 56294422",
    whatsappText: "Hello, I would like to ask about the CD burning service."
  },
  sc: {
    lang: "zh-Hans-HK",
    eyebrow: "Hong Kong CD Burning Service",
    title: "烧碟服务香港",
    intro:
      "提供香港本地烧碟服务，服务范围覆盖全香港，可将你的档案烧录成光碟。",
    useCasesLabel: "适用用途",
    useCase1: "车cam片烧碟：交通投诉、影住驾、交通意外证据",
    useCase2: "法律文件、法庭证据呈堂",
    useCase3: "交功课、做 project",
    useCase4: "资料备份、提交文件",
    pricingLine: "最快即日起货 · 收费 $20/1、$50/3",
    promoLine: "订购 5 只光碟或以上，包平邮上门",
    deliveryTitle: "可选交收方式：",
    deliveryOption1: "1. 观塘面交 / 观塘上门自取",
    deliveryOption2: "2. 平邮",
    deliveryOption3: "3. 顺丰到付 / 自行安排快递",
    deliveryOption4: "4. 东九龙区送递（不可指定时间）",
    detailsLabel: "服务资料",
    pillFreeShipping: "5只起包邮",
    pillService: "香港服务",
    pillBurning: "CD burning",
    ctaPrimary: "WhatsApp 查询",
    ctaSecondary: "56294422",
    stickyCta: "立即查询",
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

  document.querySelectorAll(".cta, .cta-sticky").forEach((cta) => {
    cta.href = `https://wa.me/85256294422?text=${encodeURIComponent(
      copy.whatsappText
    )}`;
  });
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});
