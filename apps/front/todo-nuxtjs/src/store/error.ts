export const useErrorStore = defineStore('errorStore', () => {
  const errorMessage = ref<string>('');
  const isOpen = ref<boolean>(false);

  function setMesasge(message: string) {
    errorMessage.value = message;
  }

  function openErrorMessage(message: string) {
    setMesasge(message);
    isOpen.value = !isOpen.value;
  }

  function clearErrorMessage() {
    setMesasge('');
    isOpen.value = !isOpen.value;
  }

  return { errorMessage, isOpen, openErrorMessage, clearErrorMessage };
});
