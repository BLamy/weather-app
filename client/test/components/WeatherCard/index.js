import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import {WeatherCard} from 'components/WeatherCard';
import { SmallCard, LargeCard } from './fixtures'
const render = reactDom.renderToStaticMarkup;

test('Small WeatherCard', nest => {
  nest.test('...Date', assert => {
    const msg = 'Should render proper date';

    const el = <WeatherCard { ...SmallCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="date"]');

    const actual = target.html();
    const expected = 'Tuesday, July 5';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...Image', assert => {
    const msg = 'Should render proper Icon';

    const el = <WeatherCard { ...SmallCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="icon"]')[0];
    const re = new RegExp(/^https?.*02d\.[A-Za-z]{3,4}/, 'g');
    const output = target.attribs.src;

    const actual = re.test(output);
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('Should not render any big card props', assert => {
    const msg = 'Should not render location';

    const el = <WeatherCard { ...SmallCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="location"]')[0];

    const actual = target;
    const expected = undefined;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});

test('Large WeatherCard', nest => {
  nest.test('...Date', assert => {
    const msg = 'Should render proper date';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="date"]');

    const actual = target.html();
    const expected = 'Tuesday, July 5';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...Image', assert => {
    const msg = 'Should render proper Icon';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="icon"]')[0];
    const re = new RegExp(/^https?.*02d\.[A-Za-z]{3,4}/, 'g');
    const output = target.attribs.src;

    const actual = re.test(output);
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...location', assert => {
    const msg = 'Should render proper location';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="location"]');

    const actual = target.html();
    const expected = 'rochester';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...description', assert => {
    const msg = 'Should render proper description';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="description"]');

    const actual = target.html();
    const expected = 'clear sky';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...temp', assert => {
    const msg = 'Should render proper temp';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="temp"]');

    const actual = target.html();
    const expected = '80.92&#xB0; F/65.8&#xB0; F';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...cloudPercent', assert => {
    const msg = 'Should render proper cloudPercent';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="cloudPercent"]');

    const actual = target.html();
    const expected = 'Cloud Cover: 8%';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...humidity', assert => {
    const msg = 'Should render proper humidity';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="humidity"]');

    const actual = target.html();
    const expected = 'Humidity: 47%';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...wind', assert => {
    const msg = 'Should render proper wind';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="wind"]');

    const actual = target.html();
    const expected = 'Wind: 3.4 mph North (11&#xB0;)';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...pressure', assert => {
    const msg = 'Should render proper pressure';

    const el = <WeatherCard { ...LargeCard } />;
    const $ = dom.load(render(el));
    const target = $('[data-id="pressure"]');

    const actual = target.html();
    const expected = 'Pressure: 1005.24 mbar';

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
