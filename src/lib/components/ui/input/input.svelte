<script>
	import { cn } from "$lib/utils.js";

	let { ref = $bindable(null), value = $bindable(), class: className, ...restProps } = $props();
</script>

<input
	bind:this={ref}
	class={cn(
		"bg-input-background bg-opacity-20 text-white placeholder:text-library-tab flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	{...restProps}
/>
