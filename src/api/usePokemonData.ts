import { ref, shallowRef } from 'vue';
import { api } from 'boot/axios';
import { AxiosResponse } from 'axios';

export type PokemonData = {
  name: string;
  url: string;
};

// Pattern taken from vue-composable's
export function usePokemonData<FT = object | undefined, RT = unknown>(
  factory: (args?: FT) => string,
  handleResponse: (r: RT) => RT
) {
  const isLoading = ref(false);
  const result = shallowRef<RT | null>(null);
  const error = ref<Error | null>(null);

  const doResonse = async (res: AxiosResponse<RT>) => {
    const valueResponse: RT = await handleResponse(res.data);
    result.value = valueResponse;
    return valueResponse;
  };

  const execute = async (args?: FT) => {
    const request = factory(args ? { ...args } : undefined);
    isLoading.value = true;
    error.value = null;
    api
      .get(request)
      .then((res: AxiosResponse<RT>) => doResonse(res))
      .catch((e: Error) => {
        error.value = e;
        result.value = null;
        console.log('ERR:request- ', e);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return {
    isLoading,
    result,
    error,
    execute,
  };
}

export default usePokemonData;
