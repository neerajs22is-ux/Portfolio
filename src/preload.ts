// Starts fetching the encrypted character model as soon as the app boots,
// so the download runs in parallel with React mounting and the loading UI.
export let modelFetch: Promise<Response> | null = null;

export function preloadModel() {
  if (!modelFetch) {
    modelFetch = fetch(`${import.meta.env.BASE_URL}models/character.enc`);
  }
}
