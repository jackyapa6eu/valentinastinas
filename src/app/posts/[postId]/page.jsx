import Link from "next/link";

const Post = ({ params }) => {
	return (
		<div>
			<Link
				href={"/posts"}
			>
				Back
			</Link>
			{JSON.stringify(params.postId)}
			POST</div>
	);
}

export default Post