<template>
  <model-gltf src="static/Duck.glb"></model-gltf>
</template>

<script>
import { ModelGltf } from './component/model3d';

export default {
  components: { ModelGltf },
  name: 'App',
};
</script>

<style>
* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    width: 100%;
    height: 100%;
    color: #657180;
    padding: 0px;
}
body {
    background: #eee;
}
</style>
