
/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} [slice]
 * @param {Number} [sliceEnd]
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var start = 0;
  var len = args.length;

  if (0 === len) return ret;

  if (typeof slice != 'undefined') {
    start = slice < 0
      ? Math.max(0, slice + len)
      : slice;
  }

  if (typeof sliceEnd != 'undefined') {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
};
