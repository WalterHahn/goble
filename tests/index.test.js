var goble = require('../index');

test('setting and getting globals', () => {
  expect(goble.get('foo')).toBe(null);
  goble.set('foo', 'bar');
  expect(goble.get('foo')).toBe('bar');
});

test('clearing globals', () => {
  expect(goble.get('foo')).toBe('bar');
  goble.clear();
  expect(goble.get('foo')).toBe(null);
});

test('setting and getting multiple globals', () => {
  goble.clear();
  goble.set('foo1', 'bar1');
  goble.set('foo2', 'bar2');
  expect(goble.get('foo1')).toBe('bar1');
  expect(goble.get('foo2')).toBe('bar2');
});

test('setting and getting non-string key should return null', () => {
  goble.clear();
  goble.set(1, 'one');
  expect(goble.get(1)).toBe(null);
});
