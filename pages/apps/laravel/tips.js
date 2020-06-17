import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>
    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h3>بهینه کردن لاراول برای استقرار</h3>
    <p>
      Laravel برای دیپلوی در محیط‌های production با اجرای چند دستور ساده میتواند
      عملکرد بهتری داشته باشد. دستور اول
      <span className="code">php artisan config:cache</span> میباشد که وظیفه کش
      کردن کانفیگ‌فایل‌ها را به عهده دارد و دستور دوم{" "}
      <span className="code">php artisan route:cache</span> میباشد که وظیفه کش
      کردن فایل‌های route را به عهده دارد. برای این که این دستورات به صورت
      خودکار توسط لیارا در هر استقرار اجرا شود کافیست که در فایل{" "}
      <span className="code">liara.json</span> این فیلد‌ها را اضافه کنیم:
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter",
  "laravel": {
    "configCache": true,
    "routeCache": true
  }
}`}
    </Highlight>
    <Notice variant="info">
      میتوانید هر فیلد را که خواستید استفاده کنید، مثلا فقط از{" "}
      <span className="code">"configCache": true</span> استفاده کنید و فیلد دیگر
      را قرار ندهید.
    </Notice>
    <Notice variant="danger">
      توجه داشته باشید که طبق{" "}
      <a
        href="https://laravel.com/docs/5.8/deployment#optimization"
        target="_blank"
      >
        مستندات لاراول
      </a>
      ، استفاده از دستور php artisan route:cache تنها زمانی امکان‌پذیر است که
      شما از Closure ها برای تعریف route ها استفاده نکرده باشید و فقط از
      Controller استفاده کرده باشید.
    </Notice>
    <h3>تنظیمات اختصاصی php.ini</h3>
    <p>
      از طریق ایجاد یک فایل با نام
      <span className="code">liara_php.ini</span>
      داخل ریشه‌ی برنامه‌ی‌تان می‌توانید تنظیمات PHP را شخصی‌سازی کنید. برای
      مثال، ممکن است بخواهید که حداکثر حجم مجاز برای آپلود فایل در سایت
      لاراولی‌تان را شخصی‌سازی کنید. پس لازم است که فایل
      <span className="code">liara_php.ini</span>
      را به برنامه‌ی‌تان اضافه کرده و محتویات آن را برابر تکه‌کد قرار دهید:
    </p>
    <pre>
      <code>
        {`file_uploads = On
