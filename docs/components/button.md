---
hello: world
---

<script>
  import ButtonBooth from './booth/button.vue'
  import { Button } from 'headui'
</script>

# Button

## 基础用法

<ButtonBooth/>

## 风格

Button 组件支持五种风格，通过 `variant` 属性设置。

分别为: `default` | `secondary` | `destructive` | `outline` | `ghost` | `link`

```vue demo title=默认样式
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Button>default</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="destructive">destructive</Button>
    <Button variant="outline">outline</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="link">link</Button>
  </div>
</template>
```

## Pill

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Button pill>button</Button>
    <Button variant="outline" pill>outline</Button>
    <Button variant="secondary" pill>secondary</Button>
  </div>
</template>
```

## Square

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex items-center gap-2">
    <Button square>D</Button>
    <Button variant="outline" square>D</Button>
    <Button variant="secondary" square>D</Button>
  </div>
</template>
```

## block

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="space-y-2">
    <Button block>block button</Button>
  </div>
</template>
```

## Sizes

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button size="sm">sm</Button>
    <Button>default</Button>
    <Button size="lg">lg</Button>
  </div>
</template>
```

## Disabled

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Button disabled>primary</Button>
    <Button variant="secondary" disabled>secondary</Button>
    <Button variant="destructive" disabled>destructive</Button>
    <Button variant="outline" disabled>outline</Button>
    <Button variant="ghost" disabled>ghost</Button>
    <Button variant="link" disabled>link</Button>
  </div>
</template>
```

## Loading

```vue demo
<script setup>
import { Button } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Button loading>primary</Button>
    <Button variant="outline" loading>outline</Button>
    <Button variant="secondary" loading>secondary</Button>
  </div>
</template>
```

## Icon

```vue demo
<script setup>
import { TrashIcon } from 'lucide-vue-next'
import { Button } from 'headui'
</script>
<template>
  <div class="flex items-center gap-2">
    <Button square>
      <TrashIcon />
    </Button>
    <Button square variant="outline">
      <TrashIcon />
    </Button>
    <Button square variant="secondary">
      <TrashIcon />
    </Button>
    <Button square variant="destructive">
      <TrashIcon />
    </Button>
  </div>
</template>
```

## InputGroup

```vue demo
<script setup>
import { Button, InputGroup, Tooltip } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <InputGroup>
      <Tooltip content="Like">
        <Button variant="outline">button</Button>
      </Tooltip>
      <Tooltip content="Comment">
        <Button variant="outline" color="primary">button</Button>
      </Tooltip>
      <Tooltip content="Star">
        <Button variant="outline" color="success">button</Button>
      </Tooltip>
      <Tooltip content="Heart">
        <Button variant="outline">button</Button>
      </Tooltip>
      <Tooltip content="Share">
        <Button variant="outline">button</Button>
      </Tooltip>
      <Tooltip content="Download">
        <Button variant="outline">button</Button>
      </Tooltip>
    </InputGroup>
  </div>
</template>
```

<!-- @doc: ../../src/components/Button.vue -->
