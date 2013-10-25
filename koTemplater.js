!function (global, document, ko) {
    'use strict';

    var previousKoTemplater = global.KoTemplater;

    function KoTemplater(template) {
        var _this = this;
        if (!template)
            throw new Error('You must supply a template to KoTemplater');

        if (!(_this instanceof KoTemplater))
            _this = new KoTemplater(template);

        _this.template = template;

        _this._compiled = document.createElement("div");
        _this._compiled.innerHTML = template;
    }
    
    KoTemplater.compile = function compile(template) {        
        return new KoTemplater(template);
    }

    KoTemplater.noConflict = function noConflict() {
        global.KoTemplater = previousKoTemplater;
        return KoTemplater;
    };

    KoTemplater.prototype.render = function render(context) {
        ko.applyBindings(context, this._compiled);
        var html = this._compiled.innerHTML;
        return html;
    };

    global.KoTemplater = KoTemplater;
}(this, document, ko);
