_emt.factory('MenuService', function() {
    var _menu = null;
    var _openedSection = null;
    var _currentSection = null;
    var _currentPage = null;

    function setMenuInfo(menu) {
        _menu = menu;
    }

    function getMenuInfo() {
        return _menu;
    }

    function selectSection(section) {
        _openedSection = section;
    }

    function toggleSelectSection(section) {
        _openedSection = (_openedSection === section ? null : section);
    }

    function isSectionSelected(section) {
        return _openedSection === section;
    }

    function selectPage(section, page) {
        _currentSection = section;
        _currentPage = page;
    }

    function isPageSelected(page) {
        return self.currentPage === page;
    }

    return {
        'setMenuInfo': setMenuInfo,
        'getMenuInfo': getMenuInfo,
        'selectSection': selectSection,
        'toggleSelectSection': toggleSelectSection,
        'isSectionSelected': isSectionSelected,
        'selectPage': selectPage,
        'isPageSelected': isPageSelected
    };
});
