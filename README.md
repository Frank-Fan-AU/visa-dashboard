📘 This README is in English. [点击查看中文文档 »](README.zh-CN.md)

# What's this
📌 Project Overview

This is a visa submission and grant tracking platform designed to help international students monitor and share key milestones in their visa application journey. It allows users to track their own submission and approval dates, explore aggregated statistics, and gain insights from others who are also waiting for their visa outcomes.

Helping students waiting for their visa to stay informed and feel less alone.
# 💡 Why I Built This

## 🎯 Visa Grant Tracking
The core goal of this project is to help students waiting for their visa grants feel more informed — and maybe a little more at ease.

Traditionally, people rely on WeChat groups or Xiaohongshu (RED) posts to track visa timelines, but both have major limitations:

•	WeChat groups are capped at 500 users, so there are many scattered groups with tons of messages to scroll through.

•	RedBook posts often stop updating once the original poster gets their visa approved.

My partner was going through this exact situation, and I realized the same issue could happen again and again.

With a dedicated platform, users can share their own visa timelines after receiving their grants, and volunteer moderators can help keep the data accurate and ongoing — without the updates suddenly stopping.

## 📋 Visa Submission Guide

While preparing our student visa and dependent visa, we found that the information was scattered across different platforms — some on Xiaohongshu, some in WeChat groups — and that often led to missing key documents or realizing something late.

That’s why I added a Visa Submission Guide section: a central place where people can find essential, verified, and practical guidance for lodging their visa.

Right now, we’re only sharing the most public and universally applicable information. Once our own visa is granted, we’ll upload all our complete materials to help others — we just don’t want to mislead anyone before that.

## 💬 Message Board

This was a strong request from my partner — waiting for a visa can be mentally exhausting, and sometimes, people just need a place to vent and connect.

## 🛡️ Coming Soon: Translator & Agent Warnings

We’ve seen many complaints in chat groups about bad translators, unreliable agents, and even visa-related scams.

I want to build a space where users can share warnings and reviews, helping others avoid the same pitfalls.

If this platform grows with contributions from more people, it could become a clean, reliable resource hub for every student planning to study abroad.

But it may make bad agent angry then there is legal issue to me. so I stop this fiture.

# How to join us

This project is feature-complete and currently running in a stable state. Unless critical bugs are reported, no active development is planned. If major new features are required in the future and cannot be handled by a single developer, I may consider bringing on an additional contributor.



# 🚀 Tech Stack

🧱 Framework & Platform

•	⚡ Next.js 14 – React-based full-stack framework

•	🌐 MongoDB Atlas – Cloud-hosted NoSQL database

•	🧩 Mongoose.js – ODM for MongoDB
	
•	🐙 GitHub – Version control and collaboration

•	☁️ AWS Amplify – One-click deployment

•	🌍 Amazon Route 53 – Domain hosting and DNS management

🧩 UI & Components

•	🔐 Clerk – User authentication and session management

•	🎨 Tailwind CSS – Utility-first CSS framework

•	🧱 shadcn/ui – Headless UI components for React

•	🧑‍💻 Ant Design (antd) – Enterprise-class React UI library

•	✨ Lucide-react – Icon library

•	📝 react-hook-form – Form state management (used with shadcn/ui)

•	✅ Zod – Type-safe schema validation for forms

•	📊 TanStack React Table – Table rendering (used with shadcn/ui)

•	📚 MDX – Markdown + JSX for writing and displaying long-form content


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### enviroment

Node v22.12.0

```.env
# mongodb dev
MONGO = prepare use your clerk or just connect me to give you a dev key
CLERK_SECRET_KEY = prepare use your clerk or just connect me to give you a dev key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = prepare use your clerk or just connect me to give you a dev key
NEXT_PUBLIC_CONTENTFUL_SPACE_ID= prepare use your clerk or just connect me to give you a dev key
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= prepare use your clerk or just connect me to give you a dev key
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
