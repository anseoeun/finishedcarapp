<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Sub from './Sub';
import None from './None';

export default {
    components: {
        Default,
        Sub,
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