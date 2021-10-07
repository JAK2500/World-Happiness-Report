/**
 * This function makes sure that when page will load, the life expectancy map, GDP by region vis
 * and 3 of the correlation charts related to happiness won't be shown
 */
function loadVis() {
  let lifespan_map = document.getElementById("lifeSpanByCountry2021");
  lifespan_map.style.display = "none";

  let GDP_by_region = document.getElementById("GDPByRegion2021");
  GDP_by_region.style.display = "none";

  let HappinessAndSupport = document.getElementById("HappinessAndSupport");
  HappinessAndSupport.style.display = "none";

  let HappinessAndFreedom = document.getElementById("HappinessAndFreedom");
  HappinessAndFreedom.style.display = "none";

  let HappinessAndMoney = document.getElementById("HappinessAndMoney");
  HappinessAndMoney.style.display = "none";

  // add border to the active image
  document.getElementById("health_happiness_img").style.borderBlockColor =
    "#ff1493";
}

/**
 * This function is used to display the happiness map and top & bottom K happiest countries
 * and hide the life expectancy map
 */
function displayHappinessMap() {
  let happiness_map = document.getElementById("happinessByCountry2021");
  happiness_map.style.display = "flex";

  let top_bottom_k = document.getElementById("top_bottom_k2021");
  top_bottom_k.style.display = "flex";

  let lifespan_map = document.getElementById("lifeSpanByCountry2021");
  lifespan_map.style.display = "none";
}

/**
 * This function is used to display the life expectancy map and hide the happiness map
 */
function displayLifeExpectancyMap() {
  let lifespan_map = document.getElementById("lifeSpanByCountry2021");
  lifespan_map.style.display = "flex";

  let happiness_map = document.getElementById("happinessByCountry2021");
  happiness_map.style.display = "none";

  let top_bottom_k = document.getElementById("top_bottom_k2021");
  top_bottom_k.style.display = "none";
}

/**
 * This function is used to display the happiness by region vis and hide the GDP Per Capita by region vis
 */
function displayHappinessByRegion() {
  let Happiness_by_region = document.getElementById("happinessByRegion2021");
  Happiness_by_region.style.display = "flex";

  let GDP_by_region = document.getElementById("GDPByRegion2021");
  GDP_by_region.style.display = "none";
}

/**
 * This function is used to display the GDP Per Capita by region vis and hide the happiness by region vis
 */
function displayGDPByRegion() {
  let GDP_by_region = document.getElementById("GDPByRegion2021");
  GDP_by_region.style.display = "flex";

  let Happiness_by_region = document.getElementById("happinessByRegion2021");
  Happiness_by_region.style.display = "none";
}

/**
 * This function is used to display only the vis showing correlation b/w happiness & health and hide all the other
 * correlation vis
 */
function displayHappinessAndHealth() {
  let HappinessAndHealth = document.getElementById("HappinessAndHealth");
  HappinessAndHealth.style.display = "flex";

  let HappinessAndSupport = document.getElementById("HappinessAndSupport");
  HappinessAndSupport.style.display = "none";

  let HappinessAndFreedom = document.getElementById("HappinessAndFreedom");
  HappinessAndFreedom.style.display = "none";

  let HappinessAndMoney = document.getElementById("HappinessAndMoney");
  HappinessAndMoney.style.display = "none";

  // add border to active image & remove border for all other images
  document.getElementById("health_happiness_img").style.borderBlockColor =
    "#ff1493";

  document.getElementById("support_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("freedom_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("buy_happiness_img").style.borderBlockColor = null;
}

/**
 * This function is used to display only the vis showing correlation b/w happiness & support and hide all the other
 * correlation vis
 */
function displayHappinessAndSupport() {
  let HappinessAndHealth = document.getElementById("HappinessAndHealth");
  HappinessAndHealth.style.display = "none";

  let HappinessAndSupport = document.getElementById("HappinessAndSupport");
  HappinessAndSupport.style.display = "flex";

  let HappinessAndFreedom = document.getElementById("HappinessAndFreedom");
  HappinessAndFreedom.style.display = "none";

  let HappinessAndMoney = document.getElementById("HappinessAndMoney");
  HappinessAndMoney.style.display = "none";

  // add border to active image & remove border for all other images

  document.getElementById("health_happiness_img").style.borderBlockColor = null;

  document.getElementById("support_happiness_img").style.borderBlockColor =
    "#ff1493";

  document.getElementById("freedom_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("buy_happiness_img").style.borderBlockColor = null;
}

/**
 * This function is used to display only the vis showing correlation b/w happiness & freedom and hide all the other
 * correlation vis
 */
function displayHappinessAndFreedom() {
  let HappinessAndHealth = document.getElementById("HappinessAndHealth");
  HappinessAndHealth.style.display = "none";

  let HappinessAndSupport = document.getElementById("HappinessAndSupport");
  HappinessAndSupport.style.display = "none";

  let HappinessAndFreedom = document.getElementById("HappinessAndFreedom");
  HappinessAndFreedom.style.display = "flex";

  let HappinessAndMoney = document.getElementById("HappinessAndMoney");
  HappinessAndMoney.style.display = "none";

  // add border to active image & remove border for all other images

  document.getElementById("health_happiness_img").style.borderBlockColor = null;

  document.getElementById("support_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("freedom_happiness_img").style.borderBlockColor =
    "#ff1493";

  document.getElementById("buy_happiness_img").style.borderBlockColor = null;
}

/**
 * This function is used to display only the vis showing correlation b/w money & happiness and hide all the other
 * correlation vis
 */
function displayHappinessAndMoney() {
  let HappinessAndHealth = document.getElementById("HappinessAndHealth");
  HappinessAndHealth.style.display = "none";

  let HappinessAndSupport = document.getElementById("HappinessAndSupport");
  HappinessAndSupport.style.display = "none";

  let HappinessAndFreedom = document.getElementById("HappinessAndFreedom");
  HappinessAndFreedom.style.display = "none";

  let HappinessAndMoney = document.getElementById("HappinessAndMoney");
  HappinessAndMoney.style.display = "flex";

  // add border to active image & remove border for all other images

  document.getElementById("health_happiness_img").style.borderBlockColor = null;

  document.getElementById("support_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("freedom_happiness_img").style.borderBlockColor =
    null;

  document.getElementById("buy_happiness_img").style.borderBlockColor =
    "#ff1493";

  // hide the vis for health and money
  let HealthAndMoney = document.getElementById("HealthAndMoney");
  HealthAndMoney.style.display = "none";
}

/**
 * This function is used to display the vis showing correlation b/w money & health
 */
let flag = 1;
function displayHealthAndMoney() {
  let HealthAndMoney = document.getElementById("HealthAndMoney");
  if (flag === 1) {
    HealthAndMoney.style.display = "flex";
    flag = 0;
  } else if (flag === 0) {
    HealthAndMoney.style.display = "none";
    flag = 1;
  }
}
