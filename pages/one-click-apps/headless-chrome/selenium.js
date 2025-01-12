import Head from "next/head";
import Layout from "../../../components/Layout";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا - مستندات اتصال به Headless Chrome از طریق Selenium
      </title>
    </Head>
    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/chrome.svg"
        alt="chrome"
      />
      <div className="page-title">
        <h1>اتصال از طریق Selenium به برنامه‌ی Headless Chrome</h1>
        <span className="page-description">(Headless Chrome one-click app)</span>
      </div>
    </div>
    <p>
      برای اتصال از طریق وب درایور Selenium به برنامه‌ی Headless Chrome باید تغییری در کدهای قبلی خود ایجاد کنیم. برای مثال قطعه کد زیر را درنظر بگیرید که ما با استفاده از آن مرورگر Chrome را برای انجام کارهای مورد نیاز خود راه‌اندازی می‌کردیم:
    </p>

    <Highlight className="javascript">
      {`const webdriver = require('selenium-webdriver');
const fs = require('fs');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set(
  'chromeOptions', {
    args: [
      '--headless',
      '--no-sandbox',
    ],
  }
);

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();`}

    </Highlight>
    <p>
      اما شما برای انجام این کار در لیارا باید به شکل زیر به برنامه‌ی Headless Chrome خود متصل شوید:
    </p>
    <Highlight className="javascript">

      {`const webdriver = require('selenium-webdriver');
const fs = require('fs');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set(
  'chromeOptions', {
    args: [
      '--headless',
      '--no-sandbox',
    ],
  }
);

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .usingServer('https://<liara-chrome-app-url>/webdriver?token=<your-env-token>')
  .build();
`}
    </Highlight>

    <Notice variant="info">
      شما برای <a href="/one-click-apps/headless-chrome/tips#add-token">اتصال ایمن</a> به برنامه‌ی Headless Chrome خود به یک توکن نیاز خواهید داشت که می‌توانید آموزش اضافه کردن آن را در صفحه‌ی توضیحات و نکات تکمیلی مشاهده کنید.
    </Notice>
  </Layout>
);