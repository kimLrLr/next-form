"use client";

import { useFormState } from "react-dom";
import FormButton from "./form-btn";
import { handleForm } from "./action";

export default function Wanted() {
  const [state, action] = useFormState(handleForm, null);
  // 리엑트 18 버전에는 useActionState가 없음. 효과는 같다.

  return (
    <div>
      <form action={action}>
        <ul>
          <li>
            이름 <input type={"text"} name="name" />
            {state?.error.includes("name") && "이름이 틀렸어요"}
          </li>
          <li>
            희망연봉 <input type={"number"} name="salary" />
            {state?.error.includes("salary") && "연봉이 틀렸어요"}
          </li>
        </ul>
        <FormButton />
        {state?.subError}
      </form>
    </div>
  );
}
