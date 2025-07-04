# 🧑‍💻 Developer – Portfolio - Nextjs

A sleek, modern, and fully responsive single-page portfolio built with **Next.js**, styled using **Tailwind CSS**, and enhanced with **Shadcn UI components**. It includes a functional contact form powered by **Nodemailer** for sending emails directly from the site.

Preview: https://portfolio-pvsl8whdz-sukanto-kumar-das.vercel.app/

---

## ✨ Features

- ⚡ Built with Next.js for high performance
- 💅 Styled using Tailwind CSS
- 🧱 Reusable UI components from Shadcn
- 📬 Functional contact form with Nodemailer
- 📱 Fully responsive across all screen sizes
- 🌐 SEO friendly and optimized for speed

---

## 📁 Project Structure

```
my-portfolio/
│
├── app/ # App Router (Next.js 13+)
│ ├── components/ # Reusable UI components
│ ├── page.tsx # Main portfolio page
│ └── api/
│ └── contact/
│ └── route.ts # Contact form backend using Nodemailer
│
├── public/ # Static files (images, favicons, etc.)
├── styles/ # Global styles (if needed)
├── lib/
│ └── mailer.ts # Nodemailer setup
├── tailwind.config.ts # Tailwind configuration
├── postcss.config.js # PostCSS configuration
├── next.config.js # Next.js config
├── tsconfig.json # TypeScript settings
├── .env.local # Environment variables (not committed)
└── README.md # Project documentation
```

---

## 🧩 Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using npm:

```
npm install
```
Or yarn:
```
yarn
```
### 3. Environment Variables
Create a .env.local file in the root and add:
```
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
EMAIL_TO=your_email@example.com
```

⚠️ If using Gmail, enable "App Passwords" and use that instead of your login password.

### 4. Start the Development Server

```
npm run dev
```
Visit http://localhost:3000 to view your portfolio.

🛠 Tech Stack
Next.js – React Framework

Tailwind CSS – Utility-first CSS

Shadcn UI – UI component library

Nodemailer – For email sending (contact form)

TypeScript – Type safety and cleaner code

🧪 Deployment
You can deploy this portfolio easily with Vercel (recommended for Next.js).

📬 Contact
You can reach me via the contact form on the website or email me directly at:

css
Copy
Edit
your_email@example.com
📄 License
This project is open source and available under the MIT License.

yaml
Copy
Edit

---

Let me know if you'd like:
- A copy as a downloadable file
- A version with real email or repo links
- Added badges (e.g., Vercel, GitHub stars, etc.)

I'm happy to adjust it!
