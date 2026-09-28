declare module 'vue-draggable-resizable' {
	import type { DefineComponent } from 'vue'

	const VueDraggableResizable: DefineComponent<{
	active?: boolean
	draggable?: boolean
	resizable?: boolean
	w?: number | string
	h?: number | string
	x?: number
	y?: number
	z?: number | string
	minWidth?: number
	minHeight?: number
	maxWidth?: number
	maxHeight?: number
	handles?: string[]
	axis?: 'x' | 'y' | 'both'
	grid?: [number, number]
	parent?: boolean
	dragHandle?: string
	dragCancel?: string
	lockAspectRatio?: boolean
	preventDeactivation?: boolean
	disableUserSelect?: boolean
	enableNativeDrag?: boolean
	scale?: number | [number, number]
	}>

	export default VueDraggableResizable
}