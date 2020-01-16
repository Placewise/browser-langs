import test from 'ava';
import { all, allCountries, find } from './main';

test('all() returns array', t => {
  t.true(Array.isArray(all()));
});

test("find('pl') finds correct language", t => {
  const l = find('pl');
  t.true(l != null);

  if (l) {
    t.is(l.name, 'Polish');
  }
});

test("find('en-US') finds correct language", t => {
  const l = find('en-US');
  t.true(l != null);
  if (l) {
    t.is(l.name, 'English (United States)');
  }
});

test("find('en-gb') finds correct language", t => {
  const l = find('en-gb');
  t.true(l != null);
  if (l) {
    t.is(l.name, 'English (United Kingdom)');
  }
});

test('allCountries() returns Poland', t => {
  t.is(
    // @ts-ignore
    allCountries().find(c => c.code === 'PL').name,
    'Poland'
  );
});
