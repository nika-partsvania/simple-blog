import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { supabase } from "@/supabase";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";

type BlogsListCreateValues = {
  title: string;
  description: string;
  image_file: null | File;
};

const BlogsListFilterFormDefaultValues = {
  title: "",
  description: "",
  image_file: null,
};

const CreateBlogForm = () => {
  const [user] = useAtom(userAtom);

  const { control, handleSubmit } = useForm<BlogsListCreateValues>({
    defaultValues: BlogsListFilterFormDefaultValues,
  });

  const onSubmit = (formValues: BlogsListCreateValues) => {
    if (formValues?.image_file) {
      supabase.storage
        .from("blog_images")
        .upload(formValues?.image_file?.name, formValues?.image_file)
        .then((res) => {
          return supabase.from("blogs").insert({
            title: formValues.title,
            description: formValues.description,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          });
        })
        .then((res) => {
          console.log("Successfully Created Blog: ", res);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex w-96 flex-col items-center justify-center gap-y-4">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Title" />
            );
          }}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Description"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="image_file"
          render={({ field: { onChange } }) => {
            return (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                placeholder="File"
              />
            );
          }}
        />
        <Button onClick={handleSubmit(onSubmit)}>Create Blog</Button>
      </div>
    </div>
  );
};

export default CreateBlogForm;
