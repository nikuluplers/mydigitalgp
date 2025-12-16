document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Transform hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Accordion Logic
    const accordions = document.querySelectorAll('details.faq-item');
    
    accordions.forEach((acc) => {
        acc.addEventListener('click', (e) => {
            // Only handle clicks on the summary element or its children
            if (e.target.tagName !== 'SUMMARY' && !e.target.closest('summary')) return;

            e.preventDefault(); // Prevent native toggle behavior

            // Identify current state
            const isOpen = acc.hasAttribute('open');

            // Close all other open accordions
            accordions.forEach(other => {
                if (other !== acc && other.hasAttribute('open')) {
                    closeAccordion(other);
                }
            });

            // Toggle the clicked accordion
            if (isOpen) {
                closeAccordion(acc);
            } else {
                openAccordion(acc);
            }
        });
    });

    function openAccordion(el) {
        const summary = el.querySelector('summary');
        const content = el.querySelector('.faq-answer');
        
        // Ensure the element is open so we can measure content height
        el.setAttribute('open', '');
        
        // Measurements
        const startHeight = summary.offsetHeight;
        const endHeight = startHeight + content.offsetHeight;
        
        // Animate from summary height to full height
        const animation = el.animate(
            { height: [`${startHeight}px`, `${endHeight}px`] },
            { duration: 300, easing: 'ease-out' }
        );
        
        animation.onfinish = () => {
             // Clean up style to allow content to be responsive
             el.style.height = ''; 
        };
    }

    function closeAccordion(el) {
        const summary = el.querySelector('summary');
        
        const startHeight = el.offsetHeight;
        const endHeight = summary.offsetHeight;
        
        // Animate from full height to summary height
        const animation = el.animate(
            { height: [`${startHeight}px`, `${endHeight}px`] },
            { duration: 300, easing: 'ease-out' }
        );
        
        animation.onfinish = () => {
             el.removeAttribute('open');
             el.style.height = '';
        };
    }
});