import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import path from "node:path";
import * as changeCase from "change-case";
import { orderBy } from "lodash-es";

export function getLeetCodeProblems() {
  const files = import.meta.glob("../../content/leetcode/*.rb", {
    query: "?raw",
    import: "default",
  });

  const problems = Object.entries(files).map(([filePath]) => {
    const filename = filePath.split("/").pop()!;
    const basename = path.basename(filename, ".rb");
    const [, id, name] = basename.match(/^(\d+)_(.*)/)!;
    return {
      filename,
      fileBasename: basename,
      filePath,
      id: Number(id),
      title: changeCase.capitalCase(name),
      slug: changeCase.kebabCase(basename),
    };
  });

  return orderBy(problems, "id", "asc");
}

export async function getLeetCodeSolution(filePath: string) {
  const files = import.meta.glob("../../content/leetcode/*.rb", {
    query: "?raw",
    import: "default",
  });
  const readFile = files[filePath];
  return readFile() as Promise<string>;
}

export function getLeetCodeCollection() {
  const collection = defineCollection({
    loader: glob({ base: "../../content/leetcode", pattern: "**/*.{md,mdx}" }),
    schema: () =>
      z.object({
        difficulty: z.enum(["Easy", "Medium", "Hard"]),
      }),
  });

  return collection;
}

export function getLeetCodeProblemUrl(title: string) {
  return `https://leetcode.com/problems/${changeCase.kebabCase(title)}/description/`;
}
