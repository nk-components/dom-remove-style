'use strict';

module.exports = removeStyle;

function removeStyle(elmts) {
  if (elmts.length === undefined) {
    return remove(elmts);
  }

  var i = elmts.length;
  while (i--) {
    remove(elmts[i]);
  }
}

function remove(elmt) {
  elmt.setAttribute('style', '');
  elmt.removeAttribute('style');
}
