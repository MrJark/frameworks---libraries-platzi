<script>
	const movies = [
	  {
	    name: "Avengers",
	    quantity: 0,
	    available: 3
	  },
	  {
	    name: "Terminator",
	    quantity: 0,
	    available: 5
	  }
	];
</script>

{#each movies as movie}
	<form>
		<p>¿Cuántos boletos para {movie.name}?</p>

      <div>
        <button type="button" on:click={() => movie.quantity--}
        >-</button>

        <span> {movie.quantity} </span>

        <button
					type="button" on:click={() => movie.quantity++}
        >+</button>
      </div>
	</form>
{/each}