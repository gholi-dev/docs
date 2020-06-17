import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>فریم‌ورک Django</h1>
    <span className="pageDescription">(Django Framework)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    {/* <p> */}
    <ul>
      <li>
        <b>PostgreSQL:</b>
      </li>
      <p>
        {" "}
        برای اتصال به دیتابیس PostgreSQL کافیست اطلاعات اتصال به آن را در بخش
        متغیرهای محیطی یا همان ENVs وارد کنید:
      </p>
      <Highlight className="config">
        {`DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME`}
      </Highlight>
      <p>
        {" "}
        حال برنامه‌ بعد از اضافه شدن این ENV میتواند به دیتابیس PostgreSQL وصل
        شود.
      </p>
      <li>
        <b>MySQL:</b>
      </li>
      <p>
        {" "}
        برای اتصال به دیتابیس MySQL کافیست اطلاعات اتصال به آن را در بخش
        متغیرهای محیطی یا همان ENVs وارد کنید:
      </p>

      <Highlight className="config">
        {`DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/NAME`}
      </Highlight>
      <p>
        {" "}
        حال برنامه‌ بعد از اضافه شدن این ENV میتواند به دیتابیس MySQL وصل شود.
      </p>
    </ul>
    {/* </p> */}
    <Notice variant="info">
      توجه داشته باشید برای اتصال به هر دیتابیس باید درایور‌های آن را نصب کرده
      باشید. مثلا برای MySQL و PostgreSQL نیاز است تا مقادیر زیر در فایل
      requirements.txt شما وجود داشته باشد. این یک فایل نمونه برای Django
      میباشد:
      <Highlight className="config">
        {`Django == 3.0.7
psycopg2 == 2.8.5
mysqlclient == 1.4.6‍`}
      </Highlight>
    </Notice>
    <br />

    <Link href="/apps/django/migrations">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
