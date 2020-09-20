<template>
    <div class="section section-pagination">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4>Progress Bars</h4>
                    <n-progress :value="25" label="Default" show-value>
                    </n-progress>
                    <n-progress type="primary" :value="60" label="Primary" show-value>
                    </n-progress>
                    <n-progress type="danger" :value="60" label="Danger" show-value>
                    </n-progress>
                    <n-progress type="warning" :value="60" label="Warning" show-value>
                    </n-progress>
                    <n-progress type="success" :value="60" label="Success" show-value>
                    </n-progress>
                    <n-progress type="info" :value="60" label="Info" show-value>
                    </n-progress>
                </div>
                <div class="col-md-6">
                    <h4>Pagination</h4>
                    <n-pagination type="success" :page-count="10" v-model="pagination.simple">

                    </n-pagination>

                    <n-pagination type="default" :page-count="10" v-model="pagination.default">

                    </n-pagination>

                    <div class="pagination-container justify-content-center">
                        <n-pagination type="success"
                                      prev-item-classes="arrow-margin-left"
                                      next-item-classes="arrow-margin-right"
                                      :page-count="10"
                                      v-model="pagination.full">

                        </n-pagination>
                    </div>
                    <br>
                    <h4>Labels</h4>
                    <badge type="default">Default</badge>
                    <badge type="primary">Primary</badge>
                    <badge type="success">Success</badge>
                    <badge type="info">Info</badge>
                    <badge type="warning">Warning</badge>
                    <badge type="danger">Danger</badge>
                    <badge type="neutral">Neutral</badge>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import {Progress, Pagination, Badge} from '@/components';
    export default {
        components: {
            [Progress.name]: Progress,
            [Pagination.name]: Pagination,
            Badge
        },
        data(){
            return {
                pagination: {
                    simple: 1,
                    default: 2,
                    full: 3
                }
            }
        }
    }
</script>
<style>
</style>
