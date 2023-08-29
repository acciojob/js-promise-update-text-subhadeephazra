function createRandomPromise() {
	return new Promise((resolve) => {
		setTimeout(() => {
          resolve("Hello, world!");
		},1000);
	});
}
createRandomPromise()
	.then((result) => {
		const div = document.getElementById("output");
		div.textContent = result;
	})
	.catch((error) => {
		console.error("All promises rejected:", error);
	});