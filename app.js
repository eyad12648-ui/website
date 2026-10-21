/**
 * AL BADR FOR IMPORT & EXPORT - NFC Digital Business Card Script
 * 
 * ضوابط المرحلة الحالية (UI Design Only):
 * 1. جميع الأزرار والبطاقات والروابط عناصر تصميمية فقط، ولا تفتح أي صفحات أو روابط خارجية.
 * 2. ممنوع تشغيل أي وظيفة فعلية لفودافون كاش أو إنستا باي أو وسائل التواصل أو جوجل ماب أو التقييمات.
 * 3. لا يوجد window.open أو window.location أو نسخ فعلي أو إرسال بيانات.
 * 4. الحفاظ على المظهر التفاعلي (Hover, Visual states, Animations) دون تفعيل وظيفي حقيقي حتى يطلب المستخدم ذلك صراحة.
 * 5. دعم تعدد اللغات (العربية، الإنجليزية، الفرنسية) وتغيير اتجاه الصفحة RTL/LTR.
 * 6. تحديث سنة حقوق النشر تلقائياً.
 */

import { siteConfig } from './siteConfig.js';

// Dictionary for multilingual UI
const translations = {
  ar: {
    dir: "rtl",
    pageTitle: "AL BADR FOR IMPORT & EXPORT | كارت الأعمال الذكي NFC",
    headerTagline: "FOR IMPORT & EXPORT",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navProducts: "المنتجات",
    navContact: "تواصل معنا",
    heroBadge: "كارت الأعمال الرقمي الذكي • NFC",
    heroTitle: "كل ما تحتاجه في <span>مكان واحد</span>",
    heroSubtitle: "<span>تواصل اجتماعي</span> <span>•</span> <span>تحويل أموال</span> <span>•</span> <span>تقييمات</span>",
    heroDesc: "من خلال تقنية NFC يمكنك الوصول بسرعة إلى جميع روابطنا وخدماتنا بكل سهولة وبأعلى مستويات الأمان والسرعة.",
    ctaBtnText: "اضغط لفتح الموقع الرسمي",
    phonePromptText: "اضغط لفتح الموقع",
    secTitle: "روابطنا وخدماتنا",
    secSubDesc: "وصول سريع ومباشر لكافة منصاتنا الرقمية، قنوات التواصل، وتفاصيل الدفع الرسمية",
    catSocialTitle: "روابط التواصل والموقع",
    catPaymentTitle: "المدفوعات والحسابات",
    catExtraTitle: "خدمات إضافية",
    revTitle: "رأيك يهمنا",
    revDesc: "ساعدنا بتقييم تجربتك معنا على Google لمواصلة تقديم أعلى مستويات الخدمة والتميز التجاري.",
    revBtnText: "قيّمنا الآن",
    bannerHeadline: "معًا.. نحو مستقبل أفضل",
    bannerSubHeadline: "AL BADR FOR IMPORT & EXPORT • تجارة دولية بمعايير عالمية",
    footerName: "شركة البدر للاستيراد والتصدير",
    footerBio: "رواد في الاستيراد والتصدير والتجارة الدولية للمحاصيل والمنتجات الزراعية بأعلى معايير الجودة وموثوقية الشحن والتوريد.",
    footerColQuick: "روابط سريعة",
    footerColServices: "التجارة الدولية",
    footerTaglineBottom: "شركة البدر للاستيراد والتصدير ش.م.م"
  },
  en: {
    dir: "ltr",
    pageTitle: "AL BADR FOR IMPORT & EXPORT | Smart NFC Business Card",
    headerTagline: "FOR IMPORT & EXPORT",
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navContact: "Contact",
    heroBadge: "Digital Smart Business Card • NFC",
    heroTitle: "Everything You Need in <span>One Place</span>",
    heroSubtitle: "<span>Social Media</span> <span>•</span> <span>Payments</span> <span>•</span> <span>Reviews</span>",
    heroDesc: "Through NFC technology, you can instantly and securely access all our links, services, and official corporate channels.",
    ctaBtnText: "Click to Open Official Website",
    phonePromptText: "Tap to Open Website",
    secTitle: "Our Links & Services",
    secSubDesc: "Direct and instant access to all our digital platforms, contact channels, and official payment details.",
    catSocialTitle: "Social Media & Website",
    catPaymentTitle: "Payments & Accounts",
    catExtraTitle: "Additional Services",
    revTitle: "Your Opinion Matters",
    revDesc: "Help us by reviewing your experience with us on Google to ensure continuous excellence.",
    revBtnText: "Review Us Now",
    bannerHeadline: "Together.. Towards a Better Future",
    bannerSubHeadline: "AL BADR FOR IMPORT & EXPORT • World-Class International Trade",
    footerName: "AL BADR FOR IMPORT & EXPORT",
    footerBio: "Pioneers in agricultural commodities import, export, and global shipping with certified international quality standards.",
    footerColQuick: "Quick Links",
    footerColServices: "International Trade",
    footerTaglineBottom: "AL BADR FOR IMPORT & EXPORT S.A.E"
  },
  fr: {
    dir: "ltr",
    pageTitle: "AL BADR FOR IMPORT & EXPORT | Carte de Visite NFC Intelligente",
    headerTagline: "POUR L'IMPORTATION & L'EXPORTATION",
    navHome: "Accueil",
    navAbout: "À Propos",
    navProducts: "Produits",
    navContact: "Contact",
    heroBadge: "Carte de Visite Digitale • NFC",
    heroTitle: "Tout ce dont vous avez besoin au <span>même endroit</span>",
    heroSubtitle: "<span>Réseaux Sociaux</span> <span>•</span> <span>Paiements</span> <span>•</span> <span>Avis</span>",
    heroDesc: "Grâce à la technologie NFC, accédez rapidement et en toute sécurité à tous nos liens et services officiels.",
    ctaBtnText: "Ouvrir le Site Officiel",
    phonePromptText: "Appuyez pour ouvrir",
    secTitle: "Nos Liens & Services",
    secSubDesc: "Accès direct et instantané à toutes nos plateformes digitales et coordonnées de paiement officielles.",
    catSocialTitle: "Réseaux Sociaux & Site",
    catPaymentTitle: "Paiements & Comptes",
    catExtraTitle: "Services Additionnels",
    revTitle: "Votre Avis Compte",
    revDesc: "Aidez-nous en évaluant votre expérience avec nous sur Google pour continuer à vous offrir l'excellence.",
    revBtnText: "Évaluez-nous",
    bannerHeadline: "Ensemble.. Vers un Avenir Meilleur",
    bannerSubHeadline: "AL BADR FOR IMPORT & EXPORT • Commerce International d'Excellence",
    footerName: "AL BADR FOR IMPORT & EXPORT",
    footerBio: "Pionniers de l'import-export et du négoce international de produits agricoles aux normes mondiales.",
    footerColQuick: "Liens Rapides",
    footerColServices: "Commerce International",
    footerTaglineBottom: "AL BADR FOR IMPORT & EXPORT S.A.E"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Automatic Copyright Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });

    // Close drawer when clicking a mobile nav link
    const drawerLinks = mobileDrawer.querySelectorAll(".mobile-nav-link");
    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });
  }

  // 3. Language Switching Logic (RTL/LTR and Text replacement)
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedLang = e.currentTarget.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  function setLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    // Update active class
    langButtons.forEach(b => {
      if (b.getAttribute("data-lang") === lang) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    // Set document direction & language
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;
    document.body.setAttribute("dir", data.dir);
    document.title = data.pageTitle;

    // Apply translations to UI elements safely
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    };

    setTxt("headerTagline", data.headerTagline);
    setTxt("navHome", data.navHome);
    setTxt("navAbout", data.navAbout);
    setTxt("navProducts", data.navProducts);
    setTxt("navContact", data.navContact);

    setTxt("mobNavHome", data.navHome);
    setTxt("mobNavAbout", data.navAbout);
    setTxt("mobNavProducts", data.navProducts);
    setTxt("mobNavContact", data.navContact);

    setTxt("heroBadgeText", data.heroBadge);
    setTxt("heroTitle", data.heroTitle);
    setTxt("heroSubtitle", data.heroSubtitle);
    setTxt("heroDesc", data.heroDesc);
    setTxt("ctaBtnText", data.ctaBtnText);
    setTxt("phonePromptText", data.phonePromptText);

    setTxt("secTitle", data.secTitle);
    setTxt("secSubDesc", data.secSubDesc);
    setTxt("catSocialTitle", data.catSocialTitle);
    setTxt("catPaymentTitle", data.catPaymentTitle);
    setTxt("catExtraTitle", data.catExtraTitle);

    setTxt("revTitle", data.revTitle);
    setTxt("revDesc", data.revDesc);
    setTxt("revBtnText", data.revBtnText);

    setTxt("bannerHeadline", data.bannerHeadline);
    setTxt("bannerSubHeadline", data.bannerSubHeadline);

    setTxt("footerName", data.footerName);
    setTxt("footerBio", data.footerBio);
    setTxt("footerColQuick", data.footerColQuick);
    setTxt("footerColServices", data.footerColServices);
    setTxt("footerTaglineBottom", data.footerTaglineBottom);
  }

  // 4. Copy Vodafone Cash Number Functionality
  const btnCopyVf = document.getElementById("btnCopyVf");
  if (btnCopyVf) {
    btnCopyVf.addEventListener("click", async (e) => {
      e.preventDefault();
      const numberToCopy = siteConfig.payments.vodafoneCash.walletNumber;
      try {
        await navigator.clipboard.writeText(numberToCopy);
        const originalText = btnCopyVf.innerHTML;
        btnCopyVf.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>تم النسخ بنجاح!</span>
        `;
        btnCopyVf.style.backgroundColor = "var(--color-accent-gold)";
        btnCopyVf.style.color = "var(--color-primary-dark)";

        setTimeout(() => {
          btnCopyVf.innerHTML = originalText;
          btnCopyVf.style.backgroundColor = "";
          btnCopyVf.style.color = "";
        }, 2200);
      } catch (err) {
        console.error("Failed to copy wallet number:", err);
      }
    });
  }

  console.log("AL BADR NFC Digital Card Loaded Successfully with Active Links");
});
