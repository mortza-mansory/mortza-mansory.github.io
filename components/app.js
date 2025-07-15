import van from "https://cdn.jsdelivr.net/npm/vanjs-core";
const { div, footer, h1, h2, h3, p, button, a, span, select, option, img, iframe } = van.tags;

const isDark = van.state(false);
const lang = van.state('en');
const isSpotlightOn = van.state(false);

const spotlightStyle = van.state("");

const STATIC_PATH = 'static/';

const translations = {
  en: {
    title: "Mortza Mansori | Portfolio",
    heroTitle: "Mortza Mansori",
    heroDesc: "Software Developer and Blockchain researcher with 4 years of experience in building client-side and backend applications with smart contract integration",
    themeToggle: () => isDark.val ? "Light Theme ☀️" : "Dark Theme 🌙",
    spotlightToggle: () => isSpotlightOn.val ? "Disable Spotlight ✨" : "Enable Spotlight ✨",
    clientDev: "Client Development",
    clientDesc: "Flutter/Dart (BLoC, GetX, MVVM, MVC), C++ (Lingui, OpenCV)",
    backend: "Backend",
    backendDesc: "FastAPI (Python), Node.js + Express, RESTful API, SQL, Postegrell",
    blockchain: "Blockchain & Smart Contracts",
    blockchainDesc: "Solidity (ERC20, ERC721/1155, ERC4626, ERC4907), Web3.js, Ethers.js, Truffle, Web3Dart, WalletConnect",
    securityDevops: "Security & DevOps",
    securityDevopsDesc: "ModSecurity WAF configuration for Nginx( Dynamic Moudle),CRS Owsap, Linux, Server and web server Deployment",
    projects: "Projects",
    escrow: "Smart Escrow Contract",
    escrowDesc: "A secure Ethereum-based escrow smart contract for safe crypto deals with dynamic fee control and time-locks",
    escrowTech: "Technologies: Solidity, Truffle, Ganache",
    staking: "NFT Staking + Multi-Sig Wallet",
    stakingDesc: "NFT staking mechanism based on ERC721 with multi-signature wallet logic for enhanced security",
    stakingTech: "Technologies: Solidity",
    chatApp: "Blockchain ChatApp",
    chatAppDesc: "Flutter-based chat dApp integrated with smart contracts for real-world messaging, integrated with Sepolia testnet",
    chatAppTech: "Technologies: Dart/Flutter, Solidity, Truffle, Ganache, Infura",
    waf: "WAF Interface",
    wafDesc: "Web-based interface for ModSecurity WAF with reverse proxy setup for Nginx and Apache, user-friendly UI, and easy Debian/Ubuntu setup",
    wafTech: "Technologies: Dart/Flutter/GetX, FastAPI, WASM, ModSecurity APIs, Apache, Nginx",
    ecuPars: "EcuPars Mobile App",
    ecuParsDesc: "A mobile handbook for heavy and semi-heavy vehicle ECU diagnostics, designed for users who need quick access to essential information in emergency situations.",
    ecuParsTech: "Technologies: html rich rendering extenstion for html/ GetX/ MVVM/ Custom Animated Widgets",
    github: "View on GitHub",
    education: "Education",
    educationDesc: "B.Sc. in Materials and Metallurgical Engineering, Shahid Chamran University (2023 - Present)",
    techStack: "Tech Stack",
    gallery: "Gallery",
    galleryItem1Title: "WAF Interface Demo",
    galleryItem1Desc: "A short demonstration of the Web Application Firewall interface in action.",
    galleryItem2Title: "ChatApp UI",
    galleryItem2Desc: "A screenshot of the main chat interface in the blockchain dApp.",
    interestedProjects: "Personal Projects & Interests",
    libfuxTitle: "libfux - Fux Memory Library",
    libfuxDesc: "LibFux its my personal flutter like gui maker for my cpp projects. Its simplify the process of creating ui without anything unrelated to the ui you can make easily UI's free fast as possible!",
    apiClientTitle: "ApiClient_Cpp",
    apiClientDesc: "A simple and lightweight HTTP client library for C++ for interacting with backend services and APIs.",
    dqnEnvTitle: "DQN Trading Environment",
    dqnEnvDesc: "A reinforcement learning environment for training AI models on historical chart data, with a graphical interface for real-time monitoring of the training process.",
    imwalletTitle: "ImWallet - DEX Wallet",
    imwalletDesc: "A decentralized wallet operating on a smart contract, providing secure on-chain transactions and management of crypto assets.",
    // NEW: Footer Text
    footerText: "Made by Mortza Mansori with VanJS, Tailwind CSS, and other awesome technologies."
  },
  fa: {
    title: "مرتضی منصوری | نمونه‌کار",
    heroTitle: "مرتضی منصوری",
    heroDesc: "برنامه‌نویس نرم‌افزار و محقق بلاکچین با ۴ سال تجربه در توسعه برنامه‌های کلاینت و بک‌اند با ادغام قراردادهای هوشمند",
    themeToggle: () => isDark.val ? "تم روشن ☀️" : "تم تاریک 🌙",
    spotlightToggle: () => isSpotlightOn.val ? "غیرفعال کردن نورپردازی ✨" : "فعال کردن نورپردازی ✨",
    clientDev: "توسعه کلاینت",
    clientDesc: "Flutter/Dart (BLoC, GetX, MVVM, MVC)، C++ (Lingui, OpenCV)",
    backend: "بک‌اند",
    backendDesc: "FastAPI (Python)، Node.js + Express، RESTful API، SQL، MongoDB",
    blockchain: "بلاکچین و قراردادهای هوشمند",
    blockchainDesc: "Solidity (ERC20, ERC721/1155, ERC4626, ERC4907)، Web3.js، Ethers.js، Truffle، Web3Dart، WalletConnect",
    securityDevops: "امنیت و DevOps",
    securityDevopsDesc: "کانفینگ کردن nginx, ModSecurity,CRS Owsap، Linux، استقرار سرور",
    projects: "پروژه‌ها",
    escrow: "قرارداد هوشمند اسکرو",
    escrowDesc: "یک قرارداد هوشمند مبتنی بر اتریوم برای معاملات امن با کنترل کارمزد پویا و قفل زمانی",
    escrowTech: "فناوری‌ها: Solidity، Truffle، Ganache",
    staking: "استیکینگ NFT + کیف پول چندامضایی",
    stakingDesc: "مکانیزم استیکینگ NFT مبتنی بر ERC721 با منطق کیف پول چندامضایی برای امنیت بیشتر",
    stakingTech: "فناوری‌ها: Solidity",
    chatApp: "چت بلاکچین",
    chatAppDesc: "برنامه چت مبتنی بر Flutter با ادغام قراردادهای هوشمند برای سناریوهای پیام‌رسانی دنیای واقعی، یکپارچه‌سازی با تست‌نت Sepolia",
    chatAppTech: "فناوری‌ها: Dart/Flutter، Solidity، Truffle، Ganache، Infura",
    waf: "رابط WAF",
    wafDesc: "رابط وب برای ModSecurity WAF با تنظیم پراکسی معکوس برای سرورهای Nginx و Apache، طراحی کاربرپسند و نصب آسان در Debian/Ubuntu",
    wafTech: "فناوری‌ها: Dart/Flutter/GetX، FastAPI، WASM، ModSecurity APIs، Apache، Nginx",
    ecuPars: "اپلیکیشن موبایل EcuPars",
    ecuParsDesc: "یک کتابچه راهنمای موبایلی برای کاربرانی که می‌خواهند درباره ECU های ماشین‌های سنگین و نیمه سنگین بیشتر بدانند و دوست دارند یک راهنما برای مواقع ضروری داخل جیبشان باشد تا اگر مشکلی پیش آمد از آن استفاده کنند.",
    ecuParsTech: "فناوری‌ها: html rich rendering extenstion for html/ GetX/ MVVM/ Custom Animated Widgets",
    github: "مشاهده در گیت‌هاب",
    education: "تحصیلات",
    educationDesc: "کارشناسی مهندسی مواد و متالورژی، دانشگاه شهید چمران (۲۰۲۳ - تاکنون)",
    techStack: "فناوری‌های مورد استفاده",
    gallery: "گالری",
    galleryItem1Title: "دموی رابط کاربری WAF",
    galleryItem1Desc: "یک نمایش کوتاه از رابط کاربری فایروال وب اپلیکیشن.",
    galleryItem2Title: "رابط کاربری ChatApp",
    galleryItem2Desc: "یک اسکرین‌شات از رابط اصلی چت در اپلیکیشن غیرمتمرکز بلاکچین.",
    interestedProjects: "پروژه‌های شخصی و علاقمندی‌ها",
    libfuxTitle: "libfux - کتابخانه مدیریت حافظه",
    libfuxDesc: "LibFux کتابخانه شخصی من برای ساخت رابط کاربری گرافیکی (GUI) در پروژه‌های C++، مشابه فلاتر است. این کتابخانه فرآیند ساخت UI را ساده می‌کند تا بتوانید به سریع‌ترین شکل ممکن، رابط‌های کاربری آسان و بهینه، بدون درگیر شدن با موارد غیرمرتبط، ایجاد کنید.",
    apiClientTitle: "ApiClient_Cpp",
    apiClientDesc: "یک کتابخانه کلاینت HTTP ساده و سبک برای C++ جهت تعامل با سرویس‌های بک‌اند و APIها.",
    dqnEnvTitle: "محیط ترید DQN",
    dqnEnvDesc: "یک محیط یادگیری تقویتی برای آموزش مدل‌های هوش مصنوعی بر روی دیتای چارت، با رابط گرافیکی برای نظارت زنده بر فرآیند آموزش.",
    imwalletTitle: "ImWallet - کیف پول غیرمتمرکز",
    imwalletDesc: "یک کیف پول غیرمتمرکز که بر بستر یک قرارداد هوشمند کار می‌کند و امکان تراکنش‌های امن آنچین و مدیریت دارایی‌های دیجیتال را فراهم می‌کند.",
    // NEW: Footer Text
    footerText: "ساخته شده توسط مرتضی منصوری با VanJS ،Tailwind CSS و سایر تکنولوژی‌های فوق‌العاده."
  }
};

