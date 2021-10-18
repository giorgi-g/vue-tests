import UserList from "@/components/User/UserList";
import { mount } from "@vue/test-utils";

test("User List Component Mount", () => {
  // console.log(">>> SHALLOW MOUNT: ", shallowMount(UserList).html());
  // console.log(">>> SIMPLE MOUNT: ", mount(UserList).html());

  const wrapper = mount(UserList);
  const dataUsers = wrapper.vm.$data.users;
  const user = {
    name: "A",
    surname: "Root",
    age: 200
  };

  const users = [...dataUsers, user];

  wrapper
    .setData({
      users
    })
    .then(() => {
      // console.log(">>> wrapper html \n", wrapper.html());
      expect(users.length).toBe(4);

      expect(wrapper.html()).toMatchSnapshot();
    });
});
