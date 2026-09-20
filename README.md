# 👋 Sourabh Haldar's Portfolio

Personal one-page portfolio site built with Astro. Features an intro, skills, project showcases, experience timeline, and a contact section.

🌐 **Live site:** [sourabhhaldar.com](https://v1.sourabhhaldar.com)

## 🛠️ Stack

- ⚡ [Astro](https://astro.build): static site framework
- 🔷 TypeScript

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── sourabh_haldar_resume.pdf
├── src/
│   ├── components/      # Astro components (Header, Footer, Home)
│   ├── data/
│   │   └── site.ts      # All content: projects, jobs, socials
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
└── package.json
```

✏️ To update content (projects, experience, socials), edit [src/data/site.ts](src/data/site.ts).

## 🚀 Commands

| Command        | Action                                |
| :------------- | :------------------------------------ |
| `pnpm install` | Install dependencies                  |
| `pnpm dev`     | Start dev server at `localhost:4321`  |
| `pnpm build`   | Build for production to `./dist/`     |
| `pnpm preview` | Preview production build locally      |

## 📬 Contact

- 🐙 GitHub: [github.com/sourabh-31](https://github.com/sourabh-31)
- 💼 LinkedIn: [linkedin.com/in/sourabh-haldar](https://www.linkedin.com/in/sourabh-haldar)
- ✉️ Email: sourabhhaldarh@gmail.com

## 📄 License

This project is licensed under the [MIT License](LICENSE).
