import Layout from '../../components/Layout'
import Head from 'next/head'
import Highlight from 'react-highlight'

export default () => (
  <Layout>
    <Head>
      <title>Liara | مستندات وب‌سرویس لیارا (API)</title>
    </Head>

    <h1>مستندات وب‌سرویس لیارا (API)</h1>
    <p>
      وب‌سرویس و در واقع API ما به شما دسترسی کامل به امکانات پلتفرم ابری لیارا را می‌دهد.
      با استفاده از این API، می‌توانید در برنامه‌ها و سرویس‌های خودتان از لیارا به عنوان فراهم‌کننده‌ی زیر ساخت استفاده کنید.
    </p>
    {/* <p>
      در ادامه، به چندین نمونه از کاربردهای API لیارا اشاره می‌کنیم:
    </p>
    <ul>
      <li>Automation?!</li>
    </ul> */}

    <p>
      برای ارتباط با وب‌سرویس لیارا، تمامی درخواست‌های‌تان را باید به آدرس زیر ارسال کنید:
    </p>
    <pre>
      <code>
{`https://api.liara.ir`}
      </code>
    </pre>

    <h3>احراز هویت (Authentication)</h3>
    <p>
      تمام درخواست‌ها به وب‌سرویس لیارا باید دارای هدر Authorization باشند:
    </p>
    <pre>
      <code>
{`Authorization: Bearer TOKEN`}
      </code>
    </pre>
    <p>
      توکن مخصوص به شما در پنل کاربری‌تان قابل مشاهده است.
      <br />
      در صورتی که احراز هویت به درستی صورت نگیرد، خطای 401 دریافت خواهید کرد.
    </p>

    <h3>نسخه‌ها (Versioning)</h3>
    <p>
      تمامی درخواست‌ها دارای ورژن مشخصی هستند. ورژن‌های Endpoint
      ها با یک‌دیگر متفاوت هستند.
    </p>
    <p>
      نسخه‌های قدیمی‌تر هر Endpoint تا زمانی که امکان‌پذیر باشد پشتیبانی می‌شوند.
    </p>
    <p>
      برای مثال، برای دریافت لیست پروژه‌ها، ورژن به شکل زیر مشخص می‌شود:
    </p>
    <pre>
      <code>
{`https://api.liara.ir/v1/projects`}
      </code>
    </pre>
    
    {/* <h3>خطاها (Errors)</h3>
    <p></p> */}

    <h3>مدیریت پروژه‌ها</h3>
    <h4>لیست پروژه‌ها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/projects`}
      </code>
    </pre>
    <p>نمونه‌ی پاسخ این درخواست:</p>
    <Highlight className="json">
{`{
  "projects": [
    {
      "project_id": "my-app"
    }
  ]
}`}
    </Highlight>

    <h4>ساخت پروژه‌ی جدید</h4>
    <pre>
      <code>
{`POST https://api.liara.ir/projects`}
      </code>
    </pre>

    <h4>حذف پروژه</h4>
    <pre>
      <code>
{`DELETE https://api.liara.ir/projects`}
      </code>
    </pre>

    <h3>مدیریت استقرارها</h3>
    <h4>لیست استقرارها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/projects/:project/releases`}
      </code>
    </pre>

    <h4>ایجاد استقرار جدید</h4>

    <h4>بازگشت به استقرار قبلی</h4>

    <h3>مدیریت دیتابیس‌ها</h3>
    <h4>لیست دیتابیس‌ها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/databases`}
      </code>
    </pre>

    <h4>اطلاعات دیتابیس</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/databases/:databaseID`}
      </code>
    </pre>

    <h4>راه‌اندازی دیتابیس جدید</h4>
    <pre>
      <code>
{`POST https://api.liara.ir/databases`}
      </code>
    </pre>

    <h4>حذف دیتابیس</h4>
    <pre>
      <code>
{`DELETE https://api.liara.ir/databases/:databaseID`}
      </code>
    </pre>
  </Layout>
)
