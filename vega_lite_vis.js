/**
 * Average Trend of Ladder Score by Region from 2006 to 2020
 */
var vg_1 = "avg_happiness_by_region_through_years.vg.json";
vegaEmbed("#happiness_by_region", vg_1, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Trend of Life Expectancy & Ladder Score by Country from 2006 to 2020
 */
var vg_2 = "trend_of_lifespan_and_ladder_score.vg.json";
vegaEmbed("#health_and_happy_overview", vg_2, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Average Happiness by Region in 2021
 */
var vg_3 = "avg_happiness_bar_chart_by_region.vg.json";

vegaEmbed("#bar_chart", vg_3, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Average GDP Per Capita by Region in 2021
 */

var vg_4 = "radialGdpPerCapita.vg.json";
vegaEmbed("#GDP", vg_4, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Average Ladder Score by Country in 2021
 */
var vg_5 = "happiness_map.vg.json";
vegaEmbed("#happy_map", vg_5, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Average Life Expectancy by Country in 2021
 */
var vg_6 = "lifespan_map.vg.json";
vegaEmbed("#life_map", vg_6, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Top K Countries Where Residents are the happiest in 2021
 */
var vg_7 = "most_happy.vg.json";
vegaEmbed("#most_happy", vg_7, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Bottom K Countries Where Residents are least happiest in 2021
 */
var vg_8 = "least_happy.vg.json";
vegaEmbed("#least_happy", vg_8, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

/**
 * Correlation Charts:
 */

// Happiness V/s Health
var vg_9 = "correlation_HealthAndHappiness.vg.json";
vegaEmbed("#healthAndHappy", vg_9, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

// Social support V/s Happiness
var vg_10 = "correlation_supportAndHappiness.vg.json";
vegaEmbed("#supportAndHappy", vg_10, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

// Freedom V/s Happiness
var vg_11 = "correlation_FreedomAndHappiness.vg.json";
vegaEmbed("#FreedomAndHappy", vg_11, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

// Money V/s Happiness
var vg_12 = "correlation_moneyAndHappiness.vg.json";
vegaEmbed("#MoneyAndHappy", vg_12, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

// Money V/s Health
var vg_13 = "correlation_MoneyAndHealth.vg.json";
vegaEmbed("#healthAndMoney", vg_13, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
