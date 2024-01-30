<script>
    export let classData;
    // $: console.log(classData)
</script>

<div class="flex flex-col">
    <h5 class="text-xl italic mb-2">Definition</h5>
    <div>{classData?.desc}</div>

</div>