memory_limit = 128M
upload_max_filesize = 64M
post_max_size = 128M
max_execution_time = 600`}
      </code>
    </pre>
    <p>
      بعد از اضافه کردن این فایل، در استقرار بعدی پروژه شما با این تنظیمات شروع
      به کار خواهد کرد.
    </p>
    <h3>اجرای خودکار دستورات دلخواه</h3>
    <p>
      بعد از اتمام عملیات build به صورت خودکار برنامه‌ی‌تان اجرا می‌شود. اما
      ممکن است قبل از اجرای برنامه نیاز داشته باشید که دستوراتی به صورت خودکار
      روی سرور اجرا شوند. بدین منظور، می‌تونید از
      <span className="code">postBuildCommands</span> داخل فایل{" "}
      <span className="code">liara.json</span> استفاده کنید. برای مثال،
      می‌توانید migration ها را به صورت خودکار اجرا کنید و یا این که ماژول‌های
      Apache را فعال کنید.
    </p>
    <Highlight className="json">
      {`{
  "laravel": {
    "postBuildCommands": [
      "echo 'Hello World!'",
      "php artisan migrate",
      "a2enmod expires"
    ]
  }
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید،
      <span className="code">postBuildCommands</span>
      آرایه است که شما می‌توانید به هر تعدادی دستور که مایل بودید، به آن اضافه
      کنید.
    </p>
    <h3>تنظیم TimeZone</h3>
    <p>
      ابتدا فایل
      <span className="code">app/config.php</span>
      را باز کرده و فیلد
      <span className="code">timezone</span>
      آن را به
      <span className="code">Asia/Tehran</span>
      تغییر دهید و سپس در فایل
      <span className="code">liara_php.ini</span>
      خط زیر را اضافه کرده و بعد دیپلوی کنید:
    </p>
    <pre>
      <code>date.timezone = 'Asia/Tehran'</code>
    </pre>
    <h3>تنظیمات TrustedProxies (برای مشاهده IP واقعی کاربران)</h3>
    <p>
      تمامی درخواست‌ها به سمت برنامه‌ی شما توسط{" "}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">
        Reverse proxy
      </a>{" "}
      های لیارا هدایت می‌شوند. برای این که در برنامه‌ی‌تان بتوانید به آی‌پی
      واقعی کاربر دسترسی داشته باشید و یا این که از قابلیت Signed URL های
      Laravel استفاده کنید، لازم است که تغییراتی را در فایل
      <span className="code">app/Http/Middleware/TrustProxies.php</span>
      اعمال کنید.
    </p>
    <p>
      در این فایل، یک متغیر با نام
      <span className="code">$proxies</span>
      وجود دارد. فقط کافیست که مقدار آن را به
      <span className="code">*</span>
      تغییر دهید.
    </p>
    <Highlight className="php">
      {`<?php
namespace App\Http\Middleware;
use Illuminate\Http\Request;
use Fideloper\Proxy\TrustProxies as Middleware;
class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string
     */
    protected $proxies = '*';
    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
}`}
    </Highlight>
    <h3>فایل‌های CSS و JS به صورت خودکار build می‌شوند</h3>
    <p>
      همان‌طور که اطلاع دارید، در برنامه‌های لاراولی با اجرای دستور
      <span className="code">npm run production</span>
      فایل‌های SASS به CSS تبدیل می‌شوند و همین‌طور کدهای جاوا اسکریپت ES6 به
      بالا به ES5 تبدیل شده و یک‌پارچه می‌شوند.
      <br />
      هر زمان که برنامه‌ی‌تان را روی لیارا مستقر می‌کنید، ما این دستور را
      برای‌تان اجرا می‌کنیم تا مطمئن شویم که فایل‌های CSS و JS شما به صورت صحیح
      در اختیار کاربران‌تان قرار گیرند.
    </p>
    <p>
      اما اگر از Laravel فقط برای ساخت یک API استفاده کرده‌اید و یا به طور کلی
      نیازی به این ندارید که لیارا پکیج‌های npm را برای‌تان نصب و فایل‌های CSS و
      JavaScript تان را build کند، می‌توانید در فایل{" "}
      <Link href="/clients/cli#liara-json-file">liara.json</Link> برنامه، یک
      فیلد با نام laravel و داخل آن یک فیلد با نام
      <span className="code">buildAssets</span>
      بسازید و این قابلیت را غیر فعال کنید.
    </p>
    <Highlight className="json">
      {`{
  "laravel": {
    "buildAssets": false
  }
}`}
    </Highlight>
    <p>
      با این تغییر، هر بار که دیپلوی کنید، لیارا از اجرای دستورات npm خودداری
      می‌کند.
    </p>
    <h3>کار با Queue ها</h3>
    <p>
      یکی از امکانات مهم Laravel، قابلیت تعریف صف (Queue) است. در پتلفرم لاراول،
      Supervisor نصب شده و شما با ایجاد یک فایل به نام supervisor.conf در ریشه‌ی
      برنامه‌، می‌توانید تنظیمات صف‌های مختلف‌تان را در آن وارد کنید. و در نهایت
      با یک‌بار دیپلوی‌کردن، صف‌های شما شروع به کار خواهند کرد.
    </p>
    <p>
      Supervisor برنامه‌ی بسیار مفیدی است که سعی می‌کند صف‌های شما را همیشه در
      حال اجرا نگه‌دارد. اگر به هر دلیلی صف‌های‌تان به خطا بخورند و خاموش شوند،
      Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند.
    </p>
    <p>
      از بخش <Link href="/apps/console">خط فرمان (کنسول)</Link> برنامه‌ی‌تان هم
      می‌توانید با supervisorctl کار کنید و وضعیت صف‌های‌تان را مشاهده کنید.
    </p>
    <pre>
      <code>{`$ supervisorctl status`}</code>
    </pre>
    <p>
      یک نمونه کانفیگ ساده برای یک صف با نام sms که وظیفه‌ی ارسال پیامک به
      کاربران را به عهده دارد:
    </p>
    <Highlight className="ini">
      {`[program:scheduler]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work --queue=sms --tries=3
autostart=true
autorestart=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/sms-queue.log`}
    </Highlight>
    <p>برای اطلاعات بیشتر می‌توانید به لینک‌های زیر مراجعه کنید:</p>
    <ul>
      <li>
        <a href="http://supervisord.org/" target="_blank">
          مستندات Supervisor
        </a>
      </li>
      <li>
        <a
          href="https://laravel.com/docs/queues#supervisor-configuration"
          target="_blank"
        >
          مستندات لاراول درباره‌ی Supervisor
        </a>
      </li>
    </ul>
    <h3>ایجاد CronJob</h3>
    <p>
      گاهی اوقات نیاز است کار خاصی در زمان خاصی و به صورت دوره‌ای انجام شود،
      مثلا تهیه‌ی فایل پشتیبان از پایگاه داده، ارسال ایمیل و خبرنامه و کارهایی
      نظیر این. برای تعریف کران‌جاب‌هایتان، می‌توانید فیلدی به نام
      <span className="code">cron</span>
      را به فایل <span className="code">liara.json</span> برنامه‌ی‌تان اضافه
      کنید.
    </p>
    <Highlight className="json">
      {`{
  "cron": [
    "* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید، فیلد
      <span className="code">cron</span>
      یک آرایه است و این یعنی می‌توانید یک یا چند کران‌جاب تعریف کنید.
    </p>
    <h3>مدیریت لاگ‌ها در Laravel</h3>
    <p>
      لاگ‌ها وظیفه دارند اتفاقات رخ داده در نرم‌افزار مثل error ها یا exception
      ها و حتی اطلاعاتی که خود برنامه‌نویس به دلخواه خود در بخش‌های مختلف
      نرم‌افزار درنظرگرفته را، ثبت کنند. Laravel روش‌های مختلفی برای لاگ‌ کردن
      دارد که اصطلاحا به آن‌ها Channel Drivers میگوید. برای آشنایی بیشتر به{" "}
      <a href="https://laravel.com/docs/master/logging" target="_blank">
        مستندات لاراول درباره‌ی Logs
      </a>{" "}
      مراجعه کنید.
    </p>
    <p>
      برای نمونه اگر قصد دارید Log ها را روی Console بریزید، تا در پنل لاگ‌های
      داشبورد لیارا قابل مشاهده باشد میتوانید از درایور
      <span className="code">errorlog</span>
      استفاده کنید. اگر قصد دارید Log ها را داخل یک فایل نگه‌دارید از درایور{" "}
      <span className="code">single</span> استفاده کنید. اگر قصد دارید Log ها را
      بر اساس روز در فایل‌های مجزایی نگه‌داری کنید تا حجم هر فایل برای بررسی
      زیاد نشود میتوانید از درایور <span className="code">daily</span> استفاده
      کنید. تصمیم نحوه‌ نگه‌داری Log ها با شماست و در صورتی که قصد تغییر آن را
      دارید به راحتی از طریق بخش تنظیمات برنامه میتوانید نام درایور موردنظر
      خودتون رو به ENV ها اضافه کنید:
    </p>{" "}
    <Highlight className="json">{`LOG_CHANNEL=daily`}</Highlight>
    <p>یا</p>
    <Highlight className="json">{`LOG_CHANNEL=errorlog`}</Highlight>
    <Notice variant="info">
      Laravel قابلیت خوبی برای استفاده همزمان از چند درایور دارد. اگر شما از
      درایور <span className="code">stack</span> اسفتاده کنید میتوانید همزمان
      Log ها را به چند درایور ارسال کنید. مثلا هم داخل فایل نگه‌داری شود و هم به
      Console ریخته شود تا در پنل لیارا قابل مشاهده باشد. درباره این درایور در{" "}
      <a
        href="https://laravel.com/docs/master/logging#building-log-stacks"
        target="_blank"
      >
        مستندات Laravel
      </a>{" "}
      بیشتر بخوانید.
    </Notice>
    <Notice variant="info">
      برنامه‌های Laravel ای در لیارا به صورت پیشفرض با درایور{" "}
      <span className="code">errorlog</span> مستقر میشوند.
    </Notice>
    <Notice variant="info">
      در پروژه تستی آموزش راه‌اندازی Laravel در لیارا، از درایور stack برای لاگ
      همزمان داخل فایل و کنسول استفاده شده است. میتوانید{" "}
      <a
        href="https://github.com/liara-cloud/laravel-getting-started"
        target="_blank"
      >
        کد‌های آن ‌را
      </a>{" "}
      برای بررسی بیشتر مطالعه کنید.
    </Notice>
    <h3>لیست اکستنشن‌های نصب شده</h3>
    <p>در پلتفرم لاراول، اکستنشن‌های PHP زیر نصب شده‌اند:</p>
    <pre>
      <code>
        {`[PHP Modules]
amqp
apcu
bcmath
calendar
Core
ctype
curl
date
dom
exif
fileinfo
filter
ftp
gd
gettext
gmp
gnupg
hash
iconv
igbinary
imagick
imap
intl
json
ldap
libxml
mbstring
mcrypt
memcached
mongodb
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_dblib
pdo_mysql
pdo_pgsql
pdo_sqlite
pgsql
Phar
posix
readline
redis
Reflection
session
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlwriter
yaml
Zend OPcache
zip
zlib
[Zend Modules]
Zend OPcache`}
      </code>
    </pre>
  </Layout>
);
