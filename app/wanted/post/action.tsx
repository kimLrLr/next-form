"use server";

export async function handleForm(prevState: any, formData: FormData) {
  "use server";

  console.log(formData.get("name"), formData.get("salary"));
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("i run in the server");

  // validation 유효성 체크
  return {
    error: ["name", "salary"],
  };

  // api call

  // 최종 완료 처리..
  // 페이지이동
}
