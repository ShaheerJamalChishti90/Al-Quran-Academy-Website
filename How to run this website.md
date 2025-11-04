# How to Run the React Website Locally
---

# English Version

### Prerequisites

You only need one thing installed on your computer: **Node.js**.

1.  **Install Node.js:** Node.js includes **npm** (Node Package Manager), which is essential for managing JavaScript projects and installing React tools.
      * Go to the official Node.js website and download the **LTS (Long-Term Support)** version for your operating system (Windows, macOS, or Linux).
      * Install it, accepting the default options.

### Step 1: Set Up the React Project

We will use **Vite**, a modern, fast tool for creating front-end projects, which is the easiest way to run single-file React apps like this one.

1.  **Open your Terminal or Command Prompt (CMD/PowerShell).**

2.  **Create a New Project Directory:** Navigate to where you want to save the project (e.g., your Desktop or Documents folder) and run:

    ```bash
    npm create vite@latest al-quran-academy-app -- --template react
    ```

      * This command creates a new folder named `al-quran-academy-app` with a basic React setup.

3.  **Navigate into the New Directory:**

    ```bash
    cd al-quran-academy-app
    ```

4.  **Install Dependencies:** Vite installs the necessary packages (like React and ReactDOM) to make the app run.

    ```bash
    npm install
    ```

-----

### Step 2: Integrate the Code

Now, you will replace the default React code with the code I generated for the Al Quran Academy website.

1.  **Find the Source File:** In your new project folder (`al-quran-academy-app`), navigate to the following path:

    ```
    /src/
    ```

2.  **Delete/Rename the Default `App.jsx`:** Delete the existing `App.jsx` file (or rename it to `App.bak` if you want to keep a backup).

3.  **Create the New File:** Create a new file named **`App.jsx`** in the `/src/` folder.

4.  **Paste the Code:** Copy the entire code block from my previous response (the content of `AlQuranAcademyWebsite.jsx`) and paste it completely into your new **`App.jsx`** file.

-----

### Step 3: Run the Website

With the code in place, you can now start the local development server.

1.  **Make sure your Terminal/Command Prompt is still in the project directory** (`al-quran-academy-app`).

2.  **Start the Server:** Run the development command:

    ```bash
    npm run dev
    ```

