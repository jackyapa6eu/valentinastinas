'use client';

import {Button, Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";
import {getDatabase, ref, set} from "firebase/database";
import {app} from "@/plugins/firebaseConfig";

const CreateForm = () => {
	const [form] = useForm();

	const onFinish = async (values) => {
		console.log('values', values);
		const db = getDatabase(app);
		const dataRef = ref(db, `data/${Date.now()}`);

		try {
			await set(dataRef, values);
		} catch (error) {
			console.error('Registration error:', error.message);
		}
	}

	return <Form onFinish={onFinish} form={form}>
		<Form.Item name='postTest'>
			<Input/>
		</Form.Item>
		<Button htmlType='submit'>Save</Button>
	</Form>
}

export default CreateForm;