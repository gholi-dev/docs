import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه در هر استقرار برای شما جالب نباشد. برای این موضوع
      میتوانید از فایل‌ <span className="code">liara.json</span> استفاده کنید.
      اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به همین نکته
      بسنده میکنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام کاربرد‌های
      آن در پروژه‌های Laravel ای‌ توضیح داده ایم.
    </p>
    <p>
      کافیست وارد ریشه پروژه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter"
}
`}
    </Highlight>
    <p>
      در این فایل، پلتفرم و شناسه برنامه‌ی‌تان را مشخص میکنید. لیارا در هربار
      اجرای دستور <span className="code">liara deploy</span> ابتدا محتویات این
      فایل‌ را چک میکند و سپس عملیات استقرار را آغاز میکند. توجه داشته باشید
      مقدار app در مثال بالا تستی میباشد و شما متناسب با شناسه برنامه‌ی‌تان باید
      آن را تغییر دهید.
    </p>

    <Link href="/apps/laravel/update">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
