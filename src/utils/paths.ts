/**
 * Resolves the path of an asset, prepending the base path if configured (e.g. for GitHub Pages).
 *
 * @param path The absolute path to the asset (e.g. "/images/...").
 * @returns The resolved path with the base path prepended in production.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath && path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return path;
}
