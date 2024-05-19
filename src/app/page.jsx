import Link from "next/link";
import { getDatabase, ref, set, get, onValue, update, child } from 'firebase/database';
import TestStyledButton from "@/components/TestStyledButton";
import {app} from "@/plugins/firebaseConfig";
import CreateForm from "@/components/CreateForm";

 const getServerData = async () => {
  let result = 'result';
  const db = getDatabase(app);
  const dataRef = ref(db, `data`);

  try {
    const response = await get(dataRef);

    if (response.exists()) {
      result = response.val();
    }
  } catch (e) {
    console.log(e);
  }
  return result;
}

const App = async ( ) => {

   const data = await getServerData();

  return (
    <main>
      <Link
        href={"/login"}
      >
        About
      </Link>
      {/*<TestStyledButton/>*/}
      <div>
        {Object.entries(data).map(([key, post]) => <p key={key}>{post.postTest}</p> )}
      </div>
      <h1>ValentinatinASS</h1>
      <CreateForm/>
    </main>
  );
}

export default App