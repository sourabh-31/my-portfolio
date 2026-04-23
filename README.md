# Sourabh Haldar — Portfolio

Personal portfolio site built with Astro. Features project showcases, an about page, and links to work.

**Live site:** [sourabhhaldar.com](https://sourabhhaldar.com)

## Stack

- [Astro](https://astro.build) — static site framework
- TypeScript
- Tailwind CSS

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── sourabh_haldar_resume.pdf
├── src/
│   ├── assets/          # Project images
│   ├── components/      # Astro components (Header, Footer, Home, About)
│   ├── data/
│   │   └── site.ts      # All content — projects, about, socials
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── about.astro
│   └── styles/
│       └── globals.css
└── package.json
```

To update content (projects, bio, stack, timeline), edit [src/data/site.ts](src/data/site.ts).

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start dev server at `localhost:4321`        |
| `pnpm build`   | Build for production to `./dist/`           |
| `pnpm preview` | Preview production build locally            |

## Contact

- GitHub: [github.com/sourabh-31](https://github.com/sourabh-31)
- LinkedIn: [linkedin.com/in/sourabh-haldar](https://www.linkedin.com/in/sourabh-haldar)
- Email: sourabhhaldarh@gmail.com
