import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>استقرار اولین برنامه</h3>
    <h3>- نصب liara cli</h3>
    <p>
      اگر liara cli را نصب ندارید میتوانید به وسیله دستور زیر آن‌ را به‌ راحتی
      نصب کنید:
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3>- ورود به حساب</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله liara cli کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3>- اولین استقرار!</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم LARAVEL و نوشتن شناسه برنامه‌موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای پروژه تست‌مون، شناسه laravel-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> کافیست وارد ریشه پروژه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. بعد از وارد کردن، دستور از شما شناسه
      برنامه‌ موردنظرتان را میپرسد و بعد از انتخاب شناسه، لیارا عملیات استقرار
      را شروع میکند.
    </p>
    <pre>
      <code>{`$ liara deploy --platform=laravel`}</code>
    </pre>
    <Notice variant="info">
      میتوانید <span className="code">--platform=laravel</span> را در دستور وارد
      نکنید، زیرا لیارا به صورت خودکار تشخیص میدهد که برنامه شما از چه پلتفرمی
      استفاده میکند.
    </Notice>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">composer.json</span>و
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستورات
      <span className="code">composer install</span>و یا
      <span className="code">npm install</span>
      باشید. از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این
      دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <h3>- بررسی سلامت استقرار</h3>
    <p>
      {" "}
      بعد از اجرای دستورات گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان
      اختصاص میدهد که به وسیله آن میتوانید مطمئن شوید که برنامه به بستر لیارا
      منتقل شده یا نه. این آدرس برای پروژه تستی‌مون این شکلی میباشد:{" "}
    </p>

    <p dir="ltr">
      <a href="https://laravel-starter.liara.run/" target="_blank">
        https://laravel-starter.liara.run
      </a>
    </p>

    <Link href="/apps/laravel/envs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
