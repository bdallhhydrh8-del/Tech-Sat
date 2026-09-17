const productsData = {
    router: {
        titleAr: "أجهزة التوجيه الشبكية (Routers)",
        titleEn: "Enterprise Network Routers",
        badgeAr: "أجهزة شبكات",
        badgeEn: "Networking Devices",
        image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200",
        descAr: "أجهزة توجيه احترافية مصممة للشركات والمؤسسات الكبرى لإدارة حركة البيانات بين الفروع، توفر استقراراً عالياً، سرعات نقل فائقة، ودعم بروتوكولات الأمان المتقدمة لضمان بيئة عمل محمية ومستقرة.",
        descEn: "Professional routers designed for major enterprises and corporations to manage data traffic between branches, offering high stability, lightning-fast transfer speeds, and advanced security protocols.",
        specs: [
            {
                labelAr: "سرعة المعالجة",
                labelEn: "Processing Speed",
                valAr: "رباعي النواة 1.8 جيجاهرتز",
                valEn: "Quad-core 1.8 GHz"
            },
            {
                labelAr: "منافذ التوصيل",
                labelEn: "Ports",
                valAr: "منافذ جيجابت إيثرنت + SFP+",
                valEn: "Gigabit Ethernet + SFP+ ports"
            },
            {
                labelAr: "الأمان والنظام",
                labelEn: "Security & System",
                valAr: "دعم VPN متقدم وجدار ناري مدمج",
                valEn: "Advanced VPN & Built-in Firewall"
            }
        ]
    },

    switch: {
        titleAr: "مفاتيح الشبكات المؤسسية (Network Switches)",
        titleEn: "Enterprise Network Switches",
        badgeAr: "بنية تحتية",
        badgeEn: "Infrastructure",
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        descAr: "مفاتيح شبكية عالية الأداء لربط أجهزة الحاسوب والخوادم والكاميرات ونقاط الوصول، مع توفير اتصال سريع وموثوق داخل المؤسسة وتأخير منخفض جداً.",
        descEn: "High-performance network switches for connecting computers, servers, cameras, and access points, providing fast, reliable internal connectivity with ultra-low latency.",
        specs: [
            {
                labelAr: "عدد المنافذ",
                labelEn: "Port Count",
                valAr: "24 / 48 منفذ PoE+",
                valEn: "24 / 48 PoE+ Ports"
            },
            {
                labelAr: "معدل التحويل",
                labelEn: "Switching Capacity",
                valAr: "حتى 176 جيجابت في الثانية",
                valEn: "Up to 176 Gbps"
            },
            {
                labelAr: "الإدارة",
                labelEn: "Management",
                valAr: "إدارة سحابية ومحلية متكاملة",
                valEn: "Integrated Cloud & Local Management"
            }
        ]
    },

    firewall: {
        titleAr: "جدران الحماية المؤسسية (Enterprise Firewalls)",
        titleEn: "Enterprise Firewalls",
        badgeAr: "أمن سيبراني",
        badgeEn: "Cybersecurity",
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
        descAr: "حلول حماية متقدمة لمراقبة حركة الشبكة ومنع الوصول غير المصرح به، مع تعزيز أمن البيانات والأنظمة من التهديدات الإلكترونية وبرمجيات الفدية.",
        descEn: "Advanced protection solutions to monitor network traffic and prevent unauthorized access, enhancing data and system security against cyber threats and ransomware.",
        specs: [
            {
                labelAr: "فحص التهديدات",
                labelEn: "Threat Inspection",
                valAr: "حماية فورية ضد البرمجيات الخبيثة",
                valEn: "Real-time malware protection"
            },
            {
                labelAr: "معدل الفحص",
                labelEn: "Inspection Rate",
                valAr: "أداء عالي حتى في أحمال المرور الكثيفة",
                valEn: "High performance under heavy traffic loads"
            },
            {
                labelAr: "التحكم بالوصول",
                labelEn: "Access Control",
                valAr: "سياسات تحكم دقيقة للمستخدمين",
                valEn: "Granular user access policies"
            }
        ]
    }
};


