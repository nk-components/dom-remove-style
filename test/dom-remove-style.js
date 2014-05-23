/*global describe, it */
var assert = require('assert');
var rs = require('dom-remove-style');

describe('dom-remove-style', function() {
  function getElmt() {
    var el = document.createElement('div');
    el.style.color = 'red';
    return el;
  }

  function hasStyle(el) {
    return /red/.test(el.getAttribute('style'));
  }

  it('hould remove style attribute from an element', function() {
    var el = getElmt();
    assert.equal(hasStyle(el), true);

    rs(el);
    assert.equal(el.getAttribute('style'), null);
  });

  it('should remove style attribute from a list of elements', function() {
    var list = [getElmt(), getElmt(), getElmt()];

    assert.equal(list.every(function(el) {
      return hasStyle(el);
    }), true);

    rs(list);

    assert.equal(list.every(function(el) {
      return el.getAttribute('style') === null;
    }), true);
  });
});
