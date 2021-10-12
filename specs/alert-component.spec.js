import AlertComponent from "@/components/AlertComponent";
import { mount } from "@vue/test-utils";

test("Mount an AlertComponent component", () => {
  const wrapper = mount(AlertComponent, {
    propsData: {
      title: "The Timer!"
    }
  });
  console.log("Wrapper", wrapper);
  /**
   * To update the snapshot
   * @run yarn jest -u
   * */
  expect(wrapper.html()).toMatchSnapshot();
});

jest.useFakeTimers();

describe("Lifecycle methods", () => {
  test("Mounted assigns interval", () => {
    const wrapper = mount(AlertComponent);
    // console.log("wrapper.vm.interval", wrapper.vm.interval);
    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  test("counter workds", () => {
    const wrapper = mount(AlertComponent);
    expect(wrapper.vm.counter).toBe(0);
    // console.log("0. wrapper.vm.counter", wrapper.vm.counter);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(1);
    // console.log("1. wrapper.vm.counter", wrapper.vm.counter);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(2);
    // console.log("2. wrapper.vm.counter", wrapper.vm.counter);
  });

  test("instance gets destroyed", () => {
    const beforeDestroyedSpy = jest.spyOn(AlertComponent, "beforeDestroy");
    const wrapper = mount(AlertComponent);
    wrapper.vm.counter = wrapper.vm.timer - 1;
    jest.advanceTimersByTime(1000);
    expect(beforeDestroyedSpy).toHaveBeenCalled();
  });
});
