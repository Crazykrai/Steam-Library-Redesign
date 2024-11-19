<!-- src/lib/components/ui/button/Button.svelte -->
<script module>
	// @ts-nocheck
	import { tv } from "tailwind-variants";
  
	export const buttonVariants = tv({
	  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	  variants: {
		variant: {
		  default: "bg-primary text-primary-foreground hover:bg-primary/90",
		  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
		  outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
		  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
		  ghost: "hover:bg-accent hover:text-accent-foreground",
		  link: "text-primary underline-offset-4 hover:underline",
		  recent: "bg-filter bg-opacity-5 text-filter hover:bg-opacity-25",
		  play: "bg-play text-primary-foreground hover:bg-play/90",
		  install: "bg-install text-primary-foreground hover:bg-install/90",
		},
		size: {
		  default: "h-10 px-4 py-2",
		  play: "h-10 px-4 py-2 w-40",
		  sm: "h-9 rounded-md px-3",
		  lg: "h-11 rounded-md px-8",
		  icon: "h-10 w-10",
		},
		active: {
		  true: "bg-active text-white", // Define active styles here
		  false: "",
		},
	  },
	  compoundVariants: [
		{
		  variant: "recent",
		  active: true,
		  class: "bg-active text-white", // Example active style for 'recent'
		},
		// Add compound variants for other variants if needed
	  ],
	  defaultVariants: {
		variant: "default",
		size: "default",
		active: false,
	  },
	});
  </script>
  
  <script>
	import { cn } from "$lib/utils.js";
  
	export let variant = "default";
	export let size = "default";
	export let active = false; // New prop for active state
	export let href = undefined;
	export let type = "button";
	export let children;
	export let className = "";
  
	// Merge className with buttonVariants
	const classes = buttonVariants({ variant, size, active, className });
  </script>
  
  {#if href}
	<a href={href} class={cn(classes)} {...$$restProps}>
	  <slot />
	</a>
  {:else}
	<button type={type} class={cn(classes)} {...$$restProps}>
	  <slot />
	</button>
  {/if}
  
  <style>
	/* Add any additional styles if necessary */
  </style>
  