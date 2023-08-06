<template>
  <div class="bg-white border rounded-lg shadow-ms">
    <div class="flex flex-col md:flex-row items-center justify-between p-5">
      <div
        class="flex items-center md:items-end justify-start gap-4 flex-col md:flex-row w-6/12"
      >
        <FormSelectMenu
          v-model="filterBy"
          attribute="label"
          by="key"
          :all-data="filterKeysList"
          :label="$t('filterBy')"
          :placeholder="$t('filterBy')"
          icon="i-ic-sharp-location-searching"
          class="w-full md:w-6/12"
        />

        <FormInput
          v-if="filterBy && filterBy.type === 1"
          v-model="filter.input"
          :label="filterBy.label"
          :placeholder="filterBy.label"
          icon="i-heroicons-magnifying-glass-20-solid"
          class="w-full md:w-6/12"
          :loading="false"
          @input="test($event)"
          @keyup.enter="$emit('tableSearch', tableFilter())"
        />

        <FormSearchMenu
          v-if="filterBy && filterBy.type === 2"
          v-model="filter.select"
          :url="filterBy.select"
          :label="filterBy.label"
          :placeholder="filterBy.label"
          icon="i-tabler-activity"
          class="w-full md:w-6/12"
          by="id"
        />

        <FormSelectMenu
          v-if="filterBy && filterBy.type === 4"
          v-model="filter.select"
          :all-data="filterBy.data"
          :label="filterBy.label"
          :placeholder="filterBy.label"
          icon="i-tabler-activity"
          class="w-full md:w-6/12"
          by="id"
        />

        <UButton
          v-if="filterBy"
          class="mb-1 w-full md:w-24"
          :loading="false"
          icon="i-heroicons-magnifying-glass-20-solid"
          :label="$t('search')"
          :disabled="!filter.input && !filter.select"
          @click="$emit('tableSearch', tableFilter())"
        />
        <UButton
          v-if="(filterBy && filter.input) || filter.select"
          class="mb-1 w-full md:w-24 text-center"
          :loading="false"
          color="red"
          variant="soft"
          icon="i-heroicons-funnel"
          :label="$t('reset')"
          :disabled="!filter.input && !filter.select"
          @click="$emit('tableSearch'), resetFilter()"
        />
      </div>
      <UButton
        v-if="create"
        class="mt-4 md:mt-0"
        :icon="useArrowDir(useAR())"
        :label="`${$t('add')} ${row}`"
        color="primary"
        :trailing="false"
        size="md"
        :to="localePath(`${path}/create`)"
      />
    </div>

    <UTable
      :columns="selectedColumns"
      :rows="loading ? [] : filteredRows"
      :loading="loading"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: `${$t('noItems')}.`,
      }"
      :loading-state="{
        icon: 'i-heroicons-arrow-path',
        label: `${$t('loading')} ...`,
      }"
      :ui="{
        wrapper: 'relative hidden md:block',
        base: 'w-full ',
        divide: 'divide-y divide-gray-300 dark:divide-gray-700',
        thead: 'bg-gray-200',
        tbody: 'divide-y divide-gray-200 dark:divide-gray-800 ',
      }"
    >
      <template #avatar-data="{ row }">
        <UAvatar size="lg" :src="row.image" alt="Avatar" />
      </template>
      <template #belts-data="{ row }">
        <UTooltip :text="row.belts[0]?.belt.name">
          <UAvatar
            class="cursor-pointer"
            size="lg"
            :src="row.belts[0]?.belt.image"
            alt="Avatar"
          />
        </UTooltip>
      </template>
      <template #color-data="{ row }">
        <UTooltip :text="row.color.name || row.color">
          <UBadge
            size="lg"
            class="text-white cursor-pointer"
            :style="{ 'background-color': row.color.color || row.color }"
            :label="row.color.name || row.color"
          />
        </UTooltip>
      </template>
      <template #role-data="{ row }">
        <UTooltip :text="row.role">
          <UButton
            size="md"
            class="cursor-pointer"
            variant="outline"
            :color="roleFilter(row.role)"
            :label="row.role"
            @click="selectRole(row)"
          />
        </UTooltip>
      </template>
      <template #activity-data="{ row }">
        <UTooltip :text="row.activity?.name">
          <UAvatar
            class="cursor-pointer"
            size="lg"
            :src="row.activity?.image"
            alt="Avatar"
          />
        </UTooltip>
      </template>
      <template #mediaType-data="{ row }">
        <UTooltip :text="row.mediaType?.name">
          <UAvatar
            class="cursor-pointer"
            size="lg"
            :src="row.mediaType?.image"
            alt="Avatar"
          />
        </UTooltip>
      </template>
      <template #date-data="{ row }">
        <p></p>
        <UBadge size="lg" :label="useFormatDate(row.date)" />
      </template>
      <template #birthDate-data="{ row }">
        <p></p>
        <UBadge size="lg" :label="useFormatDate(row.birthDate)" />
      </template>
      <template #actions-data="{ row }">
        <!-- <p>{{ row }}</p> -->
        <UDropdown v-if="action" :items="actions(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>

    <UCard
      v-for="singleRow in filteredRows"
      :key="singleRow.id"
      class="mx-5 mb-5 block md:hidden"
    >
      <template #header>
        <div class="flex justify-start items-center">
          <p
            class="w-3/6 font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ singleRow.hash }}
          </p>
          <UAvatar
            v-if="singleRow.image"
            size="xl"
            :src="singleRow.image"
            alt="Avatar"
            :ui="{
              wrapper: '	',
            }"
          />
        </div>
      </template>
      <div v-for="(col, i) in selectedColumns" :key="i">
        <div
          v-if="col.key === 'activity'"
          class="flex justify-between items-start"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <UBadge
            size="lg"
            color="orange"
            :label="singleRow.activity?.name || 'null'"
          />
        </div>
        <div
          v-if="col.key.includes('date')"
          class="flex justify-between items-center mb-5"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <UBadge size="lg" :label="useFormatDate(row.date)" />
        </div>
        <div
          v-if="col.key.includes('birthDate')"
          class="flex justify-between items-center mb-5"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <UBadge size="lg" :label="useFormatDate(row.date)" />
        </div>
        <div
          v-if="col.key === 'color'"
          class="flex justify-between items-center mb-5"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <UTooltip :text="singleRow.color.name || singleRow.color">
            <UBadge
              size="lg"
              class="text-white cursor-pointer"
              :style="{
                'background-color': singleRow.color.color || singleRow.color,
              }"
              :label="singleRow.color.name || singleRow.color"
            />
          </UTooltip>
        </div>
        <div
          v-if="col.key === 'belts'"
          class="flex justify-between items-center mb-5"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <UBadge
            size="lg"
            color="orange"
            :label="singleRow.belts[0]?.belt.name"
          />
        </div>
        <div
          v-if="col.key === 'mediaType'"
          class="flex justify-between items-center mb-5"
        >
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>

          <UBadge size="lg" :label="singleRow.mediaType?.name" />
        </div>
        <div v-if="col.card" class="flex justify-between mb-5">
          <p
            class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
          >
            {{ col.label }}
          </p>
          <p>{{ singleRow[col.key] }}</p>
        </div>
      </div>

      <template #footer>
        <div v-if="action" class="flex justify-end gap-4">
          <UButton
            icon="i-heroicons-pencil-square"
            size="sm"
            color="primary"
            square
            variant="solid"
            :to="localePath(`${props.path}/${singleRow.slug}-${singleRow.id}`)"
          />
          <UButton
            icon="i-heroicons-trash-20-solid"
            size="sm"
            color="primary"
            square
            variant="solid"
            @click="deleteConfirm(singleRow)"
          />
        </div>
      </template>
    </UCard>

    <div class="mb-6 flex justify-end me-4">
      <slot name="pagination" />
    </div>

    <div>
      <UModal
        v-model="roleModal"
        :ui="{
          wrapper: 'delete-modal',
          base: 'w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 mt-10',
        }"
      >
        <UCard>
          <div class="flex justify-center mb-4">
            <UIcon
              name="i-material-symbols-component-exchange-sharp"
              color="primary"
              class="text-[2rem] text-red-500"
            />
          </div>

          {{ $t("changeRole") }}
          <br />

          <UFormGroup
            :label="$t('role')"
            :ui="{
              container: 'flex gap-4 mt-3',
            }"
          >
            <URadio
              v-for="role of currentRoles"
              :key="role.id"
              :label="role.name"
              v-model="selectedRole.role"
              v-bind="role"
              :ui="{
                wrapper: 'flex ',
              }"
            />
          </UFormGroup>

          <template #footer>
            <div class="flex justify-end gap-3">
              <UButton color="gray" @click="roleModal = false">
                {{ $t("cancel") }}
              </UButton>
              <UButton
                color="primary"
                @click="$emit('changeRole', selectedRole), (roleModal = false)"
              >
                {{ $t("confirm") }}
              </UButton>
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
    <div>
      <UModal
        v-model="isOpen"
        :ui="{
          wrapper: 'delete-modal',
          base: 'w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 mt-10',
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
            {{ selectedRow.name }}
          </UBadge>

          <template #footer>
            <div class="flex justify-end gap-3">
              <UButton color="gray" @click="isOpen = false">
                {{ $t("cancel") }}
              </UButton>
              <UButton
                color="primary"
                @click="$emit('deleteItem', selectedRow.id), (isOpen = false)"
              >
                {{ $t("confirm") }}
              </UButton>
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  filterKeys: {
    type: Array,
    required: true,
  },
  allData: {
    type: Array,
    required: true,
  },
  row: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  create: {
    type: Boolean,
    default: true,
  },
  action: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["deleteItem", "changeRole", "tableSearch"]);

const test = (event) => {
  if (!event.target.value) {
    emit("tableSearch");
  }
};

const {
  actions,
  deleteConfirm,
  isOpen,
  roleModal,
  selectRole,
  selectedRow,
  q,
  filter,
  filterBy,
  filteredRows,
  selectedColumns,
  filterKeysList,
  activities,
  tableFilter,
  resetFilter,
  roleFilter,
  currentRoles,
  selectedRole,
} = useTable(props);
</script>

<style lang="scss" scoped>
</style>