"use strict";

(function () {
    const config = window.SITE_CONFIG || {};

    const selectors = {
        headerMount: "[data-site-header]",
        footerMount: "[data-site-footer]",
        mobileMenuMount: "[data-mobile-menu]",
        policyBannerMount: "[data-policy-banner]",
        contactForm: "[data-contact-form]"
    };

    let lastFocusedElement = null;

    document.addEventListener("DOMContentLoaded", function () {
        applyPageMeta();
        renderSiteHeader();
        renderMobileMenu();
        renderSiteFooter();
        renderPolicyBanner();
        injectGlobalData();
        injectServicePageData();
        injectServiceSelectOptions();
        initHeaderScrollState();
        initServicesDropdown();
        initMobileMenu();
        initPolicyBanner();
        initFaqAccordions();
        initContactForms();
        initSmoothAnchors();
        initLucideIcons();

        window.addEventListener("load", function () {
            document.body.classList.remove("is-loading");
        });
    });

    /* ==================================================
       Helpers
       ================================================== */

    function getCurrentPage() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf("/") + 1);
        return file || "index.html";
    }

    function getPagePathWithoutHash(href) {
        if (!href) return "";
        const normalized = href.replace("./", "");
        return normalized.split("#")[0] || "index.html";
    }

    function isPhoneAvailable() {
        return Boolean(config.phone && config.phone.number && config.phone.href);
    }

    function safeText(value, fallback = "") {
        return typeof value === "string" && value.trim() ? value : fallback;
    }

    function createIcon(iconName) {
        return `<i data-lucide="${iconName}" aria-hidden="true"></i>`;
    }

    function setText(selector, value) {
        document.querySelectorAll(selector).forEach(function (element) {
            element.textContent = value || "";
        });
    }

    function setAttributes(element, attributes) {
        if (!element || !attributes) return;

        Object.entries(attributes).forEach(function ([key, value]) {
            if (value === null || value === undefined || value === false) return;
            element.setAttribute(key, value);
        });
    }

    function initLucideIcons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll("[data-services-dropdown-menu]").forEach(function (menu) {
            menu.classList.remove("is-open");
        });

        document.querySelectorAll("[data-services-dropdown-button]").forEach(function (button) {
            button.setAttribute("aria-expanded", "false");
        });
    }

    function isServicePage(page) {
        const services = Array.isArray(config.services) ? config.services : [];

        return services.some(function (service) {
            return getPagePathWithoutHash(service.href) === page;
        });
    }

    function getCurrentService() {
        const currentPage = getCurrentPage();
        const services = Array.isArray(config.services) ? config.services : [];

        return services.find(function (service) {
            return getPagePathWithoutHash(service.href) === currentPage;
        });
    }

    /* ==================================================
       Meta
       ================================================== */

    function applyPageMeta() {
        const currentPage = getCurrentPage();
        const pageMeta = config.pageMeta && config.pageMeta[currentPage];

        if (!pageMeta) return;

        if (pageMeta.title) {
            document.title = pageMeta.title;
        }

        if (pageMeta.description) {
            let metaDescription = document.querySelector('meta[name="description"]');

            if (!metaDescription) {
                metaDescription = document.createElement("meta");
                metaDescription.setAttribute("name", "description");
                document.head.appendChild(metaDescription);
            }

            metaDescription.setAttribute("content", pageMeta.description);
        }
    }

    /* ==================================================
       Logo
       ================================================== */

    function createLogoMarkup() {
        const brandName = safeText(config.brandName, "RKJ");

        return `
      <a class="site-logo" href="./index.html" aria-label="${brandName} home">
        <span class="site-logo__mark" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="site-logo__text">
          <strong>${brandName}</strong>
          <small>s. r. o.</small>
        </span>
      </a>
    `;
    }

    /* ==================================================
       Header
       ================================================== */

    function renderSiteHeader() {
        const mount = document.querySelector(selectors.headerMount);
        if (!mount) return;

        const currentPage = getCurrentPage();
        const navigation = Array.isArray(config.navigation) ? config.navigation : [];
        const services = Array.isArray(config.services) ? config.services : [];

        const navMarkup = navigation
            .map(function (item) {
                const itemPage = getPagePathWithoutHash(item.href);
                const isActive =
                    currentPage === itemPage &&
                    (!item.href.includes("#") || currentPage !== "index.html");

                if (item.type === "dropdown") {
                    return `
            <div class="services-dropdown" data-services-dropdown>
              <button
                class="site-nav__button ${isServicePage(currentPage) ? "is-active" : ""}"
                type="button"
                aria-expanded="false"
                aria-controls="servicesDropdownMenu"
                data-services-dropdown-button
              >
                <span>${item.label}</span>
                ${createIcon("chevron-down")}
              </button>

              <div
                class="services-dropdown__menu"
                id="servicesDropdownMenu"
                data-services-dropdown-menu
              >
                ${services
                            .map(function (service) {
                                const servicePage = getPagePathWithoutHash(service.href);
                                const activeClass = currentPage === servicePage ? "is-active" : "";

                                return `
                      <a class="services-dropdown__item ${activeClass}" href="${service.href}">
                        ${createIcon(service.icon || "sparkles")}
                        <span>
                          <strong>${service.title}</strong>
                          <small>${service.summary || "Marketing service"}</small>
                        </span>
                      </a>
                    `;
                            })
                            .join("")}
              </div>
            </div>
          `;
                }

                return `
          <a class="site-nav__link ${isActive ? "is-active" : ""}" href="${item.href}">
            ${item.label}
          </a>
        `;
            })
            .join("");

        mount.innerHTML = `
      <header class="site-header" data-site-header-root>
        <div class="container site-header__inner">
          ${createLogoMarkup()}

          <nav class="site-nav" aria-label="Primary navigation">
            ${navMarkup}
          </nav>

          <div class="site-header__actions">
            <a class="btn btn-primary btn-small site-header__cta" href="${config.cta?.primaryHref || "./index.html#contact"}">
              <span>${config.cta?.primaryLabel || "Get Started"}</span>
              ${createIcon("arrow-right")}
            </a>

            <button
              class="burger-button"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobileMenu"
              data-mobile-menu-open
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    `;
    }

    function initHeaderScrollState() {
        const header = document.querySelector("[data-site-header-root]");
        if (!header) return;

        const updateHeader = function () {
            header.classList.toggle("is-scrolled", window.scrollY > 12);
        };

        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    function initServicesDropdown() {
        const dropdown = document.querySelector("[data-services-dropdown]");
        const button = document.querySelector("[data-services-dropdown-button]");
        const menu = document.querySelector("[data-services-dropdown-menu]");

        if (!dropdown || !button || !menu) return;

        button.addEventListener("click", function (event) {
            event.preventDefault();

            const isOpen = menu.classList.contains("is-open");
            closeAllDropdowns();

            if (!isOpen) {
                menu.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }
        });

        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                closeAllDropdowns();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeAllDropdowns();
                button.focus();
            }
        });
    }

    /* ==================================================
       Mobile Menu
       ================================================== */

    function renderMobileMenu() {
        const mount = document.querySelector(selectors.mobileMenuMount);
        if (!mount) return;

        const navigation = Array.isArray(config.navigation) ? config.navigation : [];
        const services = Array.isArray(config.services) ? config.services : [];
        const currentPage = getCurrentPage();

        const navigationMarkup = navigation
            .filter(function (item) {
                return item.type !== "dropdown";
            })
            .map(function (item) {
                const itemPage = getPagePathWithoutHash(item.href);
                const activeClass =
                    currentPage === itemPage && !item.href.includes("#") ? "is-active" : "";

                return `
          <a class="${activeClass}" href="${item.href}" data-mobile-menu-link>
            <span>${item.label}</span>
          </a>
        `;
            })
            .join("");

        const serviceMarkup = services
            .map(function (service) {
                const servicePage = getPagePathWithoutHash(service.href);
                const activeClass = currentPage === servicePage ? "is-active" : "";

                return `
          <a class="mobile-menu__service ${activeClass}" href="${service.href}" data-mobile-menu-link>
            ${createIcon(service.icon || "sparkles")}
            <span>${service.title}</span>
          </a>
        `;
            })
            .join("");

        const phoneMarkup = isPhoneAvailable()
            ? `
        <a class="mobile-menu__contact-link" href="${config.phone.href}" data-mobile-menu-link data-phone-wrap>
          ${createIcon("phone")}
          <span>
            <span>${config.phone.label || "Call"}</span>
            <strong>${config.phone.number}</strong>
          </span>
        </a>
      `
            : "";

        mount.innerHTML = `
      <aside
        class="mobile-menu"
        id="mobileMenu"
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
        hidden
        data-mobile-menu-panel
      >
        <div class="mobile-menu__top">
          ${createLogoMarkup()}

          <button
            class="mobile-menu__close"
            type="button"
            aria-label="Close menu"
            data-mobile-menu-close
          >
            ${createIcon("x")}
          </button>
        </div>

        <div class="mobile-menu__body">
          <div class="mobile-menu__grid">
            <div class="mobile-menu__panel">
              <span class="mobile-menu__label">Navigation</span>

              <nav class="mobile-menu__nav" aria-label="Mobile primary navigation">
                ${navigationMarkup}
                <a href="./index.html#services" data-mobile-menu-link>
                  <span>Services</span>
                </a>
              </nav>
            </div>

            <div class="mobile-menu__panel">
              <span class="mobile-menu__label">Services</span>

              <div class="mobile-menu__services">
                ${serviceMarkup}
              </div>

              <div class="mobile-menu__contact">
                <span class="mobile-menu__label">Contact</span>

                <a class="mobile-menu__contact-link" href="${config.email?.href || "#"}" data-mobile-menu-link>
                  ${createIcon("mail")}
                  <span>
                    <span>${config.email?.label || "Email"}</span>
                    <strong>${config.email?.value || ""}</strong>
                  </span>
                </a>

                <a
                  class="mobile-menu__contact-link"
                  href="${config.address?.mapUrl || "#"}"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-mobile-menu-link
                >
                  ${createIcon("map-pin")}
                  <span>
                    <span>Address</span>
                    <strong>${config.address?.full || ""}</strong>
                  </span>
                </a>

                ${phoneMarkup}
              </div>

              <a class="btn btn-primary mobile-menu__cta" href="${config.cta?.primaryHref || "./index.html#contact"}" data-mobile-menu-link>
                <span>${config.cta?.primaryLabel || "Get Started"}</span>
                ${createIcon("arrow-right")}
              </a>
            </div>
          </div>
        </div>
      </aside>
    `;
    }

    function initMobileMenu() {
        const menu = document.querySelector("[data-mobile-menu-panel]");
        const openButton = document.querySelector("[data-mobile-menu-open]");
        const closeButton = document.querySelector("[data-mobile-menu-close]");
        const menuLinks = document.querySelectorAll("[data-mobile-menu-link]");

        if (!menu || !openButton || !closeButton) return;

        const focusableSelector = [
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "[tabindex]:not([tabindex='-1'])"
        ].join(",");

        function openMenu() {
            lastFocusedElement = document.activeElement;

            menu.hidden = false;
            menu.classList.add("is-open");
            document.body.classList.add("menu-open");
            openButton.setAttribute("aria-expanded", "true");

            requestAnimationFrame(function () {
                closeButton.focus();
            });
        }

        function closeMenu(restoreFocus = true) {
            menu.classList.remove("is-open");
            document.body.classList.remove("menu-open");
            openButton.setAttribute("aria-expanded", "false");

            window.setTimeout(function () {
                menu.hidden = true;

                if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
                    lastFocusedElement.focus();
                }
            }, 260);
        }

        openButton.addEventListener("click", openMenu);

        closeButton.addEventListener("click", function () {
            closeMenu(true);
        });

        menuLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                closeMenu(false);
            });
        });

        menu.addEventListener("click", function (event) {
            if (event.target === menu) {
                closeMenu(true);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (!menu.classList.contains("is-open")) return;

            if (event.key === "Escape") {
                closeMenu(true);
            }

            if (event.key === "Tab") {
                const focusableElements = Array.from(menu.querySelectorAll(focusableSelector));
                if (!focusableElements.length) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }

                if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    /* ==================================================
       Footer
       ================================================== */

    function renderSiteFooter() {
        const mount = document.querySelector(selectors.footerMount);
        if (!mount) return;

        const services = Array.isArray(config.services) ? config.services : [];
        const navigation = Array.isArray(config.navigation) ? config.navigation : [];
        const legalLinks = Array.isArray(config.legalLinks) ? config.legalLinks : [];
        const currentPage = getCurrentPage();

        const serviceLinks = services
            .map(function (service) {
                const servicePage = getPagePathWithoutHash(service.href);
                const activeClass = currentPage === servicePage ? "is-active" : "";

                return `
          <a class="${activeClass}" href="${service.href}">
            ${createIcon(service.icon || "sparkles")}
            <span>${service.title}</span>
          </a>
        `;
            })
            .join("");

        const companyLinks = navigation
            .filter(function (item) {
                return item.type !== "dropdown";
            })
            .map(function (item) {
                const itemPage = getPagePathWithoutHash(item.href);
                const activeClass =
                    currentPage === itemPage && !item.href.includes("#") ? "is-active" : "";

                return `
          <a class="${activeClass}" href="${item.href}">
            <span>${item.label}</span>
          </a>
        `;
            })
            .join("");

        const legalMarkup = legalLinks
            .map(function (item) {
                const itemPage = getPagePathWithoutHash(item.href);
                const activeClass = currentPage === itemPage ? "is-active" : "";

                return `<a class="${activeClass}" href="${item.href}">${item.label}</a>`;
            })
            .join("");

        const phoneLink = isPhoneAvailable()
            ? `
        <a href="${config.phone.href}" data-phone-wrap>
          ${createIcon("phone")}
          <span>${config.phone.number}</span>
        </a>
      `
            : "";

        mount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__grid">
            <div class="site-footer__brand">
              ${createLogoMarkup()}

              <p class="site-footer__description">
                ${config.footer?.description || ""}
              </p>

              <p class="site-footer__disclaimer">
                ${config.footer?.disclaimer || config.disclaimer || ""}
              </p>
            </div>

            <div>
              <h2 class="site-footer__title">Services</h2>
              <div class="site-footer__links">
                ${serviceLinks}
              </div>
            </div>

            <div>
              <h2 class="site-footer__title">Company</h2>
              <div class="site-footer__links">
                ${companyLinks}
              </div>
            </div>

            <div>
              <h2 class="site-footer__title">Contact</h2>
              <div class="site-footer__links">
                <a href="${config.email?.href || "#"}">
                  ${createIcon("mail")}
                  <span>${config.email?.value || ""}</span>
                </a>

                <a href="${config.address?.mapUrl || "#"}" target="_blank" rel="noopener noreferrer">
                  ${createIcon("map-pin")}
                  <span>${config.address?.full || ""}</span>
                </a>

                ${phoneLink}
              </div>
            </div>
          </div>

          <div class="site-footer__bottom">
            <p>${config.footer?.copyright || ""}</p>

            <div class="site-footer__legal">
              ${legalMarkup}
            </div>
          </div>
        </div>
      </footer>
    `;
    }

    /* ==================================================
       Cookie / Policy Banner
       ================================================== */

    function renderPolicyBanner() {
        const mount = document.querySelector(selectors.policyBannerMount);
        if (!mount || !config.cookieBanner) return;

        const links = Array.isArray(config.cookieBanner.links) ? config.cookieBanner.links : [];

        mount.innerHTML = `
      <div class="policy-banner" data-policy-banner-root>
        <div class="policy-banner__inner">
          <div>
            <h2 class="policy-banner__title">${config.cookieBanner.title || "Privacy preferences"}</h2>
            <p class="policy-banner__text">${config.cookieBanner.text || ""}</p>

            <div class="policy-banner__links">
              ${links
                .map(function (link) {
                    return `<a href="${link.href}">${link.label}</a>`;
                })
                .join("")}
            </div>
          </div>

          <div class="policy-banner__actions">
            <button class="btn btn-primary btn-small" type="button" data-policy-accept>
              ${config.cookieBanner.acceptLabel || "Accept"}
            </button>

            <button class="btn btn-ghost btn-small" type="button" data-policy-decline>
              ${config.cookieBanner.declineLabel || "Decline"}
            </button>
          </div>
        </div>
      </div>
    `;
    }

    function initPolicyBanner() {
        const banner = document.querySelector("[data-policy-banner-root]");
        const acceptButton = document.querySelector("[data-policy-accept]");
        const declineButton = document.querySelector("[data-policy-decline]");
        const storageKey = config.cookieBanner?.storageKey || "rkjPolicyChoice";

        if (!banner || !acceptButton || !declineButton) return;

        const storedChoice = localStorage.getItem(storageKey);

        if (!storedChoice) {
            banner.classList.add("is-visible");
        }

        function saveChoice(choice) {
            localStorage.setItem(storageKey, choice);
            banner.classList.remove("is-visible");
        }

        acceptButton.addEventListener("click", function () {
            saveChoice("accepted");
        });

        declineButton.addEventListener("click", function () {
            saveChoice("declined");
        });
    }

    /* ==================================================
       Global Data Injection
       ================================================== */

    function injectGlobalData() {
        const globalTextMap = [
            ["[data-company-name]", config.companyName],
            ["[data-brand-name]", config.brandName],
            ["[data-email-text]", config.email?.value],
            ["[data-address-text]", config.address?.full],
            ["[data-footer-description]", config.footer?.description],
            ["[data-disclaimer]", config.disclaimer]
        ];

        globalTextMap.forEach(function ([selector, value]) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.textContent = value || "";
            });
        });

        document.querySelectorAll("[data-email-link]").forEach(function (element) {
            element.textContent = config.email?.value || "";
            setAttributes(element, {
                href: config.email?.href || "#"
            });
        });

        document.querySelectorAll("[data-address-link]").forEach(function (element) {
            element.textContent = config.address?.full || "";
            setAttributes(element, {
                href: config.address?.mapUrl || "#",
                target: "_blank",
                rel: "noopener noreferrer"
            });
        });

        document.querySelectorAll("[data-phone-link]").forEach(function (element) {
            if (!isPhoneAvailable()) {
                element.classList.add("is-hidden");
                return;
            }

            element.classList.remove("is-hidden");
            element.textContent = config.phone.number;
            setAttributes(element, {
                href: config.phone.href
            });
        });

        if (!isPhoneAvailable()) {
            document.querySelectorAll("[data-phone-wrap]").forEach(function (element) {
                element.classList.add("is-hidden");
            });
        }
    }

    /* ==================================================
       Service Page Injection
       ================================================== */

    function injectServicePageData() {
        const service = getCurrentService();
        if (!service) return;

        document.body.setAttribute("data-current-service", service.id || "");

        injectServiceHero(service);
        injectServiceOverview(service);
        injectServiceManage(service);
        injectServiceMatters(service);
        injectServiceMethod(service);
        injectServiceProcess(service);
        injectServiceBenefits(service);
        injectServiceFaq(service);
        injectServiceCta(service);
    }

    function injectServiceHero(service) {
        const heroSection = document.querySelector("[data-service-hero-section]");

        if (heroSection && service.image) {
            heroSection.style.setProperty("--service-hero-image", `url("${service.image}")`);
        }

        setText("[data-service-kicker]", service.hero?.kicker || service.title);
        setText("[data-service-title]", service.hero?.heading || service.title);
        setText("[data-service-text]", service.hero?.text || service.summary);
    }

    function injectServiceOverview(service) {
        setText("[data-service-overview-title]", service.overview?.title || service.title);
        setText("[data-service-overview-text]", service.overview?.text || service.summary);

        const metricsMount = document.querySelector("[data-service-overview-metrics]");
        const metrics = service.overview && Array.isArray(service.overview.metrics)
            ? service.overview.metrics
            : [];

        if (!metricsMount) return;

        metricsMount.innerHTML = metrics
            .map(function (metric) {
                return `
          <article class="service-metric glass-card hover-card">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceManage(service) {
        setText("[data-service-manage-title]", service.manageTitle || "What we manage");

        const mount = document.querySelector("[data-service-manage-items]");
        const items = Array.isArray(service.manage) ? service.manage : [];

        if (!mount) return;

        mount.innerHTML = items
            .map(function (item) {
                return `
          <article class="service-manage-card glass-card hover-card">
            <span class="icon-badge">
              ${createIcon(item.icon || "sparkles")}
            </span>

            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceMatters(service) {
        setText("[data-service-matters-title]", service.matters?.title || "Why this service matters");
        setText("[data-service-matters-text]", service.matters?.text || "");

        const mount = document.querySelector("[data-service-matters-points]");
        const points = service.matters && Array.isArray(service.matters.points)
            ? service.matters.points
            : [];

        if (!mount) return;

        mount.innerHTML = points
            .map(function (point) {
                return `
          <li>
            ${createIcon("check-circle-2")}
            <span>${point}</span>
          </li>
        `;
            })
            .join("");
    }

    function injectServiceMethod(service) {
        const mount = document.querySelector("[data-service-method-items]");
        const items = Array.isArray(service.method) ? service.method : [];

        if (!mount) return;

        mount.innerHTML = items
            .map(function (item, index) {
                return `
          <article class="service-method-card glass-card hover-card">
            <span class="service-method-card__number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceProcess(service) {
        const mount = document.querySelector("[data-service-process-items]");
        const items = Array.isArray(service.process) ? service.process : [];

        if (!mount) return;

        mount.innerHTML = items
            .map(function (item, index) {
                return `
          <article class="service-process-step glass-card hover-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${item}</h3>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceBenefits(service) {
        const mount = document.querySelector("[data-service-benefits-items]");
        const items = Array.isArray(service.benefits) ? service.benefits : [];

        if (!mount) return;

        mount.innerHTML = items
            .map(function (item) {
                return `
          <article class="service-benefit-card glass-card hover-card">
            <span class="icon-badge">
              ${createIcon(item.icon || "sparkles")}
            </span>

            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceFaq(service) {
        const mount = document.querySelector("[data-service-faq]");
        const items = Array.isArray(service.faq) ? service.faq : [];

        if (!mount) return;

        mount.innerHTML = items
            .map(function (item, index) {
                const buttonId = `${service.id}-faq-button-${index + 1}`;
                const panelId = `${service.id}-faq-panel-${index + 1}`;

                return `
          <article class="faq-item">
            <button
              class="faq-item__button"
              id="${buttonId}"
              type="button"
              aria-expanded="false"
              aria-controls="${panelId}"
              data-faq-button
            >
              <span>${item.question}</span>
              ${createIcon("plus")}
            </button>

            <div
              class="faq-item__panel"
              id="${panelId}"
              role="region"
              aria-labelledby="${buttonId}"
              hidden
              data-faq-panel
            >
              <p>${item.answer}</p>
            </div>
          </article>
        `;
            })
            .join("");
    }

    function injectServiceCta(service) {
        setText("[data-service-cta-title]", service.cta?.title || `Ready to improve ${service.title}?`);
        setText("[data-service-cta-text]", service.cta?.text || "Share your goals and RKJ will help outline a focused direction.");

        document.querySelectorAll("[data-service-cta-link]").forEach(function (link) {
            link.setAttribute("href", config.cta?.proposalHref || "./index.html#contact");
            link.querySelector("span")
                ? (link.querySelector("span").textContent = config.cta?.proposalLabel || "Request Proposal")
                : (link.textContent = config.cta?.proposalLabel || "Request Proposal");
        });
    }

    /* ==================================================
       FAQ Accordion
       ================================================== */

    function initFaqAccordions() {
        document.querySelectorAll("[data-faq-button]").forEach(function (button) {
            button.addEventListener("click", function () {
                const panelId = button.getAttribute("aria-controls");
                const panel = panelId ? document.getElementById(panelId) : null;

                if (!panel) return;

                const isOpen = button.getAttribute("aria-expanded") === "true";

                button.setAttribute("aria-expanded", String(!isOpen));
                button.classList.toggle("is-open", !isOpen);

                if (isOpen) {
                    panel.style.maxHeight = `${panel.scrollHeight}px`;

                    requestAnimationFrame(function () {
                        panel.style.maxHeight = "0px";
                    });

                    window.setTimeout(function () {
                        panel.hidden = true;
                    }, 260);
                } else {
                    panel.hidden = false;
                    panel.style.maxHeight = "0px";

                    requestAnimationFrame(function () {
                        panel.style.maxHeight = `${panel.scrollHeight}px`;
                    });
                }
            });
        });

        window.addEventListener("resize", function () {
            document.querySelectorAll("[data-faq-panel]").forEach(function (panel) {
                const button = document.querySelector(`[aria-controls="${panel.id}"]`);

                if (button && button.getAttribute("aria-expanded") === "true") {
                    panel.style.maxHeight = `${panel.scrollHeight}px`;
                }
            });
        });
    }

    /* ==================================================
       Forms
       ================================================== */

    function injectServiceSelectOptions() {
        const services = Array.isArray(config.services) ? config.services : [];
        const currentService = getCurrentService();

        document.querySelectorAll("[data-service-select]").forEach(function (select) {
            const placeholder = config.form?.placeholders?.service || "Choose a service";

            select.innerHTML = `
        <option value="">${placeholder}</option>
        ${services
                    .map(function (service) {
                        const selected = currentService && currentService.id === service.id ? "selected" : "";
                        return `<option value="${service.title}" ${selected}>${service.title}</option>`;
                    })
                    .join("")}
      `;
        });
    }

    function initContactForms() {
        document.querySelectorAll(selectors.contactForm).forEach(function (form) {
            const status = form.querySelector("[data-form-status]");

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const isValid = validateForm(form);

                if (!isValid) {
                    if (status) {
                        status.textContent = config.form?.errorMessage || "Please complete the required fields correctly.";
                        status.classList.add("is-visible");
                    }

                    return;
                }

                form.reset();
                clearFormErrors(form);

                if (status) {
                    status.textContent = config.form?.successMessage || "Thank you. Your request has been received.";
                    status.classList.add("is-visible");
                }
            });

            form.querySelectorAll("input, select, textarea").forEach(function (field) {
                field.addEventListener("input", function () {
                    validateField(field);
                });

                field.addEventListener("blur", function () {
                    validateField(field);
                });
            });
        });
    }

    function validateForm(form) {
        let isValid = true;

        form.querySelectorAll("[data-required]").forEach(function (field) {
            const fieldIsValid = validateField(field);

            if (!fieldIsValid) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const wrapper = field.closest(".form-field");
        const error = wrapper ? wrapper.querySelector("[data-form-error]") : null;
        const value = field.value.trim();
        const isRequired = field.hasAttribute("data-required");
        const isEmail = field.getAttribute("type") === "email";

        let message = "";

        if (isRequired && !value) {
            message = config.form?.requiredMessage || "This field is required.";
        } else if (isEmail && value && !isValidEmail(value)) {
            message = config.form?.emailMessage || "Please enter a valid email address.";
        }

        if (wrapper) {
            wrapper.classList.toggle("has-error", Boolean(message));
        }

        if (error) {
            error.textContent = message;
        }

        return !message;
    }

    function clearFormErrors(form) {
        form.querySelectorAll(".form-field").forEach(function (field) {
            field.classList.remove("has-error");
        });

        form.querySelectorAll("[data-form-error]").forEach(function (error) {
            error.textContent = "";
        });
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    /* ==================================================
       Smooth Anchors
       ================================================== */

    function initSmoothAnchors() {
        document.addEventListener("click", function (event) {
            const link = event.target.closest('a[href^="#"], a[href^="./index.html#"]');
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            const isSamePageAnchor = href.startsWith("#");
            const isIndexAnchor = href.startsWith("./index.html#") && getCurrentPage() === "index.html";

            if (!isSamePageAnchor && !isIndexAnchor) return;

            const hash = isSamePageAnchor ? href : href.substring("./index.html".length);
            const target = document.querySelector(hash);

            if (!target) return;

            event.preventDefault();

            const header = document.querySelector("[data-site-header-root]");
            const headerHeight = header ? header.offsetHeight : 0;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 14;

            window.scrollTo({
                top: targetTop,
                behavior: "smooth"
            });

            history.pushState(null, "", hash);
        });
    }
})();