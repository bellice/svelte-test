<script>
	import { axisBottom, axisLeft, axisTop, select } from 'd3';

	export let width;
	export let height;
	export let margin;
	export let position;
	export let scale;

	let transform;
	let g;

	$: {
		select(g).selectAll('*').remove();

		let axis;
		switch(position) {
			case 'top':
				axis = axisTop(scale)
				.tickSizeOuter(0)
				.ticks(Math.max(width/100, 2));
				transform = `translate(0, ${margin})`;
				break;
			case 'bottom':
				axis = axisBottom(scale)
				.tickSizeOuter(0)
				.ticks(Math.max(width/100, 2));
				transform = `translate(0, ${height - margin})`;
				break;
			case 'left':
				axis = axisLeft(scale)
				.tickSizeOuter(0);
				transform = `translate(${margin+80}, 0)`;
		}

		select(g).call(axis);
	}
</script>

<g class='axis' bind:this={g} {transform} />
