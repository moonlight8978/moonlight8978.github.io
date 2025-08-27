export function getLeetCodeProblems() {
  const files = import.meta.glob("../../content/leetcode/*.rb", {
    query: "?raw",
  });

  return Object.entries(files).map(([path]) => {
    const filename = path.split("/").pop();
    return filename;
  });
}

export async function getLeetCodeSolution(slug: string) {
  const files = import.meta.glob("../../content/leetcode/*.rb", {
    query: "?raw",
    import: "default",
  });

  const readFile = files[`../../content/leetcode/${slug}`];
  return readFile() as Promise<string>;
}
