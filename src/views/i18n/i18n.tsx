import { defineComponent, ref, getCurrentInstance } from "vue";
import { ElSelect } from "element-plus";
import { useI18n } from "vue-i18n";

const i18n = defineComponent({
  name: "i18n",
  setup() {
    const selectVal = ref("");
    const pageSize = ref(10);
    const { t } = useI18n();
    const currentPage = ref(1);
    return () => (
      <div>
        {t("hello")}
        <p>element-plus 动态切换语言部分tag标记未正确替换为相应语言</p>
        <vxe-pager
          v-models={[
            [currentPage.value, "currentPage"],
            [pageSize.value, "pageSize"],
          ]}
          
          total={400}
          layouts={[
            "PrevJump",
            "PrevPage",
            "JumpNumber",
            "NextPage",
            "NextJump",
            "Sizes",
            "Total",
          ]}
        ></vxe-pager>
      </div>
    );
  },
});
export default i18n;
