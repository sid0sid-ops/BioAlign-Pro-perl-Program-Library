window.App.UI = {

    // Scrolls the currently active sidebar link into view
    scrollActiveSidebarItem: function () {
        if (!window.currentActiveHash) return;
        const activeLink = document.querySelector(`#sidebarContent a[href="${window.currentActiveHash}"]`);
        if (activeLink) activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },

    initSidebar: function (searchQuery = "") {
        const sidebar = document.getElementById('sidebarContent');
        sidebar.innerHTML = '';

        // Filter programs based on search query
        const filtered = window.App.Data.cppFiles.filter(file => {
            if (!searchQuery) return true;
            const q = searchQuery.toLowerCase();
            return (file.title + ' ' + file.concept).toLowerCase().includes(q);
        });

        // Show empty state if no results
        if (filtered.length === 0) {
            sidebar.innerHTML = `
                <div class="px-4 py-12 text-center text-sm text-gray-400">
                    <i class="fa-solid fa-magnifying-glass opacity-30 text-4xl mb-3"></i><br>
                    No programs found matching "<span class="text-gray-600 dark:text-gray-300">${searchQuery}</span>"
                </div>
            `;
            return;
        }

        // Program count bar
        const countBar = document.createElement('div');
        countBar.className = 'flex items-center justify-between px-4 py-2 text-[10px] text-gray-400 uppercase tracking-wide border-b border-gray-200 dark:border-[#333333]';
        countBar.innerHTML = `
            <span><i class="fa-solid fa-code mr-1"></i> ${filtered.length} Programs</span>
            <span class="text-purple-500 dark:text-purple-400 font-semibold">🐪 Perl</span>
        `;
        sidebar.appendChild(countBar);

        // Render flat list of programs
        const list = document.createElement('div');
        list.className = 'flex flex-col gap-0.5 p-2';

        filtered.forEach(file => {
            const link = document.createElement('a');
            link.href = `#${file.id}`;

            const isActive = window.currentActiveHash === `#${file.id}`;
            link.className = `flex items-center px-3 py-2 text-sm rounded-md transition-all relative group ${
                isActive
                    ? 'bg-primary/10 text-primary font-semibold border-l-[3px] border-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 border-l-[3px] border-transparent hover:border-purple-400/50'
            }`;

            let displayTitle = file.title;
            if (searchQuery) {
                const safeQ = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                displayTitle = displayTitle.replace(new RegExp(`(${safeQ})`, 'gi'),
                    '<mark class="bg-primary/30 text-inherit rounded px-0.5 font-bold">$1</mark>');
            }

            link.innerHTML = `
                <i class="fa-solid fa-code w-3 mr-2.5 opacity-40 group-hover:opacity-100 group-hover:text-purple-400 shrink-0 transition-colors text-[11px]"></i>
                <span class="whitespace-normal break-words leading-tight text-left text-xs sm:text-sm">${displayTitle}</span>
            `;

            link.onclick = () => {
                if (window.innerWidth < 1024 && window.App.isMenuOpen) window.App.UI.toggleMobileMenu();
            };

            list.appendChild(link);
        });

        sidebar.appendChild(list);
    },




    toggleMobileMenu: function () {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const btn = document.getElementById('mobileMenuBtn');

        window.App.isMenuOpen = !window.App.isMenuOpen;

        if (window.App.isMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            btn.classList.add('menu-open');
        } else {
            sidebar.classList.add('-translate-x-full');
            sidebar.classList.remove('translate-x-0');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            btn.classList.remove('menu-open');
        }
    },

    toggleTheme: function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = isDark ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon text-gray-700';
        }
    },

    showToast: function (title, msg, isError = false) {
        const toast = document.getElementById('toast');
        document.getElementById('toastTitle').textContent = title;
        document.getElementById('toastMsg').textContent = msg;
        const iconDiv = toast.querySelector('div.w-8');
        if (isError) {
            iconDiv.className = "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            iconDiv.className = "w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    },

    initTerminalResizer: function () {
        const resizer = document.getElementById('terminalResizer');
        const container = document.getElementById('terminalContainer');
        const output = document.getElementById('terminalOutput');
        if (!resizer || !container || !output) return;

        let startY = 0;
        let startHeight = 0;

        window.App.UI.isExpanded = false;
        window.App.UI.hasRunSimulation = false;

        window.App.UI.expandConsole = function (forceExpand) {
            if (forceExpand && window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(160, Math.min(needed, maxH)) + 'px';
                return;
            }
            if (forceExpand === false && !window.App.UI.isExpanded) return;

            window.App.UI.isExpanded = forceExpand !== undefined ? forceExpand : !window.App.UI.isExpanded;
            container.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

            if (window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(180, Math.min(needed, maxH)) + 'px';
            } else {
                container.style.height = '160px';
            }
            setTimeout(() => container.style.transition = 'none', 300);
        };

        output.style.cursor = 'pointer';
        output.setAttribute('title', 'Click to expand/collapse explicitly AFTER running.');
        output.addEventListener('click', (e) => {
            if (window.getSelection().toString().length > 0) return;
            if (!window.App.UI.hasRunSimulation) return;
            window.App.UI.expandConsole();
        });

        resizer.addEventListener('mousedown', (e) => {
            startY = e.clientY;
            startHeight = container.offsetHeight;
            document.body.style.cursor = 'ns-resize';

            const mouseMoveHandler = (e) => {
                const dy = startY - e.clientY;
                container.style.transition = 'none';
                container.style.height = `${startHeight + dy}px`;
                isExpanded = parseInt(container.style.height) > 200;
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                document.body.style.cursor = '';
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    },

    // 📏 Horizontal sidebar resizer (desktop only)
    initSidebarResizer: function () {
        const resizer = document.getElementById('sidebarResizer');
        const sidebar = document.getElementById('sidebar');
        if (!resizer || !sidebar) return;

        let isResizing = false;

        resizer.addEventListener('mousedown', () => {
            isResizing = true;
            document.body.classList.add('select-none');
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = Math.max(200, Math.min(520, e.clientX));
            sidebar.style.width = newWidth + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (!isResizing) return;
            isResizing = false;
            document.body.classList.remove('select-none');
            document.body.style.cursor = '';
        });
    }
};
