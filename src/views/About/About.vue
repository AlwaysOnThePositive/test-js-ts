<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test-component v-bind="propsForTestComponent" v-on="listenersTestComponent" />
  </div>
</template>

<script lang="ts" src="./About.ts" />
