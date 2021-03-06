"use strict";
var _ = require('lodash');
var nouns = require('./nouns');
var adjectives = require('./adjectives');
module.exports = generate;
generate.generate = generate;
/**
 * Generate a name
 * @param {any | undefined} options
 */
function generate(options) {
    if (options === void 0) { options = {}; }
    var defaults = {
        number: false,
        words: 2,
        alliterative: false,
    };
    options = _.merge(defaults, options || {});
    var raw = getRawProjName(options);
    return {
        raw: raw,
        dashed: raw.join('-'),
        spaced: raw.join(' ')
    };
}
function getRawProjName(options) {
    var raw = [];
    _.times(options.words - 1, function () {
        if (options.alliterative && raw.length)
            raw.push(_.sample(getAlliterativeMatches(adjectives, raw[0].substring(0, 1))));
        else
            raw.push(_.sample(adjectives).toLowerCase());
    });
    if (options.alliterative)
        raw.push(_.sample(getAlliterativeMatches(nouns, raw[0].substring(0, 1))));
    else
        raw.push(_.sample(nouns).toLowerCase());
    if (options.number) {
        raw.push(_.random(1, 9999));
    }
    return raw;
}
function getAlliterativeMatches(arr, letter) {
    var check = letter.toLowerCase();
    return _.filter(arr, function (elm) { return elm.substring(0, 1).toLowerCase() === check; });
}
//# sourceMappingURL=generator.js.map