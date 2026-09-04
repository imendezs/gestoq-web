(function () {
    'use strict';

    const STORAGE_KEY = 'gestoq-lang';
    const DEFAULT_LANG = 'en';
    const SUPPORTED = ['es', 'en'];

    function getCurrentLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
        return DEFAULT_LANG;
    }

    function applyTranslations(lang) {
        const dict = lang === 'es' ? I18N_ES : I18N_EN;
        if (!dict) return;

        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) {
                el.setAttribute('aria-label', dict[key]);
            }
        });

        const htmlElements = document.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(function (el) {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        const altElements = document.querySelectorAll('[data-i18n-alt]');
        altElements.forEach(function (el) {
            const key = el.getAttribute('data-i18n-alt');
            if (dict[key] !== undefined) {
                el.setAttribute('alt', dict[key]);
            }
        });

        const contentElements = document.querySelectorAll('[data-i18n-content]');
        contentElements.forEach(function (el) {
            const key = el.getAttribute('data-i18n-content');
            if (dict[key] !== undefined) {
                el.setAttribute('content', dict[key]);
            }
        });

        document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        localStorage.setItem(STORAGE_KEY, lang);
    }

    function initToggle() {
        document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const lang = btn.getAttribute('data-lang');
                applyTranslations(lang);
            });
        });
    }

    function init() {
        const lang = getCurrentLang();
        applyTranslations(lang);
        initToggle();

        const overlay = document.getElementById('i18n-loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(function () {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, 250);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
