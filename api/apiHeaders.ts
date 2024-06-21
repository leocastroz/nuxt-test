export function getApiHeaders() {
  return {
    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  }
}