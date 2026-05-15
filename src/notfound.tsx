function NotFound() {
	return (
		<div className="notfound m-20 text-center">
			{/* Temporary image */}
			<img className="notfound-logo" src="/logo.png" />
			<h2 className="mt-1 mb-1 text-[2rem] font-extrabold">404 Not Found</h2>
			<p className="mb-10">Current page is not available.</p>

			<a href="/">Go to home</a>
		</div>
	);
}

export default NotFound;