const galleryItems = [
  { 
    type: 'image', 
    src: [STATIC_PATH + 'gallery_1.jpg', STATIC_PATH + 'gallery_2.jpg'], 
    title: () => translations[lang.val].galleryItem1Title, 
    description: () => translations[lang.val].galleryItem1Desc 
  },
  { 
    type: 'image', 
    src: [STATIC_PATH + 'gallery_3.jpg'], 
    title: () => translations[lang.val].galleryItem2Title, 
    description: () => translations[lang.val].galleryItem2Desc 
  },
  { 
    type: 'image', 
    src: [STATIC_PATH + 'gallery_1.jpg', STATIC_PATH + 'gallery_3.jpg', STATIC_PATH + 'gallery_2.jpg'],
    title: () => "DQN", 
    description: () => "Interface for RL treading training panel"
  },
  { 
    type: 'image', 
    src: [STATIC_PATH + 'gallery_2.jpg'], 
    title: () => "Todo Reminder", 
    description: () => "This a simple but effective app for managing todo's"
  },
];

const interestedProjects = [
  { title: () => translations[lang.val].libfuxTitle, description: () => translations[lang.val].libfuxDesc, githubUrl: "https://github.com/mortza-mansory/libfux" },
  { title: () => translations[lang.val].apiClientTitle, description: () => translations[lang.val].apiClientDesc, githubUrl: "https://github.com/mortza-mansory/ApiClient_Cpp" },
  { title: () => translations[lang.val].dqnEnvTitle, description: () => translations[lang.val].dqnEnvDesc, githubUrl: "https://github.com/mortza-mansory/DQN-Treading-Environment" },
  { title: () => translations[lang.val].imwalletTitle, description: () => translations[lang.val].imwalletDesc, githubUrl: "https://github.com/mortza-mansory/ImWallet" },
];

