<script>
    import OntologyGrid from "$lib/components/OntologyGrid.svelte";
    import { setGridQuickFilter } from "$lib/js/common-grid.js"


    let ontology_filter_input
    import { ontologyAPI } from '$lib/stores/store-ontology-grid.js'

    import { selected_class_data } from '$lib/stores/store-detail-manager.js'
    import DetailArea from '$lib/components/DetailArea.svelte'

        // move into common grid ops module
    function collapseRows(api) {
        api.collapseAll();
    }

    function expandRows(api) {
        api.expandAll();
    }

    
</script>

<div class="h-screen w-screen flex flex-col">
    <div class="h-12 w-full" id="header"></div>
    <div class="flex flex-row h-full w-full" id="main-content">
        <div id="ont-grid" class="w-1/4 flex flex-col">
            <div id="ontology-filter-panel" class="w-full flex flex-col">
                <div id="ontology-filter-button-bar" class="h-12 w-full flex flex-row align-middle p-2 justify-between gap-x-1">
                    <div>
                        <button class="btn-default" on:click={()=>expandRows($ontologyAPI.api)}>+</button>
                        <button class="btn-default" on:click={()=>collapseRows($ontologyAPI.api)}>-</button>
                    </div>
                    <div class="border rounded border-blue-500 grow shrink flex flex-row">
                        <input class="w-full outline-none" type="search" id="ontology-filter-text-box" bind:value={ontology_filter_input} placeholder="Filter..." on:input={()=>setGridQuickFilter($ontologyAPI.api, ontology_filter_input, true)}>
                    </div>
                </div>
            </div>
            <div class="h-full w-full">
                <OntologyGrid bind:gridOptions={$ontologyAPI} />
            </div>
        </div>
        <div id="detail-area" class="w-3/4 h-full">
            <DetailArea />
        </div>
    </div>

</div>
