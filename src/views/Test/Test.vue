<template>
  <div class="about">
    <h1>Test component</h1>
    <span>prop 1 = {{ prop1 }}</span>
    <span style="margin-left: 12px">prop 2 = {{ prop2 }}</span>
    <br />
    <input v-model="innerVariable1" />
    <button @click="doEvent1">Event 1</button>
    <br />
    <input v-model="innerVariable2" />
    <button @click="doEvent2">Event 2</button>
  </div>
</template>

<script src="./Test.ts" lang="ts" />
