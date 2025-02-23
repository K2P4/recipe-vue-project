<template>
		<div class="border-b mx-3  hadow-sm py-2">
			<div class="flex items-center justify-between">
				<img width="50" class="nline-block"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAZlBMVEX///8AAADn5+ebm5vMzMwxMTFzc3ONjY38/Pzw8PDCwsJSUlLz8/P39/eysrJgYGDc3Ny8vLw/Pz8oKChubm7V1dU4ODiioqJYWFhMTEyHh4dHR0epqallZWUjIyMPDw8ZGRl+fn5GcWtUAAAEoklEQVR4nO2ca5eiMAyGEVAKCBQFRC6C//9PrjbloiCMtIXZOXm+7DkOja9tk6YpXU1DEARBEARBEARBEI5NTdOMdbK1jlG8MDukeZIkJzfKLvbWct6hh32163FOnV/UjyQud0Nu5nFrYRzdqkf0PYjiraUxYndc3oPksrW4B+G+E1Sdgihy+/1pbS1P81u3CAqdf0bCQ9J8fPc2laeFTd/dzZfPqdVItDb1Zlo1HjvoqDjiClefh8cuengpaAj0kedIxhXSQTtF6PSS8h6rS58+Fgtrep758HSu+yV3nCq90LEfIwESF6fXGJKGPjhw9GldI8ZY7DkVsYJpSe/74Vfd4J/P664XDRs9SDIqW9/lPPpNDGeinfehzVmu59Dgs7yZQOd/ajbqVwsx89ZsnR4yy8oObpu61OZkWxvaVi60S7tV5jrd8AvidniDwtRZf3nUMbjLRDPBo3g8czIcCu10s2hHYy8plaB5a7DvDcSGRcSYa36uHbvvtXbcuFsuxVV0nquc/cGfSFbvktkvGfHxgo9JKmEekjvYckfHw3GDRVabDO0uHhB5MpB/+K36wnmk8xkcLlfGAa/bSw+sfCLeRO3AWnWTFhE6zNuPfGyG40mGlXHgt5/EUhxIR3Ilm1wI4dUwOHwDuLCijNMQd2Qeo6VJegNWPBH/c5iJUpqiN9huv5pKhuaAVETEwiShaCgkkNErStEf0RpCxPJJeGT58E2dwNtP0qEJjoG6IPPEZlE2WC7QZkv6VZ3AK0tpltu3018u8MjiQKJMoM4ShnL5EHvZGl6cCVSXCmZBWRUyZuYLAQsQSZWV+DLhdQCyykqaojcq2IoJWIBIvVOQrj4xd4JxWmsyIkXZQiAhGYYxrsW3NiOEtYzdDoyxjP3rOzrUPiNBMzbsDuVXwo+QrE+U7n4IL+NKDzXcbiZsSOeVGUNqH3q8dnyVMHccXmiLJM5DnRdeaynJOqx3zzVJUtZgNxYFt5wtl0ah64tXv0nst0d70razXa0+EY0KWtTV4iXWK3qFZkFLpLMkaXyBroouaKgVKLOGzjBymQKvCspRNJInUGbI6rBGBHqzSz199XuiZl1iDAWSZwCazHSe3vWS0q8rkD4/OE10YswOtfsPrCsQtiwTy5UzeGBdgYPiFynStD+iziDgbSyQLbI9hb9NIBSbesWg3yYQik1ul/SgQBSIAv+GwP5qva5AVt/rVacGAk12st4vX60r0LvvXjbMA4HeczfzUpVYV6B2NIv+W28DgeyBl/LaygLfgKL7ZFF8W4Es/6omM9iNBXrh4RBOFnE2Fjj/EuPmAudAgShQgP9EINGIACsINARRLlAKKBAF/mWBuiDKBYpaUS5Q8CTHUy5Q8PyZFWXVvHLKT8QEj68MGUY+AJvcXOhY1mOnLWc1b2mQKwyPwCzkLyReFd0Tg+ERuapyuSkcYY2HiF1dLjwn0pubV3JV9Wgu+e3O5eFrgvZWirJ3YruLckKovKlo38X1ZUqv/3mjF+W+4aL6Lmrsfrjs/BNqV/q1jxHMrMyT/dckeWkpeo1ugPf8zwq+hm580RhBEARBEARBEARZn3/8yzrZ3IPeGAAAAABJRU5ErkJggg=="
					alt="" />
				<router-link :to="{name:'FormView'}">
					<button 
					class="text-center text-md p-2 text-white font-medium duration-700  active:scale-95 bg-red-500 hover:bg-red-400 rounded-md">
					Add Recipe
				</button>
				</router-link>
				
			</div>
		</div>
</template>


<script>
export default{
    name:'NavRecipe',
	
}
</script>