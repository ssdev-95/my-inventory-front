type LoadingProps = {
  color:string,
	gradient:string
}

export function Loading({ color, gradient }:LoadingProps) {
  return (
	  <div className={[
		  "h-[40px] w-[40px] flex items-center justify-center",
			color
		].join(' ')}>
			<div className={[
			  "h-[40px] w-[40px] rounded-full flex items-center justify-center animate-spin",
				gradient
			].join(' ')}>
				<div className={[
				  "w-[35px] h-[35px] rounded-full",
					color
				].join(' ')} />
			</div>
		</div>
	)
}
