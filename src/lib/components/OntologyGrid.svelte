<script>
    import AgGridSvelte from "ag-grid-svelte";
    import 'ag-grid-enterprise'
    import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
    import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

    import { ontologyData, ontologyAPI } from '$lib/stores/store-ontology-grid.js'
    import { classValueRenderer, addGridDropZone } from '$lib/js/common-grid.js'
    import { selected_class_data } from "$lib/stores/store-detail-manager.js"

    // import { createEventDispatcher } from 'svelte'
    // const dispatch = createEventDispatcher()

    async function onGridReady(params){
        ontologyData.getData();
    }

    export const gridOptions = {
        treeData: true,
        getDataPath: (data) => {
            // if (data.path.full[0] == "https://brickschema.org/schema/Brick#Class"){
            //     return data.path.full.slice(1)
            // }
            // else {
            //     return null
            // }
            return data.path.full
        },
        autoGroupColumnDef: {
            headerName: "Object",
            sortable: true,
            comparator: (valueA, valueB, nodeA, nodeB, isDescending) => {return nodeA?.data?.term > nodeB?.data?.term ? 1 : -1 },
            sort: 'asc',
            cellRendererParams: {
                suppressCount: true,
                innerRenderer: classValueRenderer
            },
            filter: 'agTextColumnFilter',
            resizable: true,
            // checkboxSelection: true,
            // headerCheckboxSelection: true,
            // headerCheckboxSelectionFilteredOnly: true
            rowDrag: false,
        },
        defaultColDef: {
            sortable: true,
            flex: 1,
            resizable: true
        },
        rowSelection:false,
        rowData: null,
        groupSelectsChildren: true,
        onCellClicked: onCellClicked,
        context: {
            gridName: "ontology"
        }
    };


    // on selection send event
    function onCellClicked(event) {
      const clickedNode = event?.data;
    //   dispatch("clicked-node", clickedNode);
        $selected_class_data = clickedNode
        // console.debug("Clicked: ", $selected_class_data)
    };

</script>

<div id="ontologyGrid" class="ag-theme-alpine h-full w-full">
    <AgGridSvelte bind:rowData={$ontologyData} {onGridReady} {gridOptions}/>
</div>