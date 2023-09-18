var capacitorBasic = (function (exports, core) {
    'use strict';

    const Basic = core.registerPlugin('Basic', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BasicWeb()),
    });

    class BasicWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BasicWeb: BasicWeb
    });

    exports.Basic = Basic;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