const MediaCard = ({ src, title, description }) => {
    const imageContainer = div({ class: "image-container mb-4" });
    let currentIndex = 0;
    let intervalId;

    const updateImage = () => {
        const images = imageContainer.childNodes;
        if (images.length === 0) return;
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        currentIndex = (currentIndex + 1) % images.length;
    };

    src.forEach((imgSrc, index) => {
        const imgTag = img({ 
            src: imgSrc, 
            alt: title, 
            loading: "lazy", 
            class: index === 0 ? 'active' : '' 
        });
        van.add(imageContainer, imgTag);
    });
    
    const card = div({ 
        class: "card-3d glass p-6 w-80 sm:w-96 flex-shrink-0",
        onremove: () => {
            if (intervalId) clearInterval(intervalId);
        }
    }, 
        imageContainer, 
        h3({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, title), 
        p({ class: "text-gray-600 dark:text-gray-400" }, description)
    );
    
    if (src.length > 1) {
        updateImage(); 
        intervalId = setInterval(updateImage, 3000);
    }
    
    return card;
};

const InterestedProjectCard = ({ title, description, githubUrl }) => {
    return div({ class: "card-3d glass p-6 shadow-lg" }, h3({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, title), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, description), a({ href: githubUrl, target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github)));
};

const toggleTheme = () => { isDark.val = !isDark.val; document.documentElement.classList.toggle('dark', isDark.val); };
const toggleSpotlight = () => { isSpotlightOn.val = !isSpotlightOn.val; if (!isSpotlightOn.val) { spotlightStyle.val = ""; } };
const changeLanguage = (e) => { lang.val = e.target.value; document.title = translations[lang.val].title; document.documentElement.lang = lang.val; document.body.style.direction = lang.val === 'fa' ? 'rtl' : 'ltr'; };

document.body.onmousemove = (e) => {
    if(isSpotlightOn.val) {
        const color = isDark.val ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.05)';
        spotlightStyle.val = `background: radial-gradient(circle at ${e.clientX}px ${e.clientY}px, ${color}, transparent 300px)`;
    }
}

