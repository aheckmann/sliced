
/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];

  var start = slice < 0
    ? slice + args.length
    : slice || 0;

  var end = 3 === arguments.length
    ? sliceEnd < 0
      ? sliceEnd + args.length
      : sliceEnd
    : args.length;

  for (var i = start; i < end; ++i) {
    ret[i - start] = args[i];
  }

  return ret;
}

