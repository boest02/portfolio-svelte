<script lang="ts">
    export let type: string = 'something!';
    export let list: object[] = [{}];
    export let callBack: Function = (data) => { };

    let terms = [];
    let filteredList: object[] = [];
    let searchInputValue: string = '';

    const removeFilter = (filter) => {
        terms = terms.filter(term => term !== filter);
        filteredList = filterList(list)
    };

    const removeAllFilters = () => {
        terms = [];
        callBack(list);
        filteredList = [];
    };

    const getFilterText = (form) => {
        const formData = new FormData(form);
        const filter = formData.get('filter');
        searchInputValue = ''; // clear input
        return filter;
    };

    //get object blob string and convert to lowercase
    // TODO: make this just text fields we want to search
    const getBlob = (blob) => {
        return JSON.stringify(blob).toLowerCase();
    };

    // got through list, convert to a JSON blob, then search for the term
    const filterList = (data) => {
        let filteredData = data.filter(item => {
            let blob = getBlob(item);
            return terms.every(term => blob.includes(term.toLowerCase()));
        });
        callBack(filteredData);
        return filteredData;
    }

    const filterData = (data) => {
        let form = data.target;
        let term = getFilterText(form);

        if (!terms.includes(term)) {
            terms.push(term);
            terms = terms;
            filteredList = filterList(list);
        }
    };
</script>

<div class="filter-wrapper">
    <form on:submit|preventDefault={filterData}>
        <label for="filter">Filter {type}</label>
        <div class="input-button">
            <input required bind:value={searchInputValue} placeholder="add a filter" type="search" name="filter" id="filter">
            <button type="submit" class="search" title="filter..."><i class="fa-solid fa-bolt"></i></button>
        </div>
    </form>

    {#if terms.length > 0}
    <div class="filtered-terms">
        <div class="header">
            <div class="terms-title">Showing {filteredList.length} results filtered by...</div>
            <button on:click={removeAllFilters}>X Remove All</button>
        </div>
        <div class="term-list">
            {#each terms as term}
            <div class="filtered-term">
                <div>{term}</div>
                <button title="...remove term" on:click={()=> removeFilter(term)}>X</button>
            </div>
            {/each}
        </div>
    </div>
    {/if}
</div>

<style lang="scss">
    .filter-wrapper {
        display: flex;
        flex-direction: column;

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 10px 20px 0;
            padding-bottom: 10px;

            label {
                font-weight: bold;
            }

            .input-button {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                input {
                    padding: 6px;
                    border-radius: 5px;
                    border: 1px solid gray;
                    background-color: transparent;
                    color: #000;
                }

                button {
                    background-color: var(--filter-button-color, rgb(28, 141, 164));
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 5px;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
                    cursor: pointer;

                    i {
                        color: #fff;
                    }
                }
            }
        }

        .filtered-terms {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin: 5px 20px 10px;
            padding: 10px 10px 30px;
            border-radius: 5px;
            border: 1px solid rgba(28, 141, 164, 70%);
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
            background-color: rgba(28, 141, 164, 10%);
            width: fit-content;
            max-width: 90%;
            min-width: 40%;
            position: relative;

            .header {
                .terms-title {
                    font-weight: bold;
                    font-size: 85%;
                }

                button {
                    background-color: transparent;
                    color: rgb(28, 141, 164);
                    border-bottom: 1px solid rgb(28, 141, 164);
                    font-size: 70%;
                    font-style: italic;
                    cursor: pointer;
                    position: absolute;
                    right: 15px;
                    bottom: 10px;
                }
            }

            .term-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 10px;

                .filtered-term {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 85%;
                    width: fit-content;
                    padding: 2px 10px;
                    border-radius: 50px;
                    color: rgb(28, 141, 164);
                    border: 1px solid rgb(28, 141, 164);
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);

                    button {
                        font-size: 80%;
                        font-weight: 600;
                        margin-block: 2px;
                        padding: 2px 5px;
                        background-color: transparent;
                        color: rgb(28, 141, 164);

                        &:hover {
                            outline: .5px solid rgb(28, 141, 164);
                            border-radius: 50%;
                        }
                    }
                }
            }
        }

        @media (max-width: 700px) {
            font-size: 95%;
            form {
                margin: 10px 10px 0;
            }
            .filtered-terms {
                margin: 10px auto;
                width: 94%;
                min-width: unset;
                max-width: unset;
            }
        }
    }
</style>