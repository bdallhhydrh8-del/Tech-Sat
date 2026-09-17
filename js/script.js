(function () {
  'use strict';


  /* =========================================================
     SVG ICONS
  ========================================================= */

  var ICON_SVG = {
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',

    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',

    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',

    headset: '<path d="M3 14h3v6H3v-6z"/><path d="M18 14h3v6h-3v-6z"/><path d="M3 14a9 9 0 0 1 18 0"/><path d="M21 16a2 2 0 0 1-2 2h-1v-4h3v2z"/><path d="M3 16a2 2 0 0 0 2 2h1v-4H3v2z"/>',

    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',

    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83L12.83 2.18Z"/><path d="M2.6 11.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83"/><path d="M2.6 16.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83"/>',

    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',

    trendingUp: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',

    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'
  };


  function makeIcon(name, size) {

    return '<svg class="icon" style="width:' + size + 'px;height:' + size + 'px" viewBox="0 0 24 24">' +
      (ICON_SVG[name] || '') +
      '</svg>';
  }


  /* =========================================================
     FEATURES
  ========================================================= */

  var featuresData = [
    {
      icon: 'award',
      titleAr: 'جودة معتمدة',
      titleEn: 'Certified Quality',
      descAr: 'نلتزم بأعلى معايير الجودة العالمية في جميع مشاريعنا ومنتجاتنا',
      descEn: 'We adhere to the highest global quality standards across all projects'
    },
    {
      icon: 'clock',
      titleAr: 'تسليم في الوقت',
      titleEn: 'On-Time Delivery',
      descAr: 'نضمن إنجاز المشاريع وتسليمها وفق الجداول الزمنية المتفق عليها',
      descEn: 'We guarantee project completion according to agreed schedules'
    },
    {
      icon: 'lock',
      titleAr: 'أمان عالي',
      titleEn: 'High Security',
      descAr: 'نُطبّق بروتوكولات أمنية صارمة لحماية بيانات وأنظمة عملائنا',
      descEn: 'We implement strict security protocols to protect client data'
    },
    {
      icon: 'headset',
      titleAr: 'دعم متواصل',
      titleEn: 'Continuous Support',
      descAr: 'فريق دعم فني متخصص متاح على مدار الساعة لخدمة عملائنا',
      descEn: 'Dedicated tech support team available 24/7'
    },
    {
      icon: 'target',
      titleAr: 'دقة التنفيذ',
      titleEn: 'Execution Accuracy',
      descAr: 'نُركّز على التفاصيل الدقيقة لضمان تحقيق أهداف المشروع بدقة',
      descEn: 'We focus on fine details to ensure precise project goals'
    },
    {
      icon: 'layers',
      titleAr: 'حلول متكاملة',
      titleEn: 'Integrated Solutions',
      descAr: 'منظومة حلول شاملة تُغطي كافة جوانب التحوّل الرقمي من الألف للياء',
      descEn: 'Comprehensive solutions covering all aspects of digital transformation'
    },
    {
      icon: 'zap',
      titleAr: 'أداء فائق',
      titleEn: 'Superb Performance',
      descAr: 'أنظمة مُحسّنة للأداء تتعامل مع الأحمال العالية بكفاءة عالية',
      descEn: 'Performance-optimized systems handling high loads efficiently'
    },
    {
      icon: 'trendingUp',
      titleAr: 'نمو مستدام',
      titleEn: 'Sustainable Growth',
      descAr: 'حلول قابلة للتوسع تُواكب نموّ أعمالكم وتطورها المستقبلي',
      descEn: 'Scalable solutions matching your business growth'
    }
  ];


  var featuresGrid = document.getElementById('features-grid');

  if (featuresGrid) {

    featuresData.forEach(function (feat, i) {

      var delay = (i % 4) * 100 + Math.floor(i / 4) * 200;

      var card = document.createElement('div');

      card.className =
        'card-lift glow-border group glass-card rounded-2xl p-6 reveal-y';

      card.style.transitionDelay = delay + 'ms';

      card.innerHTML =
        '<div class="relative mb-5 inline-flex">' +

        '<div class="absolute inset-0 bg-ts-blue/20 blur-lg group-hover:bg-ts-light-blue/30 transition-all duration-500"></div>' +

        '<div class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-ts-blue/25 to-ts-light-blue/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">' +

        makeIcon(feat.icon, 24)
          .replace(
            'class="icon"',
            'class="icon w-6 h-6 text-ts-light-blue"'
          ) +

        '</div>' +
        '</div>' +

        '<h3 class="font-cairo font-bold text-lg text-ts-beige mb-2 group-hover:text-ts-light-blue transition-colors duration-300" ' +
        'data-ar="' + feat.titleAr + '" ' +
        'data-en="' + feat.titleEn + '">' +
        feat.titleAr +
        '</h3>' +

        '<p class="font-cairo text-sm text-ts-beige/45 leading-relaxed" ' +
        'data-ar="' + feat.descAr + '" ' +
        'data-en="' + feat.descEn + '">' +
        feat.descAr +
        '</p>';

      featuresGrid.appendChild(card);
    });
  }


  /* =========================================================
     FOCUS AREAS
  ========================================================= */

  var focusAreas = [
    {
      ar: 'الذكاء الاصطناعي وتعلّم الآلة',
      en: 'Artificial Intelligence & Machine Learning'
    },
    {
      ar: 'الحوسبة السحابية والبنية التحتية',
      en: 'Cloud Computing & Infrastructure'
    },
    {
      ar: 'الأمن السيبراني وحماية البيانات',
      en: 'Cybersecurity & Data Protection'
    },
    {
      ar: 'تحليل البيانات وذكاء الأعمال',
      en: 'Data Analytics & Business Intelligence'
    },
    {
      ar: 'إنترنت الأشياء (IoT)',
      en: 'Internet of Things (IoT)'
    },
    {
      ar: 'تطبيقات الويب والجوال',
      en: 'Web & Mobile Applications'
    }
  ];


  var focusContainer = document.getElementById('focus-areas');

  if (focusContainer) {

    focusAreas.forEach(function (area, i) {

      var item = document.createElement('div');

      item.className =
        'flex items-center gap-2.5 p-3 rounded-xl bg-ts-black/40 border border-ts-light-blue/10 hover:border-ts-light-blue/30 transition-all duration-400 reveal-y';

      item.style.transitionDelay = (i * 80 + 400) + 'ms';

      item.innerHTML =
        makeIcon('checkCircle', 16)
          .replace(
            'class="icon"',
            'class="icon w-4 h-4 text-ts-light-blue flex-shrink-0"'
          ) +

        '<span class="font-cairo text-xs text-ts-beige/70 leading-snug" ' +
        'data-ar="' + area.ar + '" ' +
        'data-en="' + area.en + '">' +
        area.ar +
        '</span>';

      focusContainer.appendChild(item);
    });
  }


  /* =========================================================
     STAR FIELD
  ========================================================= */

  var starField = document.getElementById('star-field');

  if (starField) {

    for (var i = 0; i < 100; i++) {

      var star = document.createElement('div');

      star.className = 'star';

      star.style.top = (Math.random() * 100) + '%';
      star.style.left = (Math.random() * 100) + '%';

      var size = Math.random() * 2 + 0.5;

      star.style.width = size + 'px';
      star.style.height = size + 'px';

      star.style.animationDelay =
        (Math.random() * 3) + 's';

      star.style.animationDuration =
        (Math.random() * 2 + 2) + 's';

      starField.appendChild(star);
    }
  }


  /* =========================================================
     NAVBAR SCROLL
  ========================================================= */

  var navbar = document.getElementById('navbar');

  if (navbar) {

    window.addEventListener('scroll', function () {

      if (window.scrollY > 30) {

        navbar.classList.remove(
          'w-[95%]',
          'max-w-6xl'
        );

        navbar.classList.add(
          'w-[92%]',
          'max-w-5xl'
        );

        var navbarDiv = navbar.querySelector('div');

        if (navbarDiv) {

          navbarDiv.classList.add(
            'shadow-2xl',
            'shadow-ts-blue/10'
          );
        }

      } else {

        navbar.classList.add(
          'w-[95%]',
          'max-w-6xl'
        );

        navbar.classList.remove(
          'w-[92%]',
          'max-w-5xl'
        );

        var navbarDiv = navbar.querySelector('div');

        if (navbarDiv) {

          navbarDiv.classList.remove(
            'shadow-2xl',
            'shadow-ts-blue/10'
          );
        }
      }
    });
  }


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileIcon = document.getElementById('mobile-icon');

  if (mobileToggle && mobileMenu && mobileIcon) {

    mobileToggle.addEventListener('click', function () {

      mobileMenu.classList.toggle('hidden');

      if (mobileMenu.classList.contains('hidden')) {

        mobileIcon.innerHTML =
          '<line x1="4" y1="6" x2="20" y2="6"/>' +
          '<line x1="4" y1="12" x2="20" y2="12"/>' +
          '<line x1="4" y1="18" x2="20" y2="18"/>';

      } else {

        mobileIcon.innerHTML =
          '<path d="M18 6 6 18"/>' +
          '<path d="m6 6 12 12"/>';
      }
    });
  }


  /* =========================================================
     THEME SYSTEM
     ========================================================= */

  var themeToggle = document.getElementById('theme-toggle');
  var themeIcon = document.getElementById('theme-icon');


  /*
     Update theme icon
  */

  function updateThemeIcon(theme) {

    if (!themeIcon) {
      return;
    }

    if (theme === 'light') {

      themeIcon.innerHTML =
        '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';

    } else {

      themeIcon.innerHTML =
        '<circle cx="12" cy="12" r="4"/>' +
        '<path d="M12 2v2"/>' +
        '<path d="M12 20v2"/>' +
        '<path d="m4.93 4.93 1.41 1.41"/>' +
        '<path d="m17.66 17.66 1.41 1.41"/>' +
        '<path d="M2 12h2"/>' +
        '<path d="M20 12h2"/>' +
        '<path d="m6.34 17.66-1.41 1.41"/>' +
        '<path d="m19.07 4.93-1.41 1.41"/>';
    }
  }


  /*
     Main theme function

     This can be used from ANY page.
  */

  function setTheme(theme) {

    if (theme !== 'light' && theme !== 'dark') {
      theme = 'dark';
    }


    /* Save theme */

    localStorage.setItem('theme', theme);


    /* Apply theme */

    if (theme === 'light') {

      document.body.classList.add('light-mode');

    } else {

      document.body.classList.remove('light-mode');
    }


    /* Update icon */

    updateThemeIcon(theme);
  }


  /*
     Make setTheme globally available
  */

  window.setTheme = setTheme;


  /*
     Restore saved theme when page opens
  */

  var savedTheme =
    localStorage.getItem('theme') || 'dark';

  setTheme(savedTheme);


  /*
     Theme button

     Some pages have the button.
     Product-details.html currently does not.
  */

  if (themeToggle) {

    themeToggle.addEventListener('click', function () {

      var currentTheme =
        document.body.classList.contains('light-mode')
          ? 'light'
          : 'dark';

      var newTheme =
        currentTheme === 'light'
          ? 'dark'
          : 'light';

      setTheme(newTheme);

    });
  }


  /* =========================================================
     LANGUAGE SYSTEM
  ========================================================= */

  var langToggle = document.getElementById('lang-toggle');
  var langDropdown = document.getElementById('lang-dropdown');
  var langChevron = document.getElementById('lang-chevron');
  var langLabel = document.getElementById('lang-label');


  /*
     Main language function

     This function can be used from ANY page.
  */

  function setLanguage(lang) {

    if (lang !== 'ar' && lang !== 'en') {
      lang = 'ar';
    }


    /* Save selected language */

    localStorage.setItem('language', lang);


    /* Change HTML language */

    document.documentElement.setAttribute(
      'lang',
      lang
    );


    /* Change direction */

    document.documentElement.setAttribute(
      'dir',
      lang === 'ar' ? 'rtl' : 'ltr'
    );


    /* Translate normal HTML elements */

    document.querySelectorAll('[data-ar][data-en]')
      .forEach(function (el) {

        var translation =
          el.getAttribute('data-' + lang);

        if (translation !== null) {
          el.textContent = translation;
        }
      });


    /* Translate placeholders */

    document.querySelectorAll(
      '[data-ar-placeholder][data-en-placeholder]'
    )
      .forEach(function (el) {

        var placeholder =
          el.getAttribute(
            'data-' + lang + '-placeholder'
          );

        if (placeholder !== null) {

          el.setAttribute(
            'placeholder',
            placeholder
          );
        }
      });


    /* Update language label */

    if (langLabel) {

      langLabel.textContent =
        lang === 'ar'
          ? 'العربية'
          : 'English';
    }


    /* Highlight selected language */

    document.querySelectorAll('.lang-option')
      .forEach(function (option) {

        if (
          option.getAttribute('data-lang') === lang
        ) {

          option.classList.remove(
            'text-ts-beige/60',
            'hover:bg-white/5'
          );

          option.classList.add(
            'bg-ts-blue/20',
            'text-ts-beige'
          );

        } else {

          option.classList.remove(
            'bg-ts-blue/20',
            'text-ts-beige'
          );

          option.classList.add(
            'text-ts-beige/60',
            'hover:bg-white/5'
          );
        }
      });


    /*
       Tell product-details.js or other page-specific
       JavaScript that the language changed.
    */

    window.dispatchEvent(
      new CustomEvent('languageChanged', {
        detail: {
          language: lang
        }
      })
    );
  }


  /*
     Make setLanguage available globally.
  */

  window.setLanguage = setLanguage;


  /* =========================================================
     LANGUAGE DROPDOWN
  ========================================================= */

  if (langToggle && langDropdown && langChevron) {

    langToggle.addEventListener('click', function (e) {

      e.stopPropagation();

      langDropdown.classList.toggle('hidden');

      langChevron.classList.toggle(
        'rotate-180'
      );
    });


    document.addEventListener('click', function () {

      langDropdown.classList.add('hidden');

      langChevron.classList.remove(
        'rotate-180'
      );
    });
  }


  /* =========================================================
     LANGUAGE BUTTONS
  ========================================================= */

  document.querySelectorAll('.lang-option')
    .forEach(function (btn) {

      btn.addEventListener('click', function (e) {

        e.stopPropagation();

        var lang =
          this.getAttribute('data-lang');

        setLanguage(lang);


        if (langDropdown) {
          langDropdown.classList.add('hidden');
        }

        if (langChevron) {

          langChevron.classList.remove(
            'rotate-180'
          );
        }

        if (mobileMenu) {

          mobileMenu.classList.add('hidden');
        }

        if (mobileIcon) {

          mobileIcon.innerHTML =
            '<line x1="4" y1="6" x2="20" y2="6"/>' +
            '<line x1="4" y1="12" x2="20" y2="12"/>' +
            '<line x1="4" y1="18" x2="20" y2="18"/>';
        }
      });
    });


  /* =========================================================
     RESTORE SAVED LANGUAGE
  ========================================================= */

  var savedLanguage =
    localStorage.getItem('language') || 'ar';

  setLanguage(savedLanguage);


  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  document.querySelectorAll('[data-scroll]')
    .forEach(function (link) {

      link.addEventListener('click', function (e) {

        e.preventDefault();

        var href =
          this.getAttribute('href');

        var target =
          document.querySelector(href);

        if (target) {

          if (mobileMenu) {
            mobileMenu.classList.add('hidden');
          }

          if (mobileIcon) {

            mobileIcon.innerHTML =
              '<line x1="4" y1="6" x2="20" y2="6"/>' +
              '<line x1="4" y1="12" x2="20" y2="12"/>' +
              '<line x1="4" y1="18" x2="20" y2="18"/>';
          }

          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });


  /* =========================================================
     BACK TO TOP
  ========================================================= */

  var toTopBtn =
    document.getElementById('to-top');

  if (toTopBtn) {

    toTopBtn.addEventListener(
      'click',
      function () {

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    );
  }


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  if ('IntersectionObserver' in window) {

    var revealClasses = [
      'reveal',
      'reveal-x',
      'reveal-x-left',
      'reveal-y'
    ];

    var revealObserver =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (entry.isIntersecting) {

                entry.target.classList.add(
                  'visible'
                );

                revealObserver.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      );


    revealClasses.forEach(function (cls) {

      document.querySelectorAll('.' + cls)
        .forEach(function (el) {

          revealObserver.observe(el);
        });
    });
  }


  /* =========================================================
     COUNT-UP ANIMATION
  ========================================================= */

  if ('IntersectionObserver' in window) {

    var metricObserver =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (!entry.isIntersecting) {
                return;
              }

              var item =
                entry.target;

              metricObserver.unobserve(
                item
              );

              var target =
                parseInt(
                  item.getAttribute(
                    'data-target'
                  ),
                  10
                );

              var countEl =
                item.querySelector(
                  '.count'
                );

              if (!countEl) {
                return;
              }

              var duration = 2000;
              var startTime = null;


              function animate(timestamp) {

                if (startTime === null) {
                  startTime = timestamp;
                }

                var progress =
                  Math.min(
                    (timestamp - startTime) /
                    duration,
                    1
                  );

                var eased =
                  1 -
                  Math.pow(
                    1 - progress,
                    3
                  );

                countEl.textContent =
                  Math.floor(
                    eased * target
                  );

                if (progress < 1) {

                  requestAnimationFrame(
                    animate
                  );

                } else {

                  countEl.textContent =
                    target;
                }
              }


              requestAnimationFrame(
                animate
              );


              var idx =
                Array.prototype.indexOf.call(
                  item.parentElement.children,
                  item
                );

              item.style.transitionDelay =
                (idx * 150) + 'ms';

              item.classList.add(
                'opacity-100',
                'translate-y-0'
              );

              item.classList.remove(
                'opacity-0',
                'translate-y-8'
              );
            }
          );
        },
        {
          threshold: 0.15
        }
      );


    document.querySelectorAll('.metric-item')
      .forEach(function (item) {

        item.classList.add(
          'opacity-0',
          'translate-y-8'
        );

        metricObserver.observe(item);
      });
  }

})();