function Test1()
{
  Browsers.Item(btChrome).Navigate("https://www.hcplc.org/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageHillsboroughCountyPublicLibr.header.link.Click();
  let page = browser.pageGetACard;
  page.Wait();
  if ( browser.pageHillsboroughCounty.Exists)
  {
    page.header.nav.link.textnode2.Click();
  }
  else 
  {
    
  
  aqObject.CheckProperty(page.textnode, "contentText", cmpEqual, "Apply Online");
  page.header.nav.link.textnode2.Click();
  let page2 = browser.pageBooks;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Books & More");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageResearch;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Learning & Research");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageEvents;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Featured Events");
  page2.header.nav.link.Click();
  page2 = browser.pageServices;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Services");
  page2.header.nav.link.Click();
  page2 = browser.pageLocations;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Locations");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageAbout;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "About the Hillsborough County Public Library Cooperative");
  page2.header.link.Click();
  page.Wait();
  page.link2.Click();
  browser.pageHcplcBibliocommonsCom.Wait();
  }
}

function Test2()
{
  Browsers.Item(btChrome).Navigate("https://hcplc.bibliocommons.com/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageHcplcBibliocommonsCom;
  let searchBox = page.formDesktopSearchForm;
  let searchBox2 = searchBox.searchboxSearchBoxId3kogjotg1f6u;
  searchBox2.Click();
  searchBox2.SetText("Harry Potter");
  searchBox.textnode.Click();
  page.Wait();
  aqObject.CheckProperty(page.sectionContent.textnode2, "contentText", cmpEqual, "Harry Potter");
  page.link.textnode3.Click();
  aqObject.CheckProperty(browser.pageCatalogAccountHelpHelpWithHo.articlePost5.header.textnode, "contentText", cmpEqual, "Catalog and Account Help");
  browser.BrowserWindow2.Close();
}