export const useModalStore = defineStore('modalStore', () => {
  const isOpenDetail = ref(false);
  const isOpenEdit = ref(false);

  function toggleDetail() {
    isOpenDetail.value = !isOpenDetail.value;
  }
  function toggleEdit() {
    isOpenEdit.value = !isOpenEdit.value;
  }

  return { isOpenDetail, isOpenEdit, toggleDetail, toggleEdit };
});
