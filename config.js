// ------------ Navbar functions ------------
    // ------------ Navbar variables ------------
        const dropdownBtn = document.getElementById("dropdownBtn");

        const navButton = document.getElementById("nav-btn");
        const modalNav = document.getElementById("modal-nav");
        const closeModal = document.getElementById("close-modal");

        const mobileDropdownBtn = document.getElementById("mobileDropdownBtn");
        let isOpened;
    // ------------------------------------------

    dropdownBtn.addEventListener("click", () => {
        isOpened = dropdownBtn.getAttribute("aria-expanded") === "true";
        if(isOpened ? closeDropdownNav() : openDropdownNav());
    });

    function closeDropdownNav() {
        dropdownBtn.setAttribute("aria-expanded", "false");
    }

    function openDropdownNav() {
        dropdownBtn.setAttribute("aria-expanded", "true");
    }

    navButton.addEventListener("click", () => {
        navButton.setAttribute("aria-expanded", "true");
        modalNav.setAttribute("data-state", "opened");
    });

    closeModal.addEventListener("click", () => {
        navButton.setAttribute("aria-expanded", "false");
        modalNav.setAttribute("data-state", "closed");
    });

    // ------------ Mobile dropdown button event ------------
        mobileDropdownBtn.addEventListener("click", () => {
            isOpened = mobileDropdownBtn.getAttribute("aria-expanded") === "true";
            if(isOpened ? closeMobileDropdownNav() : openMobileDropdownNav());
        });

        function closeMobileDropdownNav() {
            mobileDropdownBtn.setAttribute("aria-expanded", "false");
        }

        function openMobileDropdownNav() {
            mobileDropdownBtn.setAttribute("aria-expanded", "true");
        }
    //  -----------------------------------------------------
// ------------------------------------------