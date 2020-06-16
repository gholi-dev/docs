import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Flask سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>فریم‌ورک Flask</h1>
    <span className="pageDescription">(Flask Framework)</span>
    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه Flask ای‌ که
      نوشتید را روی بستر ابری Liara مستقر کنید. برای راحتی شما با یک مثال واقعی
      تمام مراحل را پیش میبریم. میتونید این پروژه را از github دریافت کنید:
      (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
    </p>
    <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/flask-getting-started
$ cd flask-getting-started`}
      </code>
    </pre>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه پروژه را داخل سیستم
      خودتان این شکلی اجرا کنید:
    </p>
    <pre>
      <code>
        {`$ pip3 install -r requirements.txt
$ flask run --port 8000`}
      </code>
    </pre>
    <p>
      و درنهایت داخل مرورگر پروژه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p>
    <Link href="/apps/flask/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
