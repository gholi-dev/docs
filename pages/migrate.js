import Layout from "../components/Layout";
import Head from "next/head";
import Notice from "../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات - سرویس ابری لیارا</title>
    </Head>

    <h1>انتقال بین موقعیت‌ها</h1>
    <p>
      با توجه به اضافه‌شدن موقعیت‌های جغرافیایی جدید، ممکن است برای بهره‌مندی از مزایای
      آن‌ها، بخواهید سرویس‌های‌تان را بین موقعیت‌های جغرافیایی لیارا منتقل کنید.
      توجه داشته باشید که ابتدا باید در موقعیت جغرافیایی جدید ثبت نام کنید.
    </p>

    <h3>انتقال برنامه</h3>
    <p>
      فرض کنیم قصد انتقال برنامه‌ای را با شناسه‌ی
      <span className="code">source-app</span>
      در موقعیت جغرافیایی مبدا به موقعیت جغرافیایی مقصد با شناسه‌ی
      <span className="code">target-app</span>
      دارید. بنابراین، ابتدا باید برنامه‌ی 
      <span className="code">target-app</span>
      را در پلن مدنظرتان در موقعیت جغرافیایی مقصد بسازید.
    </p>
    <p>
      سپس وارد تنظیمات برنامه‌ی 
      <span className="code">source-app</span>
      شده و متغیرهای env را کپی کرده و برای
      <span className="code">target-app</span>
      تنظیم کنید. دیگر تنظیمات مرتبط با این برنامه مانند
      «آی‌پی ثابت» را هم در صورت نیاز فعال کنید.
    </p>
    <Notice variant="info">
      توجه کنید که اگر از قابلیت آی‌پی ثابت در
      <span className="code">source-app</span>
      استفاده می‌کردید، لازم است که این قابلیت را برای
      <span className="code">target-app</span>
      هم فعال کنید. اما با توجه به تغییر موقعیت جغرافیایی، آی‌پی ثابت دیگری را دریافت خواهید کرد.
    </Notice>
    <h4>انتقال سورس‌کد</h4>
    <p>
      برای انتقال سورس‌کد، لازم است که برنامه‌ی‌تان را دوباره دیپلوی کنید.
      برای این‌کار ابتدا با دستور زیر آخرین نسخه‌ی Liara CLI را نصب کنید:
    </p>
    <pre>
      <code>
        npm i -g @liara/cli
      </code>
    </pre>
    <p>
      و حالا وارد پوشه‌ی کدهای‌تان شده و دستورات
      <span className="code">liara login</span>
      و همین‌طور <span className="code">liara deploy</span>
      را به‌ترتیب اجرا کنید.
      با این‌کار، سورس‌کد شما همانند سابق در برنامه‌ی جدید مستقر و اجرا خواهد شد.
    </p>
    <h4>انتقال دیسک‌ها</h4>
    <Notice variant="info">
      اگر برنامه‌ی شما دارای «دیسک» هست، این بخش را مطالعه کنید. در غیر این‌صورت، به بخش بعدی بروید.
    </Notice>
    <h5>روش اول) با استفاده از FTP</h5>
    <p>
      <ol>
        <li>
          ابتدا تک‌تک دیسک‌های
          <span className="code">source-app</span>
          را ترجیحا با همان نام یک‌سان برای
          <span className="code">target-app</span>
          هم بسازید.
        </li>
        <li>
          اطلاعات دیسک‌ها را باید در فایل <span className="code">liara.json</span>
          وارد کرده و یک‌بار دستور <span className="code">liara deploy</span>
          را اجرا کنید تا دیسک‌های‌تان مستقر شوند و در صفحه‌ی دیسک‌ها، وضعیت هر دیسک به حالت «در حال استفاده» تغییر کند.
        </li>
        <li>
        سپس وارد صفحه‌ی پشتیبان‌گیری دیسک‌های
      <span className="code">source-app</span>
      شده و از هر دیسک یک فایل پشتیبان تهیه کرده و آن را دانلود کنید.
        </li>
        <li>
        در نهایت، وارد صفحه‌ی دسترسی FTP 
      <span className="code">target-app</span>
      شوید و از طریق ایجاد دسترسی FTP به دیسک‌ها متصل شده و فایل پشتیبان‌تان را آپلود کنید. 
        </li>
        <li>
          از آنجایی که FTP قابلیت استخراج فایل فشرده را ندارد، باید از طریق خط فرمان
          به‌برنامه‌ی
      <span className="code">target-app</span>
          متصل شوید و وارد پوشه‌ی دیسک شده و فایلی که آپلود کردید را استخراج کنید:
          <pre>
            <code>
              $ cd storage/uploads<br />
              $ tar -xzvf backup.tar.gz
            </code>
          </pre>
          در دستور بالا، فرض بر این بوده که نام فایل پشتیبان شما 
          <span className="code">backup.tar.gz</span>
          است.
        </li>
      </ol>
    </p>
    <h5>روش دوم) با استفاده از خط فرمان</h5>
    <p>
      <ol>
        <li>
          ابتدا تک‌تک دیسک‌های
          <span className="code">source-app</span>
          را ترجیحا با همان نام یک‌سان برای
          <span className="code">target-app</span>
          هم بسازید.
        </li>
        <li>
          اطلاعات دیسک‌ها را باید در فایل <span className="code">liara.json</span>
          وارد کرده و یک‌بار دستور <span className="code">liara deploy</span>
          را اجرا کنید تا دیسک‌های‌تان مستقر شوند و در صفحه‌ی دیسک‌ها، وضعیت هر دیسک به حالت «در حال استفاده» تغییر کند.
        </li>
        <li>
          سپس وارد صفحه‌ی پشتیبان‌گیری دیسک‌های
          <span className="code">source-app</span>
          شده و از هر دیسک یک فایل پشتیبان تهیه کنید و لینک دریافت فایل را کپی کنید.
        </li>
        <li>
          از طریق خط فرمان 
          <span className="code">target-app</span>
          به‌برنامه متصل شده و دستور زیر را برای دانلود بک‌آپ وارد کنید:
          <pre>
            <code>
              $ wget 'URL' -O backup.tar.gz
            </code>
          </pre>
          دستور بالا، فایل را از آدرس <span className="code">URL</span> دریافت و با نام
          <span className="code">backup.tar.gz</span>
          ذخیره می‌کند.
          توجه داشته باشید که در زمان دانلود بک‌آپ، نباید برنامه‌ی‌تان را ری‌استارت کنید و یا دیپلوی جدیدی انجام دهید.
        </li>
        <li>
          بعد از اتمام دانلود، فایل بک‌آپ را به‌داخل دیسک منتقل کرده و آن‌را از حالت فشرده خارج کنید:
          <pre>
            <code>
              $ mv backup.tar.gz storage/uploads<br />
              $ tar -xzvf backup.tar.gz -C storage/uploads
            </code>
          </pre>
        </li>
      </ol>
    </p>

    <h3>انتقال دیتابیس</h3>
    <h4>MySQL, MariaDB, PostgreSQL</h4>
    <p>
      <ol>
        <li>ابتدا وارد صفحه‌ی پشتیبان‌گیری دیتابیس مبدا شده و یک فایل پشتیبان تهیه کرده و دانلود کنید.</li>
        <li>
          فایل پشتیبان را از حالت فشرده خارج کنید و فایل‌های <span className="code">sql</span>
          داخل آن را در پوشه‌ای برای بازیابی در مرحله‌ی بعد نگه‌داری کنید.
        </li>
        <li>در موقعیت جغرافیایی جدید، دیتابیس را با همان نسخه‌ای که در موقعیت قبلی ساخته بودید بسازید
          و وارد پنل مدیریت دیتابیس شده و فایل <span className="code">sql</span> را بازیابی کنید.
          پنل‌های مدیریت PHPMyAdmin و PGAdmin به‌ترتیب در دسترس هستند.
        </li>
      </ol>
    </p>
    <h4>MongoDB</h4>
    <p>
      <ol>
        <li>ابتدا وارد صفحه‌ی پشتیبان‌گیری دیتابیس مبدا شده و یک فایل پشتیبان تهیه کرده و دانلود کنید.</li>
        <li>فایل پشتیبان را از حالت فشرده خارج کنید تا در مرحله‌های بعد از آن استفاده کنید.</li>
        <li>
          مطمئن شوید که MongoDB
          در کامپیوتر شما نصب است و در ترمینال و یا CMD دسترسی به‌ابزار
          <span className="code">mongorestore</span>
          را دارید. در غیر این‌صورت، باید MongoDB را نصب کنید.
        </li>
        <li>
        در موقعیت جغرافیایی جدید، دیتابیس را با همان نسخه‌ای که در موقعیت قبلی ساخته بودید بسازید.
        <Notice variant="info">
        اگر موقعیت جغرافیایی مقصد، «ایران» است، حتما شبکه‌ی عمومی را فعال کنید چرا که برای بازیابی داده‌ها نیاز به اتصال از بیرون از شبکه‌ی خصوصی وجود دارد.
        </Notice>
        </li>
        <li>
          دستور زیر را در کامپیوترتان برای بازیابی داده‌ها وارد کنید:
          <pre>
            <code>
              $ mongorestore 'CONNECTION_URI' --archive=my-db.dump
            </code>
          </pre>
          به‌جای <span className="code">CONNECTION_URI</span>، از آدرس URI ای استفاده کنید که در بخش دسترسی سریع شبکه‌ی عمومی در پنل لیارا به‌شما نمایش داده شده‌است.
          <br />
          به‌جای <span className="code">my-db.dump</span> هم مسیر فایل بک‌آپی که دانلود کردید را وارد کنید.
          <br />
          برای نمونه:
          <pre>
            <code>mongorestore 'mongodb://root:pass@host:12345/my-app?authSource=admin' --archive=test-db.dump</code>
          </pre>
        </li>
      </ol>
    </p>

    <h3>انتقال سرویس فایل</h3>
    mc mirror
  </Layout>
);
