# Next.js를 이용한 입력폼 개발

## 미션1. next.js 프로젝트 설치

`npx create-next-app@latest`를 이용하여 설치

## 미션2. "wanted/post" App Router 만들기

`app/wanted/post/page.tsx`

## 미션3. `<form>`태그와 `<input>`태그를 이용하여 이름 / 희망연봉 입력폼 만들기, 마지막에 submit "전송"버튼 추가

## 미션4. handleForm 추가 후 form action tag에 연결

```
async function handleForm(formData: FormData) {
    "use server";
    console.log(formData.get("name"), formData.get("salary"));
    console.log("i run in the server");
}
```

## 미션5. 전송 버튼을 눌렀을 때 loading으로 text 바꾸기

[참고링크](https://react.dev/reference/react-dom/hooks/useFormState)

## 미션6. 서버에서 유효성 체크 후에 CLIENT로 넘겨주기
