import { empty } from './lib/elements.js';
import { renderDetails, renderFrontpage, searchAndRender } from './lib/ui.js';
import { getLaunch } from './lib/api.js';

/**
 * Fall sem keyrir við leit.
 * @param {SubmitEvent} e
 * @returns {Promise<void>}
 */
async function onSearch(e) {
  e.preventDefault();

  if (!e.target || !(e.target instanceof Element)) {
    return;
  }

  const { value } = e.target.querySelector('input') ?? {};

  if (!value) {
    return;
  }

  await searchAndRender(document.body, e.target, value);
  window.history.pushState({}, '', `/?query=${value}`);
}

/**
 * Athugar hvaða síðu við erum á út frá query-string og birtir.
 * Ef `id` er gefið er stakt geimskot birt, annars er forsíða birt með
 * leitarniðurstöðum ef `query` er gefið.
 */
async function route() {
  const { search } = window.location;

  // Commented out the logging statements
  // console.log(search);

  const qs = new URLSearchParams(search);
  // console.log(qs);

  const query = qs.get('query') ?? undefined;
  const id = qs.get('id');
  const ekkitil = qs.get('ekkitil');

  const parentElement = document.body;

  // console.log('ekkitil :>>', ekkitil);

  if (id) {
    // Fetch and render individual launch details
    try {
      // Add a check for id to avoid calling getLaunch with undefined
      if (id) {
        const launchDetails = await getLaunch(id);
        // console.log('Launch Details:', launchDetails);
        renderDetails(parentElement, launchDetails);
      }
    } catch (error) {
      console.error('Error fetching launch details:', error);
      // TODO: Handle the error, display an error message in the container
    }
  } else {
    renderFrontpage(parentElement, onSearch, query);
  }
  /* TODO athuga hvaða síðu á að birta og birta */
}

// Bregst við því þegar við notum vafra til að fara til baka eða áfram.
window.onpopstate = () => {
  /* TODO bregðast við */
};

// Athugum í byrjun hvað eigi að birta.
route();
