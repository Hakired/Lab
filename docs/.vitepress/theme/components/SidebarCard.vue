<!--
  Copyright (c) 2024 taskylizard

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<script setup lang="ts">
import Field from './CardField.vue'
</script>

<template>
  <div
    class="bg-$vp-c-bg hover:bg-$vp-c-bg/40 border-$vp-c-default-soft hover:border-primary transition-border relative z-0 rounded-lg border-2 border-solid p-5 duration-500 mt-2"
  >
    <div class="align-center mb-4 flex justify-between">
      <div class="text-$vp-c-text-1 lh-relaxed text-sm font-bold">Legend</div>
    </div>
<Field icon="i-twemoji-glowing-star"> Indexer / Open Links  
</Field>

<Field icon="i-twemoji-sparkling-heart"> Popular  
</Field>

<Field icon="i-twemoji-fire"> Recommended  
</Field>

<Field icon="i-twemoji-repeat-button"> Backups / Mirrors  
</Field>

<Field icon="size-6 i-material-symbols-info-outline-rounded"> Info 
</Field>
  </div>
</template>
