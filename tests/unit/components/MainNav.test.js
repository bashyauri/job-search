import { mount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test = 'main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {});
  });
});
