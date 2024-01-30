<script>
    export let classData;
    console.log(classData)
</script>

<div class="flex flex-row gap-x-2">
    <div>{classData?.prefix}</div>
    <h2 class="text-4xl">{classData?.term}</h2>
</div>