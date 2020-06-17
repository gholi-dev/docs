import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>زبان NodeJS</h1>
    <span className="pageDescription">(NodeJS Language)</span>
    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه میباشد و به برنامه‌نویسان کمک میکند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید. برای نمونه میتوانید یک Log خیلی ساده بدین‌صورت در برنامه‌ی‌تان ایجاد
      کنید:
    </p>
    <Highlight className="js">{`console.log(\`--> a user here!\`);`}</Highlight>
    <p>
      سپس با رفرش کردن چندباره سایت میتوانید آن‌هارا در منوی لاگ‌های لیارا
      ببینید:
    </p>
    <ZoomableImage src="/static/nodejs-logs.png" />

    <p>
      مدیریت Log ها در NodeJS میتواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی پروژه‌ی‌تان و تصمیمات شما میباشد. ممکن است لاگ‌های مهم‌تر
      را در فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/apps/nodejs/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
