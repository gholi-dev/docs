import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات به‌روزرسانی در برنامه‌های Laravel - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="laravel" />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>به‌روز‌رسانی برنامه</h3>
    <p>
      به‌منظور به‌روزرسانی برنامه‌های خود می‌توانید به‌سادگی دستور{' '}
      <span className="code">liara deploy</span> را در مسیر اصلی پروژه
      اجرا کنید تا فرایند استقرار برنامه آغاز شود.
    </p>
    <p>
      {" "}
      برای این که در هر استقرار بتوانید بعدا متوجه شوید علت این استقرار چه بوده،
      می‌توانید از message در دستور deploy استفاده کنید. فرض کنید استقرار مد نظر
      شما به علت رفع باگ auth کاربران بوده. این‌گونه می‌توانیم نسخه‌ی جدید را
      همراه با یک پیام توضیح مستقر کنیم:
    </p>
    <Highlight className="shell">
      {`$ liara deploy --message="Fix auth bug in login api"`}
    </Highlight>
    <p>
      {" "}
      البته اگر شما از Git استفاده می‌کنید، لیارا همیشه از آخرین Commit message
      روی Branch جاری شما برای توضیحات استقرار استفاده می‌کند.
    </p>

    <Link href="/app-deploy/laravel/dbs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
