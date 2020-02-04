import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات برنامک‌ها - Applets</title>
    </Head>

    <h1>برنامک‌ها</h1>
    <span className="pageDescription">(Applets)</span>

    <p>
      برنامک‌ها، یک نسخه‌ی اجرا شده از کدها و استقرار شما هستند.
      هر استقرار جدید، باعث ایجاد یک برنامک مختص آن استقرار می‌شود.
      لیارا ترافیک ورودی پروژه‌ی‌تان را به سمت برنامک‌های در حال اجرا هدایت می‌کند.
    </p>
    <p>
      در صورتی که یک برنامک خاموش شود و یا کرش کند، لیارا به صورت خودکار برنامک جدیدی را
      ایجاد می‌کند تا همیشه پروژه‌ی شما در حال سرویس‌دهی باشد.
      خاموش‌کردن یک پروژه در پنل لیارا، باعث می‌شود که تمام برنامک‌های آن پروژه خاموش و حذف شوند. 
      ری‌استارت‌کردن یک پروژه، باعث می‌شود که برنامک «در حال اجرای» فعلی حذف شده و برنامک جدیدی ایجاد شود.
      روشن‌کردن یک پروژه، باعث می‌شود که دست کم یک برنامک «در حال اجرا» ساخته شود.
    </p>
    <p>
      در صفحه‌ی پروژه، امکان مشاهده‌ی زنده‌ی وضعیت برنامک‌ها وجود دارد.
    </p>
    <ZoomableImage src="/static/applets.png" alt="لیست برنامک‌ها" />
    <p>
      همان‌طور که در تصویر بالا مشاهده کنید، هر برنامک، حاوی نسخه‌ای از پروژه‌ی شما می‌باشد.
      هر استقرار در لیارا، به صورت خودکار دارای برچسبی مانند
      v1 و v2 و... است.
    </p>
    <p>
      لیست برنامک‌ها، بر اساس زمان آخرین تغییری که روی برنامک اعمال شده، مرتب شده‌اند.
    </p>
  </Layout>
)
