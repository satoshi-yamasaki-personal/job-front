<template>
  <div>
    <h1>MY PAGE</h1>
  </div>
  <div>
    <input type="file" @change="fileUpload" />
    <img v-if="img_url" :src="img_url" />
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  methods: {
    fileUpload(props) {
      const file = props.target.files[0];
      console.log(file);
      const storage = getStorage();
      // filesはStorage内のディレクトリ名
      const imageRef = ref(storage, "files/" + file.name);
      uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded!' + snapshot);
      })
    }
  }
}

</script>