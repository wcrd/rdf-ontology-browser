import { writable, get } from "svelte/store";
import { refreshRows } from "../js/common-grid";

export const ontologyData = createOntologyDataStore();

export const ontologyAPI = writable()


// // load ontology data automatically
// export async function initLoad(){
//     console.log("Loading ontologies.")
//     const response = await fetch('/ontology.json');
//     ontologyData.set(await response.json())
//     console.log("Loading ontologies complete.")
// }

let ontology_data_loading = false; // track if getData() has already been called to prevent double call

function createOntologyDataStore(){
    const store = writable([]);

    async function getData(){
        if(ontology_data_loading) { console.log("Ontology data already loading."); return } 
        console.log("Loading ontologies.")
        ontology_data_loading = true;
        const response = await fetch('/ontology_full.json');
        store.set(await response.json())
        ontology_data_loading = false;
        console.log("Loading ontologies complete.")
    }

    return {
        ...store,
        getData
    }
}


console.debug("Store:ModelOntology", {get, ontologyData, ontologyAPI})