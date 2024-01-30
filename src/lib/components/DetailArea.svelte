<script>
    import { selected_class_data } from '$lib/stores/store-detail-manager.js'
    import ClassHeader from '$lib/components/ClassComponents/ClassHeader.svelte'
    import ClassDefinition from "$lib/components/ClassComponents/ClassDefinition.svelte"
</script>

<div class="flex flex-col w-full max-w-screen-lg m-auto h-full p-4">
    <ClassHeader classData={$selected_class_data}></ClassHeader>
    <!-- Class Def -->
    
    <!-- Definition -->
    <div class="mt-12">
        <ClassDefinition classData={$selected_class_data}></ClassDefinition>

    </div>
    <!-- Definition JSON-ish -->
    <!-- Domain-Range graph? -->
</div>