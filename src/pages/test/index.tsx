const TestView = () => {
  return (
    <div className="text-center text-2xl font-bold text-green-500">
      Authorized Page
    </div>
  );
};

export default TestView;

// import { setAuthorizationHeader } from "@/api";
// import { updateCountry } from "@/api/countries";
// import { Button } from "@/components/common/button";
// import { fakeLogin } from "@/pages/test/utils/fake-login";

// const TestView = () => {
//   const handleLogin = () => {
//     fakeLogin().then((res: any) => {
//       console.log(res);
//       localStorage.setItem("accessToken", res.accessToken);

//       setAuthorizationHeader(res.accessToken);
//     });
//   };

//   const handleCreateCounty = () => {
//     updateCountry({ id: 1, payload: {} });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-6">
//       <Button onClick={handleLogin}>Login</Button>
//       <Button onClick={handleCreateCounty}>Update Country</Button>
//     </div>
//   );
// };

// export default TestView;
