import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export function useFeatureAddEditRules(options) {
    const rules = computed(() => ({
        name: {
          required,
        },
      }));
      
     const v$ = useVuelidate(rules, options);

    return { v: v$ }
}