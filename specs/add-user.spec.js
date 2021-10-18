import AddUser from "@/components/User/AddUser";
import { mount } from "@vue/test-utils";

test("Can add user to the list with DOM", async () => {
  const wrapper = mount(AddUser);

  const users = [
    { name: "John", surname: "Doe", age: 18 },
    { name: "James", surname: "Smith", age: 32 },
    { name: "Jack", surname: "Jones", age: 25 },
    { name: "Jean", surname: "Gray", age: 135 }
  ];

  const nameInput = wrapper.find("#name");
  const surnameInput = wrapper.find("#surname");
  const ageInput = wrapper.find("#age");
  const button = wrapper.find("#add-user");
  const minAge = wrapper.vm.$data.minAge;
  const maxAge = wrapper.vm.$data.maxAge;

  expect(minAge).toBeGreaterThanOrEqual(18);
  expect(maxAge).toBeLessThanOrEqual(145);

  let invalidatesCount = 0;

  const addToUsersList = async (user, index) => {
    nameInput.element.value = user.name;
    nameInput.trigger("input");

    surnameInput.element.value = user.surname;
    surnameInput.trigger("input");

    ageInput.element.value = user.age;
    ageInput.trigger("input");

    if (
      wrapper.vm.$data.user.age < minAge ||
      wrapper.vm.$data.user.age > maxAge
    ) {
      expect(parseInt(wrapper.vm.$data.user.age, 10)).toBeGreaterThanOrEqual(
        minAge
      );
      expect(parseInt(wrapper.vm.$data.user.age, 10)).toBeLessThanOrEqual(
        maxAge
      );
      invalidatesCount++;

      index++;
      if (index < users.length) {
        await addToUsersList(users[index], index);
      }
      return;
    }

    expect(wrapper.vm.$data.user.name).toBe(user.name);
    expect(wrapper.vm.$data.user.surname).toBe(user.surname);
    expect(wrapper.vm.$data.user.age).toBe(user.age.toFixed(0));

    await button.trigger("click");

    expect(wrapper.vm.$data.user.name).toBe(null);
    expect(wrapper.vm.$data.user.surname).toBe(null);
    expect(wrapper.vm.$data.user.age).toBe(0);

    const usersListDom = wrapper.findAll(".users > li");
    expect(wrapper.vm.$data.users.length).toBe(index + 1 - invalidatesCount);

    expect(wrapper.vm.$data.users.length).toBe(
      usersListDom.length - invalidatesCount
    );

    index++;
    if (index < users.length) {
      await addToUsersList(users[index], index);
    }
  };

  await addToUsersList(users[0], 0);
});
