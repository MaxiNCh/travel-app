<template>
  <label class="input-file" for="file">
    <input
      id="file"
      name="file"
      type="file"
      accept=".svg,.png,.jpg"
      class="hidden"
      required>
    <div class="input-file__dropzone">
      Select avatar
    </div>
  </label>
</template>

<script>
export default {
  name: 'InputFileDrop',
  mounted() {
    const input = document.querySelector('.input-file input');
    const dropzone = document.querySelector('.input-file__dropzone');

    dropzone.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    dropzone.addEventListener('dragenter', (event) => {
      event.stopPropagation();
      event.target.classList.add('input-file__dropzone--droppable');
    });
    dropzone.addEventListener('dragleave', (event) => {
      event.stopPropagation();
      event.target.classList.remove('input-file__dropzone--droppable');
    });

    dropzone.addEventListener('drop', (event) => {
      event.preventDefault();
      event.target.classList.remove('input-file__dropzone--droppable');
      let { files } = event.dataTransfer;

      if (!input.multiple && files.length > 1) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);
        files = dataTransfer.files;
      }

      input.files = files;
      input.focus();
      input.dispatchEvent(new Event('change'));
    });

    input.addEventListener('change', (event) => {
      const files = Array.from(event.target.files);
      dropzone.innerText = files[0].name;
    });
  },
};
</script>

<style lang="scss">
.input-file {
  grid-column: 1 / -1;
  justify-self: stretch;
  margin-top: 1rem;
  & input:focus + .input-file__dropzone {
    border: 2px dashed $main-color;
    // outline-color: -webkit-focus-ring-color;
  }
  &__dropzone {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed $border-color;
    border-radius: .3rem;
    height: 3rem;
    cursor: pointer;
    &:hover {
      border-color: $main-color;
    }
    &--droppable {
      background: $bg-color;
    }
  }
}
</style>
