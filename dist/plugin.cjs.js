'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
