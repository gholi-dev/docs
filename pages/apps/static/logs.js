import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>سایت‌های Static</h1>
    <span className="pageDescription">(Static Sites)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه میباشد و به برنامه‌نویسان کمک میکند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید:
    </p>

    <ZoomableImage src="/static/static-logs.png" />
    <br />

    <Link href="/apps/static/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
