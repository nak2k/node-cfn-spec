const test = require('tape');
const { getSpec, urls } = require('..');

const NUM_OF_REGIONS = 14;

test('test', t => {
  t.plan(1 + NUM_OF_REGIONS);

  const regions = Object.keys(urls);
  t.equal(regions.length, NUM_OF_REGIONS);

  regions.forEach(region => {
    const { PropertyTypes } = getSpec(region);
    t.ok(Object.keys(PropertyTypes).length > 100);
  });
});
