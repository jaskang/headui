# Alert Component

```vue demo
<script setup lang="ts">
import { Alert, Button } from 'headui'
import { CheckIcon, SearchIcon, TrashIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Alert title="Alert">This Alert has a title and an icon. No description. </Alert>
    <Alert title="Alert">
      <template #icon>
        <TrashIcon />
      </template>
      This is an alert with icon, title and description.
    </Alert>
  </div>
</template>
```

## destructive

```vue demo
<script setup lang="ts">
import { Alert, Button } from 'headui'
import { CheckIcon, SearchIcon, TrashIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Alert title="标题" variant="destructive"></Alert>
    <Alert title="Alert" variant="destructive"> 内容 </Alert>
    <Alert title="Alert" variant="destructive">
      <template #icon>
        <TrashIcon />
      </template>
      This is an alert with icon, title and description.
    </Alert>
  </div>
</template>
```

[[doc]]
