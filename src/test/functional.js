import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('autorender-bug functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('autorender-bug main page shows up', function() {
  F('title').text('autorender-bug', 'Title is set');
});
