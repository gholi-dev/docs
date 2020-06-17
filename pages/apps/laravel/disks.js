import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>استفاده از دیسک‌ها</h3>
    <p>
      فایل‌سیستم و یا اصطلاحا ذخیره کردن اطلاعات در فولدر‌ها در لیارا، به خاطر
      معماری ابری آن، موقت میباشد. یعنی اگر شما فایل ویدیویی‌ای را در فولدر
      storage لاراول ذخیره کنید در استقرار بعدی یا ریستارت شدن برنامه، آن فایل
      ویدیویی‌ای از بین میرود. به همین دلیل از مفهومی تحت عنوان <b>دیسک‌ها</b>{" "}
      در اینجا استفاده میکنیم تا اطلاعات را بتوانیم به صورت دائمی ذخیره کنیم.
    </p>
    <p>
      به صورت خلاصه روند کار بدین‌صورت خواهد‌بود که ابتدا یک دیسک به اندازه
      دلخواه میسازید، و سپس آن دایرکتوری خاصی که مد‌نظرتان است را به آن دیسک
      متصل میکنید تا اطلاعات آن همیشه محفوظ بماند. برای مثال فرض کنید قصد دارید
      دایرکتوری storage لاراول را به یک دیسک متصل کنید تا داده‌های آن همیشه
      محفوظ باقی‌بماند.
    </p>
    <p>
      <b>گام اول)</b> ساخت یک دیسک جدید در منوی <b>دیسک‌های</b> پنل لیارا:
    </p>
    <ZoomableImage src="/static/laravel-create-disk.gif" alt="ساخت دیسک جدید" />
    <p>
      <b>گام دوم)</b> اضافه کردن بخش اتصال دیسک به دایرکتوری در فایل{" "}
      <span className="code">liara.json</span>
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter",
  "disks": [
    {
      "name": "disk1",
      "mountTo": "storage"
    }
  ]
}`}
    </Highlight>
    <p>
      همانطور که در فایل بالا میبینید، دیسک با شناسه disk1 به دایرکتوری storage
      لاراول متصل شده‌است. از حالا به بعد هر فایلی داخل دایرکتوری storage قرار
      بگیرد در هر استقرار یا ریستارت پاک نخواهد شد.
    </p>
    <Notice variant="info">
      همانطور که میبینید، بخش disks در فایل بالا یک آرایه میباشد که یعنی شما
      میتواند دیسک‌های جدیدتری بسازید و دایرکتوری های دیگری را به آن ها متصل
      کنید.
      <Highlight className="json">
        {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "storage"
    },
    {
      "name": "disk2",
      "mountTo": "public/uploads"
    }
  ]
}`}
      </Highlight>
    </Notice>
    <Notice variant="info">
      همانطور که در فایل‌های بالا میبینید آدرس دهی‌ها از ریشه هر پروژه لاراولی
      داده شده است.
    </Notice>
    <br />
    <Link href="/apps/laravel/domain">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