3.  **Access the Website:**

      * The terminal will usually display a message like:
        ```
        Local: http://127.0.0.1:5173/
        ```
      * **Click on that link** (or copy and paste it into your web browser's address bar).


The website should now load in your browser, running locally on your computer\! Any changes you make to the `App.jsx` file will automatically refresh in the browser.

---

# Urdu Version

## Al Quran Academy Website Chalane Ka Guide

یہ ویب سائٹ **React** پر بنی ہے، جو ایک جدید ویب ٹیکنالوجی ہے۔ اسے چلانے کے لیے، آپ کے کمپیوٹر کو **Node.js** نامی ایک سادہ سیٹ اَپ کی ضرورت ہے تاکہ پروجیکٹ کو بلڈ اور لانچ کیا جا سکے۔

ویب سائٹ کو اپنے لوکل مشین پر چلانے کے لیے ان اقدامات کو بالکل اسی طرح فالو کریں۔

-----

## حصہ 1: ابتدائی سیٹ اَپ (ضروری سافٹ ویئر انسٹال کرنا)

آپ کو صرف ایک بنیادی پروگرام کی ضرورت ہے: **Node.js**۔ اس پروگرام میں React پروجیکٹ کو مینج کرنے کے لیے تمام ضروری ٹولز شامل ہیں۔

### Node.js ڈاؤن لوڈ کریں:

  * **Official Node.js website** پر جائیں: [https://nodejs.org/](https://nodejs.org/)
  * آپ کو دو ڈاؤن لوڈ بٹن نظر آئیں گے۔ جو **"LTS" (Long-Term Support)** کے طور پر نشان زد ہے، اس پر کلک کریں۔ یہ سب سے مستحکم (stable) ورژن ہے۔
  * اپنے آپریٹنگ سسٹم (Windows, Mac, وغیرہ) کے لیے انسٹالر فائل ڈاؤن لوڈ کریں۔

### Node.js انسٹال کریں:

  * ڈاؤن لوڈ کی گئی انسٹالر فائل کو چلائیں۔
  * پوچھے گئے ہدایات پر عمل کریں۔ آپ انسٹالر کی طرف سے تجویز کردہ تمام ڈیفالٹ سیٹنگز کو قبول کر سکتے ہیں۔
  * جب انسٹالیشن مکمل ہو جائے، تو اپنے کمپیوٹر کو **Restart** کریں، یا کم از کم کسی بھی **Terminal/Command** ونڈو کو بند کر کے دوبارہ کھولیں۔

### تنصیب کی تصدیق (Verification) (اختیاری لیکن تجویز کردہ):

  * اپنے کمپیوٹر کا **Terminal** (Mac/Linux) یا **Command Prompt/PowerShell** (Windows) کھولیں۔

  * مندرجہ ذیل کمانڈ ٹائپ کریں اور **Enter** دبائیں:

    ```bash
    node -v
    ```

  * اگر آپ کو ایک ورژن نمبر نظر آتا ہے (جیسے `v20.12.2`)، تو انسٹالیشن **کامیاب** ہو گئی ہے\!

-----

## حصہ 2: پروجیکٹ کا ماحول بنانا

اب ہم ویب سائٹ کے کوڈ کو رکھنے اور چلانے کے لیے ضروری فولڈرز اور فائلیں بنائیں گے، جس کے لیے ہم **Vite** کا استعمال کریں گے، جو React ایپ شروع کرنے کا سب سے تیز طریقہ ہے۔

  * اپنا **Terminal** یا **Command Prompt/PowerShell** کھولیں۔

### پروجیکٹ فولڈر بنائیں:

  * یہ کمانڈز ایک ایک کر کے چلائیں گے۔ یہ `al-quran-academy-app` نام کا ایک نیا فولڈر بنائے گا۔

    ```bash
    npm create vite@latest al-quran-academy-app -- --template react
    ```

### پروجیکٹ فولڈر میں جائیں:

  * آپ کو اس فولڈر کے اندر جانا ہوگا جو آپ نے ابھی بنایا ہے۔

    ```bash
    cd al-quran-academy-app
    ```

### React Dependencies انسٹال کریں:

  * یہ کمانڈ تمام ضروری چھوٹے پروگرامز (packages) انسٹال کرتی ہے جو React کو کام کرنے کے قابل بناتے ہیں۔

    ```bash
    npm install
    ```

  * اس عمل کے ختم ہونے کا انتظار کریں۔ آپ ٹرمینل میں کافی سرگرمی دیکھیں گے، اور یہ آخر کار پرامپٹ پر واپس آ جائے گا۔

-----

## حصہ 3: ویب سائٹ کا کوڈ شامل کرنا

### کوڈ فائل کا پتہ لگائیں:

  * اپنا بنایا ہوا نیا پروجیکٹ فولڈر (`al-quran-academy-app`) کمپیوٹر پر کھولیں، اور اس کے اندر موجود **src** فولڈر پر جائیں۔ راستہ کچھ ایسا دکھنا چاہیے:
    `al-quran-academy-app/src/`

### مرکزی فائل تبدیل کریں:

  * **src** فولڈر کے اندر، آپ کو `App.jsx` نامی ایک فائل نظر آئے گی۔
  * اس فائل کو **Delete** کر دیں۔ (یا اگر آپ چاہیں تو اس کا نام بدل کر `App.bak` رکھ دیں۔)

### نئی فائل بنائیں:

  * اسی **src** فولڈر میں، ایک نئی فائل بنائیں اور اس کا نام **App.jsx** رکھیں۔ (**فائل کا نام بالکل یہی ہونا چاہیے: App.jsx**).

### کوڈ پیسٹ کریں:

  * جو **واحد .jsx کوڈ فائل** آپ کو ملی تھی (پورے ویب سائٹ کا کوڈ) اسے کھولیں۔
  * اس فائل سے **سارا مواد کاپی** کر لیں۔
  * اسے اپنی بنائی ہوئی نئی **App.jsx** فائل میں **مکمل طور پر پیسٹ** کر دیں۔
  * فائل کو **Save** کریں۔

-----

## حصہ 4: ویب سائٹ چلانا

  * اپنے **Terminal/Command Prompt** پر واپس جائیں۔ (یہ ابھی بھی `al-quran-academy-app` فولڈر کے اندر ہونا چاہیے۔)

### ویب سائٹ شروع کریں:

  * یہ کمانڈ کوڈ کو مرتب (compile) کرتی ہے اور ایک لوکل ویب سرور شروع کرتی ہے۔

    ```bash
    npm run dev
    ```

### براؤزر میں لانچ کریں:

  * ایک لمحے کے بعد، ٹرمینل آپ کو ایک ایڈریس دے گا، جو عام طور پر ایک **Local URL** جیسا ہوگا:
    `http://localhost:5173/`
  * اس ایڈریس کو **کاپی کریں** اور اسے اپنے **ویب براؤزر** (جیسے Chrome، Firefox، یا Edge) کے ایڈریس بار میں پیسٹ کریں۔

**Al Quran Academy website** اب آپ کے کمپیوٹر پر بالکل ٹھیک چل رہی ہوگی\!

### اہم ٹپ (Important Tip)

جب تک سرور چل رہا ہو (یعنی `npm run dev` چلانے کے بعد)، آپ ٹرمینل ونڈو کو کھلا رکھ سکتے ہیں۔ اگر آپ **App.jsx** فائل میں کوئی تبدیلی کرتے ہیں اور اسے سیو کرتے ہیں، تو براؤزر پیج خود بخود ریفریش ہو کر آپ کی نئی اپڈیٹس دکھائے گا۔

-----

# Roman Urdu Version

Ye raha aapke diye gaye guide ka **Roman Urdu** version, jismein code setup ko bilkul **step-by-step** bataya gaya hai:

-----

## Al Quran Academy Websit local computer pe chalane Ka Guide

Ye website **React** par bani hai, jo ek modern web technology hai. Isay chalane ke liye, aapke computer ko **Node.js** naam ke ek **simple setup** ki zaroorat hai taaaki project build aur launch ho sake.

Website ko apni local machine par chalane ke liye in qadmon ko **bilkul theek se** follow karein.

-----

## Hissa 1: Ibtedai Setup (Zaroori Software Install Karna)

Aapko sirf ek bunyadi program ki zaroorat hai: **Node.js**। Is program ke saath **npm** (Node Package Manager) bhi aata hai, jo React project ko manage karne ke liye zaroori hai.

### Node.js Download Karein:

  * Official **Node.js website** par jayein: [https://nodejs.org/](https://nodejs.org/)
  * Aapko do download buttons nazar aayenge. Jo **"LTS" (Long-Term Support)** ke taur par **nishaan-zad** hai, us par click karein. Ye sabse **stable** version hai.
  * Apne operating system (Windows, Mac, waghera) ke liye installer file download karein.

### Node.js Install Karein:

  * Download ki gayi installer file ko **run** karein.
  * Pooche gaye **prompts** par amal karein. Aap **default settings** ko maan sakte hain jo installer ne tajweez ki hain.
  * Jab installation mukammal ho jaye, to apne computer ko **Restart** karein, ya kam az kam kisi bhi **Terminal/Command** window ko band karke dobara kholein.

### Tanseeb ki Tasdeeq (Verification) (Optional magar Tajweez Karda):

  * Apne computer ka **Terminal** (Mac/Linux) ya **Command Prompt/PowerShell** (Windows) kholein.

  * Darj zeel command **type** karein aur **Enter** dabayein:

    ```bash
    node -v
    ```

  * Agar aapko ek version number nazar aata hai (jaise `v20.12.2`), to **installation kamyab** ho gayi hai\!

-----

## Hissa 2: Project Ka Mahaul Banana

Ab hum website ke code ko rakhne aur chalane ke liye zaroori **folders aur files** banayenge, jiske liye hum **Vite** ka istemaal karenge, jo React app shuru karne ka sabse **tez tareeqa** hai.

  * Apna **Terminal** ya **Command Prompt/PowerShell** kholein.

### Project Folder Banayein:

  * Yeh commands **aik aik karke** chalayein. Ye `al-quran-academy-app` naam ka ek naya folder banayega.

    ```bash
    npm create vite@latest al-quran-academy-app -- --template react
    ```

### Project Folder Mein Jayen:

  * Aapko us folder ke **andar** jana hoga jo aapne abhi banaya hai.

    ```bash
    cd al-quran-academy-app
    ```

### React Dependencies Install Karein:

  * Ye command woh **tamaam zaroori** chhote programs (packages) install karti hai jo React ko kaam karne ke qabil banate hain.

    ```bash
    npm install
    ```

  * Is **amal ke khatam hone ka intezaar** karein. Aap terminal mein kaafi **sargarmia** (activity) dekhenge, aur phir yeh aakhir mein prompt par wapas aa jayega.

-----

## Hissa 3: Website Ka Code Daalna

### Code File Ka Pata Lagayein:

  * Apna banaya hua naya project folder (`al-quran-academy-app`) computer par kholein, aur is ke andar maujood **src** folder par jayein. Rasta kuch aisa dikhna chahiye:
    `al-quran-academy-app/src/`

### Markazi File Badlein:

  * **src** folder ke andar, aapko `App.jsx` naam ki ek file nazar aayegi.
  * Is file ko **Delete** kar dein. (Ya agar aap chahte hain to iska naam badal kar `App.bak` rakh dein).

### Nai File Banayein:

  * Isi **src** folder mein, ek **nai file banayein** aur uska naam **App.jsx** rakhein. (**File ka naam bilkul sahi hona chahiye: App.jsx**).

### Code Paste Karein:

  * Jo **waahid .jsx code file** aapko mili thi (poora website ka code), usey kholein.
  * Us file se **saara mawaad copy** kar lein.
  * Isey apni banayi hui nayi **App.jsx** file mein **poora paste** kar dein.
  * File ko **Save** kar dein.

-----

## Hissa 4: Website Chalana

  * Apne **Terminal/Command Prompt** par wapas jayein. (Ye abhi bhi `al-quran-academy-app` folder ke andar hona chahiye).

### Website Shuru Karein:

  * Yeh command code ko **compile** karti hai aur ek **local web server** shuru karti hai.

    ```bash
    npm run dev
    ```

### Browser Mein Launch Karein:

  * Kuch dair ke baad, terminal aapko ek address dega, jo aam taur par ek **Local URL** jaisa hoga:
    `http://localhost:5173/`
  * Is address ko **copy karein** aur isay apne **web browser** (jaise Chrome, Firefox, ya Edge) ke address bar mein **paste** karein.

**Al Quran Academy website** ab aapke computer par **bilkul theek se chal rahi hogi\!**

-----

### Ahem Nuskha (Important Tip)

Jab tak server chal raha ho (yani `npm run dev` chalane ke baad), aap terminal window ko **khula rakh sakte hain**. Agar aap **App.jsx** file mein koi tabdeeli karte hain aur usey save karte hain, to browser page **khud ba khud refresh** ho kar aapki nayi updates dikha dega.

