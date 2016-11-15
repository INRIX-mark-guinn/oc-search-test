define(function(require) {
    'use strict';

    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        data() {
            return this._terms = [];
        }

        onSearch(term) {
            return super.onSearch(term).then(term => {
                this._terms.unshift({
                    text: term,
                });

                this.reset([].concat(this._terms));
            });
        }
    }
});
