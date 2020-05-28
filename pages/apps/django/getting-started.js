import Layout from '../../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Notice from '../../../components/Notice'
import ZoomableImage from '../../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌های Django - Django deployment</title>
    </Head>

    <h1>استقرار برنامه‌های Django</h1>
    <p>
      برنامه‌ی شما باید دارای فایل
      <span className="code">requirements.txt</span>
      باشد و حتما مطمئن شوید که Django در این فایل وجود داشته باشد تا بتواند در لیارا مستقر شود.
      در حال حاضر، لیارا از جنگو 2 و 3 پشتیبانی می‌کند.
    </p>
    
    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      سپس دستور زیر را داخل برنامه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی
      Django
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=django
      </code>
    </pre>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">requirements.txt</span>
      لیست شده‌اند را برای شما نصب می‌کند.
      پس نیازی ندارید که به دنبال اجرای دستورات
      <span className="code">pip install</span>
      باشید.
      از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

    <h3>امنیت</h3>
    <p>
      جنگو داده‌های حساس شما را رمزنگاری می‌کند. برای رمزنگاری نیاز به یک کلید غیر قابل حدس و پیچیده
      {' '}
      دارد که شما باید آن را ایجاد کرده و از طریق پنل تنظیمات آن را در اختیار برنامه‌ی‌تان قرار دهید.
    </p>
    <p>
      کلیدی که تولید کردید را کپی کرده و در پنل تنظیمات برنامه‌ی‌تان با عنوان
      <span className="code">SECRET_KEY</span>
      وارد کنید:
    </p>
    <pre>
      <code>
{`SECRET_KEY=tZdGodxUjN0WJwI8`}
      </code>
    </pre>
    <ZoomableImage src="/static/django-secret-key.png" alt="تنظیمات امنیتی جنگو" />
    <p>
      هر برنامه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای برنامه تعریف کنید.
      (<Link href="/apps/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)
    </p>

    <h3>فعال یا غیرفعال‌سازی حالت Debug</h3>
    <p>
      بعد از دیپلوی کامل برنامه، توصیه می‌شود که حالت Debug برنامه‌های جنگو را غیر فعال کنید. برای غیر فعال‌سازی،
      کافیست که در تنظیمات برنامه متغیری با نام
      <span className="code">DEBUG</span>
      ایجاد کنید و مقدار آن را برابر با
      <span className="code">false</span>
      قرار دهید.
    </p>
    <ZoomableImage src="/static/django-debug.png" alt="تنظیمات دیباگ جنگو" />

    <h3>اتصال به دیتابیس</h3>
    <p>
      شما می‌توانید از بخش «دیتابیس‌ها»، یک دیتابیس
      MySQL یا MongoDB
      ایجاد کنید.
      بعد از ایجاد دیتابیس، در لیست دیتابیس‌ها، روی دیتابیس موردنظرتان کلیک کنید تا
      اطلاعات اتصال به آن برای‌تان نمایش داده شود.
      <br/>

      هر برنامه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای برنامه تعریف کنید.
      (<Link href="/apps/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)

      <br/>
      برای این‌که برنامه‌ی شما بتواند به دیتابیسی که ساختید متصل شود، باید متغیر زیر را ایجاد کرده و مقداردهی کنید:
    </p>
    <pre>
      <code>
{`DATABASE_URL=mysql://root:PASSWORD@HOST:PORT/my_database`}
      </code>
    </pre>
    <p>
      توجه کنید که متغیر بالا، صرفا جهت نمونه آورده شده و شما باید مقدار آن را با اطلاعات دیتابیسی که ساختید پر کنید.
      نکته‌ی دیگری که باید به آن توجه کنید این است که در مثال بالا، فرض بر این بوده است که شما به سرور دیتابیس‌تان متصل شده و یک دیتابیس با نام
      <span className="code">my_database</span>
      ساخته‌اید.
    </p>

    <h3>اجرای Migration ها</h3>
    <p>
      از آن‌جایی که کنترل تغییرات دیتابیس باید در اختیار خود شما باشد،
      ما migration ها را اجرا نمی‌کنیم و شما باید هر زمان که نیاز داشتید آن‌ها را اجرا کنید.
      <br/>
      برای اجرا
      migration
      ها، کافیست به کنسول برنامه‌ی‌تان متصل شوید
      (<Link href="/apps/console" title="مستندات کنسول">اطلاعات بیشتر درمورد کنسول</Link>)
      و دستور مربوطه را اجرا کنید:
    </p>
    <pre>
      <code>
        python manage.py migrate
      </code>
    </pre>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های Django، توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را مطابق با
      نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های Django، این فایل به شکل زیر تعریف شده‌است:
    </p>
    <pre>
      <code>
{`location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}`}
      </code>
    </pre>
    <p>
      که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید. برای مثال، برای فعال‌کردن فشرده‌سازی
      <span className="code">gzip</span>
      می‌توانید به این صورت عمل کنید:
    </p>
    <pre>
      <code>
{`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}`}
      </code>
    </pre>

    <h3>ذخیره‌ی فایل‌ها</h3>
    <p>
      معمولا در برنامه‌های جنگو، از پوشه‌ی Media
      برای ذخیره‌ی داده‌ها استفاده می‌شود.
      از آن‌جایی که فایل‌سیستم در لیارا موقتی است، لازم است که این پوشه را به عنوان
      {' '}
      <Link href="/apps/disks">دیسک</Link>
      {' '}
      در فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      برنامه‌ی‌تان به لیارا معرفی کنید:
    </p>
    <pre>
      <code>
{`{
  "disks": [
    {
      "name": "mydisk",
      "mountTo": "media"
    }
  ]
}`}
      </code>
    </pre>
    <p>
      توجه داشته باشید که از بخش دیسک‌ها، باید دیسک
      <span className="code">mydisk</span>
      را با اندازه‌ی دلخواه‌تان ساخته باشید.
    </p>
  </Layout>
)