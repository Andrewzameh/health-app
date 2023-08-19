<script lang="ts">
import {modeCurrent} from '@skeletonlabs/skeleton'

if ($modeCurrent){
    console.log("Light Mode")
}
else{
    console.log("Dark Mode")
}


</script>

<div class="container">
    <p>
        {$modeCurrent}
    </p>
</div>

