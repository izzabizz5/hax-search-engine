import { html, fixture, expect } from '@open-wc/testing';
import "../hax-search-engine.js";

describe("HaxSearchEngine test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-search-engine
        title="title"
      ></hax-search-engine>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
