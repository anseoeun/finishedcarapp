<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Sub from './Sub';
import Map from './Map';
import None from './None';

export default {
    components: {
        Default,
        Sub,
        Map,
        None,
    },
    props: {
        layout:{
            type: String,
            default: 'None',
        },
    },
}
</script>