// script.js

document.addEventListener("DOMContentLoaded", () => {
    const industriesContainer = document.getElementById('industries-container');
    const fieldsContainer = document.getElementById('fields-container');
    const subFieldsContainer = document.getElementById('sub-fields-container');

    const breadcrumbs = document.querySelector('.bread-crumbs');
    const result1 = document.querySelector('.result1');

    const industryCards = document.querySelectorAll('.industries .card');
    const fieldCards = document.querySelectorAll('.fields .card');
    const subFieldCards = document.querySelectorAll('.sub-fields .card');

    function updateBreadcrumbs(level, text) {
        const currentCrumbs = breadcrumbs.querySelectorAll('.breadcrumbs--item');
        currentCrumbs.forEach((crumb, index) => {
            if (index >= level) {
                crumb.remove();
            }
        });
        const newCrumb = document.createElement('li');
        newCrumb.classList.add('breadcrumbs--item');
        newCrumb.innerHTML = `<a href="#" class="breadcrumbs--link breadcrumbs--link--active">${text}</a>`;
        breadcrumbs.appendChild(newCrumb);
        breadcrumbs.querySelectorAll('.breadcrumbs--link').forEach((link, index) => {
            if (index < level) {
                link.classList.remove('breadcrumbs--link--active');
                link.classList.add('breadcrumbs--link');
            }
        });
    }

    function resetBreadcrumbs() {
        const baseCrumbs = ['JobInsight', 'Job', 'Industries'];
        breadcrumbs.innerHTML = '';
        baseCrumbs.forEach((crumb, index) => {
            const newCrumb = document.createElement('li');
            newCrumb.classList.add('breadcrumbs--item');
            newCrumb.innerHTML = `<a href="#" class="breadcrumbs--link ${index === 2 ? 'breadcrumbs--link--active' : 'breadcrumbs--link'}">${crumb}</a>`;
            breadcrumbs.appendChild(newCrumb);
        });
    }

    function showContainer(container) {
        industriesContainer.classList.add('hidden');
        fieldsContainer.classList.add('hidden');
        subFieldsContainer.classList.add('hidden');
        container.classList.remove('hidden');
    }

    function updateResult1(text) {
        result1.textContent = text;
    }

    industryCards.forEach(card => {
        card.addEventListener('click', () => {
            showContainer(fieldsContainer);
            updateBreadcrumbs(3, 'Fields');
            updateResult1('Fields');
        });
    });

    fieldCards.forEach(card => {
        card.addEventListener('click', () => {
            showContainer(subFieldsContainer);
            updateBreadcrumbs(4, 'Sub Fields');
            updateResult1('Sub Fields');
        });
    });

    breadcrumbs.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const crumbIndex = Array.from(breadcrumbs.children).indexOf(event.target.parentElement);
            if (crumbIndex === 0 || crumbIndex === 1 || crumbIndex === 2) {
                showContainer(industriesContainer);
                updateResult1('Industries');
                resetBreadcrumbs();
            } else if (crumbIndex === 3) {
                showContainer(fieldsContainer);
                updateResult1('Fields');
                updateBreadcrumbs(3, 'Fields');
            } else if (crumbIndex === 4) {
                showContainer(subFieldsContainer);
                updateResult1('Sub Fields');
                updateBreadcrumbs(4, 'Sub Fields');
            }
        }
    });

    // Initialize breadcrumbs
    resetBreadcrumbs();
    showContainer(industriesContainer);
});


