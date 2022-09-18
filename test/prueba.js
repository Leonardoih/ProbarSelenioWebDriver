const { Builder } = require('selenium-webdriver');
require("chromedriver")

async function login() {
	let webdriver = await new Builder().forBrowser('chrome').build();
	await webdriver.get('https://portal-test.cen.biz/');
	console.log('hola mundo');
}

login();
