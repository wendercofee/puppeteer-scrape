const puppeteer = require("puppeteer");
require("dotenv").config();

const scrapeLogic = async (res) =>{
    
    // Or import puppeteer from 'puppeteer-core';

    // Launch the browser and open a new blank page.
    const browser = await puppeteer.launch({
         headless: true,
         args: [
             "--disable-setuid-sandbox",
             "--no-sandbox",
             "--single-process",
             "--no-zygote",
         ],
        // executablePath: 
        //     process.env.NODE_ENV === 'production' 
        //     ? process.env.PUPPETEER_EXECUTABLE_PATH
        //     : puppeteer.executablePath(),
        
    });

    try{
        const page = await browser.newPage();

        // Navigate the page to a URL.
        await page.goto('https://developer.chrome.com/');

        // Set screen size.
        await page.setViewport({width: 1080, height: 1024});

        // Open the search menu using the keyboard.
        await page.keyboard.press('/');

        // Aguarda o campo de busca
        await page.waitForSelector('input[name="q"]', { visible: true });

        // Digita o texto
        await page.type(
        'input[name="q"]',
        "automate beyond recorder",
        { delay: 50 }
        );

        // Abre a busca com "Enter"
        await page.keyboard.press("Enter");

        // Wait and click on first result.
        //await page.locator('.devsite-result-item-link').click();
        // Aguarda o campo de busca
        await page.waitForSelector('div[class="gsc-resultsbox-visible"]', { visible: true });

        // Clica no primeiro resultado
        await page.click("a.gs-title:first-of-type");

        // Locate the full title with a unique string.
        //const textSelector = await page
        //.locator('::-p-text(Customize and automate)')
        //.waitHandle();
        
                                                                                        
        await page.waitForSelector('h1[class="devsite-page-title"]', { visible: true });

        const fullTitle = await page.evaluate(() =>{
            const data = document.querySelector("h1.devsite-page-title:first-of-type").textContent
            return data
        });
        const logStatement = `The title of this blog post is "${fullTitle}"`
        // Print the full title.
        console.log(logStatement);
        res.send(logStatement); 
    } catch (e){
        console.error(e);
        res.send(`Aconteceu algum error na aplicação ${e}`)
    }finally{
        await browser.close();
    }
    
}

module.exports={scrapeLogic}