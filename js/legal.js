"use strict";

(function () {
    const config = window.SITE_CONFIG || {};

    const selectors = {
        headerMount: "[data-site-header]",
        footerMount: "[data-site-footer]",
        mobileMenuMount: "[data-mobile-menu]",
        policyBannerMount: "[data-policy-banner]"
    };

    let lastFocusedElement = null;

    document.addEventListener("DOMContentLoaded", function () {
        applyPageMeta();
        renderSiteHeader();
        renderMobileMenu();
        renderSiteFooter();
        renderPolicyBanner();
        injectGlobalData();
        initHeaderScrollState();
        initServicesDropdown();
        initMobileMenu();
        initPolicyBanner();
        initSmoothAnchors();
        initLucideIcons();

        window.addEventListener("load", function () {
            document.body.classList.remove("is-loading");
        });
    });

    

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

    function isServicePage(page) {
        const services = Array.isArray(config.services) ? config.services : [];

        return services.some(function (service) {
            return getPagePathWithoutHash(service.href) === page;
        });
    }

    function closeAllDropdowns() {
        document.querySelectorAll("[data-services-dropdown-menu]").forEach(function (menu) {
            menu.classList.remove("is-open");
        });

        document.querySelectorAll("[data-services-dropdown-button]").forEach(function (button) {
            button.setAttribute("aria-expanded", "false");
        });
    }

    

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