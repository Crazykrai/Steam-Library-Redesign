<script>
// @ts-nocheck

  import * as Tabs from "$lib/components/ui/tabs";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Clock } from 'lucide-svelte';
  import { CirclePlay } from 'lucide-svelte';
  import { Button } from "$lib/components/ui/button/index.js";
</script>


<Tabs.Root value="collections" class="mr-16">
    <Tabs.List>
      <Tabs.Trigger value="collections">Collections</Tabs.Trigger>
      <Tabs.Trigger value="news">News and Updates</Tabs.Trigger>
    </Tabs.List>
</Tabs.Root>
<Input type="" placeholder="Search..." class="max-w-xs mr-5"></Input>
<Button variant="recent" size="icon" style="margin-right: 5px;">
    <Clock style="height: 1.5rem; width: 1.5rem;" />
</Button>
<Button variant="recent" size="icon">
    <CirclePlay style="height: 1.5rem; width: 1.5rem;" />
</Button>
<p class="ml-10 mt-2">View</p>