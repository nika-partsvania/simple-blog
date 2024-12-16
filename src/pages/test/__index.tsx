// import { Input } from "@/components/ui/input";
// import CreateBlogForm from "@/pages/test/blogs/create";
// import { supabase } from "@/supabase";
// import qs from "qs";
// import { useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { useSearchParams } from "react-router-dom";
// // import underscore from "underscore";
// import { useDebounce } from "@uidotdev/usehooks";

// type SingleBlog = {
//   created_at: string;
//   description: string | null;
//   id: number;
//   image_url: string | null;
//   title: string | null;
//   user_id: string | null;
// };

// type BlogsFilterFormValues = {
//   searchText: string;
// };

// // const blogsFilterFormDefaultValues = {
// //   searchText: "",
// // };

// const TestView = () => {
//   const [blogs, setBlogs] = useState<SingleBlog[]>([]);

//   const [searchParams] = useSearchParams();
//   const parsedQueryParams = qs.parse(searchParams.toString());

//   const { control, watch } = useForm<BlogsFilterFormValues>({
//     defaultValues: parsedQueryParams,
//   });
//   const watchedSearchText = watch("searchText");

//   const debouncedSearchText = useDebounce(watchedSearchText, 500);

//   useEffect(() => {
//     const parsedSearchParams = qs.parse(searchParams.toString());

//     const searchText = parsedSearchParams?.searchText;

//     supabase
//       .from("blogs")
//       .select("*")
//       .ilike("title", `%${searchText ?? ""}%`)
//       .throwOnError()
//       .then((res) => {
//         const blogsList = res.data as unknown as SingleBlog[];
//         setBlogs(blogsList);
//       });
//   }, []);

//   // const fetchBlogs = useCallback(
//   //   underscore.debounce((watchedSearchText: string) => {
//   //     supabase
//   //       .from("blogs")
//   //       .select("*")
//   //       .ilike("title", `${watchedSearchText}%`)
//   //       .throwOnError()
//   //       .then((res) => {
//   //         const blogsList = res.data as unknown as SingleBlog[];
//   //         setBlogs(blogsList);
//   //       });
//   //   }, 500),
//   //   [],
//   // );

//   useEffect(() => {
//     if (debouncedSearchText?.length > 2) {
//       supabase
//         .from("blogs")
//         .select("*")
//         .ilike("title", `${debouncedSearchText}%`)
//         .throwOnError()
//         .then((res) => {
//           const blogsList = res.data as unknown as SingleBlog[];
//           setBlogs(blogsList);
//         });
//     }
//   }, [debouncedSearchText]);

//   // const onSubmit = (searchFormValues: BlogsFilterFormValues) => {
//   //   const searchText = searchFormValues.searchText;

//   //   setSearchParams(
//   //     qs.stringify(searchFormValues, {
//   //       skipNulls: true,
//   //       filter: (_, value) => {
//   //         return value || undefined;
//   //       },
//   //     }),
//   //   );

//   //   supabase
//   //     .from("blogs")
//   //     .select("*")
//   //     .ilike("title", `${searchText}%`)
//   //     .throwOnError()
//   //     .then((res) => {
//   //       const blogsList = res.data as unknown as SingleBlog[];
//   //       setBlogs(blogsList);
//   //     });
//   // };

//   return (
//     <div className="flex flex-col gap-y-10">
//       <CreateBlogForm />
//       <div className="flex items-center justify-center gap-x-4 px-44">
//         <Controller
//           control={control}
//           name="searchText"
//           render={({ field: { onChange, value } }) => {
//             return (
//               <Input
//                 onChange={onChange}
//                 value={value}
//                 placeholder="Enter Search Text..."
//               />
//             );
//           }}
//         />
//         {/* <Button onClick={handleSubmit(onSubmit)}>Search</Button> */}
//       </div>
//       <div className="flex flex-col gap-y-10 px-32">
//         {blogs.map((blog) => {
//           const blogImageUrl = blog?.image_url
//             ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog?.image_url}`
//             : "";

//           return (
//             <div
//               key={blog.id}
//               className="flex flex-col gap-y-4 border border-gray-400 p-6"
//             >
//               <div>
//                 <img className="border border-black" src={blogImageUrl} />
//               </div>
//               <div>{blog?.title}</div>
//               <div>{blog?.description}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TestView;

// // import { setAuthorizationHeader } from "@/api";
// // import { updateCountry } from "@/api/countries";
// // import { Button } from "@/components/common/button";
// // import { fakeLogin } from "@/pages/test/utils/fake-login";

// // const TestView = () => {
// //   const handleLogin = () => {
// //     fakeLogin().then((res: any) => {
// //       console.log(res);
// //       localStorage.setItem("accessToken", res.accessToken);

// //       setAuthorizationHeader(res.accessToken);
// //     });
// //   };

// //   const handleCreateCounty = () => {
// //     updateCountry({ id: 1, payload: {} });
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center gap-6">
// //       <Button onClick={handleLogin}>Login</Button>
// //       <Button onClick={handleCreateCounty}>Update Country</Button>
// //     </div>
// //   );
// // };

// // export default TestView;
