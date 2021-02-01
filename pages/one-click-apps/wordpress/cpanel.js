import Head from "next/head";
import Layout from "../../../components/Layout";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات WordPress - سرویس ابری لیارا</title>
    </Head>

    <h1>انتقال WordPress از cPanel به‌لیارا</h1>

    <h3>نصب و اجرا</h3>
    <p>
      کافیست از بخش <b>برنامه‌های آماده</b> روی WORDPRESS کلیک کنید و سپس شناسه
      برنامه‌‌ی موردنظرتان را وارد کنید، مثلا{" "}
      <span className="code">my-blog</span>. سپس در بخش <b>انتخاب دیتابیس</b>{" "}
      می‌توانید انتخاب کنید که به صورت خودکار دیتابیس توسط لیارا ایجاد شود یا
      این که خودتان یک دیتابیس اجرا کنید و WordPress را به آن متصل کنید. توصیه
      ما این است که اجازه دهید لیارا به صورت خودکار برای شما دیتابیس بسازد زیرا
      فرایند را بسیار ساده و سریع‌تر می‌کند و همچنین به صورت خودکار برنامه
      WordPress شما به دیتابیس‌ متصل می‌شود و شما می‌توانید به صورت مستقیم بدون
      درگیری با بخش‌های مرتبط با کانفیگ دیتابیس، وارد پنل WordPress شوید.
    </p>
  </Layout>
);
