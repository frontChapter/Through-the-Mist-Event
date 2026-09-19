export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Returns the correct asset URL with basePath prepended if necessary.
 * Handles both development (empty basePath) and GitHub Pages production deployment.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
