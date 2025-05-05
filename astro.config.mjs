import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind'; // 

export default defineConfig({
  base: '/istqb-ctfl-notes-2025/', // 
  integrations: [
    starlight({
      title: "ISTQB CTFL 4.0 Course Notes",
      social: {
        github: "https://github.com/DalondaIkhimokpa/istqb-ctfl-notes-2025",
      },
      sidebar: [
        {
          label: "Fundamentals of Testing",
          items: [
            {
              label: "What is Testing",
              items: [
                {
                  label: "What is Testing?",
                  slug: "guides/fundamentals-of-testing/what-is-testing",
                },
                {
                  label: "Testing and Debugging",
                  slug: "guides/fundamentals-of-testing/testing-and-debugging",
                },
              ],
            },
            {
              label: "Why is Testing Necessary",
              items: [
                {
                  label: "Why is Testing Necessary?",
                  slug: "guides/fundamentals-of-testing/why-is-testing-necessary",
                },
                {
                  label: "Testing’s Contributions to Success",
                  slug: "guides/fundamentals-of-testing/testings-contributions-success",
                },
                {
                  label: "Testing and Quality Assurance (QA)",
                  slug: "guides/fundamentals-of-testing/testing-and-qa",
                },
                {
                  label: "Errors, Defects, Failures, and Root Causes",
                  slug: "guides/fundamentals-of-testing/errors-defects-failures-root-causes",
                },
              ],
            },
            {
              label: "Testing Principles",
              items: [
                {
                  label: "Testing Principles",
                  slug: "guides/fundamentals-of-testing/testing-principles",
                },
              ],
            },
            {
              label: "Test Activities, Testware and Test Roles",
              items: [
                {
                  label: "Test Activities and Tasks",
                  slug: "guides/fundamentals-of-testing/test-activities-tasks",
                },
                {
                  label: "Test Process in Context",
                  slug: "guides/fundamentals-of-testing/test-process-context",
                },
                {
                  label: "Testware",
                  slug: "guides/fundamentals-of-testing/testware",
                },
                {
                  label:
                    "Traceability Between the Test Basis and Test Work Products",
                  slug: "guides/fundamentals-of-testing/traceability-test-basis-work-products",
                },
                {
                  label: "Testing Roles",
                  slug: "guides/fundamentals-of-testing/testing-roles",
                },
              ],
            },
            {
              label: "Essential Skills and Good Practices in Testing",
              items: [
                {
                  label: "Generic Skills Required for Testing",
                  slug: "guides/fundamentals-of-testing/generic-skills-required",
                },
                {
                  label: "Whole Team Approach",
                  slug: "guides/fundamentals-of-testing/whole-team-approach",
                },
                {
                  label: "Advantages of the Whole Team Approach",
                  slug: "guides/fundamentals-of-testing/advantages-whole-team-approach",
                },
                {
                  label: "Independence of Testing",
                  slug: "guides/fundamentals-of-testing/independence-of-testing",
                },
                {
                  label: "Levels of Independence",
                  slug: "guides/fundamentals-of-testing/levels-of-independence",
                },
              ],
            },
          ],
        },
        {
          label: "Testing Throughout the Software Development Lifecycle",
          items: [
            {
              label:
                "Testing in the Context of a Software Development Lifecycle",
              items: [
                {
                  label: "Software Development and Software Testing",
                  slug: "guides/testing-throughout-lifecycle/software-development-testing",
                },
                {
                  label: "Software Development Life Cycle Models",
                  slug: "guides/testing-throughout-lifecycle/sdlc-models",
                },
                {
                  label:
                    "Impact of the Software Development Lifecycle on Testing",
                  slug: "guides/testing-throughout-lifecycle/impact-of-sdlc-on-testing",
                },
                {
                  label:
                    "Software Development Lifecycle and Good Testing Practices",
                  slug: "guides/testing-throughout-lifecycle/sdlc-good-testing-practices",
                },
                {
                  label: "Software Development Models",
                  slug: "guides/testing-throughout-lifecycle/software-development-models",
                },
                {
                  label: "Testing as a Driver for Software Development",
                  slug: "guides/testing-throughout-lifecycle/testing-driver-development",
                },
                {
                  label: "DevOps and Testing",
                  slug: "guides/testing-throughout-lifecycle/devops-testing",
                },
                {
                  label: "Shift Left Approach",
                  slug: "guides/testing-throughout-lifecycle/shift-left-approach",
                },
                {
                  label: "Retrospectives and Process Improvement",
                  slug: "guides/testing-throughout-lifecycle/retrospectives-process-improvement",
                },
              ],
            },
          ],
        },
        {
          label: "Static Testing",
          items: [
            {
              label: "Static Testing Basics",
              items: [
                {
                  label: "Static Testing Basics",
                  slug: "guides/static-testing/static-testing-basics",
                },
                {
                  label: "Work Products Examinable by Static Testing",
                  slug: "guides/static-testing/work-products-static-testing",
                },
                {
                  label: "Value of Static Testing",
                  slug: "guides/static-testing/value-static-testing",
                },
                {
                  label:
                    "Differences between Static Testing and Dynamic Testing",
                  slug: "guides/static-testing/differences-static-dynamic-testing",
                },
              ],
            },
          ],
        },
        {
          label: "Test Tools",
          items: [
            {
              label: "Tool Support for Testing",
              items: [
                {
                  label: "The Meaning and Purpose of Tool Support",
                  slug: "guides/test-tools/meaning-purpose-tool-support",
                },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
    }),
    tailwind(), // TailwindCSS integration
    mdx(), // MDX integration for handling markdown files with JSX
  ],
});