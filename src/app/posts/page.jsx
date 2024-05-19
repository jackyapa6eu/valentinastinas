'use client';
import Link from "next/link";
import {child, get, getDatabase, ref} from "firebase/database";
import {useEffect} from "react";
import {app} from "@/plugins/firebaseConfig";

// import { initializeApp } from "firebase/app";
//
// const firebaseConfig = {
// 	apiKey: "AIzaSyBoDpmLvl8k2YYJ3kV10oN4ncCYhxM4slQ",
// 	authDomain: "valentinastinas.firebaseapp.com",
// 	databaseURL: "https://valentinastinas-default-rtdb.europe-west1.firebasedatabase.app",
// 	projectId: "valentinastinas",
// 	storageBucket: "valentinastinas.appspot.com",
// 	messagingSenderId: "878844074948",
// 	appId: "1:878844074948:web:37bab6df4b72a98309e291"
// };
//
// const app = initializeApp(firebaseConfig);

const Posts = () => {

	const func = async () => {
		let result = [];
		const db = getDatabase(app);
		const dataRef = ref(db, `data`);

		try {
			const response = await get(dataRef);

			if (response.exists()) {
				const data = response.val();
				console.log('data:', data)
			}
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		(async () => {
			await func()
		})()

	}, [])

	return (
		<div>
			{[1,2,3,4,5,6,7,8,9, 10].map((el) => (
				<p key={el}>
					<Link

						href={`/posts/${el}`}
					>
						{el}
					</Link>
				</p>
				))}
			POSTS LIST</div>
	);
}

export default Posts