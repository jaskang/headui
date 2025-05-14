# HTooltip

## default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HTooltip content="content">
      <HButton>HButton</HButton>
    </HTooltip>
  </div>
</template>
```

## nested

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HTooltip trigger="click">
      <HButton>HButton</HButton>
      <template #content>
        content
        <HTooltip>
          <HButton>HButton</HButton>
          <template #content> content </template>
        </HTooltip>
      </template>
    </HTooltip>
  </div>
</template>
```
