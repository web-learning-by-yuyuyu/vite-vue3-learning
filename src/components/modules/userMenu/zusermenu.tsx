import { useUserStore } from "@store/user";
import { defineComponent, reactive, readonly, ref } from "vue";

const zUserMenu = defineComponent({
  name: "zUsermenu",
  setup() {
    const store = useUserStore();
    const handleClick = reactive({
      reload: () => {
        window.location.reload();
      },
      full: () => {
        // alternative standard method
        if (!document.fullscreenElement) {
          // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      },
    });
    const handleCommand = commad => {
      switch (commad) {
        case "c":
          store.logout();
          break;
      }
    };
    const proxyClick = e => {
      let id = e.target.id;
      id && handleClick[id]();
    };
    return () => (
      <div class="w-full flex space-x-10  justify-end items-center h-full">
        <div
          class=" flex-1 hidden sm:flex justify-end space-x-10 cursor-pointer"
          onClick={proxyClick}
        >
          <div
            class=" text-gray-700 transform hover:scale-125 duration-100 border-b-2 border-solid border-opacity-50 border-red-400"
            id="reload"
          >
            重载
          </div>
          <div
            id="lang "
            class="text-gray-700 transform hover:scale-125 duration-100 border-b-2 border-solid border-opacity-50 border-red-400"
          >
            语言
          </div>
          <div
            id="search"
            class="text-gray-700 transform hover:scale-125 duration-100 border-b-2 border-solid border-opacity-50 border-red-400"
          >
            搜索
          </div>
          <div
            id="full"
            class="text-gray-700 transform hover:scale-125 duration-100 border-b-2 border-solid border-opacity-50 border-red-400"
          >
            全屏
          </div>
        </div>
        <div class="flex items-center pr-10">
          <el-dropdown
            onCommand={handleCommand}
            class="w-5/6 outline-none"
            vSlots={{
              dropdown: () => {
                return (
                  <el-dropdown-menu>
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="b">我的待办</el-dropdown-item>
                    <el-dropdown-item command="c">注销登录</el-dropdown-item>
                  </el-dropdown-menu>
                );
              },
            }}
          >
            <div class="flex items-center">
              <img class=" h-7 rounded-full px-1" src={store.avater} alt="" />
              <div class="whitespace-normal truncate align-middle word-inline sm:block">
                {store.username}
              </div>
            </div>
          </el-dropdown>
          <i class="transform hover:scale-150 duration-100 cursor-pointer ml-4 el-icon-setting align-middle text-lg"></i>
        </div>
      </div>
    );
  },
});
export default zUserMenu;
