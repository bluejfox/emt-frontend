_emt.filter('nospace', function() {
    return function(value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
_emt.filter('humanizeDoc', function() {
    return function(doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
            return doc.name.replace(/([A-Z])/g, function($1) {
                return '-' + $1.toLowerCase();
            });
        }
        return doc.label || doc.name;
    };
});
