import UserList from "@/components/User/UserList";
import { mount } from "@vue/test-utils";

test("User List Component Shallow Mount", () => {
  // As shallow and hollow as it sounds
  // console.log(shallowMount(UserList).html());

  const wrapper = mount(UserList);
  const dataUsers = wrapper.vm.$data.users;
  const user = {
    name: "G",
    surname: "Root",
    age: 200
  };

  const users = [...dataUsers, user];

  wrapper
    .setData({
      users
    })
    .then(() => {
      console.log("wrapper html", wrapper.html());

      expect(wrapper.html()).toMatchSnapshot();
    });
});
