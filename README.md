# ISTQB CTFL 4.0 Course Notes

My notes from going through a instructor led istqb ctfl course in 2024.

View rendered site at: https://dalondaikhimokpa.github.io/istqb-ctfl-notes-2025/
To launch the site:

```sh
npm install
npm run dev
```

## How this site was built

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with absolute or relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

📘 Astro ISTQB Project Markdown & Summary:
✅ How to work with an Astro site (content collections, Markdown/MDX)
✅ Frontmatter basics (title:, etc.)
✅ Fixing schema errors related to Markdown structure
✅ Folder structure in src/content/docs/...
✅ Editing Markdown content and replacing broken files
✅ Using VS Code to open, edit, and manage files
✅ Using Git to track, commit, and push changes to GitHub
✅ Solving real-world Git errors (pull/push conflicts, staging issues)
✅ Cleaning up project structure for deployment
