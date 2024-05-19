// 'use client';

// import styled from "styled-components";
import {Button} from "antd";
import styles from './styles.module.css'
// const StyledButton = styled(Button)`
//   background: red;
// `

const TestStyledButton = () => {
	return <div>
		<button className={styles.testStyledButton}>Button</button>
		<Button className={styles.testStyledButton}>Button</Button>
	</div>
}

export default TestStyledButton;