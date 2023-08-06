<template>
  <div>
    <UModal
      v-model="isOpen"
      :ui="{
        wrapper: 'delete-modal',
        base: ' w-4/12 mt-10 test',
      }"
    >
      <UCard>
        <div class="flex justify-center mb-4">
          <UIcon
            name="i-heroicons-exclamation-triangle"
            color="primary"
            class="text-[2rem] text-red-500"
          />
        </div>

        {{ $t("delConfirm") }}
        <br />
        <UBadge
          color="primary"
          class="bg-primary py-1 px-2 rounder-1 font-bold"
        >
          {{ item.name }}
        </UBadge>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton color="gray" @click="isOpen = false">
              {{ $t("cancel") }}
            </UButton>
            <UButton
              color="primary"
              @click="$emit('deleteItem', item.id), (isOpen = false)"
            >
              <!-- {{ $t("confirm") }} -->
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>


<script setup>
const props = defineProps({
  theProps: {
    type: Object,
    required: true,
  },
});
const { isOpen, item } = useTable(props.theProps);
</script>