const setupGallery = (galleryContainer) => {
    if (!galleryContainer) return;
    
    let isHovering = false;
    let autoScrollRequest;

    const autoScroll = () => {
        if (!isHovering) {
            galleryContainer.scrollLeft += 0.5;
            if (galleryContainer.scrollLeft >= galleryContainer.scrollWidth / 2) {
                galleryContainer.scrollLeft = 0;
            }
        }
        autoScrollRequest = requestAnimationFrame(autoScroll);
    };
    
    galleryContainer.addEventListener('mouseenter', () => isHovering = true);
    galleryContainer.addEventListener('mouseleave', () => isHovering = false);
    
    autoScrollRequest = requestAnimationFrame(autoScroll);
};

const icon = (path) => span({ class: "w-6 h-6 inline-block align-middle", innerHTML: path });
const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.31-.47-2.2-1.65-2.2-0.9 0-1.43.6-1.67 1.18-.09.22-.11.53-.11.84v5.68h-3s.04-10.36 0-11.44h3v1.62c0 .22-.02.44-.06.65h.06c.4-.62 1.12-1.51 2.43-1.51 1.78 0 3.11 1.16 3.11 3.65v7.63z"/></svg>`;
const telegramIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.84 8.16c-.16 1.66-.86 5.7-1.22 7.55-.16.82-.5 1.09-.85 1.12-.73.06-1.28-.48-1.99-.99-.49-.35-3.07-1.97-3.72-2.4-.88-.58-.3-1.79.55-2.54.2-.18 3.67-3.36 3.74-3.64.02-.09.01-.5-.37-.76-.38-.26-.93-.15-1.33.06-.28.15-4.77 3.13-5.62 3.67-.33.21-.64.29-1.06.16-.48-.15-1.37-.29-2.03-.44-.82-.19-.52-.74.07-1.09 1.48-1.03 7.11-3.07 9.87-4.24 2.85-1.2 3.44-.72 3.96.51z"/></svg>`;
const gmailIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.94.67 1.9v2.81c0 .27.16.59.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>`;
const downloadIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`;
const techStack = [ { name: "Flutter", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3h18l-9 9-9-9zm0 18h18l-9-9-9 9z\"/></svg>` }, { name: "Dart", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 19l9 2-9-18-9 18 9-2zm0 0v-8\"/></svg>` }, { name: "FastAPI", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\"/></svg>` }, { name: "Node.js", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 20l4-16m4 4l4 4-4 4m-4-4l-4-4 4-4\"/></svg>` }, { name: "Solidity", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 9l3-3 3 3m0 6l-3 3-3-3\"/></svg>` }, { name: "C++", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"/></svg>` }, { name: "SQL", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4\"/></svg>` }, { name: "MongoDB", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 15c3.87 0 7-3.13 7-7s-3.13-7-7-7m0 14c-3.87 0-7 3.13-7 7s3.13 7 7 7m7-14c3.87 0 7 3.13 7 7s-3.13 7-7 7\"/></svg>` }, { name: "Web3.js", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 01-9 9m9-9a9 9 0 01-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3\"/></svg>` }, { name: "Ethers.js", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 20l4-16m4 4l4 4-4 4m-4-4l-4-4 4-4\"/></svg>` }, { name: "Truffle", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>` }, { name: "Web3Dart", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 19l9 2-9-18-9 18 9-2zm0 0v-8\"/></svg>` }, { name: "WalletConnect", icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4\"/></svg>` } ];

const App = () => div(
  div({ class: 'spotlight-effect', style: spotlightStyle }),
  div({ class: "smoke-container" },
    div({ class: "smoke-element smoke-1" }),
    div({ class: "smoke-element smoke-2" }),
    div({ class: "smoke-element smoke-3" }),
  ),
  div({ class: "relative z-10" },
    div({ class: "flex justify-center mt-10 space-x-4" },
      button({ onclick: toggleSpotlight, class: "px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition pulse" }, () => translations[lang.val].spotlightToggle()),
      div({ class: "relative dropdown" }, select({ onchange: changeLanguage, class: "px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition" }, option({ value: "en", selected: true }, "English"), option({ value: "fa" }, "فارسی"))),
      button({ onclick: toggleTheme, class: "px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition pulse" }, () => translations[lang.val].themeToggle())
    ),
    div({ class: "max-w-3xl mx-auto mt-10 space-y-12 px-4" },
      div({ class: "card-3d glass p-10 shadow-xl text-center" },
        h1({ class: "text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight" }, () => translations[lang.val].heroTitle),
        p({ class: "text-gray-600 dark:text-gray-400 text-lg mb-6" }, () => translations[lang.val].heroDesc),
        div({ class: "flex justify-center space-x-4" }, 
            a({ href: "https://linkedin.com/in/mortza-mansouri", target: "_blank", class: "p-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white rounded-full shadow-lg hover:scale-110 transition transform" }, icon(linkedinIcon)),
            a({ href: "https://t.me/dashclss", target: "_blank", class: "p-3 bg-gradient-to-r from-cyan-500 to-cyan-700 dark:from-cyan-600 dark:to-cyan-800 text-white rounded-full shadow-lg hover:scale-110 transition transform" }, icon(telegramIcon)),
            a({ href: "https://github.com/mortza-mansory", target: "_blank", class: "p-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition transform" }, icon(githubIcon)),
            a({ href: "mailto:mortzamansory12@gmail.com", class: "p-3 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600 dark:to-red-800 text-white rounded-full shadow-lg hover:scale-110 transition transform" }, icon(gmailIcon)),
            a({ href: STATIC_PATH + 'mortza_mansori_resume.pdf', download: "mortza_mansori_resume.pdf", class: "p-3 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-800 text-white rounded-full shadow-lg hover:scale-110 transition transform" }, icon(downloadIcon))
        )
      ),
      div({ class: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
        div({ class: "card-3d glass p-6 shadow-lg text-center" }, div({ class: "w-12 h-12 mx-auto mb-4 icon-spin" }, span({ innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 0V6m0 0V4c0-1.1-.9-2-2-2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2m4-10h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z"/></svg>` })), h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].clientDev), p({ class: "text-gray-600 dark:text-gray-400" }, () => translations[lang.val].clientDesc)),
        div({ class: "card-3d glass p-6 shadow-lg text-center" }, div({ class: "w-12 h-12 mx-auto mb-4 icon-spin" }, span({ innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>` })), h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].backend), p({ class: "text-gray-600 dark:text-gray-400" }, () => translations[lang.val].backendDesc)),
        div({ class: "card-3d glass p-6 shadow-lg text-center" }, div({ class: "w-12 h-12 mx-auto mb-4 icon-spin" }, span({ innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` })), h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].blockchain), p({ class: "text-gray-600 dark:text-gray-400" }, () => translations[lang.val].blockchainDesc)),
        div({ class: "card-3d glass p-6 shadow-lg text-center" }, div({ class: "w-12 h-12 mx-auto mb-4 icon-spin" }, span({ innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` })), h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].securityDevops), p({ class: "text-gray-600 dark:text-gray-400" }, () => translations[lang.val].securityDevopsDesc))
      ),
      div({ class: "overflow-hidden" },
        h2({ class: "text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4" }, () => translations[lang.val].techStack),
        div({ class: "tech-rail", style: () => `direction: ${lang.val === 'fa' ? 'rtl' : 'ltr'};` }, ...techStack.concat(techStack).map(tech => div({ class: "tech-item glass p-2 shadow-md" }, span({ class: "w-5 h-5 inline-block align-middle mr-2", innerHTML: tech.icon }), span({ class: "text-gray-600 dark:text-gray-400" }, tech.name))))
      ),
      div({ class: "space-y-6" },
        h2({ class: "text-2xl font-bold text-gray-900 dark:text-gray-100 text-center" }, () => translations[lang.val].projects),
        div({ class: "card-3d glass p-6 shadow-lg" }, h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].ecuPars), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].ecuParsDesc), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].ecuParsTech), a({ href: "https://github.com/mortza-mansory/EcuPars", target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github))),
        div({ class: "card-3d glass p-6 shadow-lg" }, h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].escrow), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].escrowDesc), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].escrowTech), a({ href: "https://github.com/mortza-mansory/TransferEscrowETH", target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github))),
        div({ class: "card-3d glass p-6 shadow-lg" }, h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].staking), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].stakingDesc), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].stakingTech), a({ href: "https://github.com/mortza-mansory/SolidityWallets", target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github))),
        div({ class: "card-3d glass p-6 shadow-lg" }, h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].chatApp), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].chatAppDesc), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].chatAppTech), a({ href: "https://github.com/mortzaCFT/ChatApp", target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github))),
        div({ class: "card-3d glass p-6 shadow-lg" }, h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].waf), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].wafDesc), p({ class: "text-gray-600 dark:text-gray-400 mb-4" }, () => translations[lang.val].wafTech), a({ href: "https://github.com/Waf-Interface", target: "_blank", class: "inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600" }, icon(githubIcon), span({ class: "ml-2" }, () => translations[lang.val].github)))
      ),
      
      div({ class: "space-y-6" },
        h2({ class: "text-2xl font-bold text-gray-900 dark:text-gray-100 text-center" }, () => translations[lang.val].gallery),
        div({ class: "overflow-x-auto hide-scrollbar gallery-container", onmount: (node) => setupGallery(node) },
            div({ class: "flex space-x-6 p-4" },
                ...galleryItems.concat(galleryItems).map(item => MediaCard(item))
            )
        )
      ),
      
      div({ class: "card-3d glass p-6 shadow-lg text-center" },
        h2({ class: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2" }, () => translations[lang.val].education),
        p({ class: "text-gray-600 dark:text-gray-400" }, () => translations[lang.val].educationDesc)
      ),

      div({ class: "space-y-6" },
        h2({ class: "text-2xl font-bold text-gray-900 dark:text-gray-100 text-center" }, () => translations[lang.val].interestedProjects),
        ...interestedProjects.map(p => InterestedProjectCard(p))
      )
    ),

    // NEW: Footer component
    footer({ class: "text-center p-4 mt-12 mb-4" },
        p({ class: "text-xs text-gray-500 dark:text-gray-400" }, () => translations[lang.val].footerText)
    )
  )
);

// Add the entire app to the body of the document
van.add(document.body, App());
