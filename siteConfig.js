/**
 * AL BADR FOR IMPORT & EXPORT - Site Configuration
 * 
 * جميع الروابط وبيانات الدفع والتواصل مجمعة هنا في مكان واحد لسهولة التعديل مستقبلاً.
 * ملاحظة: في مرحلة تصميم الـ UI الحالية، العناصر غير مفعّلة وظيفيًا ولا تنفّذ أي إجراء خارجي.
 */

export const siteConfig = {
  company: {
    nameAr: "البدر للاستيراد والتصدير",
    nameEn: "AL BADR FOR IMPORT & EXPORT",
    fullNameAr: "شركة البدر للاستيراد والتصدير ش.م.م",
    fullNameEn: "AL BADR FOR IMPORT & EXPORT S.A.E",
    sloganAr: "معًا.. نحو مستقبل أفضل",
    sloganEn: "Together.. Towards a Better Future",
    descriptionAr: "رواد في مجال الاستيراد والتصدير والتجارة الدولية للمحاصيل والسلع الزراعية بأعلى معايير الجودة العالمية.",
    descriptionEn: "Leaders in import, export, and international trade of agricultural commodities with global quality standards.",
    logo: "./logo.jpeg",
  },
  
  // الروابط الرسمية المفعلة
  links: {
    officialWebsite: "https://albadr-co.com",
    facebook: "https://www.facebook.com/share/1CD3wPYG4r/",
    whatsapp: "https://wa.me/201090202062",
    googleReviews: "https://g.page/r/CVrJLBZkpfQ6EBM/review",
    googleMaps: "https://maps.app.goo.gl/iHnxEnMg4FUuf2rY8",
    instaPay: "https://ipn.eg/S/ahmed100200/instapay/5YcYhW",
    contactPhone: "tel:01090202062"
  },

  // بيانات الدفع
  payments: {
    vodafoneCash: {
      pageUrl: "vodafone.html",
      wallets: [
        {
          id: 1,
          nameAr: "محفظة فودافون كاش 1",
          phone: "010190202062",
          iconType: "wallet" // محفظة مالية
        },
        {
          id: 2,
          nameAr: "محفظة فودافون كاش 2",
          phone: "01093185105",
          iconType: "phone" // هاتف ذكي
        },
        {
          id: 3,
          nameAr: "محفظة فودافون كاش 3",
          phone: "01015494362",
          iconType: "card" // بطاقة مصرفية
        },
        {
          id: 4,
          nameAr: "محفظة فودافون كاش 4",
          phone: "01063067079",
          iconType: "coins" // رمز مالي وعملات
        },
        {
          id: 5,
          nameAr: "محفظة فودافون كاش 5",
          phone: "01036582615",
          iconType: "shield" // أمان ومعاملات
        },
        {
          id: 6,
          nameAr: "محفظة فودافون كاش 6",
          phone: "01042419478",
          iconType: "qrcode" // رمز دفع سريع
        }
      ],
      // توليد كود التحويل تلقائياً بناءً على رقم الهاتف: *9*7*رقم_الهاتف*0#
      getTransferCode: (phone) => `*9*7*${phone}*0#`,
      // رابط الاتصال tel: المشفر للـ QR Code وزر الاتصال (*9*7*رقم_الهاتف*0%23)
      getTelUri: (phone) => `tel:*9*7*${phone}*0%23`
    },
    instaPay: {
      link: "https://ipn.eg/S/ahmed100200/instapay/5YcYhW",
      ipaAddress: "ahmed100200@instapay",
      accountName: "AL BADR IMPORT & EXPORT",
      instructionsAr: "افتح الرابط أو تطبيق إنستا باي لإتمام التحويل اللحظي لحساب البدر.",
      instructionsEn: "Open link or InstaPay app to complete the instant payment.",
      qrCode: null,
    }
  },

  // بيانات التواصل
  contact: {
    phone: "01090202062",
    email: "info@albadr-co.com",
    addressAr: "جمهورية مصر العربية",
    addressEn: "Egypt",
  }
};