// =====================================================
// GET PRODUCT FROM URL
// =====================================================

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");
const product = productsData[productId];


// =====================================================
// PRODUCT ELEMENTS
// =====================================================

const titleEl = document.getElementById("productTitle");
const pageTitleEl = document.getElementById("pageTitle");
const badgeEl = document.getElementById("productBadge");
const imageEl = document.getElementById("productImage");
const descEl = document.getElementById("productDesc");
const specsContainer = document.getElementById("specsContainer");


// =====================================================
// UPDATE PRODUCT LANGUAGE
// =====================================================

function updateProductLanguage(lang) {

    if (!product) return;

    const isEnglish = lang === "en";

    // Product title
    if (titleEl) {
        titleEl.setAttribute("data-ar", product.titleAr);
        titleEl.setAttribute("data-en", product.titleEn);
        titleEl.textContent = isEnglish
            ? product.titleEn
            : product.titleAr;
    }

    // Browser tab title
    if (pageTitleEl) {
        pageTitleEl.setAttribute("data-ar", product.titleAr);
        pageTitleEl.setAttribute("data-en", product.titleEn);
        pageTitleEl.textContent = isEnglish
            ? product.titleEn
            : product.titleAr;
    }

    // Badge
    if (badgeEl) {
        badgeEl.setAttribute("data-ar", product.badgeAr);
        badgeEl.setAttribute("data-en", product.badgeEn);
        badgeEl.textContent = isEnglish
            ? product.badgeEn
            : product.badgeAr;
    }

    // Description
    if (descEl) {
        descEl.setAttribute("data-ar", product.descAr);
        descEl.setAttribute("data-en", product.descEn);
        descEl.textContent = isEnglish
            ? product.descEn
            : product.descAr;
    }

    // Image
    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = isEnglish
            ? product.titleEn
            : product.titleAr;
    }

    // Specifications
    if (specsContainer) {

        specsContainer.innerHTML = product.specs.map(spec => {

            return `
                <div class="flex justify-between gap-6 py-3 border-b border-ts-beige/10 text-sm">

                    <span
                        class="text-ts-beige/60"
                        data-ar="${spec.labelAr}"
                        data-en="${spec.labelEn}">
                        ${isEnglish ? spec.labelEn : spec.labelAr}
                    </span>

                    <span
                        class="font-semibold text-right"
                        data-ar="${spec.valAr}"
                        data-en="${spec.valEn}">
                        ${isEnglish ? spec.valEn : spec.valAr}
                    </span>

                </div>
            `;

        }).join("");
    }
}


// =====================================================
// PRODUCT NOT FOUND
// =====================================================

function showProductNotFound() {

    const main = document.querySelector("main");

    if (!main) return;

    main.innerHTML = `
        <div class="text-center py-24">

            <h2
                class="text-2xl font-bold mb-4 text-ts-light-blue"
                data-ar="عذراً، لم يتم العثور على المنتج"
                data-en="Sorry, product not found">
                عذراً، لم يتم العثور على المنتج
            </h2>

            <p
                class="text-ts-beige/60 mb-6"
                data-ar="الرجاء العودة إلى صفحة المنتجات واختيار جهاز صحيح."
                data-en="Please return to the products page and select a valid device.">
                الرجاء العودة إلى صفحة المنتجات واختيار جهاز صحيح.
            </p>

            <a
                href="products.html"
                class="px-6 py-3 rounded-xl bg-ts-blue text-ts-beige font-semibold"
                data-ar="العودة للمنتجات"
                data-en="Back to Products">
                العودة للمنتجات
            </a>

        </div>
    `;
}


// =====================================================
// INITIALIZE
// =====================================================

if (product) {

    const savedLanguage =
        localStorage.getItem("language") ||
        document.documentElement.getAttribute("lang") ||
        "ar";

    updateProductLanguage(savedLanguage);

    // Update automatically whenever script.js changes language
    window.addEventListener("languageChanged", function (event) {

        const lang = event.detail?.language || "ar";

        updateProductLanguage(lang);

    });

} else {

    showProductNotFound();

}