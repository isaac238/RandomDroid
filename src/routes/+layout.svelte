<style>
#container {
	min-width: 100vw;
	min-height: 100vh;
	background: #222;
	display: flex;
	flex-direction: column;
	z-index: 0;
}

#logo {
	width: 5rem;
	height: 5rem;
	filter: invert(100%);
	margin: 1rem;
}

footer {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
}

main {
	flex: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
<div id="container">
<header>
	<a href="/"><img id="logo" alt="Logo of a b1 battle droid" src="b1.png" /></a>
</header>
<main>
<slot/>
</main>
<footer>
<p>&copy; Isaac Sutherland 2023</p>
</footer>
</div>
