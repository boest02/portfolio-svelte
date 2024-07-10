<aside class="aside-wrapper">
    <div class="layout-wrapper">
        <slot />
    </div>
</aside>

<style lang="scss">
    .aside-wrapper {
        width: 95%;
        max-width: 1500px;
        min-width: 925px;
        margin: 20px auto;
        padding: 20px;
        border: 4px solid #000;
        background-color: rgb(236, 231, 231);
        container-type: inline-size;
        
        @media only screen and (max-width:480px) {
            min-width: unset;            
        }
    }

    .layout-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;        
    }

    @container (max-width: 700px) {
        .layout-wrapper {
            flex-direction: column-reverse;
            align-items: center;
        }
    }
</style>
